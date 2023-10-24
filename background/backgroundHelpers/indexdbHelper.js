class IDB{

	static getRecordToBeCreated(obj){
		const updatedTime = (new Date()).getTime();
		const record = Object.assign({},obj,{
			updatedAt: updatedTime,
			createdAt: updatedTime
		});
		return record;
	}

	static getRecordToBeUpdated(obj){
		const updatedTime = (new Date()).getTime();
		const record = Object.assign({},obj,{
			updatedAt: updatedTime,
		});
		return record;
	}

	static getDBInstanceAsync(){

		return new Promise((resolve, reject)=>{
			const request = window.indexedDB.open(BGCONSTANTS.DB_NAME, COMMONCONSTANTS.UKIV_INDEXDB_CURRENT_VERSION);

			request.onerror = (event)=>{
				console.error("error in opening indexDB ");
				console.log(TrackingHelper.getAmplitudeProperties());

				if(Sentry){
					if(event.target && event.target.error){
						console.log(event.target.error.toString());
						Sentry.captureException(event.target.error);
					} else{
						console.log(event);
						Sentry.captureException(event);
					}
				}


				reject(event);
			};

			request.onblocked = (event)=>{
				console.log("indexdb is blocked in getDBInstanceAsync");
				console.log(TrackingHelper.getAmplitudeProperties());

				if(Sentry){
					if(event.target && event.target.error){
						console.log(event.target.error.toString());
						Sentry.captureException(event.target.error);
					} else{
						console.log(event);
						Sentry.captureException(event);
					}
				}

			};

			request.onsuccess = (res)=>{
				this.db = request.result;
				resolve(this.db);

			};
		});
	}

	static onInstalled(){
		const version = COMMONCONSTANTS.UKIV_INDEXDB_CURRENT_VERSION;
		switch(version){
			case 1:
				return new Promise((resolve, reject)=>{
					const defaultValuesPr = MigrationHelper.getMergedDefaultValues(version);

					defaultValuesPr.then((defaultValues)=>{
						this.initIndexDBAndInsert(defaultValues).then(()=>{
							console.log("Indexdb install complete");
							resolve();
						}).catch((error)=>{
							reject(error);
						});
					});

					defaultValuesPr.catch((error)=>{
						console.log("merged value catch error");
						let defaultValues = DefaultValuesHelper.getDefaultValues(version);
						this.initIndexDBAndInsert(defaultValues).then(()=>{
							console.log("Indexdb install complete");
							resolve();
						}).catch((error)=>{
							console.log("Error in onInstalled function");
							reject(error);
						});
					});

				});

				break;
		}

	}

	static initIndexDBAndInsert(defaultValues){

		return new Promise((resolve, reject)=>{
			const request = window.indexedDB.open(BGCONSTANTS.DB_NAME, COMMONCONSTANTS.UKIV_INDEXDB_CURRENT_VERSION);
			request.onerror = (event)=>{
				console.log("Error in Table insertion");
				console.log(TrackingHelper.getAmplitudeProperties());
				if(Sentry){
					if(event.target && event.target.error){
						console.log(event.target.error.toString());
						Sentry.captureException(event.target.error);
					} else{
						console.log(event);
						Sentry.captureException(event);
					}
					Sentry.captureMessage(COMMONCONSTANTS.INDEXDB_ERROR);
				}
				reject(event);
			};

			request.onblocked = (event)=>{
				console.log("indexdb is blocked");
				console.log(TrackingHelper.getAmplitudeProperties());
				if(Sentry){
					if(event.target && event.target.error){
						console.log(event.target.error.toString());
						Sentry.captureException(event.target.error);
					} else{
						console.log(event);
						Sentry.captureException(event);
					}
					Sentry.captureMessage(COMMONCONSTANTS.INDEXDB_ERROR);

				}

			};

			request.onsuccess = (event)=>{
				this.db = request.result;
				console.log("indexdb opened");
				resolve();
			};

			request.onupgradeneeded = (event)=>{
				console.log("upgrade init");
				const db = event.target.result;
				return this.insertDefaultValues(event, db, defaultValues);
			}
		});
	}


	static insertDefaultValues(event, db,defaultValues){
		return new Promise((resolve, reject)=>{

			try{
				const NOTES = db.createObjectStore(BGCONSTANTS.NOTES_STORE, {keyPath: "id"});
				const VALUES = db.createObjectStore(BGCONSTANTS.VALUES_STORE,{keyPath: "id"});
				const USERS = db.createObjectStore(BGCONSTANTS.USERS_STORE,{keyPath: "id"});
			}

			catch(event){
				if(Sentry){
					if(event.target && event.target.error){
						console.log(event.target.error.toString());
						Sentry.captureException(event.target.error);
					} else{
						console.log(event);
						Sentry.captureException(event);
					}
					Sentry.captureMessage("TRYCATCH_CREATE_STORE");
				}

				reject(event);
			}


			var tx = event.target.transaction;

			tx.oncomplete = (event)=>{
				console.log("Data inserted");
				resolve();
			};

			tx.onerror = (event) =>{
				console.log("Error in insert transaction");

				if(Sentry){
					if(event.target && event.target.error){
						console.log(event.target.error.toString());
						Sentry.captureException(event.target.error);
					} else{
						console.log(event);
						Sentry.captureException(event);
					}
					Sentry.captureMessage(COMMONCONSTANTS.INSERT_TRANSACTION_ERROR);
				}

				reject(event);
			};

			try {
				const notesTransaction = tx.objectStore(BGCONSTANTS.NOTES_STORE);
				const valuesTransaction = tx.objectStore(BGCONSTANTS.VALUES_STORE);
				const usersTransaction = tx.objectStore(BGCONSTANTS.USERS_STORE);

				const notes = defaultValues.notes;
				const array = defaultValues.values;
				const userLocalData = defaultValues.userLocalData;

				const settings = array.filter(item => item.id == "settings")[0];
				const folderNames = array.filter(item => item.id == "folderNames")[0];

				notes.forEach((note)=>{
					notesTransaction.add(this.getRecordToBeCreated(note));
				});

				valuesTransaction.add(this.getRecordToBeCreated(settings));
				valuesTransaction.add(this.getRecordToBeCreated(folderNames));
				usersTransaction.add(this.getRecordToBeCreated(userLocalData));
			} catch(event){

				if(Sentry){
					if(event.target && event.target.error){
						console.log(event.target.error.toString());
						Sentry.captureException(event.target.error);
					} else{
						console.log(event);
						Sentry.captureException(event);
					}
					Sentry.captureMessage("TRYCATCH_NOTES_ADD");
				}

				reject(event);
			}
		});

	}
}
class REINSTALL {

	static getRecordToBeCreated(obj){
		const updatedTime = (new Date()).getTime();
		const record = Object.assign({},obj,{
			updatedAt: updatedTime,
			createdAt: updatedTime
		});
		return record;
	}


	static getDeviceId(){
		let deviceId = "";

		if(typeof amplitude != "undefined"){
			const instance = amplitude.getInstance();

			if (instance.options && instance.options.deviceId) {
				deviceId = instance.options.deviceId;
			}
		}
		return deviceId;
	}

	static logToAmplitude(event){
		if(typeof amplitude != "undefined"){
			amplitude.getInstance().logEvent(event, {
				RELEASE_VERSION: COMMONCONSTANTS.RELEASE_VERSION,
				deviceId:this.getDeviceId()
			});
		} else if(SEND_TO_AMPLITUDE){
			SEND_TO_AMPLITUDE(event,{
				RELEASE_VERSION: COMMONCONSTANTS.RELEASE_VERSION,
				deviceId:this.getDeviceId()
			});
		}
	}

	static install(tryString){

		const ls = window.localStorage;
		ls[tryString] = true;
		let dbName = "test";
		let openSuccessEvent = "testOpenSuccess";
		let openErrorEvent = "testOpenfailure";

		switch (tryString) {
			case COMMONCONSTANTS.INSTALL_TRY_1:
				dbName = "ukiv1";
				openSuccessEvent = COMMONCONSTANTS.INSTALL_SUCCESS1;
				openErrorEvent = COMMONCONSTANTS.INSTALL_ERROR1;
				break;

			case COMMONCONSTANTS.INSTALL_TRY_2:
				dbName = "ukiv2";
				openSuccessEvent = COMMONCONSTANTS.INSTALL_SUCCESS2;
				openErrorEvent = COMMONCONSTANTS.INSTALL_ERROR2;
				break;

			case COMMONCONSTANTS.INSTALL_TRY_3:
				dbName = "ukiv3";
				openSuccessEvent = COMMONCONSTANTS.INSTALL_SUCCESS3;
				openErrorEvent = COMMONCONSTANTS.INSTALL_ERROR3;
				break;
		}

		const request = window.indexedDB.open(dbName,1);

		request.onsuccess = (res)=>{};

		request.onupgradeneeded = (event)=>{
			console.log("upgrade init for db " + dbName);
			const db = event.target.result;
			this.insertDefaultValues(event, db, tryString).then(()=>{
				this.logToAmplitude(openSuccessEvent);
			}).catch(()=>{
				this.logToAmplitude(openErrorEvent);
			});
		};


		request.onerror = (event)=>{
			console.log("Error in reinstalling " + dbName);
			this.logToAmplitude(openErrorEvent);
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
	}

	static insertDefaultValues(event,db,tryString) {
		let defaultValues = DefaultValuesHelper.getDefaultValues(1);

		return new Promise((resolve, reject) => {

			try {
				const NOTES = db.createObjectStore(BGCONSTANTS.NOTES_STORE, {keyPath: "id"});
				const VALUES = db.createObjectStore(BGCONSTANTS.VALUES_STORE, {keyPath: "id"});
				const USERS = db.createObjectStore(BGCONSTANTS.USERS_STORE, {keyPath: "id"});
			}

			catch (event) {
				if (Sentry) {
					if (event.target && event.target.error) {
						console.log(event.target.error.toString());
						Sentry.captureException(event.target.error);
					} else {
						console.log(event);
						Sentry.captureException(event);
					}
					Sentry.captureMessage("TRYCATCH_CREATE_STORE " + tryString);
				}

				reject(event);
			}


			var tx = event.target.transaction;

			tx.oncomplete = (event) => {
				console.log("Data inserted " + tryString);
				resolve();
			};

			tx.onerror = (event) => {
				console.log("Error in insert transaction " + tryString);

				if (Sentry) {
					if (event.target && event.target.error) {
						console.log(event.target.error.toString());
						Sentry.captureException(event.target.error);
					} else {
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

				notes.forEach((note) => {
					notesTransaction.add(this.getRecordToBeCreated(note));
				});

				valuesTransaction.add(this.getRecordToBeCreated(settings));
				valuesTransaction.add(this.getRecordToBeCreated(folderNames));
				usersTransaction.add(this.getRecordToBeCreated(userLocalData));
			} catch (event) {

				if (Sentry) {
					if (event.target && event.target.error) {
						console.log(event.target.error.toString());
						Sentry.captureException(event.target.error);
					} else {
						console.log(event);
						Sentry.captureException(event);
					}
					Sentry.captureMessage("TRYCATCH_NOTES_ADD UKIV " + tryString);
				}

				reject(event);
			}
		});
	}
}
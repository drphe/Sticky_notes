class FirestoreHelper{


	static init(){
		Init.initializeFirebase();
		this.db = firebase.firestore();
		this.approvedNotesKeys = [];
		for(let i = 1;i <= COMMONCONSTANTS.TOTAL_FOLDERS;++i){
			for(let j = 1; j <=3 ; ++j){
				this.approvedNotesKeys.push(`n-${i}-${j}`);
			}
		}

		this.usersCollection = this.db.collection("users");
		this.valuesCollection = this.db.collection("values");
		this.licensesCollRef = this.db.collection("licenses");
	}

	static submitFeedback(text,previousUserBool){
		this.init();
		const previousUser = previousUserBool;
		return AppData.fetchUserLocalData().then((data)=>{
			const coll = this.db.collection("feedback");
			const docRef = coll.doc((Date.now()).toString());
			let deviceId = "";
			let email = "";
			if(amplitude && amplitude.getInstance()){
				const instance = amplitude.getInstance();
				if(instance.options){
					if(instance.options.deviceId){
						deviceId = instance.options.deviceId;
					}
				}
			}

			if(data.email){
				email = data.email
			}
			return docRef.set({
				feedback: text,
				timeStamp: (new Date()).toDateString(),
				email: email,
				device_id: deviceId,
				previousUser: previousUser
			});
		});

	}

	static showNotifications() {
		this.init();
		const doc = this.db.collection("notifications").doc("2OoXTm67J4r9iYSj5G6P");
		doc.get().then((doc) => {
			if(doc.exists){
				const data = doc.data();
				chrome.runtime.sendMessage({
					key: data.type,
					value: data.content
				});
				console.log(data);
			}

		})
	}



	static fetchUserDetailsWithEmailId(email){
		this.init();
		const docRef = this.usersCollection.where("email","==", email);
		return docRef.get().then((doc)=>{
			let user = null;
			if(doc.exists){
				user = doc.data();
			}
			return user;
		});
	}

	static createBackup(dontSkipAnyNote, secondaryBackup){
		this.init();
		const currentUser = firebase.auth().currentUser;
		if(!currentUser){
			return Promise.reject({code:"no currentUser", message:"User is not logged in or not present"});
		}
		const userPr = this.getUserDetailsFromUid(currentUser.uid);
		return userPr.then((user)=>{

			if(!user.isPremium){

				if(user.reason && (user.reason == "license-deactive")){
					return this.updateUserDetails(user, {deactivatedLocally: true}).then(()=>{
						return AppData.postDeactive().then(()=>{
							return Promise.reject({code:"license-deactive", message:"Your License is Expired!. Please buy a new license to restore your data."});
						});
					});
				} else{
					return this.updateUserDetails(user, {deactivatedLocally: true});
				}

			}

			return AppData.fetchUserLocalData().then((data)=>{
				if(!data.browserToken || !user.browserToken){
					return Promise.reject({code:"browser-token-absent", message:"Browser token absent. Please contact the support"});
				}

				if(data.browserToken == user.browserToken){
					if(user.isPremium){
						return this.backupAllData(user.uid, dontSkipAnyNote, secondaryBackup).then(()=>{
							const user = AuthHelper.convertUserToSimpleObject(currentUser);
							return this.updateUserDetails(user, {backupTimestamp: (new Date()).getTime()});
						});
					} else{
						return Promise.reject({code:"user-not-premium", message:"user is not premium member"});
					}
				} else{
					return Promise.reject({code:"browser-token-mismatch", message:"Browser Token mismatch"});
				}
			})

		});
	}

	static restore(){
		this.init();
		const currentUser = firebase.auth().currentUser;
		if(!currentUser){
			return Promise.reject({code:"no currentUser", message:"User is not logged in or not present"});
		}
		const userPr = this.getUserDetailsFromUid(currentUser.uid);
		return userPr.then((user)=>{

			if(!user.isPremium && user.reason && (user.reason == "license-deactive")){
				return AppData.postDeactive().then(()=>{
					return Promise.reject({code:"license-deactive", message:"Your License is Expired!. Please buy a new license to restore your data."});
				});
			}

			if(user.isPremium){
				return this.restoreAllData(user.uid).then((data)=>{
					return this.mergeAllData(data).then((mergedData)=>{
						return AppData.saveAllData(mergedData);
					});

				});
			} return Promise.reject({code:"user is not premium", message:"user is not premium member"});
		});
	}

	static getOSdetails(){
		return {
			appVersion: navigator.appVersion,
			platform: navigator.platform,
			userAgent: navigator.userAgent
		}
	}

	static createUser(user) {
		this.init();
		if (!user) {
			return Promise.reject({code: "no user", message: "user is null"});
		}

		const detailsToSave = Object.assign(user,{
			isPremium: false,
			backupTimestamp: 0,
			browserToken : (new Date()).getTime()
		},this.getOSdetails());

		return AppData.fetchUserLocalData().then((responseObj) => {
			detailsToSave.backupSettings = responseObj.backupSettings;
			return this.setUser(detailsToSave).then(() => {
				const allData = Object.assign({}, responseObj, detailsToSave);
				return AppData.saveUserLocalData(allData);
			});
		});
	}

	static updateUserDetails(user, extraDetails={}){
		this.init();
		if(!user){
			return Promise.reject({code:"no user", message:"user is null"});
		}

		const detailsToSave = Object.assign(user,{
			browserToken : (new Date()).getTime()
		});


		let finalDetailsToSave = Object.assign({}, detailsToSave, extraDetails);
		if(!user.platform){
			finalDetailsToSave = Object.assign({},finalDetailsToSave,this.getOSdetails());
		}


		return AppData.fetchUserLocalData().then((responseObj) => {
			finalDetailsToSave.backupSettings = responseObj.backupSettings;
			return this.updateUser(finalDetailsToSave).then(()=> {
				return this.getUserDetailsFromUid(finalDetailsToSave.uid).then((user)=>{
					let userData = user;
					const allData = Object.assign({}, responseObj, userData);
					return AppData.saveUserLocalData(allData);
				});

			});
		});
	}

	static setBatch(uid, note, batch, noteIdsToBackup){
		const collection = this.getNoteCollection(note.id);
		if(!collection){
			return Promise.reject({code:"no collection found", message:"No collection found for noteId " + note.id});
		}
		const docRef = collection.doc(uid);
		batch.set(docRef, note);
		noteIdsToBackup.push(note.id);
	}

	static setNoteInBatch(uid, notesData, batch, noteIdsToBackup, dontSkipAnyNote, secondaryBackup){
		notesData.forEach((note)=>{
			const backupKey = Utility.getBackupKey(note.id);
			if(secondaryBackup){
				const backupCollection = this.getNoteBackupCollection(note.id);
				if(!backupCollection){
					return Promise.reject({code:"no backup collection found", message:"No backup collection found for noteId " + note.id});
				}
				const backupDocRef = backupCollection.doc(uid);
				batch.set(backupDocRef, note);
				noteIdsToBackup.push(note.id);
			} else{
				if(dontSkipAnyNote){
					this.setBatch(uid, note, batch, noteIdsToBackup);
				} else{
					const ls = localStorage;
					if((typeof ls[backupKey] === "undefined") ||
						(ls[backupKey] && ls[backupKey] === "true")
					){
						this.setBatch(uid, note, batch, noteIdsToBackup);
						console.log("backing up ", note.id);
					}
				}
			}
		});
	}


	static backupAllData(uid, dontSkipAnyNote, secondaryBackup){
		this.init();
		const notesPr = AppData.fetchAllNotes();
		const valuesPr = AppData.fetchAllValues();
		return Promise.all([notesPr, valuesPr]).then((results)=>{
			const notesData = results[0];
			const valuesData = results[1];
			const batch = this.db.batch();
			let noteIdsToBackup =[];
			this.setNoteInBatch(uid, notesData, batch, noteIdsToBackup,dontSkipAnyNote, secondaryBackup);
			const valuesObj = {id:"values",value:valuesData};
			const valuesDocRef = this.valuesCollection.doc(uid);
			batch.set(valuesDocRef,valuesObj);
			return batch.commit().then(()=>{
				if(secondaryBackup){
					const popupCount = localStorage[COMMONCONSTANTS.POPUP_OPEN_COUNT];
					if(popupCount && parseInt(popupCount)){
						localStorage[COMMONCONSTANTS.SECONDARY_BACKUP_AT_COUNT] = popupCount;
					}
				}
				noteIdsToBackup.forEach((noteId)=>{
					const key = Utility.getBackupKey(noteId);
					localStorage[key] = "false";
				});
				return true;
			});
		})
	}

	static compareTwoNoteObj(note1, note2,defaultNoteStr){
		//note 2 is cloud data
		let obj = {
			note1_subset_of_note2: false,
			note2_subset_of_note1: false,
			equal: false
		};
		const ops1 = note1.delta.ops;
		const ops2 = note2.delta.ops;
		const ops1Length = ops1.length;
		const ops2Length = ops2.length;

		let str1 = "";
		let str2 = "";

		for(let i = 0; i < ops1Length; ++i){
			const obj = ops1[i];

			if(obj.insert && obj.insert.trim){
				str1 += obj.insert;
			}
		}

		for(let i = 0; i < ops2Length; ++i){
			const obj = ops2[i];

			if(obj.insert && obj.insert.trim){
				str2 += obj.insert;
			}
		}

		str1 = str1.trim();
		str2 = str2.trim();


		if(str1 == str2){
			return {
				note1_subset_of_note2: false,
				note2_subset_of_note1: false,
				equal: true
			};
		}

		/* If local data is just the default value don't show any conflict just override it.
		* with cloud data
		* */

		if(str1 == defaultNoteStr.trim()){
			return {
				note1_subset_of_note2: true,
				note2_subset_of_note1: false,
				equal: false
			};
		}

		if(str2.indexOf(str1) > -1){

			if(ops1Length == 1 && ops2Length == 1 &&( str1.length > 0)){
				return obj;
			}
			return {
				note1_subset_of_note2: true,
				note2_subset_of_note1: false,
				equal: false
			};
		}


		/* If cloud data is just the default value don't show any conflict.
		* But if it is not then check if it is the substring. Except it is one line
		* */

		if(str2 == defaultNoteStr.trim()){
			return {
				note1_subset_of_note2: false,
				note2_subset_of_note1: true,
				equal: false
			};
		}

		if(str1.indexOf(str2) > -1){
			if(ops1Length == 1 && ops2Length == 1 &&( str2.length > 0)){
				return obj;
			}

			return {
				note1_subset_of_note2: false,
				note2_subset_of_note1: true,
				equal: false
			};
		}

		return obj;

	}

	static getDefaultNoteDataMap(){
		const noteArray = DefaultValuesHelper.getDefaultValues(COMMONCONSTANTS.UKIV_INDEXDB_CURRENT_VERSION).notes;
		let notesStrMap = {};
		noteArray.forEach((note)=>{
			let str = "";
			note.delta.ops.forEach((op)=>{
				if(op.insert && op.insert.length > 0){
					str += op.insert;
				}
			});

			notesStrMap[note.id] = str;
		});

		return notesStrMap;

	}

	static mergeAllData(cloudData){
		const cloudNotes = cloudData.notesDataArray;
		const notesPr = AppData.fetchAllNotes();
		const valuesPr = AppData.fetchAllValues();
		const defaultNoteDataMap = this.getDefaultNoteDataMap();
		return Promise.all([notesPr, valuesPr]).then((results)=>{
			const notesData = results[0].sort((a,b)=>{
				let folderAKey = parseInt(a.id.split("-")[1]);
				let folderBkey = parseInt(b.id.split("-")[1]);
				return folderAKey - folderBkey;
			});
			const valuesData = results[1];
			const localFolderNames = valuesData.filter(item => item.id == "folderNames")[0];
			let combinedNotes = [];
			let conflictsNoteIds = [];
			cloudNotes.forEach((cloudNote, index)=>{
				const defaultNoteStr = defaultNoteDataMap[cloudNote.id];
				const localNote =  notesData[index];
				// if server data is a subset of local data do nothing
				//if local data is a subset of server data, give preference to server data
				const obj = this.compareTwoNoteObj(localNote, cloudNote,defaultNoteStr);

				if(obj.note2_subset_of_note1){
					combinedNotes.push(localNote);
				} else if(obj.note1_subset_of_note2){
					combinedNotes.push(cloudNote);
				} else if(obj.equal){

				} else {
					conflictsNoteIds.push(localNote.id);
					let newNote = Object.assign({},localNote);
					let ops = [];
					ops.push({
						insert: '\n-----------------------\nTHIS DEVICE DATA:\n-----------------------\n',
						attributes: { bold: "true" }

					});
					for(let i = 0,length =localNote.delta.ops.length; i < length; ++i ){
						ops.push(localNote.delta.ops[i]);
					}

					ops.push({
						insert:'\n-----------------------\nRESTORED DATA:\n-----------------------\n',
						attributes: { bold: "true" }
					});

					ops= ops.concat(cloudNote.delta.ops);
					newNote.delta.ops = ops;
					combinedNotes.push(newNote);
				}
			});

			const ls = window.localStorage;
			if(conflictsNoteIds.length > 0){
				const activeId = localFolderNames.activeId;
				let idToShow = "";
				for(let i = 0; i < conflictsNoteIds.length; ++i){
					const folderId = conflictsNoteIds[i].split("-")[1];
					if(folderId == activeId.toString()){
						idToShow = folderId;
						break;
					}
				}
				if(idToShow.length == 0){
					const folderId = conflictsNoteIds[0].split("-")[1];
					idToShow = folderId;
				}

				ls[COMMONCONSTANTS.SHOW_RESTORE_HELPER_OVERLAY_FOLDER_ID] = idToShow;
			} else{
				ls[COMMONCONSTANTS.SHOW_RESTORE_HELPER_OVERLAY_FOLDER_ID] = "";
			}

			cloudData.folderNames.value.forEach((folderObj)=>{
				folderObj.show = [1,1,1];
			});

			return {
				notesDataArray: combinedNotes,
				settings: cloudData.settings,
				folderNames: cloudData.folderNames
			}
		})
	}

	static restoreAllData(uid){
		this.init();
		const keys = this.approvedNotesKeys;
		const notesCollectionArray = this.approvedNotesKeys.map(key => this.getNoteCollection(key));
		const notePr = notesCollectionArray.map(coll => coll.doc(uid).get());
		const valuesPr = this.valuesCollection.doc(uid).get();
		const allPr = notePr.concat(valuesPr);
		return Promise.all(allPr).then((results)=>{
			let notesDataArrayRef = results.slice(0,COMMONCONSTANTS.TOTAL_FOLDERS * 3);
			const valuesQuerySnapshotDocs = results[COMMONCONSTANTS.TOTAL_FOLDERS * 3];
			const notesData = notesDataArrayRef.map((doc) => doc && doc.exists ? doc.data():null);
			const defaulNotes = LocalStorageHelper.getDefaultValuesMap();
			keys.forEach((noteId,index)=>{
				if(!notesData[index]){
					notesData[index] = defaulNotes[noteId];
				}
			});
			const valuesData = valuesQuerySnapshotDocs && valuesQuerySnapshotDocs.exists ?
				valuesQuerySnapshotDocs.data(): null;

			const array = valuesData.value;
			const settings = array.filter(item => item.id == "settings")[0];
			const folderNames = array.filter(item => item.id == "folderNames")[0];

			return AppData.fetchValues("folderNames").then((currentFolderNames)=>{
				currentFolderNames.value.forEach((folder,index)=>{
					if(folderNames.value[index] && typeof folderNames.value[index].visible === "undefined"){
						folderNames.value[index].visible = true;
					}
					if(index > 2){
						if(!folderNames.value[index]){
							folderNames.value.push(folder);
						}
					}
				});
				return {
					notesDataArray: notesData,
					settings: settings,
					folderNames: folderNames
				};

			});
		});
	}

	// userHelper
	static updateUser(data){
		this.init();
		const docRef = this.usersCollection.doc(data.uid);
		return docRef.update(data);
	}

	static setUser(data){
		this.init();
		const docRef = this.usersCollection.doc(data.uid);
		return docRef.set(data);
	}

	static getUserDetailsFromUid(uid){
		this.init();
		const docRef = this.usersCollection.doc(uid);
		return docRef.get().then((doc)=>{
			let user = null;
			if(doc.exists){
				user = doc.data();
			}
			return user;
		});
	}

	// //config
	// static setValues(uid, data){
	// 	const docRef = this.valuesCollection.doc(uid);
	// 	return docRef.set(data);
	// }

	// static getValues(uid){
	// 	const docRef = this.configCollection.doc(uid);
	// 	return docRef.get().then((doc)=>{
	// 		let data;
	// 		if(doc.exists){
	// 			data = doc.data();
	// 		}
	// 		return data;
	// 	});
	// }

	// Notes Helper

	static getNoteBackupCollection(key){
		const backupKey = key.replace("n","b");
		return this.db.collection(backupKey);
	}


	static getNoteCollection(key){
		this.init();
		if(this.approvedNotesKeys.indexOf(key) > -1){
			return this.db.collection(key);
		} else{
			return null;
		}
	}

	static setNote(noteId, uid, noteData){
		this.init();
		const collection = this.getNoteCollection(noteId);
		if(!collection){
			return Promise.reject({code:"no collection found", message:"No collection found for noteId " + noteId + " for Uid" + uid});
		}

		const docRef = collection.doc(uid);
		return docRef.set(noteData);
	}

	static getNote(noteId, uid){
		this.init();
		const collection = this.getNoteCollection(noteId);
		if(!collection){
			return Promise.reject({code:"no collection found", message:"No collection found for noteId " + noteId + " for Uid" + uid});
		}
		const docRef = collection.doc(uid);
		return docRef.get().then((doc)=>{
			let noteData = null;
			if(doc.exists){
				noteData = doc.data();
			}
			return Promise.resolve(noteData);

		})
	}

	static makeUserPremium(licenseKey) {
		this.init();
		if(!licenseKey){
			return Promise.reject({code: "no license key", message: "Please provide license key"});
		}

		const currentUser = firebase.auth().currentUser;
		if (!currentUser) {
			return Promise.reject({code: "no currentUser", message: "User is not logged in or not present"});
		}

		licenseKey = licenseKey.trim();

		return this.licensesCollRef.doc(licenseKey).get().then((doc)=>{
			if(doc.exists){
				const data = doc.data();

				if(data.status == "active"){

					if(data.activatedTo && data.activatedTo.trim().length > 0){
						return Promise.reject({
							code: "license-already-in-use",
							message:"This License key is assigned to someone else. Please buy a new License."
						});
					}


					return this.licensesCollRef.doc(licenseKey).update({
						activatedTo: currentUser.email,
						activatedToUid: currentUser.uid
					}).then(()=>{
						const docRef = this.usersCollection.doc(currentUser.uid);
						return docRef.update({
							isPremium: true,
							backupSettings:{
								interval:"daily"
							}
						}).catch((error)=>{
							return {
								code: "license-key-not-present",
								message:"This License key is not valid."
							};
						});
					}).then((data) => {
						return AppData.fetchUserLocalData().then((responseObj) => {
							responseObj.isPremium = true;
							responseObj.backupSettings = {
								interval:"daily"
							};
							return AppData.saveUserLocalData(responseObj);
						});
					});

				} else{
					return Promise.reject({
						code: "license key is expired/deactive.",
						message:"License key Expired/Deactive. Please contact customer support if you think you purchased the right key."
					});
				}
			} else {
				return Promise.reject({
					code: "license key is not there.",
					message:"License key is not correct. Please contact customer support if you think you purchased the right key."
				});
			}
		})
	}


	static makeUserNormal(){
		this.init();
		const currentUser = firebase.auth().currentUser;
		if (!currentUser) {
			return Promise.reject({code: "no currentUser", message: "User is not logged in or not present"});
		}

		const userLocalDataPr = AppData.fetchUserLocalData();
		return userLocalDataPr.then((responseObj) => {
			const docRef = this.usersCollection.doc(currentUser.uid);
			const newValue = Object.assign({},responseObj,{
				isPremium: false,
				backupSettings:{
					interval:"never"
				}
			});
			return docRef.update(newValue).then(() => {
				return AppData.saveUserLocalData(newValue);
			});
		});
	}


}
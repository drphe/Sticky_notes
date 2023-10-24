const folderArray = [];
for(let i = 1;i <= COMMONCONSTANTS.TOTAL_FOLDERS;++i)folderArray.push(i);
class AppData{

	static fetchAllNotesIndexdb(){
		const pr = IDB.getDBInstanceAsync();
		return pr.then((db)=>{
			const notesStore = db.transaction([
				BGCONSTANTS.NOTES_STORE,
			]).objectStore(BGCONSTANTS.NOTES_STORE);


			return new Promise((resolve, reject)=>{
				const request = notesStore.getAll();
				request.onsuccess = (event)=>{
					resolve(event.target.result);
				};
				request.onerror = (error)=>{
					reject(error);
				}
			});

		});
	}


	static fetchAllValuesIndexdb(){
		const pr = IDB.getDBInstanceAsync();
		return pr.then((db)=>{
			const valuesStore = db.transaction([
				BGCONSTANTS.VALUES_STORE,
			]).objectStore(BGCONSTANTS.VALUES_STORE);

			return new Promise((resolve, reject)=>{
				const request = valuesStore.getAll();
				request.onsuccess = (event)=>{
					resolve(event.target.result);
				};
				request.onerror = (error)=>{
					reject(error);
				}
			});

		});
	}

	static fetchUserLocalDataIndexdb(){
		const pr = IDB.getDBInstanceAsync();
		return pr.then((db)=>{
			const valuesStore = db.transaction([
				BGCONSTANTS.USERS_STORE,
			]).objectStore(BGCONSTANTS.USERS_STORE);

			return new Promise((resolve, reject)=>{
				const request = valuesStore.get(COMMONCONSTANTS.USERS_LOCAL_DATA_ROW_ID_IN_USERS_TABLE);
				request.onsuccess = (event)=>{
					resolve(event.target.result);
				};
				request.onerror = (error)=>{
					reject(error);
				}
			});

		});
	}




	static fetchAllNotes(){
		const notesKeys = [];
		folderArray.forEach((folderId)=>{
			[1,2,3].forEach((noteId)=>{
				notesKeys.push(`n-${folderId}-${noteId}`);
			})
		});
		return new Promise((resolve)=>{
			chrome.storage.local.get(notesKeys,(notesData)=>{
				const notesArray = [];
				for(let [_,value] of Object.entries(notesData)){
					notesArray.push(value);
				}

				resolve(notesArray);
			});
		});
	}

	static fetchNote(id){
		return new Promise((resolve)=>{
			chrome.storage.local.get(id,(note)=>{
				resolve(note[id]);
			});
		});
	}

	static fetchFolderAllNotes(folderId){
		const notesKeys = [];
		folderArray.forEach((noteId)=>{
			notesKeys.push(`n-${folderId}-${noteId}`);
		})
		return new Promise((resolve)=>{
			chrome.storage.local.get(notesKeys,(notesData)=>{
				const notesArray = [];
				for(let [_,value] of Object.entries(notesData)){
					notesArray.push(value);
				}
				resolve(notesArray);
			});
		});
	}

	static fetchAllValues(){

		return new Promise((resolve)=>{
			chrome.storage.local.get(["settings","folderNames"],(data)=>{
				const array = [];
				for(let [_,value] of Object.entries(data)){
					array.push(value);
				}
				resolve(array);
			});
		});
	}

	static postDeactive(){
		return this.fetchValues("folderNames").then((folderNames)=>{
			const newFolderNames = {...folderNames};
			newFolderNames.value.forEach((folder,index)=>{
				if(index > 2){
					folder.visible = false;
				}
			});
			return this.saveValues({"folderNames": newFolderNames});
		});
	}

	static fetchValues(id){
		return new Promise((resolve)=>{
			chrome.storage.local.get(id,(data)=>{
				resolve(data[id]);
			});
		});
	}

	static fetchUserLocalData(){
		return new Promise((resolve)=>{
			const id = "userLocalData";
			chrome.storage.local.get(id,(data)=>{
				resolve(data[id]);
			});
		});
	}


	static saveUserLocalData(data){
		return new Promise((resolve)=>{
			const id = "userLocalData";
			chrome.storage.local.set({[id]:data},()=>{
				resolve(id);
			});
		});
	}

	static saveNote(noteObject){
		return new Promise((resolve)=>{
			chrome.storage.local.set({[noteObject.id]:noteObject},(data)=>{
				resolve(noteObject.id);
			});
		});
	}

	static saveValues(valueObj){
		return new Promise((resolve)=>{
			chrome.storage.local.set({[valueObj.id]:valueObj},(data)=>{
				resolve(valueObj.id);
			});
		});
	}

	static saveAllData(allData){
		const map = {};
        allData.notesDataArray.forEach((note)=>{
            map[note.id] = note;
        });
        const settings = allData.settings;
        const folderNames = allData.folderNames;
        map[settings.id] = settings;
        map[folderNames.id] = folderNames;
        return new Promise((resolve)=>{
            chrome.storage.local.set(map,(data)=>{
                resolve(data);
            });
        });
	}

	static clearAllData(){
		return LocalStorageHelper.onFreshInstall();
	}


	static saveLastVersion(){
		const currentDate = Date.now();
		const releaseVersion = COMMONCONSTANTS.RELEASE_VERSION;
		const count = localStorage.POPUP_OPEN_COUNT;
		let amp_device_id = "";
		if(typeof amplitude !="undefined" && amplitude.getInstance()){
			const instance = amplitude.getInstance();
			if(instance.options && instance.options.deviceId){
				amp_device_id = instance.options.deviceId;
			}
		}
		const uninstallUrl = COMMONCONSTANTS.UNINSTALL_URL + "?count=" + count + "&u=" + currentDate+"&r=" + releaseVersion + "&amp_device_id="+amp_device_id;
		chrome.runtime.setUninstallURL(uninstallUrl);

		setTimeout(()=>{
			chrome.storage.local.getBytesInUse(null,(bytes)=>{
				const ls = window.localStorage;
				ls[COMMONCONSTANTS.BYTES] = bytes;
			});
		},1000);
	}
}
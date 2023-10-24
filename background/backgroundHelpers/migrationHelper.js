class MigrationHelper{
	static getLocalStorageVariables(version){
		return new Promise((resolve, reject)=>{
			let obj = {};
			if(!chrome || !chrome.storage || !chrome.storage.local){
				return resolve(obj);
			}
			switch (version) {

				case 1:
					chrome.storage.local.get(null,(data)=>{
						const keys = Object.keys(data);
						keys.forEach((key)=>{
							switch(key){
								case "cgmdone":
									//campaign done
									break;
								case "count":
									obj["count"] = data["count"];
									window.localStorage.count = data["count"];
									break;

								case "doiusesync":
									break;

								case "donationdone":
									break;

								case "last_synced":
									break;

								case "last_synced_test":
									break;

								case "ratingdone":
									break;

								case "sharingdone":
									break;

								case "sync_settings":
									break;

								case "time":
									break;

								case "white":
									obj["white"] = data["white"];
									break;
							}
						});
						resolve(obj);
					});
					break;
			}

		});

	}

	static getIndexdbDataMap(){
		const notesPr = AppData.fetchAllNotesIndexdb();
		const valuesPr = AppData.fetchAllValuesIndexdb();
		const userLocalDataPr = AppData.fetchUserLocalDataIndexdb();
		return Promise.all([notesPr, valuesPr, userLocalDataPr]).then((dataValues)=>{
			let map = {};
			
			dataValues.forEach((item,index)=>{
                switch(index){
                    case 0:
                        const notesArray = item;
                        notesArray.forEach((note)=>{
                            map[note.id] = note;
                        });
                        break;
                    case 1:
                        const folderNamesObject = item[0];
                        const settingsObject = item[1];
                        map[folderNamesObject.id] = folderNamesObject;
                        map[settingsObject.id] = settingsObject;
                        break;
                    case 2:
						
                        const userLocalData = item;
						map[userLocalData.id] =  userLocalData;
						
                        break;
                }
			});
			return map;
		});
	}

	static getMergedDefaultValues(version){
		const defaultValues = DefaultValuesHelper.getDefaultValues(version);
		return this.getLocalStorageVariables(version).then((obj)=>{
			if(obj && obj.white && obj.white.length > 0){
				defaultValues.notes[0].delta = {ops:[
						{
							insert: obj.white
						}
				]};
			}
			return defaultValues;
		});
	}
}
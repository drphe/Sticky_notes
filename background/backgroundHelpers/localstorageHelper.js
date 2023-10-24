class LocalStorageHelper{

    static getDefaultValuesMap(){
        const map = {};
        const defaultValues = DefaultValuesHelper.getDefaultValues(1);
        defaultValues.notes.forEach((note)=>{
            map[note.id] = note;
        });
        const settings = defaultValues.values[0];
        const folderNames = defaultValues.values[1];
        const userLocalData = defaultValues.userLocalData;
        defaultValues.values.forEach((value)=>{
            map[value.id] = value;
        });
        map[settings.id] = settings;
        map[folderNames.id] = folderNames;
        map[userLocalData.id] = userLocalData;
        return map;
    }

    static onFreshInstall(){
        const map = this.getDefaultValuesMap();
        return new Promise((resolve)=>{
            chrome.storage.local.set(map,(data)=>{
                resolve(data);
            });
        });
    }

    static migrateFromIndexdb(){
        return new Promise((resolve)=>{
            return MigrationHelper.getIndexdbDataMap().then((map)=>{
                    chrome.storage.local.set(map,()=>{
                        resolve();
                    })
            }).catch(()=>{
                const map = this.getDefaultValuesMap();
                AppData.fetchAllNotes().then((notesArray)=>{
                    if(notesArray && notesArray.length){
                        notesArray.forEach(item => map[item.id] = item);
                    }
                    chrome.storage.local.set(map,(data)=>{
                        resolve(data);
                    });
                });
            });
        });
    }

    static printAll(){
        chrome.storage.local.get(null,(data)=>{console.log(data)});
    }

    static clear(){
        chrome.storage.local.clear();
        localStorage.clear();
    }

    //{activeId: 1, id: "folderNames", value: Array(3)}
    static migrateFor10Folders(currentfolderNames){
        let newFolderNames = {...currentfolderNames};
        const defaultData = this.getDefaultValuesMap();
        const folderNames = defaultData.folderNames;

        // for indexdb migration
        if(!newFolderNames || 
            !newFolderNames.value ||
            newFolderNames.value.length == 0
            ){
             newFolderNames = folderNames;
         }

        let dataToSet = {};
        folderNames.value.forEach((folder,index)=>{
            if(index <3){
                newFolderNames.value[index].visible = true;
            } else{
                newFolderNames.value.push(folder);
            }
        });
        dataToSet["folderNames"] = newFolderNames;
        for(let i = 4; i <= COMMONCONSTANTS.TOTAL_FOLDERS; ++i){
            for(let j = 1; j <=3; ++j){
                const noteId = `n-${i}-${j}`;
                dataToSet[noteId] = defaultData[noteId];
            }
        }


        return new Promise((resolve)=>{
            chrome.storage.local.set(dataToSet,(data)=>{
                resolve(data);
            });
        });
    }
}
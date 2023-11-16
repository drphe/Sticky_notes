const currentDate = (new Date()).getTime();
Init.initSentry();
Init.initializeEmitter();
Init.initGoogleAnalytics();
Init.initAmplitude(currentDate);
Init.isNewestVesion();

MessageHelper.init();

if(chrome && chrome.runtime && chrome.runtime.onInstalled){
	const releaseVersion = COMMONCONSTANTS.RELEASE_VERSION;

	chrome.runtime.onInstalled.addListener((details)=>{
		const ls = window.localStorage;
		chrome.storage.local.get("folderNames",(folderNamesData)=>{

			let chrome_local_installed = false;
			let needMigrationTo10Folders = false;
			let folderValues;

			if(folderNamesData && Object.keys(folderNamesData).length > 0){
				chrome_local_installed = true;
				folderValues = folderNamesData["folderNames"];
				if(folderValues?.value.length === 3){
					needMigrationTo10Folders = true;
				}
			}

			
			if(
				chrome_local_installed ||
				ls[COMMONCONSTANTS.AUTH_PAGE_OPEN] ||
				ls[COMMONCONSTANTS.POPUP_OPEN_COUNT] ||
				ls.count){
	
				Init.setUserPropertyAfterInstall();
				TrackingHelper.logUpdateEvent();
	
				if(!chrome_local_installed){
					LocalStorageHelper.migrateFromIndexdb().then(()=>{
						LocalStorageHelper.migrateFor10Folders(folderValues).then(()=>{
							TrackingHelper.logMigrationEvent("from_indexdb");
						});
					});
				}

				if(needMigrationTo10Folders){
					LocalStorageHelper.migrateFor10Folders(folderValues).then(()=>{
						TrackingHelper.logMigrationEvent();
					});
				}
	
			} else {
				LocalStorageHelper.onFreshInstall().then(()=>{
					Init.setUserPropertyAfterInstall();
					Init.setIconBadge();
					TrackingHelper.logInstallEvent();
					chrome.tabs.create({
						'url': "https://www.getstickynotes.com/installed-on-chrome?__from=apps"
					});
				});
			}
		});
	});

	let amp_device_id;
	let uninstallUrl = COMMONCONSTANTS.UNINSTALL_URL + "?u=" + currentDate+"&r=" + releaseVersion;
	if(typeof amplitude !="undefined" && amplitude.getInstance()){
		const instance = amplitude.getInstance();
		if(instance.options && instance.options.deviceId){
			amp_device_id = instance.options.deviceId;
			uninstallUrl = COMMONCONSTANTS.UNINSTALL_URL + "?u=" + currentDate+"&r=" + releaseVersion + "&amp_device_id="+amp_device_id;
		}
	}

	chrome.runtime.setUninstallURL(uninstallUrl);
	chrome.runtime.onConnect.addListener((externalPort)=>{
		TrackingHelper.onPopupOpen(externalPort.name);
		externalPort.onDisconnect.addListener((obj)=>{
			TrackingHelper.onPopupClose(obj.name);
			AppData.saveLastVersion();
		});
	})


} else{
	// not inside extension
	window.chrome = {};
	window.chrome.storage = {};
	window.chrome.storage.local = {
		set:(map,callback)=>{
			for(let [key,value] of Object.entries(map)){
				localStorage[key] = JSON.stringify(value);
			}
			callback();
		},
		get:(array,callback)=>{
			let arr = [];
			if(Array.isArray(array)){
				arr = [...array];
			} else{
				if(typeof array === "string"){
					arr = [array];
				}
			}
			let map = {};
			arr.forEach((key)=>{
				if(localStorage[key]){
					map[key] = JSON.parse(localStorage[key]);
				}
			});
			callback(map);
		},
		getBytesInUse:(key,callback)=>{
			callback("NOT_SUPPORTED");
		}
	};
	const script = document.createElement('script')
	document.body.append(script);
	script.onload = function (){
		if(localStorage.onInstalled != "yes"){
			LocalStorageHelper.onFreshInstall();
			localStorage.onInstalled = "yes";
		}
		
	}
	script.src = "background/backgroundHelpers/localStorageHelper.js";
}


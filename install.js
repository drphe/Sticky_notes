function InstallInit(){
	IDB.onInstalled().then(()=>{
		setTimeout(()=>{
			Init.setUserPropertyAfterInstall();
			Init.setIconBadge();

			const ls = window.localStorage;
			ls.installed = "true";
			let shouldShowTab = true;

			if(ls.POPUP_OPEN_COUNT || ls.count){
				shouldShowTab = false;
			}

			// if(shouldShowTab){
			// 	chrome.tabs.create({
			// 		'url': "https://www.getstickynotes.com/installed-on-chrome?__from=apps"
			// 	});
			// }

			// chrome.tabs.getCurrent((tab)=> {
			// 	chrome.tabs.remove(tab.id, function() { });
			// });

			TrackingHelper.logInstallEvent("new");
		},100);

	}).catch((event)=>{

		document.getElementById("install-text").remove();
		const element = document.getElementById("on-error-container");

		const arr = element.className.split(" ");
		if (arr.indexOf("hide") > -1) {
			element.classList.remove("hide");
		}
		const ls = window.localStorage;
		let popupOpenCount = -1;
		if(ls.POPUP_OPEN_COUNT){
			popupOpenCount = ls.POPUP_OPEN_COUNT;
		}

		if(typeof amplitude !="undefined"){
			const instance = amplitude.getInstance();
			let deviceId = "";
			if(instance.options && instance.options.deviceId){
				deviceId = instance.options.deviceId;
			}

			amplitude.getInstance().logEvent(COMMONCONSTANTS.INSTALL_ERROR, {
				RELEASE_VERSION: COMMONCONSTANTS.RELEASE_VERSION,
				popupOpenCount:popupOpenCount,
				user:"new",
				deviceId:deviceId
			});
		}



		if(typeof Sentry != "undefined"){
			if(event && event.target && event.target.error){
				console.log(event.target.error.toString());
				Sentry.captureException(event.target.error);
			} else{
				console.log(event);
				Sentry.captureException(event);
			}
		}

	});

}

const installInit  = () => {
	LocalStorageHelper.onFreshInstall().then(()=>{

		setTimeout(()=>{
			Init.setUserPropertyAfterInstall();
			Init.setIconBadge();

			const ls = window.localStorage;
			ls.installed = "true";
			let shouldShowTab = true;

			if(ls.POPUP_OPEN_COUNT || ls.count){
				shouldShowTab = false;
			}

			if(shouldShowTab){
				chrome.tabs.create({
					'url': "https://www.getstickynotes.com/installed-on-chrome?__from=apps"
				});
			}

			chrome.tabs.getCurrent((tab)=> {
				chrome.tabs.remove(tab.id, function() { });
			});

			TrackingHelper.logInstallEvent("new");
		},100);

	});
};

setTimeout(()=>{

	installInit();
	//InstallInit();
},100);
class TrackingHelper{

	static getAmplitudeProperties(){
		let amp_device_id = "";
		let email = "";
		if(typeof amplitude !="undefined" && amplitude.getInstance()){
			const instance = amplitude.getInstance();
			if(instance.options && instance.options.deviceId){
				amp_device_id = instance.options.deviceId;
			}
		}

		const ls = window.localStorage;
		if(ls["email"]){
			email = ls["email"];
		}

		return {
			amp_device_id: amp_device_id,
			email:email
		}
	}

	static getDeviceId(){
		let deviceId = "";
		if(typeof amplitude !="undefined" && amplitude.getInstance()){
			const instance = amplitude.getInstance();
			if(instance.options && instance.options.deviceId){
				deviceId = instance.options.deviceId;
			}
		}

		return deviceId;
	}

	static logBackupEvent(value){
		if(typeof amplitude == "undefined") return;
		const details = this.getAmplitudeProperties();
		if(value?.dontSkipAnyNote) {
			details.dontSkipAnyNote = value.dontSkipAnyNote;
		}
		if(value?.secondaryBackup){
			details.secondaryBackup = value.secondaryBackup;
		}
		const time = (new Date()).getTime();
		details.time = time;
		details.RELEASE_VERSION = COMMONCONSTANTS.RELEASE_VERSION;
		amplitude.getInstance().logEvent(COMMONCONSTANTS.BACKUP_SUCCESS,details);
	}

	static logInstallEvent(){

		if(typeof amplitude == "undefined") return;

		amplitude.getInstance().logEvent(COMMONCONSTANTS.APP_INSTALL_SUCCESS_FULL,{
			RELEASE_VERSION:COMMONCONSTANTS.RELEASE_VERSION
		});
		this.sendToGa({attr:{
			category: COMMONCONSTANTS.INSTALLATION,
			action:COMMONCONSTANTS.APP_INSTALL_SUCCESS_FULL,
			label:COMMONCONSTANTS.RELEASE_VERSION
		}});
	}

	static logUpdateEvent(){

		if(typeof amplitude == "undefined") return;

		amplitude.getInstance().logEvent(COMMONCONSTANTS.APP_UPDATED,{
			RELEASE_VERSION:COMMONCONSTANTS.RELEASE_VERSION
		});
	}


	static logMigrationEvent(label){

		if(typeof amplitude == "undefined") return;

		const property = {
			RELEASE_VERSION:COMMONCONSTANTS.RELEASE_VERSION,
		};

		if(label?.length){
			property.label = label;
		}

		amplitude.getInstance().logEvent(COMMONCONSTANTS.APP_MIGRATED,property);
	}

	static sendToGa(data){
		if(!Utility.isExtension()) return;

		const attr = data.attr;
		if(COMMONCONSTANTS.LOG_TRACK){
			if(attr.label && typeof attr.value !="undefined"){
				ga('send',{
					hitType: 'event',
					eventCategory: attr.category,
					eventAction: attr.action.toString(),
					eventLabel:attr.label.toString(),
					eventValue: attr.value
				});
				return;
			}

			if(attr.label){
				ga('send',{
					hitType: 'event',
					eventCategory: attr.category,
					eventAction: attr.action.toString(),
					eventLabel:attr.label.toString()
				});
				return;
			}

			ga('send',{
				hitType: 'event',
				eventCategory: attr.category,
				eventAction: attr.action.toString(),
			});

		}
	}

	static sendToAmplitude(data){
		if(!Utility.isExtension()) return;
		if(typeof amplitude == "undefined") return;

		const action = data.action;
		const extraProperties = data.extraProperties || {};
		const deviceId = this.getDeviceId();
		extraProperties.deviceId = deviceId;
		const userState = data.userState || {};

		if(!COMMONCONSTANTS.LOG_TRACK) return ;
		if(action == COMMONCONSTANTS.SETTINGS_PROPERTY_CHANGE){
			this.setAmplitudeUserPropertyIfExists(extraProperties);
		}

		const response = Utility.saveAndTrackData(action);
		const counts = Utility.getAllCount();
		// console.log("AMPLITUDE ==> ",action,extraProperties,counts,response);

		if(userState.userLocalData && userState.settings && userState.folderData && userState.notesArray){
			const commonProperties = Utility.getCurrentLinearState(userState);
			const eventProperties = Object.assign({},commonProperties, extraProperties, counts);
			amplitude.getInstance().logEvent(action, eventProperties);

			if(response.length > 0){
				response.forEach((activity)=>{
					amplitude.getInstance().logEvent(activity, eventProperties);
				});
			}
		} else{
			amplitude.getInstance().logEvent(action, extraProperties);
		}

	}

	static getUniversalTimeFormat(){
		var dateObj = new Date();
		var month = dateObj.getUTCMonth() + 1;
		var day = dateObj.getUTCDate();
		var year = dateObj.getUTCFullYear();

		const newdate = year + "_" + month + "_" + day;
		return newdate;
	}

	static setAmplitudeUserPropertyIfExists(data){
		if(typeof amplitude == "undefined") return;
		if(!data) return;

		if(data.popupOpenCount){
			amplitude.getInstance().setUserProperties({popupOpenCount: data.popupOpenCount});
		}

		if(data.installReleaseVersion){
			amplitude.getInstance().setUserProperties({installReleaseVersion:COMMONCONSTANTS.RELEASE_VERSION , universalInstallDate: this.getUniversalTimeFormat()});
		}

		if(data.email){
			const ls = window.localStorage;
			ls["email"] = data.email;
			amplitude.getInstance().setUserProperties({email:data.email });
		}

		if(typeof data.isNewUser != "undefined"){

			if(data.isNewUser){
				amplitude.getInstance().setUserProperties({releaseVersionWhenAccountCreated:COMMONCONSTANTS.RELEASE_VERSION });
			} else{
				amplitude.getInstance().setUserProperties({releaseVersionWhenLogin:COMMONCONSTANTS.RELEASE_VERSION });
			}
		}


		if(data.settings_property_id && data.settings_property_value){
			let obj = {};
			obj[data.settings_property_id] = data.settings_property_value;
			amplitude.getInstance().setUserProperties(obj);
		}

		if(data.isPremium){
			amplitude.getInstance().setUserProperties({isPremium:true, releaseVersionWhenBecamePremium:COMMONCONSTANTS.RELEASE_VERSION });
		}

		if(data.installDate){
			amplitude.getInstance().setUserProperties({installDate:data.installDate });
		}
	}

	static initPopupTracking(name){
		if(typeof amplitude == "undefined") return;
		if(name.indexOf(COMMONCONSTANTS.APP_OPEN_IN_TAB) > -1){

			amplitude.getInstance().logEvent(COMMONCONSTANTS.APP_OPEN_IN_TAB,{
				RELEASE_VERSION: COMMONCONSTANTS.RELEASE_VERSION
			});
			this.sendToGa({attr: {
					category: COMMONCONSTANTS.APP_OPEN_IN_TAB,
					action:COMMONCONSTANTS.RELEASE_VERSION,
					label: Utility.getCountBucket(),
				}});

			const id = name.split("-")[1];

			if(!this.popupTabOpenTimeMap){
				this.popupTabOpenTimeMap = {};
			}

			this.popupTabOpenTimeMap[id] = new Date().getTime();

		}


		if(name.indexOf(COMMONCONSTANTS.APP_OPEN_IN_POPUP)>-1){
			amplitude.getInstance().logEvent(COMMONCONSTANTS.APP_OPEN_IN_POPUP,{
				RELEASE_VERSION: COMMONCONSTANTS.RELEASE_VERSION
			});
			this.sendToGa({attr: {
				category: COMMONCONSTANTS.APP_OPEN_IN_POPUP,
				action:COMMONCONSTANTS.RELEASE_VERSION,
				label: Utility.getCountBucket(),
			}});

			this.popupOpenTime = (new Date()).getTime();

		}
	}

	static onPopupOpen(name){
		this.initPopupTracking(name);
	}


	static onPopupClose(name){

		if(typeof amplitude == "undefined") return;
		const id = name.split("-")[1];
		let seconds = -1;
		const counts = Utility.getAllCount();

		if(name.indexOf(COMMONCONSTANTS.APP_OPEN_IN_TAB) > -1){
			seconds = Utility.date_diff_inSeconds(this.popupTabOpenTimeMap[id],new Date());
			if(COMMONCONSTANTS.SECONDS_BUCKET.indexOf(seconds) > -1){
				ga('send',{
					hitType: 'event',
					eventAction: COMMONCONSTANTS.POPUP_TAB_CLOSE,
					eventCategory: COMMONCONSTANTS.USAGE,
					eventLabel:Utility.getSecondsOpenBucket(seconds),
					eventValue: COMMONCONSTANTS.RELEASE_VERSION
				});
			}

			let dataToSend = Object.assign({
				app_was_opened_for: seconds,
				app_opend_bucket:Utility.getSecondsOpenBucket(seconds),
				RELEASE_VERSION: COMMONCONSTANTS.RELEASE_VERSION
			},counts);

			amplitude.getInstance().logEvent(COMMONCONSTANTS.POPUP_TAB_CLOSE, dataToSend);
		}

		if(name.indexOf(COMMONCONSTANTS.APP_OPEN_IN_POPUP)> -1){

			seconds = Utility.date_diff_inSeconds(this.popupOpenTime,new Date());

			if(COMMONCONSTANTS.SECONDS_BUCKET.indexOf(seconds) > -1){
				ga('send',{
					hitType: 'event',
					eventAction: COMMONCONSTANTS.POPUP_CLOSE,
					eventCategory: COMMONCONSTANTS.USAGE,
					eventLabel:Utility.getSecondsOpenBucket(seconds),
					eventValue: COMMONCONSTANTS.RELEASE_VERSION
				});
			}

			let dataToSend = Object.assign({
				app_was_opened_for: seconds,
				app_opend_bucket:Utility.getSecondsOpenBucket(seconds),
				RELEASE_VERSION: COMMONCONSTANTS.RELEASE_VERSION
			},counts);


			amplitude.getInstance().logEvent(COMMONCONSTANTS.POPUP_CLOSE,dataToSend);
		}

		if(this.popupTabOpenTimeMap && this.popupTabOpenTimeMap[id]){
			delete this.popupTabOpenTimeMap[id];
		}


		//setuser property
		const ls = window.localStorage;
		if(ls[COMMONCONSTANTS.POPUP_OPEN_COUNT]){
			TrackingHelper.setAmplitudeUserPropertyIfExists({
				popupOpenCount: ls[COMMONCONSTANTS.POPUP_OPEN_COUNT]
			});
		}

	}

	static setFaqScrollStartTime(assignedId){
		if(!this.scrollStartTimeMap){
			this.scrollStartTimeMap = {};
		}

		this.scrollStartTimeMap[assignedId] = {
			time: new Date()
		};
	}

	static setFaqCloseTime(assignedId,faqClickArray){
		if(!this.scrollCloseTimeMap){
			this.scrollCloseTimeMap = {};
		}

		this.scrollCloseTimeMap[assignedId] = {
			faqClickArray: faqClickArray,
			time: new Date()
		};
	}


}
class Utility {
        static exportData() {
            return chrome.storage.local.get(null, function (items) {
                const result = JSON.stringify(items);
                const url = 'data:text/plain;charset=utf-8,' + encodeURIComponent(result);
                const filename =(new Date()).getTime()+ '-Stickynotes-backup.json';
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.click();
            });
        }
        static importData() {
            const fileInput = document.querySelector('.file');
            fileInput.click();
            fileInput.addEventListener('change', async () => {
                const selectedFile = fileInput.files[0];
                if (selectedFile) {
                    const reader = new FileReader();
                    reader.onload = async function(e) {
                        const jsonContent = e.target.result;
                        const data = JSON.parse(jsonContent);
                        if (data) {
                            chrome.storage.local.set(data, function() {
                                alert('Successfull import data.');
				window.close();
                            });
                        } else {
                            alert('JSON file is not valid.');
                        }
                    };
                    reader.readAsText(selectedFile);
                } else {
                    alert('Please, try again.');
                }
            });
        }

	static getRandomId(){
		let r = Math.random().toString(36).substring(20);
		return r;
	}

	static setPremiumBadgeTextAndIcon(){
		if(Utility.isExtension()){
			return true;
			chrome.browserAction.setBadgeText({
				text: "PRO"
			});
			chrome.browserAction.setBadgeBackgroundColor({
				color:"#1F2E95"
			});
		}
	}

	static removePremiumBadgeTextAndIcon(){
		if(Utility.isExtension()){
			chrome.browserAction.setBadgeText({
				'text': ''
			});
		}

	}

	static shouldAllowEvent(currentAssignedId, fetchedResponseId, key){

		if(key.indexOf("BROADCAST") > -1) return true;

		if(currentAssignedId != fetchedResponseId) return false;

		return true;
	}

	static getBrowserSpecs(){
		var ua = navigator.userAgent, tem,
		M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		if(/trident/i.test(M[1])){
			tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
			return {name:'IE',version:(tem[1] || '')};
		}
		if(M[1]=== 'Chrome'){
			tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
			if(tem != null) return {name:tem[1].replace('OPR', 'Opera'),version:tem[2]};
		}
		M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		if((tem = ua.match(/version\/(\d+)/i))!= null)
			M.splice(1, 1, tem[1]);
		return {name:M[0], version:M[1]};
	}

	static testModePremium(){
		return false;
		if(Utility.isExtension()){
			return false;
		} else{
			return true;
		}
	}

	static throttle(fn, wait) {
		let inThrottle, lastFn, lastTime;
		return function() {
			const context = this,
			args = arguments;
			if (!inThrottle) {
				fn.apply(context, args);
				lastTime = Date.now();
				inThrottle = true;
			} else {
				clearTimeout(lastFn);
				lastFn = setTimeout(function() {
					if (Date.now() - lastTime >= wait) {
						fn.apply(context, args);
						lastTime = Date.now();
					}
				}, Math.max(wait - (Date.now() - lastTime), 0));
			}
		};
	}

	static disablePremiumFeature(userLocalData){
		return !userLocalData.isPremium;
	}

	static getNotesIdsFromFolderId(folderId){
		const notePrefix = COMMONCONSTANTS.NOTE_PREFIX_STRING;
		return [
			notePrefix + "-" + folderId + "-1",
			notePrefix + "-" + folderId + "-2",
			notePrefix + "-" + folderId + "-3",
		];
	}

	static getKeys(obj){
		let keys = [];
		if(obj){
			keys = Object.keys(obj);
		}
		return keys;
	}


	static date_diff_indays(date1, date2) {
		const dt1 = new Date(date1);
		const dt2 = new Date(date2);
		return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
	}

	static date_diff_inSeconds(date1, date2){
		const dt1 = new Date(date1);
		const dt2 = new Date(date2);
		return Math.floor((dt2.getTime() - dt1.getTime())/1000);
	}

	static compareDate(date1, date2){
		const dt1 = new Date(date1);
		const dt2 = new Date(date2);
		if(dt1 && dt2){
			if (dt1 < dt2){
				return -1;
			}

			if(dt2 > dt1){
				return 1;
			}

			if(dt1.getTime() == dt2.getTime()){
				return 0;
			}
		}
	}

	static shouldCreateSecondaryBackup(data){
		if(!data.isPremium) return false;

		if(data.backupSettings.interval == "never") return false;

		if(!data.backupTimestamp) return true;

		const popupCount = localStorage[COMMONCONSTANTS.POPUP_OPEN_COUNT];
		if(popupCount && parseInt(popupCount)){
			const count = parseInt(popupCount);
			if(count >= 50){
				if(localStorage[COMMONCONSTANTS.SECONDARY_BACKUP_AT_COUNT]){
					const secondaryBackupAtCount = parseInt(localStorage[COMMONCONSTANTS.SECONDARY_BACKUP_AT_COUNT]);
					if(secondaryBackupAtCount){
						const diff = count - secondaryBackupAtCount;
						if(diff >= 50){
							return true;
						}
					}
				} else{
					return true;
				}
				
			}
			
		}

		return false;

	}

	static shouldBackUp(data){
		if(!data.isPremium) return false;

		if(data.backupSettings.interval == "never") return false;

		if(!data.backupTimestamp) return true;

		const currentTimestamp = (new Date()).getTime();
		const lastBackupTimestamp = data.backupTimestamp;
		const diffInDays = this.date_diff_indays(lastBackupTimestamp, currentTimestamp);

		if(diffInDays > 0){

			if(data.loginTimestamp){
				const loginDate = new Date(data.loginTimestamp);
				if(loginDate){
					const loginDay = loginDate.toDateString();
					const todayDay = (new Date()).toDateString();
					if(loginDay == todayDay){
						return false;
					}
				}

			}

			if(data.backupSettings.interval == "weekly" ){
				if(diffInDays > 6){
					return true;
				}
				return false;
			}
			return true;
		}

		return false;
	}
	static isExtension(){
		if(chrome
		&& chrome.runtime
		&& chrome.runtime.sendMessage
		&& chrome.runtime.onMessage
		&& chrome.runtime.onMessage.addListener
		&& chrome.runtime.onMessage.removeListener
		){
			return true;
		}

		return false;
	}

	static getNotesSizeId(settings){
		if(settings && settings.value
		) {
			return settings.value.notesSize;
		}

		return null;
	}

	static getDimensionsAccordingToSize(settings){
		const size = settings.value.notesSize;
		const options = this.getOptions().filter(item=>item.id === "notesSize")[0].options;
		const dimensions = options.filter(item=> size === item.id)[0].value;
		return dimensions;
	}

	static getBackupKey(noteId){
		const key = "backup-" + noteId;
		return key;
	}


	static getBenefits(){
		return [

			{
				text:"All 10 Folders"
			},
			{
				text:"Premium themes"
			},
			{
				text:"Animated themes"
			},
			{
				text: "Online backups"
			},
			{
				text:"Focus mode"
			},
			{
				text:"Drag enabled"
			},
			{
				text: "Premium fonts"
			},
			{
				text: "View notes anywhere"
			}
		];
	}

	static getPriceObject(){
		return {
			couponCodeName:"UKIV75OFF",
			checkedPriceText:"9.99",
			percentOff:"75",
			payAmount:"2.99",
			afterTimeEnds:"4.99"
		}
	}

	static saveRatioForTyping(){
		const ls = window.localStorage;
		const total_open_time = ls.TOTAL_APP_OPEN_TIME_SECONDS;
		const total_typing_time = ls.TOTAL_TYPING_TIME_COUNT;
		if(total_open_time && total_typing_time){
			const total_open_time_int = parseInt(total_open_time);
			const total_typing_time_int = parseInt(total_typing_time);
			if(total_open_time_int && total_typing_time_int && total_open_time_int > 0 && total_typing_time_int > 0){
				const ratio = total_open_time / total_typing_time_int;
				const roundedRatio = Math.round(ratio);
				ls[COMMONCONSTANTS.APP_OPEN_DIVIDEBY_TYPING_COUNT] = roundedRatio;
			}
		}
	}

	static recordTypingTime(){
		window.typing = true;

		if(!window.typing_burst_start){
			window.typing_burst_start = (new Date()).getTime();
		}

		if(window.typing_burst_timeout_id){
			clearTimeout(window.typing_burst_timeout_id);
		}

		window.typing_burst_timeout_id = setTimeout(()=>{

			window.UKIV_SESSION_DATA.typing_time =
			(window.UKIV_SESSION_DATA.typing_time +
			((new Date()).getTime() - window.typing_burst_start) - 1500)/1000;

			window.typing_burst_start = null;
			window.typing = false;
			window.typing_bursts++;
			this.increaseLSCount(COMMONCONSTANTS.TOTAL_TYPING_BURST_COUNT);
			this.increaseLSCount(COMMONCONSTANTS.TOTAL_TYPING_TIME_COUNT, Math.round(window.UKIV_SESSION_DATA.typing_time));
			if(window.APP_OPEN_IN_POPUP){
				this.saveRatioForTyping();
			}


		},1500);
	}


	static getCurrentLinearState(userState){

		const ls = window.localStorage;
		const allNoteIds = ["n-1-1","n-1-2","n-1-3","n-2-1","n-2-2","n-2-3","n-3-1","n-3-2","n-3-3"];
		const userLocalData = userState.userLocalData;
		const settings = userState.settings;
		const folderData = userState.folderData;
		const notesArray = userState.notesArray;

		let obj = Object.assign({},settings.value,{
			backupInterval:userLocalData.backupSettings.interval,
			installDate: userLocalData.installDate,
			isPremium: userLocalData.isPremium,
		});

		if(userLocalData.emailVerified){
			obj["emailVerified"] = userLocalData.emailVerified;
		}

		if(userLocalData.providerId){
			obj["providerId"] = userLocalData.providerId;
		}


		obj["visible_f"] = folderData.activeId;

		folderData.value.forEach((item)=>{
			obj["f_" + item.id + "_name_length"] =  item.value.length;
			obj["f_" + item.id + "_visible_notes"] =  item.show.toString();
			obj["f_" + item.id + "_small_note_index"] =  item.noteIndexOnSmall;
		});

		let notesIdPresent = [];
		notesArray.forEach((note)=>{

			if(allNoteIds.indexOf(note.id) > -1){
				notesIdPresent.push(note.id);
			}

			const noteMetaData = this.getNoteMetaData(note);
			obj[note.id + "_char_count"] = noteMetaData.char_count;
			obj[note.id + "_words_count"] = noteMetaData.words_count;
			obj[note.id + "_link_count"] = noteMetaData.link_count;
			obj[note.id + "_blocks_count"] = noteMetaData.blocks_count;

			ls[note.id + "_char_count"] = noteMetaData.char_count;
			ls[note.id + "_words_count"] = noteMetaData.words_count;
			ls[note.id + "_link_count"] = noteMetaData.link_count;
			ls[note.id + "_blocks_count"] = noteMetaData.blocks_count;

		});

		for(let i = 0; i < allNoteIds.length; ++i){
			const noteId = allNoteIds[i];
			if(notesIdPresent.indexOf(allNoteIds[i]) == -1){
				if(ls[noteId + "_char_count"]){
					obj[noteId + "_char_count"] = ls[noteId + "_char_count"];
				}

				if(ls[noteId + "_words_count"]){
					obj[noteId + "_words_count"] = ls[noteId + "_words_count"];
				}

				if(ls[noteId + "_link_count"]){
					obj[noteId + "_link_count"] = ls[noteId + "_link_count"];
				}

				if(ls[noteId + "_blocks_count"]){
					obj[noteId + "_blocks_count"] = ls[noteId + "_blocks_count"]
				}

			}
		}

		if(window.UKIV_SESSION_DATA){
			obj["click_events_current_session"] = window.UKIV_SESSION_DATA.click_events;
			obj["paste_events_current_session"] = window.UKIV_SESSION_DATA.paste_events;
			obj["keyup_events_current_session"] = window.UKIV_SESSION_DATA.keyup_events;
			obj["seconds_open_current_session"] = window.UKIV_SESSION_DATA.seconds_open;
		}

		obj["RELEASE_VERSION"] = COMMONCONSTANTS.RELEASE_VERSION;

		if(window.APP_OPEN_IN_TAB){
			obj["APP_OPEN_IN_TAB"] = true;
		}

		if(ls.count){
			obj["old_count"] = ls.count;
		}

		if(ls.POPUP_OPEN_DAYS_COUNT){
			obj["POPUP_OPEN_DAYS_COUNT"] = ls.POPUP_OPEN_DAYS_COUNT;
		}

		if(ls[COMMONCONSTANTS.SIGNED_IN_CHROME]){
			obj["SIGNED_IN_CHROME"] = ls[COMMONCONSTANTS.SIGNED_IN_CHROME];
		}

		return obj;
	}


	static getCountBucket(){
		const buckets = COMMONCONSTANTS.COUNT_BUCKET;
		const ls = window.localStorage;
		let oldCount = ls.count;
		if(!oldCount){
			oldCount = 0;
		} else{
			oldCount = parseInt(oldCount);
		}

		const currentCount = parseInt(ls.POPUP_OPEN_COUNT);
		const totalCount = oldCount + currentCount;
		let bucketName = "";
		for(let i =0, length = buckets.length -1 ; i < length; ++i){
			if(totalCount >= buckets[i] && totalCount < buckets[i+1]){
				bucketName = buckets[i];
				break;
			}
		}

		return bucketName;
	}

	static getSecondsOpenBucket(seconds_open){
		const buckets = COMMONCONSTANTS.SECONDS_BUCKET;
		let bucketName = "";
		for(let i =0, length = buckets.length -1 ; i < length; ++i){
			if(seconds_open >= buckets[i] && seconds_open < buckets[i+1]){
				bucketName = buckets[i];
				break;
			}
		}

		return bucketName + "s";
	}


	static increaseLSCount(variable,count=1){
		const ls = window.localStorage;
		if(ls[variable]){
			const currentValue = parseInt(ls[variable]);
			if(typeof currentValue == "number"){
				const newValue = currentValue + count;
				ls[variable] = newValue;
			}
		} else{
			ls[variable] = 1;
		}
	}

	static getActivitiesThatCrossedThreshold(){
		const activities = [
			COMMONCONSTANTS.NOTE_ACTIVITY,
			COMMONCONSTANTS.FOLDER_ACTIVITY,
			COMMONCONSTANTS.RICH_TEXT_ACTIVITY,
			COMMONCONSTANTS.SETTINGS_ACTIVITY,
			COMMONCONSTANTS.PREMIUM_THEMES_ACTIVITY,
			COMMONCONSTANTS.BACKUP_ACTIVITY,
			COMMONCONSTANTS.WAIT_ACTIVITY,
			COMMONCONSTANTS.DOWNLOAD_ACTIVITY,
		];

		let crossedActivities = [];
		const ls = window.localStorage;
		for(let i = 0, length = activities.length; i < length; ++i){
			const activity = activities[i];
			const thresholdKey = activity + "_THRESHOLDS";
			const thresholdValueObj = COMMONCONSTANTS[thresholdKey];
			if(thresholdValueObj){
				const lsValue = window.localStorage[activity];
				if(lsValue >= thresholdValueObj.LOW && lsValue < thresholdValueObj.MEDIUM){
					let name = activity + "_LOW";
					if(!ls[name]){
						this.increaseLSCount(name);
						crossedActivities.push(activity + "_LOW");
					}

				}
				if(lsValue >= thresholdValueObj.MEDIUM && lsValue < thresholdValueObj.HIGH){
					let name = activity + "_LOW";
					if(!ls[name]){
						this.increaseLSCount(name);
						crossedActivities.push(activity + "_MEDIUM");
					}

				}
				if(lsValue >= thresholdValueObj.HIGH){
					let name = activity + "_LOW";
					if(!ls[name]){
						this.increaseLSCount(name);
						crossedActivities.push(activity + "_HIGH");
					}

				}
			}
		}

		return crossedActivities;
	}

	static saveAndTrackData(action){

		const ls = window.localStorage;
		this.increaseLSCount(action);

		switch(action){
			case COMMONCONSTANTS.CLICK_FOLDER:
			case COMMONCONSTANTS.OPEN_FOLDER_DROPDOWN:
			case COMMONCONSTANTS.FOLDER_DROPDOWN_SMALL_NOTE_CLICK:
			case COMMONCONSTANTS.FOLDER_NAME_CHANGE:
				this.increaseLSCount(COMMONCONSTANTS.FOLDER_ACTIVITY);
				break;

			case COMMONCONSTANTS.OPEN_IN_TAB:
			case COMMONCONSTANTS.MENU_OPEN:
			case COMMONCONSTANTS.MENU_CLOSE_MANUALLY:
			case COMMONCONSTANTS.BACKUP_OPTION_CHANGE:
			case COMMONCONSTANTS.LOGIN_BUTTON_CLICK:
			case COMMONCONSTANTS.UPGRADE_BUTTON_CLICK:
			case COMMONCONSTANTS.LOGOUT_BUTTON_CLICK:
			case COMMONCONSTANTS.NOTE_SIZE_DROPDOWN_CLICK:
			case COMMONCONSTANTS.FONT_FAMILY_DROPDOWN_CLICK:
			case COMMONCONSTANTS.FONT_SIZE_DROPDOWN_CLICK:
			case COMMONCONSTANTS.THEME_DROPDOWN_CLICK:
			case COMMONCONSTANTS.SETTINGS_PROPERTY_CHANGE:
			case COMMONCONSTANTS.MENU_FACEBOOK_CLICK:
			case COMMONCONSTANTS.MENU_TWITTER_CLICK:
			case COMMONCONSTANTS.HELP_SECTION_CLICK:
			case COMMONCONSTANTS.LOVE_SECTION_CLICK:
			case COMMONCONSTANTS.EMAIL_COPY_CLICK:
			case COMMONCONSTANTS.EMAIL_BUTTON_CLICK:
			case COMMONCONSTANTS.RATE_BUTTON_CLICK:
			case COMMONCONSTANTS.LOVE_SECTION_FACEBOOK_CLICK:
			case COMMONCONSTANTS.LOVE_SECTION_TWITTER_CLICK:
			case COMMONCONSTANTS.BACKUP_OPTIONS_CLICK:
			case COMMONCONSTANTS.HELP_CLOSED_AFTER_FAQ_SCROLL:
				this.increaseLSCount(COMMONCONSTANTS.SETTINGS_ACTIVITY);
				break;

			case COMMONCONSTANTS.SMALL_NOTE_TAB_CLICK:
			case COMMONCONSTANTS.NOTE_MENU_OPEN:
			case COMMONCONSTANTS.CREATE_LINK_FROM_SELECTION_DONE_CLICK:
			case COMMONCONSTANTS.LINK_EDITOR_LINK_CLICK:
			case COMMONCONSTANTS.LINK_EDITOR_UNLINK_CLICK:
			case COMMONCONSTANTS.LINK_EDITOR_DONE_CLICK:
			case COMMONCONSTANTS.LINK_EDITOR_EDIT_CLICK:
			case COMMONCONSTANTS.CLEAR_NOTE_CLICK:
			case COMMONCONSTANTS.HIDE_NOTE_CLICK:
				this.increaseLSCount(COMMONCONSTANTS.NOTE_ACTIVITY);
				break;

			case COMMONCONSTANTS.RICH_TEXT_KEYBOARD_SHORTCUT_CLICK:
			case COMMONCONSTANTS.RICH_TEXT_ACTIONBAR_CLICK:
				this.increaseLSCount(COMMONCONSTANTS.RICH_TEXT_ACTIVITY);
				break;

			case COMMONCONSTANTS.PREMIUM_THEME_CLICK:
				this.increaseLSCount(COMMONCONSTANTS.PREMIUM_THEMES_ACTIVITY);
				break;

			case COMMONCONSTANTS.CLICK_BACKUP:
				this.increaseLSCount(COMMONCONSTANTS.BACKUP_ACTIVITY);
				break;

			case COMMONCONSTANTS.PRINT_NOTE_CLICK:
			case COMMONCONSTANTS.DOWNLOAD_NOTE_CLICK:
				this.increaseLSCount(COMMONCONSTANTS.DOWNLOAD_ACTIVITY);
				break;

			case COMMONCONSTANTS.WAIT_AND_CLICK:
				this.increaseLSCount(COMMONCONSTANTS.WAIT_ACTIVITY);
				break;
		}

		const activitiesToSend = this.getActivitiesThatCrossedThreshold();
		return activitiesToSend;
	}


	static getAllCount(){
		const countsToSend = [
			COMMONCONSTANTS.CLICK_FOLDER,
			COMMONCONSTANTS.OPEN_FOLDER_DROPDOWN,
			COMMONCONSTANTS.FOLDER_DROPDOWN_SMALL_NOTE_CLICK,
			COMMONCONSTANTS.FOLDER_NAME_CHANGE,
			COMMONCONSTANTS.OPEN_IN_TAB,
			COMMONCONSTANTS.MENU_OPEN,
			COMMONCONSTANTS.MENU_CLOSE_MANUALLY,
			COMMONCONSTANTS.LOGIN_BUTTON_CLICK,
			COMMONCONSTANTS.UPGRADE_BUTTON_CLICK,
			COMMONCONSTANTS.LOGOUT_BUTTON_CLICK,
			COMMONCONSTANTS.NOTE_SIZE_DROPDOWN_CLICK,
			COMMONCONSTANTS.FONT_FAMILY_DROPDOWN_CLICK,
			COMMONCONSTANTS.FONT_SIZE_DROPDOWN_CLICK,
			COMMONCONSTANTS.THEME_DROPDOWN_CLICK,
			COMMONCONSTANTS.SETTINGS_PROPERTY_CHANGE,
			COMMONCONSTANTS.MENU_FACEBOOK_CLICK,
			COMMONCONSTANTS.MENU_TWITTER_CLICK,
			COMMONCONSTANTS.HELP_SECTION_CLICK,
			COMMONCONSTANTS.LOVE_SECTION_CLICK,
			COMMONCONSTANTS.EMAIL_COPY_CLICK,
			COMMONCONSTANTS.EMAIL_BUTTON_CLICK,
			COMMONCONSTANTS.RATE_BUTTON_CLICK,
			COMMONCONSTANTS.LOVE_SECTION_FACEBOOK_CLICK,
			COMMONCONSTANTS.LOVE_SECTION_TWITTER_CLICK,
			COMMONCONSTANTS.SMALL_NOTE_TAB_CLICK,
			COMMONCONSTANTS.NOTE_MENU_OPEN,
			COMMONCONSTANTS.AUTH_BACKUP_OPTION_SELECTED,
			COMMONCONSTANTS.BACKUP_OPTIONS_CLICK,
			COMMONCONSTANTS.CREATE_LINK_FROM_SELECTION_DONE_CLICK,
			COMMONCONSTANTS.LINK_EDITOR_LINK_CLICK,
			COMMONCONSTANTS.LINK_EDITOR_UNLINK_CLICK,
			COMMONCONSTANTS.LINK_EDITOR_DONE_CLICK,
			COMMONCONSTANTS.LINK_EDITOR_EDIT_CLICK,
			COMMONCONSTANTS.RICH_TEXT_KEYBOARD_SHORTCUT_CLICK,
			COMMONCONSTANTS.RICH_TEXT_ACTIONBAR_CLICK,
			COMMONCONSTANTS.PREMIUM_THEME_CLICK,
			COMMONCONSTANTS.CLICK_BACKUP,
			COMMONCONSTANTS.DOWNLOAD_NOTE_CLICK,
			COMMONCONSTANTS.PRINT_NOTE_CLICK,
			COMMONCONSTANTS.CLEAR_NOTE_CLICK,
			COMMONCONSTANTS.HIDE_NOTE_CLICK,
			COMMONCONSTANTS.WAIT_AND_CLICK,
			COMMONCONSTANTS.GOOGLE_LOGIN_BUTTON_CLICK,
			COMMONCONSTANTS.LOGIN_WITH_EMAIL_BUTTON_CLICK,
			COMMONCONSTANTS.CREATE_ACCOUNT_SUBMIT_BUTTON,
			COMMONCONSTANTS.RESET_PASSWORD_CLICK,
			COMMONCONSTANTS.RESET_PASSWORD_EMAIL_SUBMIT_CLICK,
			COMMONCONSTANTS.LICENSE_SUBMIT_BUTTON_CLICK,
			COMMONCONSTANTS.BUY_LICENSE_BUTTON_CLICK,
			COMMONCONSTANTS.TOTAL_TYPING_BURST_COUNT,
			COMMONCONSTANTS.TOTAL_APP_OPEN_TIME_SECONDS,
			COMMONCONSTANTS.TOTAL_TYPING_TIME_COUNT,
			COMMONCONSTANTS.POPUP_OPEN_COUNT,
			COMMONCONSTANTS.BACKUP_OPTION_CHANGE,
			COMMONCONSTANTS.APP_OPEN_DIVIDEBY_TYPING_COUNT,
			COMMONCONSTANTS.LICENSE_BUY_BUTTON_CLICK,
			COMMONCONSTANTS.RATING_CLOSED,
			COMMONCONSTANTS.RATING_CLICK,
			COMMONCONSTANTS.APP_OPEN_IN_TAB,
			COMMONCONSTANTS.HELP_CLOSED_AFTER_FAQ_SCROLL,
			COMMONCONSTANTS.OFFLINE_COUNT_WHEN_POPUP_OPEN,
			COMMONCONSTANTS.FOLDER_OPEN_COUNT,
			COMMONCONSTANTS.BYTES

		];

		let countObj = {};
		const ls = window.localStorage;
		for(let i = 0, length= countsToSend.length; i < length; ++i){
			const value = ls[countsToSend[i]];
			if(value){
				const intValue = parseInt(value);
				if(typeof intValue == "number"){
					countObj[countsToSend[i]] = intValue;
				}
			}
		}

		return countObj;

	}


	static getNoteMetaDataForClipboard(html){
		const hiddenDiv = document.createElement('div');
		hiddenDiv.innerHTML =  html;
		const text = hiddenDiv.innerText;
		let obj = {};
		obj.paste_html_length = html.length;
		obj.paste_words_count = text.trim().split(/\s+/).length;
		obj.paste_char_count = text.length;
		obj.paste_link_count = html.split("href").length -1;
		obj.paste_image_count = html.split("img").length -1;
		return obj;
	}


	static getNoteMetaData(note){

		const ops = note.delta.ops;
		let wordsCount = 0;
		let charCount = 0;
		let linkCount = 0;
		let blocksCount = 0;
		ops.forEach((obj, index)=>{
			blocksCount++;
			if(obj.insert && obj.insert.trim && obj.insert.length ){
				const words = obj.insert.trim().split(/\s+/);
				if(words && words.length){
					wordsCount += words.length;
				}
				charCount += obj.insert.length;
			}
			if(obj.attributes && obj.attributes.link){
				linkCount++;
			}

		});
		let obj = {};
		obj.words_count = wordsCount;
		obj.char_count = charCount;
		obj.link_count = linkCount;
		obj.blocks_count = blocksCount;
		return obj;
	}


	static getOptions(){
		const options = [

			{
				id:"theme",
				label:"Themes",
				options:[
					// {
					// 	id: "emoji",
					// 	name: "Emoji",
					// 	value: "emoji_theme",
					// 	type:"premium"
					// },
					{
						id: "normal_theme",
						name: "Blue",
						value: "normal_theme",
						colorCodes:[
							"#03127A",
							"#1F2E95",
							"#7633b7",
							"white"
						],
					},{
						id:"Dark",
						name: "Dark Mode",
						value: "dark_theme",
						// type:"premium",
						colorCodes:[
							"black",
							"#232423",
							"#565454"
						]
					},
					{
						id: "covid",
						name: "Kill Corona",
						value: "covid_theme",
						// type: "premium",
						preview_video:"covid_theme_preview.mp4",
						// preview_image:"virus_theme_preview.png"
					},
					{
						id: "snowfall",
						name: "Snowfall",
						value: "snowfall_theme",
						type: "premium",
						preview_video:"snowfall_theme_preview.mp4",
						// preview_image:"valentines_theme_preview.png"
					},{
						id: "horror",
						name: "Horror",
						value: "horror_theme",
						type: "premium",
						preview_video:"horror_theme_preview.mp4",
						// preview_image:"horror_theme_preview.png"
					},
					{
						id: "solar_system",
						name: "Space",
						value: "solar_system_theme",
						type:"premium",
						preview_video:"space_theme_preview.mp4",
						// preview_image:"solar_system_theme_preview.png"
					},
					{
						id: "travel",
						name: "World Trip",
						value: "travel_theme",
						type: "premium",
						preview_video:"travel_theme_preview.mp4",
						// preview_image:"valentines_theme_preview.png"
					},
					{
						id: "birds",
						name: "Aquarium",
						value: "birds_theme",
						type:"premium",
						preview_video:"birds_theme_preview.mp4",
						// preview_image:"birds_theme_preview.png"
					},
					{
						id: "rainbow",
						name: "Rainbow",
						value: "rainbow_theme",
						type:"premium",
						colorCodes:[
							"#fe3a42",
							"#eea31e",
							"#7dbeaa",
							"white"
						]
					},

                    {
                        id: "valentine",
                        name: "Valentine",
                        value: "valentines_theme",
						// type: "premium",
						preview_video:"valentines_theme_preview.mp4",
                        // preview_image:"valentines_theme_preview.png"
                    },
					// {
					// 	id: "fireworks",
					// 	name: "Fireworks",
					// 	value: "fireworks_theme",
					// 	type:"premium"
					// },
					// {
					// 	id: "food",
					// 	name: "Food",
					// 	value: "food_theme",
					// 	type:"premium"
					// },



					{
						id: "evergreen",
						name: "Evergreen",
						value: "evergreen_theme",
						colorCodes:[
							"#151414",
							"#224a1d",
							"#3b813a",
							"#f4f7f4"
						]
					},

					{
						id: "sunset",
						name: "Sunset",
						value: "sunset_theme",
						colorCodes:[
							"#4F1B21",
							"#b9621a",
							"#eae6de",
						]
					},

					{
						id: "grey",
						name: "Grayscale",
						value: "grey_theme",
						colorCodes:[
							"black",
							"#CCCCCC",
							"#595775",
						]
					},

					{
						id: "postit",
						name: "Post-it",
						value: "postit_theme",
						colorCodes:[
							"black",
							"#cccccc",
							"#EFECCA"
						]
					}

				]
			},

			{
				id:"fontFamily",
				label:"Font",
				options:[
					{
						id:"makes_sans",
						name: "Makes Sans",
						value:"Balsamiq Sans"
					},
					{
						id:"chewy",
						name: "Chew-y",
						value:"Chewy",
						type:"premium",
					},
					{
						id:"mystery_quest",
						name: "Mystery Quest",
						value:"Mystery Quest",
						type:"premium",
					},
					{
						id:"freckle_face",
						name: "Freckle Face",
						value:"Freckle Face"
					},
					{
						id:"cabin_sketch",
						name: "Cabin Sketch",
						value:"Cabin Sketch",
						type:"premium",
					},
					{
						id:"Like_sister",
						name: "Love Ya Like A Sister",
						value:"Love Ya Like A Sister"
					},
					{
						id:"emilys_candy",
						name: "Emilys Candy",
						value:"Emilys Candy",
						type:"premium",
					},
					{
						id:"great_font",
						name: "Great Font",
						value:"Fredericka the Great"
					},
					{
						id:"comic_sans",
						name: "Comic Sans",
						value:"Comic Sans Ms"

					},
					{
						id:"lato",
						name: "Lato",
						value:"Lato"

					},
					{
						id:"typewriter",
						name: "Typewriter",
						value:"Special Elite",
					},
					{
						id:"la_belle",
						name: "La Belle",
						value: "La Belle Aurore",
					},
					{
						id:"open_sans",
						name: "Open Sans",
						value:"Open Sans"

					},
					{
						id:"arvo",
						name: "Arvo",
						value:"Arvo"

					},
					{
						id:"yesteryear",
						name: "Yesteryear",
						value:"Yesteryear"

					},
					{
						id:"quicksand",
						name: "Quicksand",
						value:"Quicksand"

					},
					{
						id:"montserrat",
						name: "Montserrat",
						value:"Montserrat"

					},

					{
						id:"kalam",
						name: "Kalam",
						value:"Kalam"

					},
					{
						id:"arial",
						name: "Arial",
						value:"Arial"

					},
					{
						id:"times_new_roman",
						name: "Times New",
						value:"Times New Roman"

					}
				]
			},
			{
				id:"notesSize",
				label:"App size",
				options:[
					{
						id:"small",
						name: "Tiny",
						value: {
							width: 248,
							height: 380
						}
					},
					{
						id:"compact",
						name: "Compact",
						value: {
							width: 450,
							height: 430
						}
					},
					{
						id:"medium",
						name: "Medium",
						value: {
							width: 550,
							height: 460
						}
					},
					{
						id:"big",
						name: "Big",
						value: {
							width: 784,
							height: 590
						}
					}
				]
			},
			{
				id:"fontSize",
				label:"Text Size",
				options:[
					{
						id:"almost_hidden",
						name: "Almost Hidden",
						value: 7,
						type:"premium",
					},
					{
						id:"tiny",
						name: "Tiny",
						value: 11
					},
					{
						id:"small",
						name: "Small",
						value: 12

					},
					{
						id:"medium",
						name: "Medium",
						value:14

					},
					{
						id:"big",
						name: "Big",
						value:16

					},
					{
						id:"bigger",
						name: "Bigger",
						value:18

					},
					{
						id:"giant",
						name: "Giant",
						value:20
					},
					{
						id:"super_giant",
						name: "Super Giant",
						value:24,
						type:"premium",
					},
					{
						id:"mountain",
						name: "Mountain",
						value:30,
						type:"premium",
					}
				]
			},

		];
		return options;

	}

}
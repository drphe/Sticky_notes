class Wrapper{

	static init(){


		//first
		this.setGlobalVariablesToCheckAppOpenLocation();

		//  they must load first
		if(typeof Sentry !="undefined") {
			if(COMMONCONSTANTS.LOG_SENTRY){
				Sentry.init({
					dsn: 'https://e02d62397c7040f4a2f5bc37a4960765@sentry.io/1342449',
					release: COMMONCONSTANTS.RELEASE_VERSION
				});
			}
		}
		this.initializeEmitter();

		if(Utility.isExtension()){
			this.wrapChromeRuntime();
			let obj = {
				name: ""
			};
			if(window.APP_OPEN_IN_POPUP){
				obj.name = COMMONCONSTANTS.APP_OPEN_IN_POPUP + "-" + (window.assignedId);
				MessagePassing.send({key:COMMONCONSTANTS.OPEN_POPUP,value:{}});
				chrome.runtime.connect(chrome.runtime.id, obj);

			} else if(window.APP_OPEN_IN_TAB){
				obj.name = COMMONCONSTANTS.APP_OPEN_IN_TAB + "-" + (window.assignedId);
				chrome.runtime.connect(chrome.runtime.id, obj);
			}

		} else{
			this.wrapEventEmitter();
		}



		this.setGlobalVariableForTracking();
		this.checkForIdentity();
		this.checkForOnline();
		if(window.APP_OPEN_IN_POPUP || window.APP_OPEN_IN_TAB || !Utility.isExtension() ){
			this.trackSession();
		}
	}

	static checkForOnline(){
		const navigator = window.navigator;
		if(navigator && !navigator.onLine){
			Utility.increaseLSCount(COMMONCONSTANTS.OFFLINE_COUNT_WHEN_POPUP_OPEN);
		}
	}

	static checkForIdentity(){

		if(Utility.isExtension()){
			const ls = window.localStorage;
			if(!ls[COMMONCONSTANTS.SIGNED_IN_CHROME]){
				chrome.identity.getAuthToken({interactive: false}, function (token) {

					if (chrome.runtime.lastError) {
						const msg = chrome.runtime.lastError.message;
						if(msg && msg.indexOf("not") > -1 && msg.indexOf("sign") > -1){
							ls[COMMONCONSTANTS.SIGNED_IN_CHROME] = 0;
						}
					}

					if(token){
						ls[COMMONCONSTANTS.SIGNED_IN_CHROME] = 1;
					}
				});
			}
		}

	}


	static initializeEmitter (){
		if(!window.Emitter){
			const Emitter = new EventEmitter();
			window.Emitter = Emitter;
		}
	};

	static wrapChromeRuntime(){
		const MessagePassing = {};
		MessagePassing.send = (obj)=>{
			obj.assignedId = window.assignedId;
			chrome.runtime.sendMessage(obj);
		};
		MessagePassing.on = (fn)=>{
			chrome.runtime.onMessage.addListener(fn);
		};
		MessagePassing.off = (fn)=>{chrome.runtime.onMessage.removeListener(fn);}
		window.MessagePassing = MessagePassing;
		// window.runTestCases();
	}

	static wrapEventEmitter(){
		const MessagePassing = {};
		MessagePassing.send = (obj)=>{
			obj.assignedId = window.assignedId;
			Emitter.emit(COMMONCONSTANTS.FROM_POPUP,obj)
		};
		MessagePassing.on = (fn)=>{Emitter.addListener(COMMONCONSTANTS.TO_POPUP,fn)};
		MessagePassing.off = (fn)=>{Emitter.removeListener(COMMONCONSTANTS.TO_POPUP,fn)};
		window.MessagePassing = MessagePassing;
	}

	static setGlobalVariablesToCheckAppOpenLocation(){
		if(Utility.isExtension()){
			const href =  window.location.href;
			if(href && href.indexOf("popuptab") > -1){
				window.APP_OPEN_IN_TAB = true;
			} else if(href && href.indexOf("index") > -1){
				window.APP_OPEN_IN_POPUP = true;
			}
		}
		window.assignedId = (new Date()).getTime();

	}

	static setGlobalVariableForTracking(){
		window.TRACK = (attr)=>{
			MessagePassing.send({
				key:COMMONCONSTANTS.SEND_TO_GA,
				value:{
					attr:attr
				}
			});
		};

		window.SEND_TO_AMPLITUDE = (action, extraProperties={}, userState={})=>{
			MessagePassing.send({
				key:COMMONCONSTANTS.SEND_TO_AMPLITUDE,
				value:{
					action: action,
					extraProperties: extraProperties,
					userState: userState
				}
			});
		}
	}

	static trackSession(){

		const ls = window.localStorage;
		ls.POPUP_OPEN_COUNT = ls.POPUP_OPEN_COUNT || 0;
		ls.POPUP_OPEN_DAYS_COUNT = ls.POPUP_OPEN_DAYS_COUNT || 0;
		ls.POPUP_LAST_OPEN_DATE = ls.POPUP_LAST_OPEN_DATE || ((new Date()).toDateString());

		if(ls.count){
			ls.count = parseInt(ls.count) + 1;
		}

		ls.POPUP_OPEN_COUNT = parseInt(ls.POPUP_OPEN_COUNT) +1 ;

		if(ls.POPUP_LAST_OPEN_DATE){
			const todayDate = (new Date()).toDateString();
			if(todayDate != ls.POPUP_LAST_OPEN_DATE){
				ls.POPUP_OPEN_DAYS_COUNT = parseInt(ls.POPUP_OPEN_DAYS_COUNT) + 1;
			}
		}

		const open_popup_time = (new Date()).getTime();

		window.UKIV_SESSION_DATA = {};
		window.UKIV_SESSION_DATA.POPUP_OPEN_COUNT = ls.POPUP_OPEN_COUNT;
		window.UKIV_SESSION_DATA.typing_time = 0;
		window.typing_bursts = 0;


		let seconds_open = 0;
		let click_events = 0;
		let paste_events = 0;
		let keyup_events = 0;
		window.UKIV_SESSION_DATA.click_events = 0;
		window.UKIV_SESSION_DATA.paste_events=0;
		window.UKIV_SESSION_DATA.keyup_events=0;
		window.UKIV_SESSION_DATA.seconds_open=0;


		document.addEventListener('click',()=>{
			click_events++;
			window.UKIV_SESSION_DATA.click_events = click_events;
			Utility.increaseLSCount(COMMONCONSTANTS.CLICK_EVENTS);

			if(Utility.isExtension()){
				chrome.tabs.getCurrent((tab)=>{
					let tabId;
					if(tab && tab.id){
						tabId = tab.id;
					}
					MessagePassing.send({key:COMMONCONSTANTS.CLICK_EVENT,value:{},callerInfo:{tabId:tabId}});
				});
			}

		});

		document.addEventListener('paste',(e)=>{
			paste_events++;
			window.UKIV_SESSION_DATA.paste_events = paste_events;
			Utility.increaseLSCount(COMMONCONSTANTS.PASTE_EVENTS);
		});

		document.addEventListener('keyup',()=>{
			keyup_events++;
			window.UKIV_SESSION_DATA.keyup_events = keyup_events;
			Utility.increaseLSCount(COMMONCONSTANTS.KEY_UP_EVENTS);
		});

		setInterval(()=>{
			seconds_open++ ;
			window.UKIV_SESSION_DATA.seconds_open = seconds_open;
			if(window.APP_OPEN_IN_POPUP){
				Utility.increaseLSCount(COMMONCONSTANTS.TOTAL_APP_OPEN_TIME_SECONDS);
			}
		},1000);
	}

}

Wrapper.init();







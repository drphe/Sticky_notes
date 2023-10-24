class Init{

	static initSentry(){
		if(typeof Sentry !="undefined"){
			if(COMMONCONSTANTS.LOG_SENTRY){
				Sentry.init({
					dsn: 'https://e02d62397c7040f4a2f5bc37a4960765@sentry.io/1342449',
					release: COMMONCONSTANTS.RELEASE_VERSION
				});
			}

		}

	}

	static initGoogleAnalytics(){
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
		})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
		ga('create', 'UA-1167481-24', 'auto');
		ga('set', 'checkProtocolTask', function(){});
		ga('require', 'displayfeatures');
	}

	static initAmplitude(){
		if(typeof amplitude !="undefined"){
			amplitude.getInstance().init("634a0a3e7d1454005c1f8271b3cbbf01");
			TrackingHelper.setAmplitudeUserPropertyIfExists({
				installDate: (new Date()).toLocaleDateString()
			});
		} else{
			setTimeout(()=>{
				amplitude.getInstance().init("634a0a3e7d1454005c1f8271b3cbbf01");
				TrackingHelper.setAmplitudeUserPropertyIfExists({
					installDate: (new Date()).toLocaleDateString()
				});
			},2000);
		}

	}

	static initializeFirebase(){
		if(!firebase.apps.length){
			firebase.initializeApp(CONFIG);
		}
	}

	static initializeEmitter(){
		if(!window.Emitter){
			const Emitter = new EventEmitter();
			window.Emitter = Emitter;
		}
	}

	static setUserPropertyAfterInstall(){
		const ls = window.localStorage;
		TrackingHelper.setAmplitudeUserPropertyIfExists({installReleaseVersion: COMMONCONSTANTS.RELEASE_VERSION});

		if(ls[COMMONCONSTANTS.POPUP_OPEN_COUNT]){
			TrackingHelper.setAmplitudeUserPropertyIfExists({
				popupOpenCount: ls[COMMONCONSTANTS.POPUP_OPEN_COUNT]
			});
		}

	}

	static setIconBadge(){
		Utility.setPremiumBadgeTextAndIcon();
	}
}




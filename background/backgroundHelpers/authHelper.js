class AuthHelper{

	// static init(){
	// 	this.bindEvents();
	// }
	//
	static init(){

		return new Promise((resolve, reject)=>{
			if(this.unsubscribe){
				this.unsubscribe();
				this.unsubscribe = null;
			}
			FirestoreHelper.init();
			this.unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
				
				delete localStorage[COMMONCONSTANTS.USER_UNVERIFIED];
				if(user && typeof user.emailVerified !== "undefined" && !user.emailVerified){
					localStorage[COMMONCONSTANTS.USER_UNVERIFIED] = true;
				}

				if(user && user.email && user.email.length){
					localStorage["email"] = user.email;
				}

				if(!user){
					reject({
						code:"WAKEUP_USER_EMPTY",
						message:"user is null"
					});	
				}

				resolve();
			});
		});

	}

	static convertUserToSimpleObject(user){

		const providerData = user.providerData.map((item)=>{
			return Object.assign({},item);
		});

		let obj =  {
			displayName: user.displayName,
			email: user.email,
			emailVerified: user.emailVerified,
			uid: user.uid,
			providerId: user.providerId,
			providerData: providerData
		};

		if(user.isNewUser){
			obj["isNewUser"] =  user.isNewUser;
		} else{
			obj["isNewUser"] =  false;
		}

		return obj;
	}

	static getProviderDetails(email){
		return new Promise((resolve, reject)=>{
			const request = new XMLHttpRequest();
			request.open('GET', COMMONCONSTANTS.PROVIDER_CHECK_URL + '/provider?email=' + email, true);

			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {
					var response = JSON.parse(request.responseText);
					resolve(response);
				} else {
					reject({
						message:"can't get login provider details."
					});
				}
			};

			request.onerror = (error)=>{
				reject(error);
			};

			request.send();
		});

	}

	static sendEmailidConformationEmail(userData){
		Init.initializeFirebase();
		let user = userData;
		if(!user){
			if(firebase.auth().currentUser){
				user = firebase.auth().currentUser;
			} else{
				return Promise.reject();
			}

		}
		user.sendEmailVerification();
		return Promise.resolve();
	}

	static sendForgotPasswordEmail(email){
		Init.initializeFirebase();
		return new Promise((resolve, reject)=>{
			try {
				firebase.auth().sendPasswordResetEmail(email).then((data)=>{
					resolve(data);
				}).catch((error)=>{
					reject(error);
				});
			} catch(error){
				Sentry.captureException(error);
				reject(error);
			}
		});
	}

	static createAccount(email, password){
		Init.initializeFirebase();
		return new Promise((resolve, reject)=>{
			try {
				firebase.auth().createUserWithEmailAndPassword(email, password).then((data)=>{
					const userObj = Object.assign({},data.user,data.additionalUserInfo);
					const user = this.convertUserToSimpleObject(userObj);
					user.loginTimestamp = (new Date()).getTime();
					FirestoreHelper.createUser(user).then((data)=>{
						resolve(user);
					}).catch((error)=>{
						reject(error);
					});
					// resolve(user);
				}).catch((error)=>{
					reject(error);
				});
			} catch(error){
				Sentry.captureException(error);
				reject(error);
			}
		});


	}

	static loginWithEmailAndPassword(email, password){
		Init.initializeFirebase();
		return new Promise((resolve, reject)=>{
			try {
				firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
					const userObj = Object.assign({},data.user,data.additionalUserInfo);
					const user = this.convertUserToSimpleObject(userObj);
					user.loginTimestamp = (new Date()).getTime();
					FirestoreHelper.updateUserDetails(user).then((data)=>{
						resolve(user);
					}).catch((error)=>{
						reject(error);
					});

				}).catch((error)=>{

					reject(error);

				});
			} catch(error){
				Sentry.captureException(error);
				reject(error);
			}
		});
	}

	static checkLoginErrorReason(email) {
		return this.getProviderDetails(email).then((data) => {

			const providerData = data.providerData;
			const providerIdArray = providerData.map(item => item.providerId);

			//sequence is important
			if (providerIdArray.indexOf("password") > -1 && providerIdArray.indexOf("google.com") > -1) {
				return {
					code: "ArtificialLoginSignup/password-incorrect-has-google-account",
					message: ""
				};
			}


			if (providerIdArray.indexOf("password") > -1) {
				return {
					code: "ArtificialLoginSignup/password-incorrect",
					message: ""
				};
			}

			if (providerIdArray.indexOf("google.com") > -1) {
				return {
					code: "ArtificialLoginSignup/google-login",
					message: ""
				};
			}

			if (data.providerId == "provider-not-found" || providerData.length == 0) {
				return {
					code: "ArtificialLoginSignup/email-not-found",
					message: ""
				};
			}

			if (data.providerId == "firebase") {
				return {
					code: "ArtificialLoginSignup/multipleProviders",
					message: ""
				};
			}

			return {
				code: "provider-absurd-value",
				message: ""
			};
		});
	}


	static startGoogleLogin(interactive){
		Init.initializeFirebase();
		const promise = new Promise((resolve, reject)=>{
			chrome.identity.getAuthToken({interactive: !!interactive}, (token)=>{
				if (chrome.runtime.lastError && !interactive) {
					reject({code:"not interactive", message:"It was not possible to get a token programmatically."});

				} else if(chrome.runtime.lastError) {
					reject(chrome.runtime.lastError);
				} else if (token) {
					// Authorize Firebase with the OAuth Access Token.
					var credential = firebase.auth.GoogleAuthProvider.credential(null, token);
					firebase.auth().signInWithCredential(credential)
					.then((data)=>{
						const userObj = Object.assign({},data.user,data.additionalUserInfo);
						const user = this.convertUserToSimpleObject(userObj);
						user.loginTimestamp = (new Date()).getTime();
						if(user.isNewUser){
							FirestoreHelper.createUser(user).then((data)=>{
								resolve(user);
							}).catch((error)=>{
								reject(error);
							});
						} else{
							FirestoreHelper.updateUserDetails(user).then(()=>{
								resolve(user);
							}).catch((error)=>{
								reject(error);
							});
						}

					})
					.catch(function(error) {
						// The OAuth token might have been invalidated. Lets' remove it from cache.
						if (error.code === 'auth/invalid-credential' || error.code.indexOf("invalid-credential") > -1) {
							chrome.identity.removeCachedAuthToken({token: token},()=>{
								this.startGoogleLogin(interactive);
							});
						} else{
							reject(error);
						}
					});
				} else {
					reject({code:"null token", message:"The OAuth Token was null"});
				}
			});
		});
		return promise;
	}

	static logout(){
		Init.initializeFirebase();
		if (firebase.auth().currentUser) {
			firebase.auth().signOut();
			let defaultData = DefaultValuesHelper.getDefaultValues(COMMONCONSTANTS.UKIV_INDEXDB_CURRENT_VERSION).userLocalData;
			return AppData.saveUserLocalData(defaultData);
		} else{
			return Promise.reject({code:"user not logged in", message:"No current user is present. Refresh page and try again"});
		}
	}

	static fetchUser(){
		Init.initializeFirebase();
		const currentUser = firebase.auth().currentUser;
		if(!currentUser){
			return Promise.reject({code:"no currentUser", message:"User is not logged in or not present. Refresh page and try again"});
		}


		return new Promise((resolve, reject)=>{
			currentUser.reload().then(()=>{
				const userObj = firebase.auth().currentUser;
				const user = this.convertUserToSimpleObject(userObj);
				return FirestoreHelper.updateUserDetails(user).then(()=>{
					resolve(user);
				}).catch((error)=>{
					reject(error);
				});

			}).catch((error)=>{
				reject(error);
			});
		});
	}
}
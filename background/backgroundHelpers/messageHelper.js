class MessageHelper{
	static init(){
		this.bindEvents();
	}

	static bindEvents(){

		if(	Utility.isExtension()){
			chrome.runtime.onMessage.removeListener(this.onReceiveMessageFromPopup.bind(this));
			chrome.runtime.onMessage.addListener(this.onReceiveMessageFromPopup.bind(this));
		} else if(Emitter){
			Emitter.removeListener(COMMONCONSTANTS.FROM_POPUP,this.onReceiveMessageFromPopup.bind(this));
			Emitter.addListener(COMMONCONSTANTS.FROM_POPUP,this.onReceiveMessageFromPopup.bind(this));
		}

	}

	static logDetailsIfPresent(){
		const details = TrackingHelper.getAmplitudeProperties();
		console.log(details.email, details.amp_device_id);
	}

	static onReceiveMessageFromPopup(message,sender,sendResponse){

		const assignedId = message.assignedId;
		const key = message.key;
		const value = message.value;
		const callerInfo = message.callerInfo || {};
		if(!key || !value){
			return;
		}

		switch(key){


			//Only for tracking
			case COMMONCONSTANTS.SEND_TO_GA:
				TrackingHelper.sendToGa(message.value);
				break;

			case COMMONCONSTANTS.SEND_TO_AMPLITUDE:
				TrackingHelper.sendToAmplitude(message.value);
				break;


			case COMMONCONSTANTS.FETCH_ALL_NOTES:
				const pr = AppData.fetchAllNotes();
				pr.then((notesArray)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_ALL_NOTES_SUCCESS,notesArray);
				}).catch((error)=>{
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_ALL_NOTES_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.FETCH_NOTE:
				const noteId = message.value.id;
				const fetchNotePr = AppData.fetchNote(noteId);
				fetchNotePr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_NOTE_SUCCESS,data);
				}).catch((error)=>{
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_NOTE_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.FETCH_FOLDER_ALL_NOTES:
				const folderId = message.value.id;
				const folderPr = AppData.fetchFolderAllNotes(folderId);
				folderPr.then((notesArray)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_FOLDER_ALL_NOTES_SUCCESS,notesArray);
				}).catch((error)=>{
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}
					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_FOLDER_ALL_NOTES_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.SAVE_NOTE:
				const noteObj = message.value;
				const notePr = AppData.saveNote(noteObj);
				notePr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.SAVE_NOTE_SUCCESS,data);
				}).catch((error)=>{
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.SAVE_NOTE_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.FETCH_VALUES:
				const id = message.value.id;
				const fetchsettingsPr = AppData.fetchValues(id);
				fetchsettingsPr.then((values)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_VALUES_SUCCESS, values);
				}).catch((error)=>{
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_VALUES_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.SAVE_VALUES:
				const valueObj = message.value;
				const settingsPr = AppData.saveValues(valueObj);
				settingsPr.then((savedValue)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.SAVE_VALUES_SUCCESS, savedValue);
				}).catch((error)=>{
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.SAVE_VALUES_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.FETCH_USER_LOCAL_DATA:
				const userLocalDataPr = AppData.fetchUserLocalData();
				userLocalDataPr.then((data)=>{
					if(data && data.email && data.email.length){
						TrackingHelper.setAmplitudeUserPropertyIfExists({email: data.email});
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_USER_LOCAL_DATA_SUCCESS,data, callerInfo);
				}).catch((error)=>{
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_USER_LOCAL_DATA_ERROR, error, callerInfo);
				});
				break;

			case COMMONCONSTANTS.SAVE_USER_LOCAL_DATA:
				const userLocalDataSavePr = AppData.saveUserLocalData(message.value);
				userLocalDataSavePr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.SAVE_USER_LOCAL_DATA_SUCCESS,data,callerInfo);
				}).catch((error)=>{
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.SAVE_USER_LOCAL_DATA_ERROR, error,callerInfo);
				});
				break;

			case COMMONCONSTANTS.FETCH_USER:
				const userPr = AuthHelper.fetchUser();
				userPr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_USER_SUCCESS,data);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.FETCH_USER_ERROR, error);
				});
				break;


			case COMMONCONSTANTS.CREATE_ACCOUNT:
				const accountData = message.value;
				const email = accountData.email;
				const password = accountData.password;
				const createAccountPr = AuthHelper.createAccount(email, password);
				createAccountPr.then((data)=>{
					TrackingHelper.setAmplitudeUserPropertyIfExists(data);
					this.sendMessage(assignedId,COMMONCONSTANTS.CREATE_ACCOUNT_SUCCESS, data);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}

					//possible errors
					// LoginSignup/email-already-in-use
					// LoginSignup/invalid-email => badly formated
					// LoginSignup/operation-not-allowed => Thrown if email/password accounts are not enabled.
					// LoginSignup/weak-password => The password must be 6 characters long or more.
					this.sendMessage(assignedId,COMMONCONSTANTS.CREATE_ACCOUNT_ERROR, error, accountData);
				});
				break;

			case COMMONCONSTANTS.LOGIN:
				const loginAccountData = message.value;
				const loginEmail = loginAccountData.email;
				const loginPassword = loginAccountData.password;
				const loginPr = AuthHelper.loginWithEmailAndPassword(loginEmail, loginPassword);
				loginPr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.LOGIN_SUCCESS, data);
					TrackingHelper.setAmplitudeUserPropertyIfExists(data);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}

					//possible errors {code:"", message:""}
					// LoginSignup/user-not-found There is no user record corresponding to this identifier
					// LoginSignup/wrong-password  => The password is invalid or the user does not have a password
					// LoginSignup/invalid-email
					// LoginSignup/user-disabled

					this.sendMessage(assignedId,COMMONCONSTANTS.LOGIN_ERROR, error, loginAccountData);
				});
				break;

			case COMMONCONSTANTS.CHECK_LOGIN_ERROR_REASON:
				const errorEmail = message.value.email;
				const errorEmailpr = AuthHelper.checkLoginErrorReason(errorEmail);

				errorEmailpr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.CHECK_LOGIN_ERROR_REASON_SUCCESS, data);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.CHECK_LOGIN_ERROR_REASON_ERROR);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.CHECK_LOGIN_ERROR_REASON_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.SEND_EMAILID_CONFIRMATION_EMAIL:
				const sendMailPr = AuthHelper.sendEmailidConformationEmail();
				sendMailPr.then(()=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.SEND_EMAILID_CONFIRMATION_EMAIL_SUCCESS);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.SEND_EMAILID_CONFIRMATION_EMAIL_ERROR);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.SEND_EMAILID_CONFIRMATION_EMAIL_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.SEND_FORGOT_PASSWORD_MAIL:
				// LoginSignup/invalid-email
			    // LoginSignup/user-not-found
				const emailForResettingPassword = message.value.email;
				const sendForgotMailPr = AuthHelper.sendForgotPasswordEmail(emailForResettingPassword);
				sendForgotMailPr.then(()=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.SEND_FORGOT_PASSWORD_MAIL_SUCCESS,{}, message.value);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.SEND_FORGOT_PASSWORD_MAIL_ERROR);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.SEND_FORGOT_PASSWORD_MAIL_ERROR, error, message.value);
				});
				break;

			case COMMONCONSTANTS.LOGIN_WITH_GOOGLE:
				const googleLoginPr = AuthHelper.startGoogleLogin(true);
				googleLoginPr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.LOGIN_WITH_GOOGLE_SUCCESS,data);
					TrackingHelper.setAmplitudeUserPropertyIfExists(data);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.LOGIN_WITH_GOOGLE_ERROR);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.LOGIN_WITH_GOOGLE_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.LOGOUT:
				const logoutPr = AuthHelper.logout();
				logoutPr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.LOGOUT_SUCCESS,data, callerInfo);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.LOGOUT_ERROR);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.LOGOUT_ERROR, error, callerInfo);
				});
				break;

			case COMMONCONSTANTS.BACKUP:
				// console.log("backup called");
				const backupPr = FirestoreHelper.createBackup(value.dontSkipAnyNote,value.secondaryBackup);
				backupPr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.BACKUP_SUCCESS,data,callerInfo);
					TrackingHelper.logBackupEvent(value);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					if(error && error.message){
						console.log(error.message);
					} else{
						console.log(error);
					}

					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.BACKUP_ERROR);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.BACKUP_ERROR, error,callerInfo);
				});
				break;

			case COMMONCONSTANTS.RESTORE:
				const restorePr = FirestoreHelper.restore();
				// console.log("restore called");
				restorePr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.RESTORE_SUCCESS,data);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.RESTORE_ERROR);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.RESTORE_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.MAKE_USER_NORMAL:
				const normalPr = FirestoreHelper.makeUserNormal();
				normalPr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.MAKE_USER_NORMAL_SUCCESS,data);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.MAKE_USER_NORMAL_ERROR);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.MAKE_USER_NORMAL_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.MAKE_USER_PREMIUM:
				const premiumPr = FirestoreHelper.makeUserPremium(message.value.licenseKey);
				premiumPr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.MAKE_USER_PREMIUM_SUCCESS,data);
					TrackingHelper.setAmplitudeUserPropertyIfExists({isPremium:true});
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(message.value.licenseKey);
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.MAKE_USER_PREMIUM_ERROR);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.MAKE_USER_PREMIUM_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.UPDATE_USER_DETAILS:
				const updatePr = FirestoreHelper.createOrUpdateUser(message.value.user);
				updatePr.then((data)=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.UPDATE_USER_DETAILS_SUCCESS,data);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.UPDATE_USER_DETAILS_ERROR);
					}

					this.sendMessage(assignedId,COMMONCONSTANTS.UPDATE_USER_DETAILS_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.CLEAR_ALL_NOTES_DATA:
				const clearAllDataPr = AppData.clearAllData();
				clearAllDataPr.then(()=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.CLEAR_ALL_NOTES_DATA_SUCCESS);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					console.log(error);
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.CLEAR_ALL_NOTES_DATA_ERROR);
					}
					this.sendMessage(assignedId,COMMONCONSTANTS.CLEAR_ALL_NOTES_DATA_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.SUBMIT_FEEDBACK:
				const text = message.value.text;
				const previousUser = message.value.previousUser;
				const feedbackPr = FirestoreHelper.submitFeedback(text, previousUser);
				feedbackPr.then(()=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.SUBMIT_FEEDBACK_SUCCESS);
				}).catch((error)=>{
					this.logDetailsIfPresent();
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
					}
					this.sendMessage(assignedId,COMMONCONSTANTS.SUBMIT_FEEDBACK_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.WAKEUP_FIRESTORE:
				const wakeupPr = AuthHelper.init();
				this.time = (new Date()).getTime();
				wakeupPr.then(()=>{
					this.sendMessage(assignedId,COMMONCONSTANTS.WAKEUP_FIRESTORE_SUCCESS,value);
				}).catch((error)=>{
					console.log(error);
					this.logDetailsIfPresent();
					if(COMMONCONSTANTS.LOG_SENTRY){
						Sentry.captureException(error);
						Sentry.captureMessage(COMMONCONSTANTS.WAKEUP_FIRESTORE_ERROR);
					}
					this.sendMessage(assignedId,COMMONCONSTANTS.WAKEUP_FIRESTORE_ERROR, error);
				});
				break;

			case COMMONCONSTANTS.OPEN_POPUP:
				this.sendMessage(assignedId,COMMONCONSTANTS.BROADCAST_POPUP_OPENED);
				break;

			case COMMONCONSTANTS.CLICK_EVENT:
				this.sendMessage(assignedId,COMMONCONSTANTS.BROADCAST_ON_CLICK_EVENT,{},{tabId: callerInfo.tabId});
				break;

		}
	}

	static sendMessage(assignedId,key, value={}, senderData={}){
		if(Utility.isExtension()){
			chrome.runtime.sendMessage({
				assignedId:assignedId,
				key: key,
				value: value,
				senderData: senderData
			});
		} else if(Emitter){
			Emitter.emit(COMMONCONSTANTS.TO_POPUP,{key: key, value: value, senderData: senderData, assignedId:assignedId});
		}

	}
}
class DefaultValuesHelper{
	static getDefaultValues(){
		const dbVersion = COMMONCONSTANTS.UKIV_INDEXDB_CURRENT_VERSION;
		switch(dbVersion){
			case 1:
				const notes = [
					{
						id: "n-1-1",
						delta:{
							ops: [
								{ insert: 'Welcome to ' },
								{ insert: 'Sticky Notes 3', attributes: { bold: true } },
								{ insert: '!\n\n\n' },
								{ insert: 'Basic tips:\n\n', attributes: { underline: true } },
								{ insert: '1. ' },
								{ insert: ' To open this app ', attributes: { bold: true } },
								{ insert: '- Click on its icon, located on the right-top of this chrome browser.\n\n' },
								{ insert: '2. ' },
								{ insert: ' To close the app ', attributes: { bold: true } },
								{ insert: '- Click outside of this app\'s boundary i.e outside this popup.\n\n' },
								{ insert: '3. ' },
								{ insert: ' Free users ', attributes: { bold: true } },
								{ insert: 'can now use all basic features of the app without any credit card. Although we recommend everyone to purchase & enjoy premium benefits, because why not ' },
								{ insert: '#yolo\n\n\n', attributes: { bold: true } },
								{ insert: 'More tips:\n\n', attributes: { underline: true } },
								{ insert: '4. Right now you are in ' },
								{ insert: 'Folder 1', attributes: { bold: true } },
								{ insert: ' Every folder can have upto 3 notes visible. This is your 1st note. On the right side is Note 2. And third note is currently hidden, which you can enable from above Folder 1 settings icon.\n\n' },
								{ insert: '5. Click ' },
								{ insert: 'Folder 2', attributes: { bold: true } },
								{ insert: '. We have some jokes there you can enjoy. \n\n' },
								{ insert: '6. ' },
								{ insert: 'This app has many awesome features, please checkout all ' },
								{ insert: 'icons on the right sidebar.\n\n\n', attributes: { bold: true } },
								{ insert: 'Feel free to delete all the above & below text, And use this note as you wish. :)\n\n\n' },
								{
									insert: "Upgrade Now",
									attributes: {
										link: "https://www.getstickynotes.com/payment?__from=apps"
									}
								},
								{ insert: ' & Enable amazing features like:\n\n' ,attributes: { bold: true } },
								{ insert: '1. All animated & premium themes\n' },
								{ insert: '2. Safely Backup your Notes on Cloud\n' },
								{ insert: '3. Read your notes on all devices using a website. (Read only)\n' },
								{ insert: '4. Make this app Draggable\n' },
								{ insert: '5. Focus Mode\n' },
								{ insert: '6. Premium font looks\n' },
								{ insert: '7. Premium text sizes\n' },
								{ insert: '8. Premium support\n\n\n' },
								{ insert: 'Delete all above default text and use this note as you wish. :)' },
							]
						}
					}
					,
					{
						id: "n-1-2",
						delta:{
							ops: [
								{ insert: 'Note 2: \n\n' },
							]
						}
					},
					{
						id: "n-1-3",
						delta:{
							ops: [
								{ insert: 'Note 3: \n\n' },
							]
						}

					},
					{
						id: "n-2-1",
						delta:{
							ops: [
								{ insert: 'Note 4: \n\n' },
								{ insert: 'Share these jokes with your friends : \n\n', attributes: { bold: true }},
								{ insert: 'A: Hey, man! Please call me a taxi. \n'},
								{ insert: 'B: Yes, sir. You are a taxi.  \n\n'},
								{ insert: '******************************\n\n'},

								{ insert: 'Patient: Doctor, I have a pain in my eye whenever I drink tea.\n'},
								{ insert: 'Doctor: Take the spoon out of the mug before you drink.   \n\n'},
								{ insert: '******************************\n\n'},

								{ insert: 'PUPIL: Would you punish me for something I didn`t do?\n'},
								{ insert: 'TEACHER: Of course not.   \n'},
								{ insert: 'PUPIL: Good, because I haven`t done my homework. \n\n'},
								{ insert: '******************************\n\n'},

								{ insert: 'I was not that drunk yesterday.\n'},
								{ insert: 'Oh boy you took the shower head in your arms and told it to stop crying.\n\n'},
								{ insert: '******************************\n\n'},

								{ insert: 'Women really know how to hold a grudge.\n'},
								{ insert: 'My wife asked me to pass her a lip balm. And by mistake, I gave her a tube of Super Glue. Its been a month now and she is still not speaking to me!\n\n'},
								{ insert: '******************************\n\n'},

								{ insert: 'Dr Frankenstein entered a body building contest. Upon arrival he realised he misunderstood the objective.\n\n'},
								{ insert: '******************************\n\n'},

								{ insert: 'I want to die peacefully in my sleep, like my grandfather, not screaming and scared like the other people in the car.\n\n'},
								{ insert: '******************************\n\n'},

								{ insert: 'Do you use your right hand to stir your coffee? Huh. I use a spoon..\n\n'},
								{ insert: '******************************\n\n'},
							]
						}
					},
					{
						id: "n-2-2",
						delta:{
							ops: [
								{ insert: 'Note 5: \n\n' },
							]
						}
					},
					{
						id: "n-2-3",
						delta:{
							ops: [
								{ insert: 'Note 6: \n\n' },
							]
						}
					},
					{
						id: "n-3-1",
						delta:{
							ops: [
								{ insert: 'Sample To Do List:\n \n', attributes: { bold: true } },
								{ insert: 'Call plumber on Saturday\n \n' },
								{ insert: "Buy gift for James' wedding\n \n" },
								{ insert: 'Meeting Dave at 11am on Sunday  \n \n' },
								{ insert: 'Pay Electricity Bill \n \n' },
								{ insert: "Watch movie F9\n \n" },
							]
						}
					},
					{
						id: "n-3-2",
						delta:{
							ops: [
								{ insert: 'Your Data is at Risk!: \n\n', attributes: { bold: true }},
								{ insert: 'Make sure to login & enable automatic backups of your data. And safeguard yourself from a computer crash or unknown bugs.  \n\n' },
								{ insert: 'You will need to purchase premium plan to enable backups. \n\n' },
							]
						}
					},
					{
						id: "n-3-3",
						delta:{
							ops: [
								{ insert: 'type here, \n\n' },
							]
						}
					},
					{
						id: "n-4-1",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-4-2",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-4-3",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-5-1",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-5-2",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-5-3",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-6-1",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-6-2",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-6-3",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-7-1",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-7-2",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-7-3",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-8-1",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-8-2",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-8-3",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-9-1",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-9-2",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-9-3",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-10-1",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-10-2",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					},
					{
						id: "n-10-3",
						delta:{ops: [{ insert: 'type here, \n\n' }]}
					}
				];

				const settings = {
					id: "settings",
					value: {
						fontSize: "medium",
						fontFamily: "makes_sans",
						notesSize:"medium",
						theme: "normal_theme"
					}
				};


				if(window && window.screen ){
					const w = window.screen.availWidth;
					const h = window.screen.availHeight;
					if(w >= 1440 && h >= 830){
						settings.value.notesSize = "big";
					}
				}

				const folderNames = {
					id: "folderNames",
					activeId:1,
					value: [
					{
						id:1,
						value:"Folder 1",
						show:[1,1,0],
						noteIndexOnSmall:0,
						visible: true
					},
					{
						id: 2,
						value: "Folder 2",
						show:[1,1,1],
						noteIndexOnSmall:0,
						visible: true
					},
					{
						id: 3,
						value: "Folder 3",
						show:[1,1,0],
						noteIndexOnSmall:0,
						visible: false
					},
					{
						id: 4,
						value: "Folder 4",
						show:[1,1,1],
						noteIndexOnSmall:0,
						visible: false
					},
					{
						id: 5,
						value: "Folder 5",
						show:[1,1,1],
						noteIndexOnSmall:0,
						visible: false
					},
					{
						id: 6,
						value: "Folder 6",
						show:[1,1,1],
						noteIndexOnSmall:0,
						visible: false
					},
					{
						id: 7,
						value: "Folder 7",
						show:[1,1,1],
						noteIndexOnSmall:0,
						visible: false
					},
					{
						id: 8,
						value: "Folder 8",
						show:[1,1,1],
						noteIndexOnSmall:0,
						visible: false
					},
					{
						id: 9,
						value: "Folder 9",
						show:[1,1,1],
						noteIndexOnSmall:0,
						visible: false
					},
					{
						id: 10,
						value: "Folder 10",
						show:[1,1,1],
						noteIndexOnSmall:0,
						visible: false
					}
				]
				};


				const userLocalData =  {
					id: "userLocalData",
					installDate : (new Date()).toString(),
					isPremium: false,
					v1:"",
					v2:"",
					v3:"",
					v4:"",
					v5:"",
					v6:"",
					v7:"",
					v8:"",
					v9:"",
					v10:"",
					v11:"",
					v12:"",
					v13:"",
					v14:"",
					v15:"",
					v16:"",
					v17:"",
					v18:"",
					v19:"",
					v20:"",
					backupSettings:{
						interval: "daily"
					}
				};

				return {
					notes: notes,
					values:[settings, folderNames],
					userLocalData:userLocalData
				};

				break;

		}
	}
}
class RestoreData {
	static init(){

		if(Utility.isExtension()){
			chrome.storage.local.get("white",(data)=>{
				if(data && data.white){
					document.getElementById("textarea").value = data.white;
				}
			});

			let cameFromMessage = false;
			let cameFromFixedButton = false;
			const urlParams = new URLSearchParams(window.location.search);
			if(urlParams){
				const from = urlParams.get("from");

				if(from && from == "fixedbutton"){
					cameFromFixedButton = true;
				}

				if(from && from == "installerror"){

					let str = "";
					cameFromMessage = true;
					chrome.storage.local.get("white",(data)=>{
						if(data && data.white){
							str = data.white;
							const fileName = "olddata.txt";
							const text = str;
							const hiddenElement = document.createElement('a');
							hiddenElement.href = 'data:attachment/text,' + encodeURI(text);
							hiddenElement.target = '_blank';
							hiddenElement.download = fileName;
							hiddenElement.click();
							document.getElementById("install-error-container").style.display = "block";
						}
					});
				}
			}

			if(cameFromMessage){
				SEND_TO_AMPLITUDE(COMMONCONSTANTS.RESTORE_DATA_PAGE_OPEN_FROM_INSTALL_ERROR_PAGE);
			} else if(cameFromFixedButton){
				SEND_TO_AMPLITUDE(COMMONCONSTANTS.RESTORE_DATA_PAGE_OPEN_FROM_FIXED_BUTTON);
			} else{
				SEND_TO_AMPLITUDE(COMMONCONSTANTS.RESTORE_DATA_PAGE_OPEN);
			}

			TRACK({
				category: COMMONCONSTANTS.RESTORE_DATA_PAGE,
				action:COMMONCONSTANTS.RESTORE_DATA_PAGE_OPEN,
			});
		}

	}

	static getText(ops){
		let str = "";
		ops.forEach((op)=>{
			if(op.insert && typeof op.insert =="string" && op.insert.length > 0){

				const lines = op.insert.split("\n");
				if(lines.length > 0){
					lines.forEach((line, index)=>{
						str += line;
						if(index != (lines.length - 1)){
							str += "\r\n";
						}
					});
				}else {
					str += op.insert;
				}

				if(op.attributes && op.attributes.link){
					str +=" [" + op.attributes.link + "] ";
				}
			}

		});
		return str;
	}

	static onClickNoteTab(e){
		const noteKeys = ["n-1-1","n-1-2","n-1-3","n-2-1","n-2-2","n-2-3","n-3-1","n-3-2","n-3-3"];
		const noteTabs = document.getElementsByClassName('note-tab');
		for(let i = 0; i < noteTabs.length; ++i){
			noteTabs[i].style.backgroundColor = "#415E9B";
		}

		const id = e.target.getAttribute("id");
		e.target.style.backgroundColor = "#243761";
		if(noteKeys.indexOf(id)>-1){
			chrome.storage.local.get(id,(data)=>{
				const text = this.getText(data[id].delta.ops);
				document.getElementById("right-side-textarea").value = text;
			});
		}
	}

	static showLocalData(){
		document.getElementById("notes-container").style.display = "none";
		const noteKeys = ["n-1-1","n-1-2","n-1-3","n-2-1","n-2-2","n-2-3","n-3-1","n-3-2","n-3-3"];
		if(Utility.isExtension()){
			const that = this;
			chrome.storage.local.get("n-1-1",(data)=>{
				if(data && data["n-1-1"]){
					const text = this.getText(data["n-1-1"].delta.ops);
					document.getElementById("notes-container").style.display = "flex";
					document.getElementById("right-side-textarea").value = text;

					const noteTabs = document.getElementsByClassName('note-tab');
					for(let i = 0; i < noteTabs.length; ++i){
						noteTabs[i].addEventListener('click',that.onClickNoteTab.bind(that));
					}

					if(noteTabs.length > 0){
						noteTabs[0].style.backgroundColor = "#243761";
					}
				}

			});
		}




	}

}

RestoreData.init();
RestoreData.showLocalData();
class DownloadToPdf{
	constructor(){

		this.bindEvents();
		const urlParams = new URLSearchParams(window.location.search);

		if(urlParams && urlParams.has("noteId") && urlParams.has("folderName") > -1){
			let noteId = urlParams.get("noteId");
			this.folderName = urlParams.get("folderName");
			this.noteId = noteId;
			this.download(noteId);
			const notePositionArray = noteId.split("-");
			let notePosition = "";
			if(notePositionArray && notePositionArray.length && notePositionArray[1]){
				notePosition = notePositionArray[1];
			}
			this.noteName = "Ukiv-sticky-notes--folder-"+ this.folderName + "-note-" + notePosition + "-" +(new Date()).toDateString();
			document.getElementsByTagName('title')[0].innerHTML = this.noteName;
		}

		if(urlParams && urlParams.has("action")){
			const action = urlParams.get("action");
			if(action == "print"){
				document.getElementById('download-text-container').remove();
			} else if(action == "download"){
				document.getElementById('print-container').remove();
			}
		}
	}

	bindEvents(){
		MessagePassing.on((request, sender, sendResponse)=>{
			const fetchedResponseId = request.assignedId;

			const shouldAllow = Utility.shouldAllowEvent(window.assignedId, fetchedResponseId, request.key);
			if(!shouldAllow) return;

			if(request.key == COMMONCONSTANTS.FETCH_NOTE_SUCCESS){
				this.onFetchNoteValue(request.value);
			}
		});

		document.getElementById('print-container').addEventListener('click',()=>{
			SEND_TO_AMPLITUDE(COMMONCONSTANTS.PRINT_BUTTON_CLICK, {noteId: this.noteId});
			TRACK({
				category: COMMONCONSTANTS.DOWNLOADPAGE,
				action:COMMONCONSTANTS.PRINT_BUTTON_CLICK,
				label: this.noteId
			});

			window.print();
		});

		document.getElementById('download-text-container').addEventListener('click',()=>{
			SEND_TO_AMPLITUDE(COMMONCONSTANTS.DOWNLOAD_AS_TEXT_CLICK, {noteId: this.noteId});

			TRACK({
				category: COMMONCONSTANTS.DOWNLOADPAGE,
				action:COMMONCONSTANTS.DOWNLOAD_AS_TEXT_CLICK,
				label: this.noteId
			});


			const ops = this.data.delta.ops;
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

			const fileName = this.noteName + ".txt";
			const text = str;
			const hiddenElement = document.createElement('a');
			hiddenElement.href = 'data:attachment/text,' + encodeURI(text);
			hiddenElement.target = '_blank';
			hiddenElement.download = fileName;
			hiddenElement.click();
		})
	}


	download(noteId){
		MessagePassing.send({key: COMMONCONSTANTS.FETCH_NOTE, value:{ id: noteId}});
	}

	onFetchNoteValue(data){
		this.data = data;
		var tempCont = document.createElement("div");
		(new Quill(tempCont)).setContents(data.delta);
		const html = tempCont.getElementsByClassName("ql-editor")[0].innerHTML;
		this.divContents = html;
		document.getElementById("note-content").innerHTML = this.divContents;
	}

}

new DownloadToPdf();
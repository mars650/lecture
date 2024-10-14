//
//const fileInput = document.querySelector("#fileInput");
//const fileSubmit = document.querySelector("#fileSubmit");
//
//const uploadFile = file => {
//  console.log("Uploading file...");
//  //const API_ENDPOINT = "https://file.io";
//  //const API_ENDPOINT = "http://192.168.0.102:5000/upload";
//  const API_ENDPOINT = "http://192.168.0.102:8000/upload";
//  const request = new XMLHttpRequest();
//  const formData = new FormData();
//
//  //request.open("POST", API_ENDPOINT, true);
//  //request.onreadystatechange = () => {
//  //  if (request.readyState === 4 && request.status === 200) {
//  //    console.log(request.responseText);
//  //  }
//  //};
//  formData.append("file", file);
//
//  //console.log(file);
//  //console.log(formData);
//  //request.send(formData);
//  try{
//   fetch(`http://192.168.0.102:8070/upload`, {
//        method: "POST",
//        body: formData,
//        //body: file,
//        //headers: {
//        //    'Content-Type': 'multipart/form-data',
//        //}
//      })
//
//  }catch(error){
//    console.log(error)
//  }
//  };
//
////fileInput.addEventListener("change", event => {
////fileInput.addEventListener("change", event => {
//  //const files = event.target.files;
//  //for (const f of files){
//  //  console.log(f)
//    //uploadFile(files[0]);
//    //uploadFile(f);
////  }
////});
//async function getDir() {
//  const dirHandle = await window.showDirectoryPicker();
//  console.log(dirHandle);
//
//  // run code for dirHandle
//}
//fileSubmit.addEventListener("click", function(){
//  const files = fileInput.files
//  //uploadFile(files[0]);
//  for (const f of files){
//    uploadFile(f);
//    //console.log(f)
//
//  }
//});



//const fileInput = document.querySelector("#fileInput");
//const fileSubmit = document.querySelector("#fileSubmit");
const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", () =>{
//fileSubmit.addEventListener("click", () =>{
  fileInput.click();
});

fileInput.onchange = ({target})=>{
  let file = target.files[0];
  //console.log(">>>>>>>>>>");
  //console.log(file);
  //const userImg = file.files[0];
  if(file){
    let fileName = file.name;
    if(fileName.length >= 12){
      let splitName = fileName.split('.');
      fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
    }
    uploadFile(fileName ,file);
  }
}

function uploadFile(name, userImg){
  const payload = new FormData();
  payload.append('file', userImg);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://192.168.0.102:8070/upload");
  //xhr.upload.addEventListener("progress", ({loaded, total}) =>{
  xhr.upload.addEventListener("progress", ({loaded, total}) =>{
    let fileLoaded = Math.floor((loaded / total) * 100);
    let fileTotal = Math.floor(total / 1000);
    let fileSize;
    (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
    let progressHTML = `<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
    uploadedArea.classList.add("onprogress");
    progressArea.innerHTML = progressHTML;
    if(loaded == total){
      progressArea.innerHTML = "";
      let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div>
                            <i class="fas fa-check"></i>
                          </li>`;
      uploadedArea.classList.remove("onprogress");
      uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
    }
  });

  //const formData = new FormData();
  //let data = new FormData('file' ,form);
  //let data = new FormData(form);
  //const data = new FormData();
  //data.append("file", form);
  //xhr.send(data);
  xhr.send(payload);
}

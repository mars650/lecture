
// export function flexBox(sl) {
export function flexBox() {

  var current = document.getElementsByClassName("active");
  // this.getAttribute('class').split(" ")[1]
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");

    var buttonsH = document.getElementById("buttons");
    var btns = buttonsH.getElementsByClassName("button_");

  
  var chackRemove = document.getElementsByClassName("remove");
  if(chackRemove.length > 0){
      chackRemove[0].addEventListener("click",flexBox);
      chackRemove[0].className = chackRemove[0].className.replace(" remove", "");
    }
  this.removeEventListener('click',flexBox);
  }
  this.className += " active remove";

    let sl = document.getElementById("box");
    let varG = [];
    // fetch("./card.json")
    fetch("./text.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }

            return res.json();
        })
        .then((data) =>{ 
          var CountId = this.id.split("_")[1]
          var startCount = 0;
          const constNum = 16;
          var dataLenght = data.items.length;
          var dataLeft = 0;
          let lenghtSize = dataLenght / constNum;
          var lenghtSizeInt = Math.floor(lenghtSize);
          let buttonsCount = document.getElementById('buttons'); 
          let buttonEnd = buttonsCount.getElementsByTagName('button');
            // let buttonCounts = document.getElementsByTagName('button'); 
            // console.log(buttonCounts.length);
          if(lenghtSizeInt * constNum < dataLenght){
            dataLeft = lenghtSizeInt * constNum - dataLenght

          }
          
            // let item = document.createElement("");
            // let buttonCounts = document.getElementsByClassName('cardImage'); 
          document.getElementById('boxChiled').remove();
          let boxChiled = document.createElement("div");
          boxChiled.id = "boxChiled";
          boxChiled.className = "boxChiled";
          sl.appendChild(boxChiled);


          if(CountId != buttonEnd){
            CountId = CountId * constNum; 
            startCount = CountId - 1 * constNum ;
          }else{
            CountId = (CountId - 1) * constNum;
            startCount = dataLenght;

          }
          var imageModal = document.getElementById("img01");
          
            for(let i=startCount ; i < CountId ; i++){
                let item = document.createElement("div");
                let info = document.createElement("div");

              
                info.setAttribute("class","overlay");
              info.addEventListener('mouseover',(event) =>{
                  info.style.opacity = '1';
              }, true)
              info.addEventListener('mouseout',(event) =>{
                info.style.opacity = '0';
              },true)
              item.addEventListener('mousedown',(event) => {
                info.style.zIndex = '-1';
              })
              item.addEventListener('mouseout',(event) => {
                info.style.zIndex = '1';
                info.style.opacity = '0';
              })
                let title = document.createElement("h1");
                var titleText = document.createTextNode(data.items[i]['name']);
                title.appendChild(titleText);
                let pragraph = document.createElement("p");
                var pragraphText = document.createTextNode("This just some pragraph");
                pragraph.appendChild(pragraphText);



                item.id = "card";
                item.ClassName = "card";
                item.setAttribute("class","card");
                let t = i+1
                item.setAttribute("style","--position: "+t);



                let imageX = new Image();
                imageX.id = "cardImage";
                imageX.className = "cardImage";
                imageX.src = data.items[i]['url']
                // let we = window.innerWidth / 4 + 'px';
imageX.onclick = function(){
    myModal.style.display = "block";
    imageModal.src = this.src;
}
                // imageX.style.width= we;


                boxChiled.appendChild(item);

              item.appendChild(imageX);
              info.appendChild(title);
              info.appendChild(pragraph);
              item.appendChild(info);


            };
        })
            
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}

export function flexButton() {
    let sl = document.getElementById("box");
    let varG = [];
    // fetch("./card.json")
    fetch("./text.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>{ 
          const constNum = 16;
          var dataLenght = data.items.length;
          var dataLeft = 0;
          let lenghtSize = dataLenght / constNum;
          var lenghtSizeInt = Math.floor(lenghtSize);
          if(lenghtSizeInt * constNum < dataLenght){
            lenghtSizeInt = lenghtSizeInt + 1;
          }
          // }else if(lenghtSizeInt * constNum >= dataLenght){
          // }


          let buttons = document.getElementById('buttons');
          for(let i = 0; i < lenghtSizeInt; i++){
            let button1 = document.createElement('button');
            let buttonNumber = document.createTextNode(i + 1);
            var buttonCount = i + 1;
            button1.id = 'button_' + buttonCount;
            // button1.className = 'button_' + buttonCount;
            button1.className = 'button_';
            // button1.style.marginLeft = 'auto';
            // button1.style.marginRight = 'auto';
            // button1.style.display = 'flex';
            // button1.style.justifyContent = 'center';
            // // button1.style.backgroundColor = '#04AA6D';
            // button1.style.backgroundColor = 'black';
            // button1.style.border = '0.5px solid white';
            // button1.style.color = 'white';
            // button1.style.padding = '15px 32px';
            // button1.style.textAlign = 'center';
            // button1.style.textDecoration = 'none';
            // button1.style.fontSize = '16px';
            // button1.style.cursor = 'pointer';
            // var CssSh = '.button_1:hover{background-color: white;border: 0.5 solid red;color: red;}';
            // button1.styleSheet.cssText = CssSh;
            // button1.addEventListener("click",fl);
            button1.addEventListener("click",flexBox);
            button1.appendChild(buttonNumber);
            buttons.appendChild(button1);


          }
          var activeFirest = document.getElementById('button_1');

          // activeFirest.setAttribute("class"," active");
          activeFirest.className += ' active';


    function fl(){
      var CountId = this.id.split("_")[1]
      console.log(Math.floor(CountId) * 2);
    }
          
          // document.getElementById('button_1').removeEventListener('click',flexBox);
          //   console.log(lenghtSizeInt)
            // for(let i=0 ; i < data.items.length ; i++){
            let boxChiled = document.createElement("div");
          boxChiled.id = "boxChiled";
          boxChiled.className = "boxChiled";
            sl.appendChild(boxChiled);

let myModale = document.createElement('div');
myModale.id = "myModal";
myModale.className = "modal";
let imageModal = document.createElement('img');
imageModal.id = "img01";
imageModal.className = "modal-content";
let caption = document.createElement('caption');
caption.id = "caption";
let span = document.createElement('span');
          let spanText = document.createTextNode("&items;")
          span.appendChild(spanText);
          span.className = "close";
          span.onclick = function(){
            myModal.style.display = "none";
          }


myModale.appendChild(span);
myModale.appendChild(imageModal);
myModale.appendChild(caption);
document.body.appendChild(myModale);
            for(let i=0 ; i < 16 ; i++){
                let item = document.createElement("div");
                let info = document.createElement("div");
                info.setAttribute("class","overlay");
              info.addEventListener('mouseover',(event) =>{
                  info.style.opacity = '1';
              }, true)
              info.addEventListener('mouseout',(event) =>{
                info.style.opacity = '0';
              },true)
              item.addEventListener('mousedown',(event) => {
                info.style.zIndex = '-1';
              })
              item.addEventListener('mouseout',(event) => {
                info.style.zIndex = '1';
                info.style.opacity = '0';
              })
                let title = document.createElement("h1");
              title.className = "text";
                var titleText = document.createTextNode(data.items[i]['name']);
                title.appendChild(titleText);
                let pragraph = document.createElement("p");
                var pragraphText = document.createTextNode("This just some pragraph");
                pragraph.appendChild(pragraphText);

                item.id = "card";
                item.ClassName = "card";
                item.setAttribute("class","card");
                let t = i+1
                item.setAttribute("style","--position: "+t);



                let imageX = new Image();
                imageX.id = "cardImage";
                imageX.className = "cardImage";
                imageX.src = data.items[i]['url']
                // let we = window.innerWidth / 4 + 'px';
                // imageX.style.width= we;


                boxChiled.appendChild(item);

                item.appendChild(imageX);
              info.appendChild(title);
              info.appendChild(pragraph);
              item.appendChild(info);
              // imageX.appendChild(info);



imageX.onclick = function(){
    myModal.style.display = "block";
    imageModal.src = this.src;
}
            };
          // return lenghtSizeInt;
        })

            
        .catch((error) => 
               console.error("Unable to fetch data:", error));

}

export function fetchJSONData() {
  let sl = document.getElementById("slider");
    let varG = [];
    fetch("./file.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>{ 
            // let ul = document.createElement("ul");
            // document.body.appendChild(ul);
              //console.log(data.items.length)
            for(let i=0 ; i < data.items.length ; i++){
              //console.log(data.items[i]['url'])
                // let text = document.createTextNode(data.items[i]['url']);
                // let li = document.createElement("li");
                // li.appendChild(text);
                
                let item = document.createElement("div");
                item.id = "item";
                item.ClassName = "itme";
                // myAtter = document.createAttribute("style=\"--position: \""+i );
                // myAtter = document.createAttribute("style","--position: "+i);
                // item.className = "item";
                item.setAttribute("class","item");
                let t = i+1
                item.setAttribute("style","--position: "+t);



                let imageX = new Image();
                // imageX.src = "./wallpaperflare"+i+".jpg";
                imageX.src = data.items[i]['url']




                sl.appendChild(item);
                item.appendChild(imageX);

                // varG.push(data.items[i])

                // li.className = "li";
                // ul.appendChild(li);

            };
        })
            
        .catch((error) => 
               console.error("Unable to fetch data:", error));
    // return varG;
}

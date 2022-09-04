// delete and add note
let note = document.getElementById("note");
let but = document.getElementById("but");
let content = document.getElementById("content");
let backer = document.getElementById("backer");
let picture = document.getElementById("img");
var butCount = false;

function createReminder(id) {
  if (note.value == "" || picture.value =="") {
    alert("Some fields are empty!");
  }
  else {
    let text = note.value;
    note.value = "";
    let pic = picture.value;
    picture.value = "";
    let div = document.createElement('div');
    div.className = "cont";
    div.id = id;

    let imgDiv = document.createElement('div');
    imgDiv.className = "imgDiv";
    let image = document.createElement('img');
    image.src = pic;
    imgDiv.appendChild(image);
    div.appendChild(imgDiv);
     

    let para = document.createElement('p');
    para.innerText = text;
    para.style.marginBottom = "1rem";
    para.style.marginRight = "1rem";
    para.style.marginLeft = "1rem";
    div.appendChild(para);
    

    let button = document.createElement("button");
    button.innerText = "Delete";
    button.style.backgroundColor = "red";
    button.className = "btn2";
    div.appendChild(button);

    button.addEventListener('click', function () {
      if (div.id == id) {
        content.removeChild(div);
        localStorage.removeItem(id);
      }
    });

    let button2 = document.createElement("button");
    button2.innerText = "Modify";
    button2.className = "btn2";
    div.appendChild(button2);

    button2.addEventListener('click', function () {
      if (div.id == id) {
        let modify = prompt("Enter your memory: ");
        para.innerText = modify;
        localStorage.removeItem(id);
        localStorage.setItem(id,div.innerHTML);
      }
    });

    return div;
  }
}


but.addEventListener("click", function () {

  // new item
  let id = Math.floor(Math.random() * 100);
  // for random id
  let reminder = createReminder(id);
  content.appendChild(reminder);
  console.log(reminder.innerHTML);
  localStorage.setItem(id, reminder.innerHTML);
});


/* search a note */
let searchy = document.getElementById("search");
let serbut = document.getElementById("serbut");
var searcher = 0;

serbut.addEventListener('click', function () {
  if(searchy.value=="")
  alert("Search can't be empty!");
  else
  {
  let divs = document.querySelectorAll(".cont");
  Array.from(divs).forEach(function (element) {
    let str = element.firstElementChild.nextElementSibling.innerText;
    // console.log(str);
    if (str.search(searchy.value) == -1)
      element.style.display = "none";
    else
      ++searcher;
  });
  if (searcher == 0) {
    var para = document.createElement('p');
    para.innerHTML = "No element found!";
    para.className = "bold";
    para.style.marginRight = "1rem";
    if (backer.firstElementChild == undefined)
      backer.appendChild(para);
  }
  else
    searcher = 0;

  var back = document.createElement('button');
  back.innerText = "Back";
  back.className = "btn";
  back.style.alignSelf = "center";
  if (butCount == false) {
    backer.appendChild(back);
    butCount = true;
  }

  back.addEventListener('click', function () {
    Array.from(divs).forEach(function (element) {
      element.style.display = "block";
    });
    backer.removeChild(back);
    butCount = false;
    if (para != undefined)
      backer.removeChild(para);
  });
}
});


// localStorage if closing web browser or tab change or reload
if(content.firstElementChild == null) {
  for(let i=0; i<localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let div = document.createElement('div');
    div.className = 'cont';
    div.id = key;
    div.style.width = "200px";
    div.innerHTML = value;
    content.appendChild(div);
    let button1 = div.firstElementChild.nextElementSibling.nextElementSibling;
    // delete button
    button1.addEventListener('click', function () {
      if (div.id == key) {
        content.removeChild(div);
        localStorage.removeItem(key);
      }
    });

      let button2 = div.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
    // modify button
    button2.addEventListener('click', function () {
      if (div.id == key) {
        let modifier = prompt("Enter your memory: ");
        div.firstElementChild.nextElementSibling.innerText = modifier;
        localStorage.removeItem(key);
        localStorage.setItem(key,div.innerHTML);
      }
    });
  }
}

// footer

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

if(height > 1000){
  document.getElementById("foot").style.backgroundColor = "forestgreen";
  document.getElementById("foot").style.color = "white";
}
  














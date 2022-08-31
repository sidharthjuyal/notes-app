// delete and add note
let note = document.getElementById("note");
let but = document.getElementById("but");
let content = document.getElementById("content");
var counter = 0;

function createReminder(id){
    if(note.value=="")
    {
       alert("Note cannot be empty");
    }
else
   {
    let text = note.value;
    note.value="";
    let div = document.createElement('div');
    div.style.width = "200px";
    div.className = "cont";
    div.id = id;

    let header = document.createElement('p');
    header.className = 'bold';
    header.innerText = 'Note ' + (++counter);
    div.appendChild(header);
    
    let para = document.createElement('p');
    para.innerText = text;
    para.style.marginBottom = "1rem";
    div.appendChild(para);

    let button = document.createElement("button");
    button.innerText = "Delete";
    button.className = "btn";
    div.appendChild(button);
    
    button.addEventListener('click',function(){
        if(div.id == id)
          {
            content.removeChild(div);
            --counter;
          }
    });

    return div;
   }
}

but.addEventListener("click",function(){
let id = Math.floor(Math.random() * 100); 
// for random id
let reminder = createReminder(id);
content.appendChild(reminder);
});


// search a note
let searchy = document.getElementById("search");
let serbut = document.getElementById("serbut");
var searcher=0;

serbut.addEventListener('click', function(){
    let divs = document.querySelectorAll(".cont");
    Array.from(divs).forEach(function(element){
        let str = element.firstElementChild.nextElementSibling.innerText;
        console.log(str);
         if(str.search(searchy.value)==-1)
            element.style.display = "none"; 
            else
            ++searcher;          
    });
    if(searcher==0)
      {
        var para = document.createElement('p');
        para.innerHTML = "No element found!";
        para.className = "bold";
        content.appendChild(para);
      }

    var back = document.createElement('button');
    back.innerText = "Back";
    back.className = "btn";
    back.style.alignSelf = "center";
    content.appendChild(back);

    back.addEventListener('click',function(){
        Array.from(divs).forEach(function(element){
                element.style.display = "block";           
        });
        content.removeChild(back);

        if(para!=undefined)
        content.removeChild(para);
    });
});











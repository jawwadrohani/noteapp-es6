// es6 code
let list = document.getElementById("list");
let addTodo = () => {
    let todo_item = document.getElementById("todo-item");
    let todo_note = document.getElementById("todo-note");

    if(todo_item.value !== "" && todo_note.value !== ""){
    let li = document.createElement('li');
    // let liText = document.createTextNode(todo_item.value);    
    // text append hogay li k sath    
    // li.appendChild(liText);

    // let liTextNote = document.createTextNode(todo_note.value);
    // li.appendChild(liTextNote);
    
    let liHeading = document.createElement('h1');
    liHeading.innerHTML = todo_item.value;
    li.appendChild(liHeading);

    let liNode = document.createElement('p');
    liNode.innerHTML = todo_note.value;
    li.appendChild(liNode);

    let delBtn = document.createElement("button");
    let delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    // set attribute on delete btn
    // delBtn.setAttribute("class","btn-container");
    delBtn.setAttribute("onclick","deleteItem(this)");
    
    let editBtn = document.createElement("button");
    let editText = document.createTextNode("Edit");    
    editBtn.appendChild(editText);
    // set attribute on delete btn    
    // editBtn.setAttribute("class","btn-container");
    editBtn.setAttribute("onclick","editItem(this)");    

    //ul ky sath li ko append karwany k lye
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);        
    // console.log(li);
    } else {
        alert("Please enter values !!");
    }
    todo_item.value = "";
    todo_note.value = "";
    
}

let deleteItem = (e) => {
    // console.log(e);
    // console.log(e.parentNode);
    e.parentNode.remove();
}

let  deleteAll = ()=>{    
    list.innerHTML = "";
}

let editItem = (e) => {

    

    let val1 = e.parentNode.childNodes[0].innerHTML;
    let editValue1 = prompt("Enter edit value: ", val1);
    if (editValue1 !== "") {
        e.parentNode.childNodes[0].innerHTML = editValue1;
    } else {
        alert("empty value not allowed!");
    }

    let val2 = e.parentNode.childNodes[1].innerHTML;
    let editValue2 = prompt("Enter edit value: ", val2);
    if (editValue2 !== "") {
        e.parentNode.childNodes[1].innerHTML = editValue2;
    } else {
        alert("empty value not allowed!");
    }
    // console.log(val1);
    // console.log(val2);
    // console.log(e.parentNode.childNodes.length);
}

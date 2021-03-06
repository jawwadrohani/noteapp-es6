// es6 code
let list = document.getElementById("list");
let addTodo = () => {
    let todo_item = document.getElementById("todo-item");
    let todo_note = document.getElementById("todo-note");

    if(todo_item.value !== "" && todo_note.value !== ""){
    let li = document.createElement('li');

    let liHeading = document.createElement('h1');
    liHeading.innerHTML = todo_item.value;
    li.appendChild(liHeading);

    let liNode = document.createElement('p');
    liNode.innerHTML = todo_note.value;
    li.appendChild(liNode);

    let delBtn = document.createElement("button");
    let delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    delBtn.setAttribute("onclick","deleteItem(this)");
    
    let editBtn = document.createElement("button");
    let editText = document.createTextNode("Edit");    
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editItem(this)");    

    //ul ky sath li ko append karwany k lye
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);        

    todo_item.value = "";
    todo_note.value = "";
    } else {
        alert("Please enter values !!");        
    } 
}

let deleteItem = e => {
    e.parentNode.remove();
}

let  deleteAll = ()=>{    
    list.innerHTML = "";
}

let editItem = e => {
    let editValue1,val1;
    do {
        val1 = e.parentNode.childNodes[0].innerHTML;
        editValue1 = prompt("Enter edit title value: ", val1);
        if(editValue1 === ""){alert("Empty TITLE not allowed!");}
        
    } while (editValue1 === "");
    
    if(editValue1 !== null){e.parentNode.childNodes[0].innerHTML = editValue1;}        

    let editValue2,val2;
    do {
        val2 = e.parentNode.childNodes[1].innerHTML;
        editValue2 = prompt("Enter edit title value: ", val2);
        if (editValue2 === "") { alert("Empty NOTE not allowed!"); }
    } while (editValue2 === "");      
    if(editValue2 !== null){e.parentNode.childNodes[1].innerHTML = editValue2;}
}

// Add new element to Todo List:
function hideContent() {
    var para = document.getElementById('id3');
    para.style.display = "none";
}
function addNewElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert('You must write something..')
    } else {
        document.getElementById('myUL').appendChild(li);
        document.getElementById('myInput').value = "";
    }
    var span = document.createElement('SPAN');
    span.appendChild(text);
    li.appendChild(span);
}
function login(showhide){
    if(showhide == "show"){
        document.getElementById('popupbox').style.visibility="visible";
    }else if(showhide == "hide"){
        document.getElementById('popupbox').style.visibility="hidden"; 
    }
    }
function openForm() {
    document.getElementById("myForm").style.display = "block";
    }
function closeForm() {
        document.getElementById("myForm").style.display = "none";
        }
        
function loginForm() {
    document.getElementsById("id5").style.visibility = "visible";
    document.getElementById("myForm").style.display = "none";
    }
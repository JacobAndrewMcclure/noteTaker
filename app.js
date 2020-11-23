let userNote;
let btn;
//get the modal
let modal = document.getElementById("myModal");
//get the span element that closed the modal
let span = document.getElementsByClassName("close")[0];

let headNode;
let paraNode;
let buttNode;
let headTextNode;
let userNoteNode;
let buttTextNode;
let paraTextNode;

let noteCounter = 1;
let noteHistory = [];

function addNote() {
    //assigns new note to variable
    userNote = document.getElementById("newNote").value;
    //clears note field
    document.getElementById("newNote").value = "";
    //assigns user note to note history
    noteHistory[noteCounter] = userNote;
    //create elements
    headNode = document.createElement("H6");
    paraNode = document.createElement("P");
    buttNode = document.createElement("BUTTON");
    userNoteNode = document.createElement("DIV");
    //assign user note to p element
    paraTextNode = document.createTextNode(userNote);
    //assign text to button & paragraph
    headTextNode = document.createTextNode("Note " + noteCounter);
    buttTextNode = document.createTextNode("Preview");
    //when user clicks the button open modal
    buttNode.onclick = function() {
        modal.style.display = "block";
        //document.getElementById("modalText").innerHTML = noteHistory[?];
    }
    //append text nodes to elements
    headNode.appendChild(headTextNode);
    paraNode.appendChild(paraTextNode);
    buttNode.appendChild(buttTextNode);
    //append elements to DIV
    userNoteNode.appendChild(headNode);
    userNoteNode.appendChild(paraNode);
    userNoteNode.appendChild(buttNode);
    //add class to new div
    userNoteNode.classList.add("newUserNote");
    //append user note node to div container
    document.getElementById("noteListContainer").appendChild(userNoteNode);
    //add 1 to note counter
    noteCounter++;

    console.log(noteHistory)
}

//when user clicks x on modal
span.onclick = function() {
    modal.style.display = "none";

}
//user clicks outside of modal to close
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
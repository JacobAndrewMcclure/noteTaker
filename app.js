let userNote;
let btn;
//get the modal
let modal = document.getElementById("myModal");
//get the span element that closed the modal
let span = document.getElementsByClassName("close")[0];

let headNode;
let paraNode;
let buttNode;
let shortNode;
let headTextNode;
let userNoteNode;
let buttTextNode;
let paraTextNode;
let shortTextNode;

let noteCounter = 1;
let shortText;

//focuses on note field upon window load
window.onload = function() {
    document.getElementById("newNote").focus();
}
newNote.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("modalBtn").click();
    }
})

function addNote() {
    //assigns new note to variable
    userNote = document.getElementById("newNote").value;
    //clears note field
    document.getElementById("newNote").value = "";
    if (userNote == "" || userNote == " " || userNote == "  " || userNote == "   ") {
        alert("Enter Valid note!")
    } else {
        //create elements
        headNode = document.createElement("H6");
        paraNode = document.createElement("P");
        shortNode = document.createElement("P");
        buttNode = document.createElement("BUTTON");
        userNoteNode = document.createElement("DIV");
        //short hand display text
        if (userNote.length > 100) {
            shortText = userNote.substring(0, 99) + "....";
        } else {
            shortText = userNote;
        }
        //assign user note to p elements
        paraTextNode = document.createTextNode(userNote);
        shortTextNode = document.createTextNode(shortText);
        //assign text to button & paragraph
        headTextNode = document.createTextNode("Note " + noteCounter);
        buttTextNode = document.createTextNode("Preview");
        //when user clicks the button open modal
        buttNode.onclick = function(event) {
            //display modal
            modal.style.display = "block";
            //assign event to x
            let x = event.target;
            //assign parent of event to y
            let y = x.parentElement;
            //assigns children of parent node
            let z = y.childNodes;
            //assigns text of nodelist index to variable
            let displayNote = z[1].innerHTML;
            //displays text in modal
            document.getElementById("modalText").innerHTML = displayNote;
        }
        //append text nodes to elements
        headNode.appendChild(headTextNode);
        paraNode.appendChild(paraTextNode);
        shortNode.appendChild(shortTextNode);
        buttNode.appendChild(buttTextNode);
        //add class to button
        buttNode.classList.add("previewButt")
        //hide user input
        paraNode.style.display = "none";
        //append elements to DIV
        userNoteNode.appendChild(headNode);
        userNoteNode.appendChild(paraNode);
        userNoteNode.appendChild(shortNode);
        userNoteNode.appendChild(buttNode);
        //add class to new div
        userNoteNode.classList.add("newUserNote");
        //append user note node to div container
        document.getElementById("noteListContainer").appendChild(userNoteNode);
        //add 1 to note counter
        noteCounter++;
    }
    document.getElementById("newNote").focus;
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
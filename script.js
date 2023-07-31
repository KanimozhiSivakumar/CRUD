let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let notes = document.getElementById("notes");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked!!!");
    formvalidation();
});


let formvalidation = () => {
    if(input.value === "") {
        console.log("failure");
        msg.innerHTML = "Notes cannot be blank!!!";

    
    
    }
    else {
        console.log("sucess");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createnote();

}

let createnote = () => {
    notes.innerHTML += `<div>
    <p> ${data.text} </p>
    <span class="options">
    <i onClick = "deleteNote(this)" class="fa-solid fa-trash-can"></i>
    <i onClick = "editNote(this)" class="fa-solid fa-pen-to-square"></i>
    </span>
</div>`;
input.value="";
};

let deleteNote = (e) => {
    e.parentElement.parentElement.remove();
}

let editNote = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}
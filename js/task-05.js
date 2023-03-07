const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


 output.textContent = "Amonimus"

nameInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    if (output.textContent) { }
    else {output.textContent = "Amonimus"}
}); 


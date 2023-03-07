const nameInput = document.querySelector("#validation-input");
let output = ""


nameInput.addEventListener("blur", (event) => {
    output = event.currentTarget.value; 
    let inputLength = output.length;
    console.log(inputLength);

    if (inputLength - 6) {
     nameInput.setAttribute('borderColor', "#f44336" )
  }else{nameInput.setAttribute('borderColor', "#4caf50")}
});


let buttonsDivs = document.querySelectorAll(".buttons");


console.log(buttonsDivs)
buttonsDivs.forEach((buttonDiv) => {
buttonDiv.addEventListener("click",()=>{
let question = buttonDiv.parentElement.parentElement;
question.children[1].classList.toggle("show-text");
buttonDiv.children[0].classList.toggle("show-text")
buttonDiv.children[0].classList.toggle("minus")
buttonDiv.children[1].classList.toggle("hide-btn")
})
    })
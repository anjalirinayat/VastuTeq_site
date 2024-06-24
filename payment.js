
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
const form = document.querySelector("form");
// const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const errorMessage = document.getElementById("errorMessage");
    const card = document.getElementById("card");
    const cvv = document.getElementById("cvv");
    
    const errors = [];

    if(name.value.trim() === ""){
        errors.push("name required")
    }

    if(email.value.trim() === ""){
        errors.push("email required")
    }

    if(phone.value.trim() === ""){
        errors.push("phone no required")
    }

    if(card.value.trim() === ""){
        errors.push("card no required")
    }
    
    if(cvv.value.trim() === ""){
        errors.push("cvv required")
    } 

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    }
})



function validEmail(){
   
   form.addEventListener("submit", (e) => {

    let userEmail = document.getElementById("email").value;
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let isValid = regex.test(userEmail);
    const errors = [];

    if(!isValid){
        errors.push("invalid email");
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    }

   })

}
const submitBtn= document.querySelector(".btn");
let nameErr= document.querySelector(".nameErr");
let emailErr= document.querySelector(".emailErr");
let passErr= document.querySelector(".passErr");
let conpassErr= document.querySelector(".conpassErr");

submitBtn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    if(validateName() && validateEmail() && validatePassword() && confirmPassword()){
        
       alert("Form Submitted Successfully");
        
    }
})

function validateName(){
    let name= document.querySelector("#name").value;
    if(name.length==0){
        nameErr.innerText="Name is required";
        nameErr.previousElementSibling.classList.add("fa-xmark");
        nameErr.previousElementSibling.style.color="red";
        return false;
    }
    if(!name.match(/^[A-Z][a-z]+( [A-Z][a-z]+)+$/)){
        nameErr.innerText="Write full Name";
        nameErr.previousElementSibling.classList.add("fa-xmark");
        nameErr.previousElementSibling.style.color="red";
        return false;
    }
    nameErr.innerText="";
    nameErr.previousElementSibling.classList.add("fa-check");
    nameErr.previousElementSibling.style.color="rgb(0,128,0)";
    return true;

}
function validateEmail(){
    let email= document.querySelector("#email").value;
    if(email.length==0){
        emailErr.innerText="Email is required";
        emailErr.previousElementSibling.classList.add("fa-xmark");
        emailErr.previousElementSibling.style.color="red";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
)){
        emailErr.innerText="Write Valid Email";
        emailErr.previousElementSibling.classList.add("fa-xmark");
        emailErr.previousElementSibling.style.color="rgba(245, 9, 9, 1)";
        return false;
    }
    emailErr.innerText="";
    emailErr.previousElementSibling.classList.add("fa-check");
    emailErr.previousElementSibling.style.color="rgb(0,128,0)";

    return true;

}

function validatePassword(){
    let password= document.querySelector("#password").value;
     const validationIcon = document.querySelector(".validation-icon");

    validationIcon.classList.remove("fa-check", "fa-xmark");
    if(password.length==0){
        passErr.innerText="Password is required";
         validationIcon.classList.add("fa-xmark");
        validationIcon.style.color = "red";
        return false;
    }
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&^#_~\-]{8,30}$/
)){
        passErr.innerText="Password should contain atleast 1 Uppercase, 1 Lowercase, 1 digit & 1 Special character";
        validationIcon.classList.add("fa-xmark");
        validationIcon.style.color = "red";
        return false;
    }
    passErr.innerText="";
    validationIcon.classList.add("fa-check");
    validationIcon.style.color = "green";
    return true;

}

function confirmPassword(){
    let password = document.querySelector("#password").value;
    let confirmPassword=document.querySelector("#confirm").value;
    if(confirmPassword===password){
    conpassErr.innerText="";
    conpassErr.previousElementSibling.classList.add("fa-check");
    conpassErr.previousElementSibling.style.color="rgb(0,128,0)";
    return true;

    }
    else{
        conpassErr.innerText="Password & Confirm Password should match";
        conpassErr.previousElementSibling.classList.add("fa-xmark");
        conpassErr.previousElementSibling.style.color="rgba(245, 9, 9, 1)";
        return false;
    }
}

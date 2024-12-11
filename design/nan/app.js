const btn=document.querySelector(".btn");
const input=document.querySelector("form div input");
const stay=document.querySelector("#stay");
const succ=document.querySelector("#succ");
const successbtn=document.querySelector(".success-btn");
const mail=document.querySelector(".mail")


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
btn.addEventListener("click",()=>{
   if(validateEmail(input.value)){
        mail.innerHTML=input.value;
       stay.classList.add("active");
       succ.classList.add("done");
   }
})
successbtn.addEventListener("click",()=>{
    mail.innerHTML=input.value;
    stay.classList.remove("active");
    succ.classList.remove("done");
})
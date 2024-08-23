const btn=document.querySelectorAll(".button")
const input=document.querySelector(".input")
let inputvalue=""

btn.forEach((btt)=>{
btt.addEventListener("click",(e)=>{
   
    
    if(e.target.innerHTML=="="){
        inputvalue=eval(inputvalue)
        input.value=inputvalue

        
    }
    else if(e.target.innerHTML=="AC"){
        inputvalue=""
        input.value=inputvalue
    }
    else{

    
    const data=e.target.innerHTML
    inputvalue=inputvalue+data
    input.value=inputvalue
   
    }
    
   

    
})

    
})
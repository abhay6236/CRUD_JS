const registerform = document.querySelector("#register-form")
const fullname = document.querySelector("#fullname")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

registerform.addEventListener('submit', async (e)=>{
    e.preventDefault()
    console.log("Submited")

    const newUser = {
        fullname :fullname.value,
        email : email.value.toLowerCase(),
        password :password.value
    }

    
    
    //! SEND NEWUSER TO DATABASE 

    await fetch("https://crud-js-uhwh.onrender.com/users",{
        method:"POST",
        body : JSON.stringify(newUser),
        headers : {
            "content-type" : "application/json"
        }
    })

    //! NAVIGATE TO ALL USER PAGE
    window.location.href = "AllUsers.html"


})


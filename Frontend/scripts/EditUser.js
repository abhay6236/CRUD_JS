const editform = document.querySelector("#edit-form")
const fullname = document.querySelector("#fullname")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

// Extract id from url(API)
let params = new URLSearchParams(window.location.search)
let id = params.get('id')

async function getEditUser() {
    let resp = await fetch(`https://crud-js-uhwh.onrender.com/users/${id}`)
    let data = await resp.json()
    console.log(data)

    fullname.value = data.fullname
    email.value = data.email
    password.value = data.password
}

getEditUser()

editform.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let updateData = {
        fullname : fullname.value,
        email : email.value.toLowerCase(),
        password: password.value,
    }
     await fetch(`https://crud-js-uhwh.onrender.com/users/${id}`,{
        method:"PUT",
        body: JSON.stringify(updateData),
        headers:{
            "content-type":"application/json",
        }
     })

     window.location.href = "AllUsers.html"
})
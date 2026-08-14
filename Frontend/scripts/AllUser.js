const usersContainer = document.querySelector("#users-container")

async function getAllUsers() {
    try {
        let resp =await fetch("http://localhost:5000/users");
        let data = await resp.json();
        // console.log(data)
        displayUsers(data)
    } catch (error) {
        console.log(error)
    }
    
}

getAllUsers()

function displayUsers(users){

    users.forEach((user) => {

        let { id , fullname , email , password } = user
        const userDiv = document.createElement("div")
        userDiv.className = "user-card"
        userDiv.id=`user-${id}`
        userDiv.innerHTML = `
        <figure class="user-avatar">${fullname[0].toUpperCase()}</figure>
        <h3>${fullname}</h3>
        <p>${email}</p>
        <p>${password}</p>
        <button class="edit-btn" onclick='editUser(${id})'>Edit</button>
        <button class="delete-btn" onclick='deleteUser(${id})' >Delete</button>
        `;

        usersContainer.append(userDiv)
    });

}


async function deleteUser(id) {
    await fetch(`http://localhost:5000/users/${id}`,{
        method:"DELETE",
    })
    
    alert("User Deleted")
}


function editUser(id){
    console.log("Edit")
    window.location.href=`EditUser.html?id=${id}`
}
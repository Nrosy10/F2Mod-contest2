let users = [
    {id:1, Name:"john",profession:"developer", age:"18"},
    {id:2, Name:"jack", profession:"developer",  age:"20"},
    {id:3, Name:"yoo", profession:"admin", age:"34"},
    ];




function filterUsers() {
const profession = document.getElementById("profession").value;
if (profession === "") {
alert("Please select a profession before clicking the button.");
}

else {
const filteredUsers = users.filter(user => user.profession === profession);
displayUsers(filteredUsers);
}
}

function addUser() {
const name = document.getElementById("name").value;
const profession = document.getElementById("prof").value;
const age = document.getElementById("age").value;
const user = { name, profession, age };
users.push(user);
displayUsers(users);
}

function displayUsers(userArray) {
const userListElement = document.getElementById("userList");
userListElement.innerHTML = "";
userArray.forEach(user => {
const card = document.createElement("div");
// card.classList.add("card");
card.innerHTML = `
<p>Name: ${user.name}</p>
<p>Profession: ${user.profession}</p>
<p>Age: ${user.age}</p>
`;
userListElement.appendChild(card);
});
}

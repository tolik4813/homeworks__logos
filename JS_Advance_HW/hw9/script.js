const users = [];
let userIndex = null;
let currentId = 1;
const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const addButton = document.getElementById('addButton');
const editButton = document.getElementById('editButton');
const userTable = document.getElementById('userTable');
addButton.addEventListener('click', addUser);
editButton.addEventListener('click', saveEditUser);
function addUser() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (name === '' || email === '' || password === '') {
        return;
    }
    const user = { id: currentId, name, email, password };
    users.push(user);
    clearForm();
    render();
    currentId++;
}
function deleteUser(index) {
    users.splice(index, 1);
    render();
    currentId--;
}
function editUser(index) {
    const user = users[index];
    nameInput.value = user.name;
    emailInput.value = user.email;
    passwordInput.value = user.password;
    userIndex = index;
    addButton.style.display = 'none';
    editButton.style.display = 'inline-block';
}
function saveEditUser() {
    if (userIndex === null) {
        return;
    }
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (name === '' || email === '' || password === '') {
        return;
    }
    const user = { id: users[userIndex].id, name, email, password };
    users[userIndex] = user;
    clearForm();
    render();
    userIndex = null;
    addButton.style.display = 'inline-block';
    editButton.style.display = 'none';
}
function clearForm() {
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}
function render() {
    userTable.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Actions</th>
    </tr>
    `;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td class="actions">
            <button type="button" onclick="editUser(${i})">Edit</button>
            <button type="button" onclick="deleteUser(${i})">Delete</button>
        </td>
        `;
        userTable.appendChild(row);
    }
}
render();

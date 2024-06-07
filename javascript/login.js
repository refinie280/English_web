function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(!checkInputRequired(email, password)) {
        return;
    }
    let verifyAccount = confirmInput(email, password);
    if (verifyAccount) {
        alert('You have successfully logged in!');
        window.location.href = 'home.html';
    }
}

//check data input duoc nhap vao da du chua
function checkInputRequired(email, password){
    if(email=='' || email == null){
        alert("Please enter your email");
        return false;
    }
    if (password=='' || password == null){
        alert("Please enter your password");
        return false;
    }
    return true;
}

//check thong tin duoc nhap dung chua
function confirmInput(email, password){
    let storedInput = localStorage.getItem('userList');
    let users = JSON.parse(storedInput);
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.email === email && user.pass === password) {
            return true;
        }
    }
    alert("Your account doesn't match");
    return false;
}



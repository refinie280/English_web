
function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date_of_birth = document.getElementById("date_of_birth").value;
    let password = document.getElementById("password").value;
    let passwordConfirmation = document.getElementById("password_confirmation").value;

    let user = {
        name: name,
        email: email,
        date_of_birth: date_of_birth,
        pass: password,
        password_confirmation: passwordConfirmation,
    };

    if(!checkInput(user)){
    }else {
        let userList = localStorage.getItem("userList");

        //Khi local Storage da ton tai du lieu
        if (userList) {
            let arr = JSON.parse(userList);
            let verifyEmail = emailCheckExist(email, arr);
            console.log(verifyEmail);
            ////
            if (!verifyEmail) {
                alert("Email already exists");
                return;
            }
            ///
            if (!checkPassword(password, passwordConfirmation)) {
                arr.push(user);
                localStorage.setItem("userList", JSON.stringify(arr));
                alert("Successfully registered");
            } else {
                alert("Passwords don't match");
            }

        } else { //=> khi chua co du lieu trong local storage
            let array = [];
            if (!checkPassword(password, passwordConfirmation)) {
                array.push(user);
                localStorage.setItem("userList", JSON.stringify(array));
                alert("Successfully registered");
            } else {
                alert("Passwords don't match");
            }
        }
    }
}

//check Email exist
function emailCheckExist(email, users) {
    let emailExist = true;
    // for (let i = 0; i < users.length; i++) {
    users.forEach((user) => {
        if(user.email === email) {
            emailExist = false;
        }
    })
    return emailExist;
    //     let j = users[i];
    //     if(j.email === email) {
    //         emailExist = false;
    //     }
    //     return emailExist;
    // }
}

//Check password
function checkPassword(pass, passConfirm){
    let checkPass = true;
    if (pass===passConfirm){
        checkPass = false;
    }
    return checkPass;
}

//check data input
function checkInput(user) {
    if (user.name==="" || user.name===null) {
        alert("Please enter your name");
        return false;
    }
    if (user.email==="" || user.email===null) {
        alert("Please enter your email");
        return false;
    }
    if (user.date_of_birth==="" || user.date_of_birth===null) {
        alert("Please enter your date of birth");
        return false;
    }
    if (user.pass === "" || user.pass===null) {
        alert ("Please enter your password");
        return false;
    }
    if (user.password_confirmation === "" || user.password_confirmation===null) {
        alert ("Please confirm your password");
        return false;
    }
    return true;
}


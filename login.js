const url = 'https://weatherapp-backend-eight-coral.vercel.app';

document.querySelector('#register').addEventListener('click', function () {
    const user = {
     name: document.querySelector('#registerName').value,
     email: document.querySelector('#registerEmail').value,
     password: document.querySelector('#registerPassword').value,
};
fetch(`${url}/users/signup`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user),
})
.then(response => response.json())
.then(data => {
    if (data.result) {
        window.location.assign("index.html");
    }
});
})

document.querySelector('#connection').addEventListener('click', function () {

const user = {
    email: document.querySelector('#connectionEmail').value,
    password: document.querySelector('#connectionPassword').value,
};
fetch(`${url}/users/signin`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user),
})
.then(response => response.json())
.then(data => {
    if(data.result) {
        window.location.assign("index.html");
    }
});
})
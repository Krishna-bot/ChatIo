let joinBtn = document.getElementById('join-btn');
let userName;

joinBtn.addEventListener('click', (e) =>{
    e.preventDefault();
   userName = document.getElementById('username-input').value;
   console.log(userName);
    if(userName.trim() != ''){
        document.querySelector('.form-username').style.display= 'none';
        document.querySelector('.chatroom-container').style.display= 'block';
    }

})
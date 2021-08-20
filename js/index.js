document.getElementById('login-btn').addEventListener('click',function(){
    let emailInput=document.getElementById('email-input').value;
    let passInput=document.getElementById('pass-input').value;
    if(emailInput=='ami@baap.com' && passInput=='12345678'){
        window.location.href='banking.html'
    }else{
        alert('wrong email or password')
    }
     
})
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        loginForm.reset();
        
        window.location.href = 'index.html';
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Login or password is incorrect')
      });
});
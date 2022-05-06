//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        signupForm.reset();
        window.location.href = 'index.html';
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alarm('Login or password is incorrect');
      });
});

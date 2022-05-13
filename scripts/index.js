
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
        document.getElementById('logout').style.display="block";
      } else {
        document.getElementById('signin').style.display="block";
        document.getElementById('login').style.display="block";
        console.log('user logged out');
      }
});
const logout = document.querySelector('#logout');
 logout.addEventListener('click', (e) => {
   e.preventDefault();
   auth.signOut().then(() => {
     console.log('user signed out');
     document.location.reload();
   })
 });

import { checkAuth, logout } from '../fetch-utils.js';
const signOut = document.getElementById('logout');
// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout


checkAuth();

signOut.addEventListener('click', async () => {
    await logout();
});



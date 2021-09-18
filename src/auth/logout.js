// import {API} from '../API';
// import Axios from 'axios';
import { Redirect } from 'react-router-dom';
// const API = "http://localhost:8000/api/"


const Logout = () => {
    localStorage.removeItem('Token');
    alert("logout successfull")
    return <Redirect to="/" />
    
}


// export const logout = next =>{
//     const userId = isAuthenticated() && isAuthenticated().user.id

//     if(typeof window !== undefined){
//         localStorage.removeItem('Token');
//         next();

//         return fetch(`${API}/accounts/logout/${userId}`, {
//             method:"GET",
//         })
//         .then(response => {
//             console.log("Success");
//             next();
//         })
//         .catch(err => {console.log(err)});
//     }
// }


export default Logout;
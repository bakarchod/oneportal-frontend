// import {API} from '../API';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
const API = "http://oneportal.pythonanywhere.com/api/"

// const signUp = user => {
//     return fetch(`${API}accounts/login`,{
//         method:"POST",
//         header: {
//             Accept: "application/json",
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify(user)
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .catch(
//         err => {console.log(err)}
//     )
// }


const signIn = user => {
    const data = {
        "username":user['email'],
        "password":user['password']
    }
    console.log(data);  
    // console.log(formData.keys());  
    // return Axios.post('http://localhost:8000/api/gettoken/',data)
    return fetch('http://oneportal.pythonanywhere.com/auth/gettoken/',{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        url : 'http://oneportal.pythonanywhere.com/auth/gettoken/',
        body: JSON.stringify(data),
    })
    .then((response) => {
        console.log(response.json)
        return response.json();
    })
    .catch(
        err => {console.log(err)}
    )
}

export const authenticate = (data) => {
    if(typeof window !== undefined){
        if(localStorage.getItem('Token')){
            var grp=localStorage.getItem('group');
            console.log(grp)
            switch(grp){
                case 'faculty':
                    window.location="/faculty/dashboard";
                    break;
                case 'student':
                    window.location="/student/dashboard";
                    break;
                case 'admission':
                    window.location="/admission/dashboard";
                    break;
                default:
                    console.log("Ni Ladiyo");
                    window.location="/";
            }
            

        }else{
        console.log(data)
        localStorage.setItem('Token', (data.token));
        localStorage.setItem('group', (data.group[0].name));
        localStorage.setItem('Name', (data.info.first_name+" "+data.info.last_name));
        localStorage.setItem('email', (data.info.email));
        console.log("hogyi set");
        console.log(localStorage.getItem('Name'))
        console.log(data.group)
        switch(data.group[0].name){
            case "faculty":
                window.location="/faculty/dashboard";
                break;
            case "student":
                window.location="/student/dashboard";
                break;
            case "admission":
                window.location="/admission/dashboard";
                break;
        }
        // window.location = "/faculty/dashboard";
        // next();
    }
    }else
    {
        console.log("lund");
    }
}

export const isAuthenticated = () => {
    // if(typeof window == undefined){
    //     return false;
    // }
   var Token = localStorage.getItem('Token')
   console.log(Token, typeof Token)
    if(Token === "undefined") {
        // console.log("mc")
        localStorage.removeItem('Token')
        return isAuthenticated()
    }
    if(localStorage.getItem('Token') !== "undefined"){
        console.log(localStorage.getItem('Token'));
        return (localStorage.getItem('Token'));

    }
    else{
        localStorage.removeItem('Token');
        return false;
    }
}

export const logout = next =>{
    const userId = isAuthenticated() && isAuthenticated().user.id

    if(typeof window !== undefined){
        localStorage.removeItem('Token');
        next();

        return fetch(`${API}/accounts/logout/${userId}`, {
            method:"GET",
        })
        .then(response => {
            console.log("Success");
            next();
        })
        .catch(err => {console.log(err)});
    }
}

export default signIn;
import React from 'react'
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth/loginAPI'

export default function Check() {
    const f = () => {
        console.log("starting");
        const result = isAuthenticated();
        console.log(result);
        if (result){
            if (result['Token']){
                window.location="/dashboard";
            }
            else{
                window.location="/login"
            }
        }
        else{
            // alert('Error Occured');
             return <Redirect to="/login" />
        }
    } 
    return (
        f()
    )
}

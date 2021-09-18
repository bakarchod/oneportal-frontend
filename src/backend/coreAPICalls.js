import React from 'react';
import { API } from '../API';
import axios from 'axios';

export const getLectures = () => {
    console.log("shru");
    return axios.get("http://localhost:8000/acads/student/lecture").then((response) => {
        // let data = response.json()
                console.log(response)
                return response.data;
        
      });
    
    console.log()
    // return fetch('http://localhost:3000/acads/student/lecture', {'method':"GET"})
    // .then(
    //     response => {
    //         console.log("response aagya")
    //        let data = response.json()
    //         console.log(data)
    //         return data;
    //     }
    // )
    // .catch(err => console.log("Error",err))
}
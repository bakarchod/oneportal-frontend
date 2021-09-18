import React ,{useState} from "react";
import './login.css'
import signIn, { authenticate, isAuthenticated } from '../../../auth/loginAPI';
import { Redirect } from "react-router";



const Login = () => {
    
    const [values, setValues] = useState({
        email : "",
        password: ""
    });
    const {email,password} = values;
    if(localStorage.getItem('Token')){
        return authenticate({});

    }else{

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(email,password,"fgh")
        setValues({...values,email, password});
        console.log("Prep")
        signIn({email, password})
        .then(data => {
            console.log(data);
            authenticate(data);
            // if(data['token']){
            //     // console.log("hi");
            //     return <Redirect to='/dashboard' />
            // }
            successMessage();
        })
        .catch( e => console.log(e));
    }

    const successMessage = () => {
        return (
            alert('Login Successfull')
        );
    }
    const errorMessage = () => {
        return (
            alert('Error Occured')
        );
    }

    const handleChange = (name) => 
        (event) => {
            setValues({...values,[name]:event.target.value});
        }
    

    return (
        <section className="container-fluid" id="login">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row justify-content-center">
                <div className="card-man">
                    <div className="card-body">
                        <div className="row justify-content-center text-center">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                <img src="../../../static/images/logo.png" className="img-fluid logo-img" />
                                <h4 className="text-white text-center text-uppercase p-4">One Portal</h4>
                                
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">

                                <form onSubmit={onSubmit}>
                                    <h1 className="text-black text-center text-uppercase p-4">LOGIN</h1>
                                    <div className="form-row">
                                        <input type="email" value={email} onChange={handleChange('email')} className="form-control my-xl-3 my-3 p-3" id="email" name="email" required placeholder="Email" />

                                    </div>
                                    <div className="form-row">
                                        <input type="password" value={password} onChange={handleChange('password')} className="form-control my-xl-3 my-3 p-3" id="password" name="password" required placeholder="Password" />
                                    </div>
                                    <div className="text-center my-3">
                                        <button onClick={onSubmit}className="btn btn-primary btn1 my-5">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    );
    }
}

export default Login;
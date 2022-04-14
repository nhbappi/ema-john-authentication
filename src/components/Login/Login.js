import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/'

    const handleEmailBlur = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }

    if(user){
         navigate(from,{replace: true})
    }

    const handleUserSignIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
          <div>
          <h2 className='form-title'>Login</h2>
            <form onSubmit={handleUserSignIn}>
            <div className="input-group">
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur}  type="email" name="email" id="" required />
            </div>
            <div className="input-group">
            <label htmlFor='password'>Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
            </div>
             <div>
                 <p style={{color: 'red'}}>{error?.message}</p>
                 {
                     loading && <p>Loading....</p>
                 }
             </div>
            <div className="input-group">
            <input className='form-submit' type="submit" value="Login"/>
            </div>
            </form>
            <p className='form-links'>New to Ema-John? <Link className='form-link' to="/signup">Create an Account </Link></p>
          </div>
        </div>
    );
};

export default Login;
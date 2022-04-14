import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] =  useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e =>{
        setConfirmPassword(e.target.value);
    }

    if(user){
        navigate('/shop')
    }

    const handleCreateUser = e =>{
           e.preventDefault();
           if(password !== confirmPassword){
               setError("Your tow password did not match")
           }
           if(password.length <6){
               setError('password mut be six characters')
               return;
           }

           createUserWithEmailAndPassword(email, password);
    }




    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sign Up</h2>
          <form onSubmit={handleCreateUser}>
          <div className="input-group">
              <label htmlFor='email'>Email</label>
              <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
          </div>
          <div className="input-group">
          <label htmlFor='password'>Password</label>
              <input onBlur={handlePasswordBlur} type="password" name="password" id=""required />
          </div>
          <div className="input-group">
          <label htmlFor='password'>Confirm Password</label>
              <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm-password" id="" required/>
          </div>
          <div>
              <p style={{color: "red"}}>{error}</p>
          </div>
          <div className="input-group">
          <input className='form-submit' type="submit" value="Sign Up"/>
          </div>
          </form>
          <p className='form-links'>Already Have an Account? <Link className='form-link' to="/login">Login </Link></p>
        </div>
      </div>
    );
};

export default SignUp;
import React from "react"
import { useState } from 'react';
import LoginForm from '../../../components/LoginForm/LoginForm';
import SignUpForm from '../../../components/SignUpForm/SignUpForm';
import Logo from '../../../components/Logo/Logo';
import './AuthPage.css';
import Snow from "../../../components/Snow/Snow";

export default function AuthPage({setUser}){
    const [showLogin, setShowLogin] = useState(true);
     return (
    <div className="AuthPage">
      <div className="authPage-1 relative">
      <Logo />
      <div>
      <Snow />

      </div>
      </div>
      <div className="authPage-2 relative">
      <div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      </div>
    </div>
  );
}
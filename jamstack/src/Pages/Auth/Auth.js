import React from 'react'
import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {
    const [type, setType] = useState('login');
   
    return type === 'login' ? <Login triggerRegister={() => setType('register')} /> : <Register triggerLogin={() => setType('login')} />
    
  }

export default Auth

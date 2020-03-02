import React from 'react';

const LoginContext = React.createContext({
    username: '',
    email: '',
    password: '',
    isAuthenticated: false,
    handleRegisterSubmit: () => {}
    
}) 

export default LoginContext;
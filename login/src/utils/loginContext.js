import React from 'react';

const LoginContext = React.createContext({
    username: '',
    isAuthenticated: false,
    handleLoginSubmit: () => {}
    
}) 

export default LoginContext;
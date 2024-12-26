import { useState } from 'react';

const Swap = ({ setswap, swap }) => {

  let Lchange = () => {
    setswap("Login");
  };
  
  let Rchange = () => {
    setswap("Signup");
  };

  return (
    <div className="switch">
      <h2 
        onClick={Lchange} 
        style={swap === "Login" ? { "borderBottom": "2px solid royalblue" } : {}}
      >
        Login
      </h2>
      <h2
        onClick={Rchange}
        style={swap === "Signup" ? { "borderBottom": "2px solid royalblue" } : {}}
      >
        Registration
      </h2>

    </div>
  );
};

export default Swap;

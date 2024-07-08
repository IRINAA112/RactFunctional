import React from "react";

const GetPassword = () => {
    return(
        <>
           <img className="icon" src="lock.jpg" alt="icon3" />
          <input
            className="inputbox"
            type="text"
            placeholder="Password"
            name="pw"
            required=""
          />
        </>
        
    );
}

export default GetPassword;
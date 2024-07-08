import React from "react";

const RepeatPassword = () => {
    return(
        <>
           <img className="icon" src="lock2.jpg" alt="icon4" />
          <input
            className="inputbox"
            type="text"
            placeholder="Repeat your password"
            name="pw-repeat"
            required=""
          />
        </>
        
    );
}

export default RepeatPassword;
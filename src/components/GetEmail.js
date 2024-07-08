import React from "react";

const GetEmail = () => {
    return(
        <>
           <img className="icon" src="mail.jpg" alt="icon2" />
          <input
            className="inputbox"
            type="text"
            placeholder="Your Email"
            name="email"
            required=""
          />
        </>
        
    );
}

export default GetEmail;
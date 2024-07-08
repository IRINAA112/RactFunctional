import React from "react";

const GetName = () => {
    return(
        <>
            <img className="icon" src="pers.jpg" alt="icon1" />
          <input
            className="inputbox"
            type="text"
            placeholder="Your name"
            name="name"
            required=""
          />
        </>
        
    );
}

export default GetName;
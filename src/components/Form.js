import React from "react";
import GetName from './GetName';
import GetEmail from './GetEmail';
import GetPassword from './GetPassword';
import RepeatPassword from './RepeatPassword';
import Check from './Check';

const Form = () => {
    return(
        <>
          <div className="form">
          <GetName/>
        </div>
        <br />
        <div className="form">
          <GetEmail/>
        </div>
        <br />
        <div className="form">
          <GetPassword/>
        </div>
        <br />
        <div className="form">
          <RepeatPassword/>
        </div>
        <br />
        <Check/>
        </>
        
    );
}

export default Form;
import React from "react";

const Check = () => {
    return(
        <>
           <div className="form">
          <div id="checking">
            <input
              style={{ width: 18 }}
              type="checkbox"
              defaultChecked="checked"
              name="agreed"
            />
            <p>
              I agree all statements in{" "}
              <a
                href="https://en.wikipedia.org/wiki/Terms_of_service#:~:text=Terms%20of%20service%20(also%20known,to%20use%20the%20offered%20service."
                className="terms-of-service"
              >
                Terms of service
              </a>
            </p>
          </div>
        </div>
        </>
        
    );
}

export default Check;
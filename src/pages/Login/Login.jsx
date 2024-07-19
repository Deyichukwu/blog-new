import React from "react";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hideComponent, setHidecomponent] = useState(false);

  const submitForm = () => {
    console.log("details---", email, password, confirmPassword);
    setHidecomponent(true);
  };
  return (
    <>
      {/* <!-- proton  -->  */}
      <section class="proton_container">
        <div class="proton_nav">
          {/* <img
            src="https://i0.wp.com/proton.me/images/social/proton-mail-og.png"
            alt="proton logo"
          /> */}
          {/* <div class="protonNav_right">
            <img src="./images/icons8-globe-50 (1).png" alt="" />
            <select name="language" id="Englsih">
              <option value="English">English</option>
              <option value="Deutsch"></option>
              <option value="french">french</option>
              <option value="spanish">spanish</option>
              <option value="italy">italy</option>
            </select>
          </div> */}
        </div>
        <div class="proton1fr">
          <h2>Create your Account</h2>
          <p>One account. All Proton services.</p>
          <span>Email</span>
          <div class="firstInput">
            <input
              class="inputUsernameProton"
              type="email"
              name="Username"
              id="Username"
              placeholder="@proton.me"
              onChange={(e) => setEmail(e.target.value)}
            />
            <a href="#">Use your current email instead</a>
          </div>
          <div class="spanInput_div">
            <span class="password_span">Password</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="Password"
              id="Password"
            />
            <span>Repeat password</span>
            <input
              type="password"
              name="Repeat password"
              id="Repeat password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div class="bottom_proton">
            <button onClick={submitForm}>Create account</button>
            {/* displaying on dom  */}
            {hideComponent === true ? (
              <div>
                <p>email: {email}</p>
                <p>Password: {password}</p>
                <p>confirm Password: {confirmPassword}</p>
              </div>
            ) : null}
            <div class="alreadyHaveAccount">
              <p>Already have an account?</p>
              <a href="#">Sign in</a>
            </div>
            <div class="protonAccount_buttom">
              <p>By creating an account, you agree to our</p>
              <a href="#">terms and conditions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

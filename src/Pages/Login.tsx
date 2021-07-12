import React, { useState, useEffect } from "react";
import { Maduale } from "../Components";
import { login } from "../Services/auth";
import { useHistory } from "react-router-dom";


const Login = () => {
  const history = useHistory();

  const [message, setMessage] = useState("");
  const [tel, setTel] = useState("");
  const [loading , setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const valInput = e.target.value;
    //console.log(valInput);
    if (valInput.match(/^09[0-9]{9}$/)) {
      setMessage("valid");
      setTel(valInput);
      return valInput;
    } else {
      setMessage("Invalid");
    }
  };

  const handleBtnOnClick = () => {
    setLoading(true);
    login(tel).then((res) => {
      history.push(`/login/verify?tel=${tel}`);      
      
    }).finally(() => {
        setLoading(false)
      });;
  };
  return (
    <>
      <Maduale.Label text="Phone Number">
        {
          <Maduale.Input
            type="tel"
            name="phoneNumber"
            message={message}
            handleInputChange={handleInputChange}
          ></Maduale.Input>
        }
      </Maduale.Label>

      <Maduale.Button
        btnName="Add PhoneNumber"
        btnOnClick={handleBtnOnClick}
        loading={loading}
      ></Maduale.Button>
    </>
  );
};

export default Login;
//export default withContext(Login)

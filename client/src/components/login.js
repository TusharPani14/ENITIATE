import React, { useState } from 'react'
import logo from '../picture/logo.png'
import icon from '../picture/main-icon.png'
import { NavLink, useNavigate } from 'react-router-dom'
import "./mix.css"


const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();

  // console.log(inpval);

  const setVal = (e) => {
    // console.log(e.target.value);

    const { name, value } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  };
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = inpval;

    if (email === "") {
      alert("Please enter your email");
    } else if (!email.includes("@")) {
      alert("Please enter valid email");
    } else if (password === "") {
      alert("Please enter your password");
    } else if (password.length < 6) {
      alert("password must be 6 char");
    } else {
      // console.log("User Login successfully done");

      const data = await fetch(`${window.location.origin}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });

      const res = await data.json();
      // console.log(res);
      
      if (res.status === 201) {
        localStorage.setItem("usersdatatoken",res.result.token)
        history("/dash")
        setInpval({ ...inpval, email: "", password: "" })
      }
    }
  }
  return (
    <div className='main-rect relative [background:linear-gradient(191.53deg,_#79f2ec,_#14518e)] w-50% h-[707px] overflow-hidden text-left text-smi text-white font-poppins'>
      <div className="absolute top-[75px] left-[70px] rounded-[35px] [background:linear-gradient(23.55deg,_#080d0d,_#173b4d)] w-[1441px] h-[580px]" />
      <div className="absolute top-[90px] left-[80px] w-[120px] h-[55.25px] text-[25px] text-whitesmoke">
        <div className="absolute top-[8.5px] left-[73.67px] font-medium inline-block w-[62.33px] h-[38.25px]">
        ENITIATE
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[59.5px] h-[55.25px] overflow-hidden"
          alt="logo"
          src={logo}
        />
      </div>
      <div>
        <img
          className="absolute top-[250px] left-[310px] w-[280px] h-[280px] overflow-hidden"
          alt="logo"
          src={icon}
        />
      </div>
      <div className="absolute top-[170px] left-[1000px] text-[26px] font-medium">
        <div className='form_data'>
          <div className='form_heading'>
            <h1 style={{ color: 'whitesmoke' }}>Welcome Back,Log In</h1>
          </div>

          <form>
            <div className='form_input'>
              <label htmlFor='email'>Email</label>
              <input type='email' value={inpval.email} onChange={setVal} name='email' id='email' placeholder='Enter your email address' />
            </div>
            <div className='form_input'>
              <label htmlFor='password'>Password</label>
              <div className='two'>
                <input type={!passShow ? "password" : "text"} name='password' value={inpval.password} onChange={setVal} id='password' placeholder='Enter your password' />
                <div className='showpass' onClick={() => setPassShow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className='btn' onClick={loginUser}>Login</button>
            <p>Don't have an Account? <NavLink to='/signup'>Sign Up</NavLink></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login


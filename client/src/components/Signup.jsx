import React, { useState } from 'react'
import logo from '../picture/logo.png'
import icon from '../picture/main-icon.png'
import { NavLink } from 'react-router-dom'
import "./mix.css"


const Signup = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email:"",
        password:"",
        cpassword: "",
    });
    console.log(inpval);

    const setVal =(e)=>{
        // console.log(e.target.value);
        const {name, value} = e.target;
        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    };

    const addUserdata = async(e)=>{
        e.preventDefault();

        const {fname, email, password, cpassword} = inpval;
        if(fname === ""){
          alert("Please enter your name");
        }else if(email === ""){
          alert("Please enter your email");
        }else if(!email.includes("@")){
          alert("Please enter valid email");
        }else if(password === ""){
          alert("Please enter your password");
        }else if(password.length < 6){
          alert("password must be 6 char");
        }else if(cpassword === ""){
          alert("Please enter your confirm password");
        }else if(cpassword.length < 6){
          alert("confirm password must be 6 char");
        }else if(password !== cpassword){
          alert("password and confirm password not matched")
        } else {
          // console.log("user registration succesfully done");


          const data = await fetch(`${window.location.origin}/signup`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  fname, email, password, cpassword
              })
          });

          const res = await data.json();
          // console.log(res);
          if(res.status == 201){
            alert("user registration done");
            setInpval({...inpval,fname:"",email:"",password:"",cpassword:""})
          }
        }
    }

  return (
    <div className='main-rect relative [background:linear-gradient(191.53deg,_#79f2ec,_#14518e)] w-50% h-[707px] overflow-hidden text-left text-smi text-white font-poppins'>
        <div className="absolute top-[75px] left-[70px] rounded-[35px] [background:linear-gradient(23.55deg,_#080d0d,_#173b4d)] w-[1441px] h-[580px]" />
        <div className="absolute top-[90px] left-[80px] w-[120px] h-[55.25px] text-[25px] text-whitesmoke">
        <div className="absolute top-[8.5px] left-[73.67px] font-medium inline-block w-[62.33px] h-[38.25px]">
          Logo
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
        <div className="absolute top-[80px] left-[1000px] text-[26px] font-medium">
            <div className='form_data' style={{marginTop: '-55px'}}>
              <div className='form_heading'>
                <h1 style={{color: 'whitesmoke'}}>Create Your Account</h1>
              </div>

              <form style={{marginTop: '-21px'}}>
              <div className='form_input'>
                  <label htmlFor='fname'>Name</label>
                  <input type='text' onChange={setVal} value={inpval.fname} name='fname' id='fname' placeholder='Enter your Name'/>
                </div>
                <div className='form_input'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' onChange={setVal} value={inpval.email} name='email' id='email' placeholder='Enter your email address'/>
                </div>
                <div className='form_input'>
                  <label htmlFor='password'>Password</label>
                  <div className='two'>
                    <input type={!passShow ? "password" : "text"} name='password' onChange={setVal} value={inpval.password} id='password' placeholder='Enter your password'/>
                    <div className='showpass' onClick={()=>setPassShow(!passShow)}>
                      {!passShow ? "Show" : "Hide"}
                    </div>
                  </div>
                </div>
                <div className='form_input'>
                  <label htmlFor='password'>Confirm Password</label>
                  <div className='two'>
                    <input type={!cpassShow ? "password" : "text"} name='cpassword' onChange={setVal} value={inpval.cpassword} id='cpassword' placeholder='Confirm password'/>
                    <div className='showpass' onClick={()=>setCPassShow(!cpassShow)}>
                      {!cpassShow ? "Show" : "Hide"}
                    </div>
                  </div>
                </div>

                <button className='btn' onClick={addUserdata}>Sign Up</button>
                <p>Already have an Account? <NavLink to='/'>Login</NavLink></p>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Signup;

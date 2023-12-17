import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import './Header.css'
import logo from '../picture/logo.png'
import { LoginContext } from './contextProvider/Context';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const { logindata, setLoginData } = useContext(LoginContext);

    const history = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const LogOutUser = async()=>{

        let token = localStorage.getItem("usersdatatoken");
        
        const res = await fetch(`${window.location.origin}/logout`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token,
                Accept:"application/json"
            },
            credentials:"include"
        });
        const data = await res.json();
        // console.log(data);
        if(data.status == 201){
            console.log("user logout");
            localStorage.removeItem("usersdatatoken");
            setLoginData(false);
            history("/");
            
            
        }else{
            console.log("Error");
        }
    
    }


    return (
        <>
            <header>
                <nav>
                    <div style={{display:"flex"}}>
                        <img src={logo} alt='logo'/>
                        <h1 style={{color:"whitesmoke"}}>ENITIATE</h1>
                    </div>
                    <div className='avtar' onClick={handleClick}>
                        {
                            logindata.ValidUserOne ? <Avatar style={{ background: "salmon", fontWeight: "bold", textTransform: "capitalize" }}>{logindata.ValidUserOne.fname[0].toUpperCase()}</Avatar> : <Avatar style={{ background: "blue" }} />
                        }

                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={()=>{
                        LogOutUser()
                        handleClose(
                        )}
                        }>Logout</MenuItem>
                    </Menu>
                </nav>
            </header>
        </>
    )
}

export default Header

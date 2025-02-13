import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from './SearchBox';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <header className='d-flex align-items-center'>

                <div className='container-fluid'>
                    <div className=' d-flex align-items-center'>


                        <div className="col-sm-3">
                            <Link className='logo' to={'/'} >
                                <h1>HTech Ideas</h1>
                            </Link>
                        </div>


                        <div className="col-sm-3 d-flex align-items-center ">
                            <Button className='rounded-btn'>
                                <MdMenuOpen className='rounded-btn-1' />
                                {/* <MdOutlineMenu /> */}
                            </Button>
                            <SearchBox />
                        </div>


                        <div className="col-sm-6 d-flex align-items-center justify-content-end gap-4 ">

                            <Button className='rounded-btn'>
                                <CiLight className='rounded-btn-1' />
                            </Button>
                            <Button className='rounded-btn'>
                                <MdLanguage className='rounded-btn-1' />
                            </Button>
                            <Button className='rounded-btn'>
                                <BsCart3 className='rounded-btn-1' />
                            </Button>
                            <Button className='rounded-btn'>
                                <AiOutlineMail className='rounded-btn-1' />
                            </Button>
                            <Button className='rounded-btn'>
                                <FaRegBell className='rounded-btn-1' />
                            </Button>

                            <div className="profile-container">
                                <Button 
                                onClick={handleProfileClick}
                                className="myProfile d-flex align-items-center">
                                    <div className="userImage">
                                        <span className='rounded-circle'>
                                            <img src="/380.png" alt="" />
                                        </span>
                                    </div>

                                    <div className="userInfo">
                                        <span> Ghulam Haider</span>
                                        <p className='mb-0'>@haider59</p>
                                    </div>
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleProfileClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleProfileClose}>My account</MenuItem>
                                    <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
                                </Menu>
                            </div>

                        </div>

                    </div>
                </div>

            </header>
        </>
    )
}

export default Header
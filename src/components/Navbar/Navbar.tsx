import React, { useState } from 'react';
import { NavbarContainer, UserModalContainer, UserModalBox } from './NavbarStyles';
import LogoSmall from '../../assets/images/tx24sm-logo.png'
import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md'
import { SlClose } from 'react-icons/sl'

const Navbar: React.FC = () => {

    const [toggle, setToggle] = useState<boolean>(false)
    const [userModal, setUserModal] = useState<boolean>(false)

    return (
        <>
            <NavbarContainer>
                <div>
                    <img src={LogoSmall} className='navImage' alt='navbarImage' />
                </div>


                <div onClick={() => setToggle(!toggle)}>
                    <span>{toggle ? <MdDarkMode className='navToggleIcon' /> : <MdOutlineLightMode className='navToggleIcon' />}</span>
                </div>


                <div className='navuserBox' onClick={() => setUserModal(!userModal)}>
                    <span><BiUserCircle className='userIcon' /></span>
                    <span className='navuserEmail'>user@email.com</span>
                </div>
            </NavbarContainer>



            {userModal &&
                <>
                    <UserModalContainer>
                        <UserModalBox>
                            <div className='modalCloseIconBox' onClick={() => setUserModal(false)}>
                                <span className='usermodalList'>
                                    <SlClose className='modalCloseIcon' /></span>
                            </div>

                            <div>
                                <span className='usermodalList'>Dashboard</span>
                            </div>
                            <div>
                                <span className='usermodalList'>Signout</span>
                            </div>

                            <div>
                                <span className='modalbuyBtn'>Buy Tokens</span>
                            </div>
                        </UserModalBox>
                    </UserModalContainer>
                </>}
        </>
    );
}

export default Navbar
import React, { useState } from 'react';
import { NavbarContainer, UserModalContainer, UserModalBox, MoblieNavigation, NavModalBox } from './NavbarStyles';
import LogoSmall from '../../assets/images/tx24sm-logo.png'
import MobileLogo from '../../assets/images/mobLogo.png'
import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineLightMode, MdDarkMode, MdArrowForwardIos } from 'react-icons/md'
import { SlClose } from 'react-icons/sl'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Navbar: React.FC = () => {

    const [toggle, setToggle] = useState<boolean>(false)
    const [userModal, setUserModal] = useState<boolean>(false)
    const [mobNav, setMobnav] = useState<boolean>(false)

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


            <MoblieNavigation>
                <div>
                    <img src={LogoSmall} alt='' className='mobLogo' />
                </div>

                <div>
                    <GiHamburgerMenu className='mobmenuIcon' onClick={() => setMobnav(!mobNav)} />
                </div>
            </MoblieNavigation>



            {
                mobNav && (
                    <>
                        <NavModalBox>
                            <div className="mobnavColumns">
                                <div>
                                    <img src={MobileLogo} alt='' className='mobLogo' />
                                </div>
                                <div>
                                    <MdOutlineLightMode className='moblightIcon' />
                                </div>
                                <div>
                                    <AiOutlineCloseCircle className='mobcloseIcon' onClick={() => setMobnav(false)} />
                                </div>
                            </div>


                            <div className='mobnavLists'>
                                <div className='mobnavList'>
                                    <span className='mobnavListname'>Dashboard</span>
                                    <span><MdArrowForwardIos className='mobnavArrowicon' /></span>
                                </div>

                                <div className='mobnavList'>
                                    <span className='mobnavListname'>Your Verified Wallets</span>
                                    <span><MdArrowForwardIos className='mobnavArrowicon' /></span>
                                </div>

                                <div className='mobnavList'>
                                    <span className='mobnavListname'>Transaction History</span>
                                    <span><MdArrowForwardIos className='mobnavArrowicon' /></span>
                                </div>

                                <div className='mobnavList'>
                                    <span className='mobnavListname'>Settings</span>
                                    <span><MdArrowForwardIos className='mobnavArrowicon' /></span>
                                </div>

                                <div className='mobLogoutBtnbox'>
                                    <button className='mobLogoutBtn' onClick={() => setMobnav(false)}>Logout</button>
                                </div>
                            </div>
                        </NavModalBox>
                    </>
                )
            }


        </>
    );
}

export default Navbar
import React from 'react';
import { NavbarContainer } from './NavbarStyles';
import LogoSmall from '../../assets/images/tx24sm-logo.png'
import { BiUserCircle } from 'react-icons/bi'

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <div>
                <img src={LogoSmall} className='navImage' alt='navbarImage' />
            </div>

            <div className='navuserBox'>
                <span><BiUserCircle className='userIcon' /></span>
                <span className='navuserEmail'>user@email.com</span>
            </div >
        </NavbarContainer >
    );
}

export default Navbar
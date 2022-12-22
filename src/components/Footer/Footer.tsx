import React from 'react';
import { FooterContainer } from './FooterStyles';
import FooterLogo from '../../assets/images/tx24sm-logo.png'

const Footer: React.FC = () => {
    return (
        <>
            <FooterContainer>
                <div className="footerContent">
                    <div>
                        <img src={FooterLogo} className='footerImage' alt='footerImage' />
                    </div>

                    <div className='footerBox'>
                        <span className='footerHeading'>Company</span>
                        <ul className='footerul'>
                            <li className='footerlist'>Terms & Service</li>
                            <li className='footerlist'>Privacy Policy</li>
                            <li className='footerlist'>About</li>
                            <li className='footerlist'>Careers</li>
                        </ul>
                    </div>

                    <div className='footerBox'>
                        <span className='footerHeading'>About Us</span>
                        <ul className='footerul'>
                            <li className='footerlist'>The Team</li>
                            <li className='footerlist'>Whitepaper</li>
                            <li className='footerlist'>Blog</li>
                            <li className='footerlist'>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className='footerCopyright'>
                    <span className='footerCopyrighttext'>Copyright © 2022 FXNET - FZE. All Rights Reserved.</span>
                </div>
            </FooterContainer>


        </>
    );
}

export default Footer
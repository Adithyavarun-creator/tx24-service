import React from 'react';
import { LeftbarContainer } from './LeftBarStyles';
import { RxDashboard } from 'react-icons/rx'
import { BsWallet2 } from 'react-icons/bs'
import { AiOutlineRise, AiOutlineSetting } from 'react-icons/ai'
import { GiBuyCard } from 'react-icons/gi'
import { MdVerifiedUser } from 'react-icons/md'
import { BiSupport, BiMessageDetail, BiLogOut } from 'react-icons/bi'


const LeftBar: React.FC = () => {
    return (
        <LeftbarContainer>
            <div>
                <span className='leftbarTitle'>Overview</span>
            </div>

            <div className='leftBarCols'>
                <div className='leftbarColBox'>
                    <span><RxDashboard className='leftbarIcon' /></span>
                    <span className='leftbarColname'>Dashboard</span>
                </div>

                <div className='leftbarColBox'>
                    <span><BsWallet2 className='leftbarIcon' /></span>
                    <span className='leftbarColname'>Your Verified Wallets</span>
                </div>

                <div className='leftbarColBox'>
                    <span><AiOutlineRise className='leftbarIcon' /></span>
                    <span className='leftbarColname'>Transaction History</span>
                </div>

                <div className='leftbarColBox'>
                    <span><MdVerifiedUser className='leftbarIcon' /></span>
                    <span className='leftbarColname'>Get Verified</span>
                </div>

                <div className='leftbarColBox'>
                    <span><GiBuyCard className='leftbarIcon' /></span>
                    <span className='leftbarColname'>Buy Tokens</span>
                </div>
            </div>


            <div className='leftbarAccount'>
                <span className='leftbarTitle'>Account</span>
            </div>

            <div className='leftBarCols'>
                <div className='leftbarColBox'>
                    <span><AiOutlineSetting className='leftbarIcon' /></span>
                    <span className='leftbarColname'>Settings</span>
                </div>
            </div>

            <div className="mb-50"></div>

            <div className='leftBarCols'>
                <div className='leftbarColBox'>
                    <span><BiSupport className='leftbarIcon' /></span>
                    <span className='leftbarColname'>Support</span>
                </div>

                <div className='leftbarColBox'>
                    <span><BiMessageDetail className='leftbarIcon' /></span>
                    <span className='leftbarColname'>Messages</span>
                    <span className='leftbarMessages'>12</span>
                </div>

                <div className='leftbarColBox'>
                    <span><BiLogOut className='leftbarIcon' /></span>
                    <span className='leftbarColname'>Logout</span>
                </div>
            </div>
        </LeftbarContainer>
    );
}

export default LeftBar
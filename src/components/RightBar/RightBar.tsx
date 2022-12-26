import React from 'react';
import { RightbarContainer } from './RightBarStyles';
import { MdQrCodeScanner } from 'react-icons/md'

const RightBar: React.FC = () => {
    return (
        <RightbarContainer>
            <div className='rightbarBox-1'>
                <div className='rightbarCountdown'>
                    <span className='righbarStage'>Stage-1</span>
                    <span className='righbarCount'>Countdown</span>
                </div>
            </div>

            <div className='rightbarBuybutton'>
                <span><MdQrCodeScanner className='rightbarscanIcon' /></span>
                <span className='rightbarBuyText'>Buy Tokens</span>
            </div>


            <div className='rightbarStatus'>
                <div className="rightBarStatusName">
                    <span className='rightbarstatusText'>Token Presale Status</span>
                </div>


                <div className="rightbarStages">
                    <div className="rightbarStage">
                        <span className='stageStep'>Stage-1 :</span>
                        <span>1$/TXT</span>
                        <span>Completed</span>
                        <span>1.000.000TXT</span>
                        <span>sold</span>
                    </div>

                    <div className="rightbarStage">
                        <span className='stageStep'>Stage-2 :</span>
                        <span>1$/TXT</span>
                        <span>Completed</span>
                        <span>1.000.000TXT</span>
                        <span>sold</span>
                    </div>

                    <div className="rightbarStage">
                        <span className='stageStep'>Stage-3 :</span>
                        <span>1$/TXT</span>
                        <span>Completed</span>
                        <span>1.000.000TXT</span>
                        <span>sold</span>
                    </div>
                </div>
            </div >

        </RightbarContainer >
    );
}

export default RightBar
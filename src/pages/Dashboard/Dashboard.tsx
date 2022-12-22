import React from 'react';
import LeftBar from '../../components/LeftBar/LeftBar';
import MidContent from '../../components/MidContent/MidContent';
import RightBar from '../../components/RightBar/RightBar';
import { DashboardContainer } from './DashboardStyles';

const Dashboard: React.FC = () => {
    return (
        <DashboardContainer>
            <div className='leftbarWrapper'>
                <LeftBar />
            </div>

            <div className='contentWrapper'>
                <MidContent />
            </div>

            <div className='rightbarWrapper'>
                <RightBar />
            </div>

        </DashboardContainer>
    );
}

export default Dashboard
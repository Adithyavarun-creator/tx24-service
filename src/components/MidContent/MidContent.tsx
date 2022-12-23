import React from 'react';
import { Box1Container, Box2Container, Box3Container, MidContentContainer } from './MidContentStyles';
import { BiHide } from 'react-icons/bi'

const MidContent: React.FC = () => {
    return (
        <MidContentContainer>


            {/**Box-1 */}

            <Box1Container>
                <div className="contentInfo">
                    <h1>Pre-sale Token Sales</h1>
                </div>


                <div className='contentTokenBox'>
                    <span>txt token price</span>
                    <span>1 TXT</span>
                    <span className='contentEqual'>=</span>
                    <span>0,00005208 BTC</span>
                </div>


                <div className='contentTokenBox'>
                    <span>Minimum Ticket</span>
                    <span>5.000 TXT</span>
                    <span className='contentEqual'>=</span>
                    <span>0,002604 BTC</span>
                </div>

                <div className='contentTokenBox'>
                    <span>Maximum Ticket</span>
                    <span>150 TXT</span>
                    <span className='contentEqual'>=</span>
                    <span>7,812 BTC</span>
                </div>

                <div className="contentInfo">
                    <h1>PRE-SALE TOKEN PROGRESS</h1>
                </div>


                <div className='contentBar'>
                    <span>670.000$</span>
                    <span>67%</span>
                </div>
            </Box1Container>


            {/**Box-2 */}
            <Box2Container>

                <div className="contentHide">
                    <span className='contenthideText'>Hide</span>
                    <span><BiHide className='contentHideIcon' /></span>
                </div>


                <div className="contentInfo2">
                    <span className='contentInfoName'>Token balance</span>
                </div>


                <div className="contentTokenbalance">
                    <div className="contentTokenBox">
                        <span className='contentValue'>250.000</span>
                        <span className='contentUnit'>TXT</span>
                    </div>

                    <div className="contentTokenBox">
                        <span className='contentValue'>250.000</span>
                        <span className='contentUnit'>USD</span>
                    </div>
                </div>


                <div className="contentInfo2">
                    <span className='contentInfoName'>Distribution of your payments
                    </span>
                </div>



                <div className="contentDistributionBox">
                    <div className='distributionAmounts'>
                        <div className='distributionAmount'>
                            <span className='distValue'>3.123</span>
                            <span className='distUnits'>BTC</span>
                        </div>
                        <div className='distributionAmount'>
                            <span className='distValue'>1.235</span>
                            <span className='distUnits'>ETH</span>
                        </div>
                        <div className='distributionAmount'>
                            <span className='distValue'>7.133</span>
                            <span className='distUnits'>BNB</span>
                        </div>
                        <div className='distributionAmount'>
                            <span className='distValue'>80.123</span>
                            <span className='distUnits'>USDT</span>
                        </div>
                    </div>
                    <div>Chart</div>

                    <div className='distributionPercentages'>
                        <div className='distributionPercentage'>
                            <span className='percentValue'>55%</span>
                            <span className='percentUnits'>Bitcoin</span>
                        </div>

                        <div className='distributionPercentage'>
                            <span className='percentValue'>15%</span>
                            <span className='percentUnits'>Ethereum</span>
                        </div>

                        <div className='distributionPercentage'>
                            <span className='percentValue'>10%</span>
                            <span className='percentUnits'>BNB</span>
                        </div>

                        <div className='distributionPercentage'>
                            <span className='percentValue'>15%</span>
                            <span className='percentUnits'>USD Tether</span>
                        </div>
                    </div>
                </div>
            </Box2Container>


            {/**Box-3 */}
            <Box3Container>

                <div className="contentHide">
                    <span className='contenthideText'>Hide</span>
                    <span><BiHide className='contentHideIcon' /></span>
                </div>


                <div className="contentInfo">
                    <span className='contentTransactionsName'>Transactions History</span>
                </div>


                <div className="transactionRowNames">
                    <div>
                        <span>Transaction   #ID</span>
                    </div>
                    <div>
                        <span>Token</span>
                    </div>

                    <div>
                        <span>Amount Paid</span>
                    </div>

                    <div>
                        <span>Wallet</span>
                    </div>

                    <div>
                        <span>Status</span>
                    </div>
                </div>

                <div className="transactionRowNames">
                    <div className='flexColumn'>
                        <span>TNX0001
                        </span>
                        <span>2022-10-21 10:45PM
                        </span>
                    </div>

                    <div className='flexColumn'>
                        <span>288.000</span>
                        <span>TXT</span>
                    </div>

                    <div className='flexColumn'>
                        <span>350.000</span>
                        <span>USDT</span>
                    </div>

                    <div className='walletBox'>
                        <span>1FtDj64Dgtuy345jhfgA</span>
                    </div>

                    <div className='statusBox'>
                        <span>Pending</span>
                    </div>
                </div>

                <div className="transactionRowNames">
                    <div className='flexColumn'>
                        <span>TNX0001
                        </span>
                        <span>2022-10-21 10:45PM
                        </span>
                    </div>

                    <div className='flexColumn'>
                        <span>288.000</span>
                        <span>TXT</span>
                    </div>

                    <div className='flexColumn'>
                        <span>350.000</span>
                        <span>USDT</span>
                    </div>

                    <div className='walletBox'>
                        <span>1FtDj64Dgtuy345jhfgA</span>
                    </div>

                    <div className='statusBox'>
                        <span>Pending</span>
                    </div>
                </div>


                <div className='allTransactionBox'>
                    <button className='transactionButton'>Show All</button>
                </div>


            </Box3Container>





        </MidContentContainer >
    );
}

export default MidContent
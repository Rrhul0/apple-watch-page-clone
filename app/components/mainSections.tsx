import React from 'react'
import MainArea from './mainArea'
import IntroBlock from './introBlock'

const MainSections = () => {
    return (
        <div className='mainSection'>
            <div className='intromat mat enterDone'>
                <IntroBlock>
                    <MainArea type='intro' />
                </IntroBlock>
            </div>
            <div className='sizemat mat exitDone'>
                <MainArea type='size' />
            </div>
            <div className='casemat mat exitDone'>
                <MainArea type='case' />
            </div>
            <div className='bandmat mat exitDone'>
                <MainArea type='band' />
            </div>
        </div>
    )
}

export default MainSections

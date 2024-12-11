import React from 'react'
import MainArea from './mainArea'
import introCaseImage from '@/public/GreetingWatchCase.png'
import introBandImage from '@/public/GreetingWatchBand.jpeg'
import introSideViewImage from '@/public/GreetingSideView.jpeg'

const MainSections = () => {
    return (
        <div className='mainSection'>
            <MainArea
                type='intro'
                images={{
                    caseImage: introCaseImage.src,
                    bandImage: introBandImage.src,
                    sideViewImage: introSideViewImage.src
                }}
            />
        </div>
    )
}

export default MainSections

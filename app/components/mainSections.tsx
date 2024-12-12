import React from 'react'
import MainArea from './mainArea'
import { useStore } from 'zustand'
import { activeSectionStore, watchStore } from '../store/store'
import { getImageUrl } from '../utils/common'
import IntroBlock from './introBlock'

const MainSections = () => {
    const { data: selectedWatchData } = useStore(watchStore)
    const { activeSection } = useStore(activeSectionStore)
    return (
        <div className='mainSection'>
            <div className='intromat mat enterDone'>
                <IntroBlock>
                    <MainArea
                        type='intro'
                        images={{
                            caseImage: getImageUrl(
                                [
                                    selectedWatchData.case,
                                    selectedWatchData.size
                                ],
                                true
                            ),
                            bandImage: getImageUrl(
                                [
                                    selectedWatchData.band,
                                    selectedWatchData.size
                                ],
                                false
                            ),
                            sideViewImage: getImageUrl(
                                [
                                    selectedWatchData.case,
                                    selectedWatchData.band,
                                    selectedWatchData.size
                                ],
                                false
                            )
                        }}
                    />
                </IntroBlock>
            </div>
            <div className='sizemat mat exitDone'>
                <MainArea
                    type='size'
                    images={{
                        caseImage: getImageUrl(
                            [selectedWatchData.case, selectedWatchData.size],
                            true
                        ),
                        bandImage: getImageUrl(
                            [selectedWatchData.band, selectedWatchData.size],
                            false
                        ),
                        sideViewImage: getImageUrl(
                            [
                                selectedWatchData.case,
                                selectedWatchData.band,
                                selectedWatchData.size
                            ],
                            false
                        )
                    }}
                />
            </div>
            <div className='casemat mat exitDone'>
                <MainArea
                    type='case'
                    images={{
                        caseImage: getImageUrl(
                            [selectedWatchData.case, selectedWatchData.size],
                            true
                        ),
                        bandImage: getImageUrl(
                            [selectedWatchData.band, selectedWatchData.size],
                            false
                        ),
                        sideViewImage: getImageUrl(
                            [
                                selectedWatchData.case,
                                selectedWatchData.band,
                                selectedWatchData.size
                            ],
                            false
                        )
                    }}
                />
            </div>
            <div className='bandmat mat exitDone'>
                <MainArea
                    type='band'
                    images={{
                        caseImage: getImageUrl(
                            [selectedWatchData.case, selectedWatchData.size],
                            true
                        ),
                        bandImage: getImageUrl(
                            [selectedWatchData.band, selectedWatchData.size],
                            false
                        ),
                        sideViewImage: getImageUrl(
                            [
                                selectedWatchData.case,
                                selectedWatchData.band,
                                selectedWatchData.size
                            ],
                            false
                        )
                    }}
                />
            </div>
        </div>
    )
}

export default MainSections

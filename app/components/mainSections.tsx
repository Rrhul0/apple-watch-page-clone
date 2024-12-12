import React from 'react'
import MainArea from './mainArea'
import { useStore } from 'zustand'
import { watchStore } from '../store/store'

const MainSections = () => {
    const { data: selectedWatchData } = useStore(watchStore)
    return (
        <div className='mainSection'>
            <MainArea
                type='intro'
                images={{
                    caseImage: getImageUrl(
                        [selectedWatchData.case, selectedWatchData.size],
                        'case'
                    ),
                    bandImage: getImageUrl(
                        [selectedWatchData.band, selectedWatchData.size],
                        'band'
                    ),
                    sideViewImage: getImageUrl(
                        [
                            selectedWatchData.case,
                            selectedWatchData.band,
                            selectedWatchData.size
                        ],
                        'sideview'
                    )
                }}
            />
        </div>
    )
}

export default MainSections

const getImageUrl = (
    name: string | string[],
    type: 'case' | 'band' | 'sideview'
) => {
    const names = Array.isArray(name) ? name.join('+') : name
    return `/${type}+${names
        .split(' ')
        .map(w => w.toLowerCase())
        .join('_')}.${type === 'case' ? 'png' : 'jpeg'}`
}

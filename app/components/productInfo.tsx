import React from 'react'
import { useStore } from 'zustand'
import { watchStore } from '../store/store'

const ProductInfo = () => {
    const { data: selectedWatchData } = useStore(watchStore)

    const onClickSideView = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (e.currentTarget.textContent === 'Side view') {
            e.currentTarget.textContent = 'Front view'
            document
                .querySelector('.showFrontView')
                ?.classList.replace('showFrontView', 'showSideView')
        } else {
            e.currentTarget.textContent = 'Side view'
            document
                .querySelector('.showSideView')
                ?.classList.replace('showSideView', 'showFrontView')
        }
    }

    return (
        <div className='wrapper'>
            <div className='productinfo'>
                <button
                    className='sideViewBtn showFrontView typography-caption button'
                    aria-hidden='true'
                    aria-label='Switch to side view'
                    type='button'
                    onClick={onClickSideView}
                >
                    Side view
                </button>
                <div
                    aria-live='polite'
                    role='text'
                >
                    <div className='watchName typography-caption'>
                        {selectedWatchData.watchName}
                    </div>
                    <div className='watchTitle'>
                        {selectedWatchData.size} {selectedWatchData.case} with{' '}
                        {selectedWatchData.band}
                    </div>
                    <div className='watchPrice'>
                        <div className='pricepoint-fullPrice-comparative'>
                            From{' '}
                            <span className='nowrap'>
                                ${selectedWatchData.amount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo

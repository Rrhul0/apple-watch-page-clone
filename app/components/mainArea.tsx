import React from 'react'
import Image from 'next/image'
import ProductInfo from './productInfo'
import { useStore } from 'zustand'
import { watchStore } from '../store/store'
import { findAvailableOptions, getImageUrl } from '../utils/common'

const MainArea = ({
    type = 'intro',
    images: { caseImage, bandImage, sideViewImage }
}: {
    type: 'intro' | 'band' | 'case' | 'size'
    images: {
        caseImage: string
        bandImage: string
        sideViewImage: string
    }
}) => {
    const {
        data: { watchName, size }
    } = useStore(watchStore)

    return (
        <div className={`mainArea horizontalPlatter`}>
            {type !== 'intro' && (
                <div className='scroller-crop'>
                    <div
                        className='core-scroller'
                        role='group'
                        aria-label={`Choose your watch ${type}`}
                    >
                        <div
                            className='platter'
                            role='radiogroup'
                        >
                            {findAvailableOptions({
                                watchName,
                                optionName: type
                            }).map((option, index) => {
                                const imageUrl = getImageUrl(
                                    [option.value, size],
                                    type === 'case'
                                )
                                return (
                                    <div
                                        className='scroll-item'
                                        key={index}
                                    >
                                        <button
                                            type='button'
                                            className='scroll-item-button'
                                            role='radio'
                                            aria-checked='false'
                                            title='Apple Watch Case'
                                        >
                                            <Image
                                                src={imageUrl}
                                                width={500}
                                                height={500}
                                                alt='Apple Watch Case'
                                                className='testImage'
                                            />
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
            <div
                className={`combinedimage ${
                    type !== 'intro' ? ' stuckview stuckview' + type : ''
                }`}
            >
                {type !== 'case' && (
                    <Image
                        src={caseImage}
                        width={500}
                        height={500}
                        alt='Apple Watch Case'
                        className='watchCase'
                    />
                )}
                {type !== 'band' && (
                    <Image
                        src={bandImage}
                        width={500}
                        height={500}
                        alt='Apple Watch Case'
                        className='watchBand'
                    />
                )}
            </div>
            <Image
                src={sideViewImage}
                width={500}
                height={500}
                alt='Apple Watch Side View'
                className='sideViewImage'
                aria-hidden='true'
            />
            <ProductInfo />
        </div>
    )
}

export default MainArea

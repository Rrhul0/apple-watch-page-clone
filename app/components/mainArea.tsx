import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import ProductInfo from './productInfo'
import { useStore } from 'zustand'
import { activeSectionStore, watchStore } from '../store/store'
import {
    findAvailableOptions,
    getClosestItem,
    getImageUrl
} from '../utils/common'

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
    const { data, changeAttribute } = useStore(watchStore)
    const { activeSection } = useStore(activeSectionStore)

    const { watchName, size } = data

    const scrollerRef = useRef<HTMLDivElement>(null)
    const handleScroll = (event: Event) => {
        const ele = event.target as Element
        if (type === 'intro') return
        if (ele) {
            const closestItem = getClosestItem({ scroller: ele })

            if (closestItem) {
                changeAttribute(
                    type,
                    closestItem.querySelector('button')?.id ?? ''
                )
            }
        }
    }

    useEffect(() => {
        if (type === 'intro') return

        const scroller = scrollerRef.current
        scroller?.addEventListener('scroll', handleScroll)

        return () => {
            scroller?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (type === 'intro' || activeSection === 'intro') return
        if (type !== activeSection) return
        if (scrollerRef.current) {
            const selectedItem =
                scrollerRef.current.querySelector('.selected-item')
            const closestItem = getClosestItem({
                scroller: scrollerRef.current
            })
            if (selectedItem && selectedItem !== closestItem) {
                selectedItem.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                })
            }
        }
    }, [type !== 'intro' && data[type], activeSection])

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
                            ref={scrollerRef}
                            // onScroll={handleScroll}
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
                                        className={`scroll-item ${
                                            option.value === data[type]
                                                ? 'selected-item'
                                                : ''
                                        }`}
                                        key={index}
                                    >
                                        <button
                                            type='button'
                                            className='scroll-item-button'
                                            role='radio'
                                            aria-checked='false'
                                            title='Apple Watch Case'
                                            id={option.value}
                                            onClick={() =>
                                                changeAttribute(
                                                    type,
                                                    option.value
                                                )
                                            }
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

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
    type = 'intro'
}: {
    type: 'intro' | 'band' | 'case' | 'size'
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
        <div className={`mainArea horizontalPlatter showFrontView`}>
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
                        >
                            {findAvailableOptions({
                                watchName,
                                optionName: type
                            }).map((option, index) => {
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
                                            {type === 'case' && (
                                                <Image
                                                    src={getImageUrl(
                                                        [option.value, size],
                                                        true
                                                    )}
                                                    width={500}
                                                    height={500}
                                                    alt='Apple Watch Case'
                                                    className='scrollerImage image'
                                                />
                                            )}
                                            {type === 'band' && (
                                                <Image
                                                    src={getImageUrl(
                                                        [option.value, size],
                                                        false
                                                    )}
                                                    width={500}
                                                    height={500}
                                                    alt='Apple Watch Case'
                                                    className='scrollerImage image'
                                                />
                                            )}
                                            {type === 'size' && (
                                                <div className='combinedimage'>
                                                    <Image
                                                        src={getImageUrl(
                                                            [
                                                                data.case,
                                                                option.value
                                                            ],
                                                            true
                                                        )}
                                                        width={500}
                                                        height={500}
                                                        alt='Apple Watch Case'
                                                        className='watchCase image'
                                                    />
                                                    <Image
                                                        src={getImageUrl(
                                                            [
                                                                data.band,
                                                                option.value
                                                            ],
                                                            false
                                                        )}
                                                        width={500}
                                                        height={500}
                                                        alt='Apple Watch Case'
                                                        className='watchBand image'
                                                    />
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
            {type !== 'size' && (
                <div
                    className={`combinedimage ${
                        type !== 'intro' ? ' stuckview stuckview' + type : ''
                    }`}
                >
                    {type !== 'case' && (
                        <Image
                            src={getImageUrl([data.case, size], true)}
                            width={500}
                            height={500}
                            alt='Apple Watch Case'
                            className='watchCase image'
                        />
                    )}
                    {type !== 'band' && (
                        <Image
                            src={getImageUrl([data.band, size], false)}
                            width={500}
                            height={500}
                            alt='Apple Watch Case'
                            className='watchBand image'
                        />
                    )}
                </div>
            )}
            <Image
                src={getImageUrl(
                    ['sideview', data.case, data.band, size],
                    false
                )}
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

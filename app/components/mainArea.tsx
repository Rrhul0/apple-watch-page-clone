import { animate } from 'motion'
import React from 'react'
import Image from 'next/image'
import ProductInfo from './productInfo'
import { TStage } from '../constants'
import { useStore } from 'zustand'
import { activeFooterButtonStore } from '../store/store'

const MainArea = ({
    type = 'intro',
    images: { caseImage, bandImage, sideViewImage }
}: {
    type: TStage
    images: {
        caseImage: string
        bandImage: string
        sideViewImage: string
    }
}) => {
    const { setActiveButton } = useStore(activeFooterButtonStore)
    const onClickStart = () => {
        if (type !== 'intro') return
        const page = document.querySelector('.page')
        if (page) page.classList.add('hideIntro')
        animate(
            '.combinedimage',
            {
                transform: 'translateY(-2rem) scale(1)'
            },
            {
                duration: 1
            }
        )
        const footer = document.querySelector('.footerContainer')
        if (footer) footer.setAttribute('aria-hidden', 'false')
        const saveButton = document.querySelector('.save-btn-container')
        if (saveButton) {
            saveButton.setAttribute('aria-hidden', 'false')
            saveButton.classList.remove('disabled')
            saveButton.setAttribute('disabled', 'false')
        }
        const collections = document.querySelector('.collectionsContainer')
        if (collections) collections.setAttribute('aria-hidden', 'false')
        const greeting = document.querySelector('.intro-headline')
        if (greeting) greeting.setAttribute('aria-hidden', 'true')
        const getStarted = document.querySelector('.btn-getstarted')
        if (getStarted) {
            getStarted.setAttribute('aria-hidden', 'true')
            getStarted.classList.add('disabled')
            getStarted.setAttribute('disabled', 'true')
        }
        const sideViewButton = document.querySelector('.sideViewBtn')
        if (sideViewButton) {
            sideViewButton.setAttribute('aria-hidden', 'false')
            sideViewButton.classList.remove('disabled')
            sideViewButton.removeAttribute('disabled')
        }
        const footerOptions = document.querySelector('.button-footer')
        if (footerOptions) {
            setTimeout(() => {
                footerOptions.classList.add('show-peak')
                setActiveButton('size')
            }, 1500)
            setTimeout(() => {
                footerOptions.classList.remove('show-peak')
                setActiveButton(null)
            }, 3250)
        }
    }

    return (
        <div className='mainArea'>
            {type === 'intro' && (
                <div className='greetingWrapper'>
                    <div className='greeting'>
                        <h1
                            tabIndex={-1}
                            className='intro-headline'
                            aria-hidden='false'
                        >
                            <span role='text'>
                                <span className='collectionname'>
                                    Apple Watch Studio
                                </span>
                                <span className='casemsg'>Choose a case.</span>
                                <span className='bandmsg'>Pick a band.</span>
                                <span className='stylemsg'>
                                    Create your own style.
                                </span>
                            </span>
                        </h1>
                        <button
                            tabIndex={0}
                            type='button'
                            className='btn-getstarted button'
                            onClick={onClickStart}
                            aria-hidden='false'
                        >
                            Get started
                        </button>
                    </div>
                </div>
            )}
            <div className='imageWrapper showFrontView'>
                <div className='combinedimage'>
                    <Image
                        src={caseImage}
                        width={500}
                        height={500}
                        alt='Apple Watch Case'
                        className='watchCase'
                    />
                    <Image
                        src={bandImage}
                        width={500}
                        height={500}
                        alt='Apple Watch Case'
                        className='watchBand'
                    />
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
        </div>
    )
}

export default MainArea

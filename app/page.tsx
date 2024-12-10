'use client'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../public/apple-watch-design-studio-logo.jpeg'
import ChevronDown from './icons/chevronDown'
import { useState } from 'react'
import { Stage } from './constants'
import GreetingWatchCase from '../public/GreetingWatchCase.png'
import GreetingWatchBand from '../public/GreetingWatchBand.jpeg'

export default function Home() {
    const [stage, setStage] = useState<Stage>('intro')

    return (
        <div>
            <div className='page'>
                <div className='title'>
                    <Link
                        href='/'
                        data-slot-name='designStudioAssets'
                        data-feature-name='Astro Link'
                        data-display-name='AOS: home'
                        className='home_logo'
                    >
                        <Image
                            src={LogoImage}
                            alt='Apple Watch'
                            height={26}
                            width={118}
                            loading='eager'
                        />
                    </Link>
                </div>
                <div className='mainSection'>
                    <div className='introSection'>
                        <div className='greetingWrapper'>
                            <div className='greeting'>
                                <h1
                                    tabIndex={-1}
                                    className='intro-headline'
                                >
                                    <span role='text'>
                                        <span className='collectionname'>
                                            Apple Watch Studio
                                        </span>
                                        <span className='casemsg'>
                                            Choose a case.
                                        </span>
                                        <span className='bandmsg'>
                                            Pick a band.
                                        </span>
                                        <span className='stylemsg'>
                                            Create your own style.
                                        </span>
                                    </span>
                                </h1>
                                <button
                                    tabIndex={0}
                                    type='button'
                                    className='btn-getstarted button'
                                    onClick={() => setStage('sizes')} //also start the animation
                                >
                                    Get started
                                </button>
                            </div>
                        </div>
                        <div className='imageWrapper'>
                            <div className='combinedimage'>
                                <Image
                                    src={GreetingWatchCase}
                                    width={500}
                                    height={500}
                                    alt='Apple Watch Case'
                                    className='greetingWatchCase'
                                />
                                <Image
                                    src={GreetingWatchBand}
                                    width={500}
                                    height={500}
                                    alt='Apple Watch Case'
                                    className='greetingWatchBand'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {stage !== 'intro' && (
                    <>
                        <div className='collections'>
                            <button type='button'>
                                <div className='collectionsBlock'>
                                    Collections
                                    <span className='visuallyhidden'>
                                        Apple Watch
                                    </span>
                                    <ChevronDown />
                                </div>
                            </button>
                        </div>
                        <div className='footer'>
                            <button
                                className='button savebtn'
                                type='button'
                            >
                                Save
                                <span className='visuallyhidden'>
                                    Apple Watch Style
                                </span>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

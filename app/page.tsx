'use client'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../public/apple-watch-design-studio-logo.jpeg'
import Footer from './components/footer'
import MainArea from './components/mainSections'
import CollectionsDrawer from './components/collectionsDrawer'

export default function Home() {
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
                <MainArea />
                <Footer />
                <CollectionsDrawer />
                <div
                    className='save-btn-container'
                    aria-hidden='true'
                >
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
            </div>
        </div>
    )
}

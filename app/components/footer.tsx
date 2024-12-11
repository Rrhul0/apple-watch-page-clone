import React from 'react'
import BandIcon from '../icons/bandIcon'
import SizesIcon from '../icons/sizesIcon'
import CaseIcon from '../icons/caseIcon'

const Footer = () => {
    return (
        <div
            className='footerContainer'
            aria-hidden='true'
            aria-label='Choose a watch feature to customize'
        >
            <div className='footer-filters'>
                <button
                    type='button'
                    className='button-footer button'
                >
                    <div
                        className='btn-icon'
                        aria-hidden='true'
                    >
                        <SizesIcon />
                    </div>
                    <div className='btn-text'>Size</div>
                </button>
                <button
                    type='button'
                    className='button-footer button'
                >
                    <div
                        className='btn-icon'
                        aria-hidden='true'
                    >
                        <CaseIcon />
                    </div>
                    <div className='btn-text'>Case</div>
                </button>
                <button
                    type='button'
                    className='button-footer button'
                >
                    <div
                        className='btn-icon'
                        aria-hidden='true'
                    >
                        <BandIcon />
                    </div>
                    <div className='btn-text'>Band</div>
                </button>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import BandIcon from '../icons/bandIcon'
import SizesIcon from '../icons/sizesIcon'
import CaseIcon from '../icons/caseIcon'
import { useStore } from 'zustand'
import { activeFooterButtonStore, watchStore } from '../store/store'
import {
    AVAILABLE_BAND_TYPES,
    AVAILABLE_CASE_TYPES,
    AVAILABLE_SIZES
} from '../constants'

const Footer = () => {
    const { activeButton, setActiveButton } = useStore(activeFooterButtonStore)

    return (
        <div
            className='footerContainer'
            aria-hidden='true'
        >
            <div
                className='footer-filters'
                aria-label='Choose a watch feature to customize'
                role='group'
            >
                <button
                    type='button'
                    className='button-footer button'
                    onClick={() => setActiveButton('size')}
                >
                    <div
                        className='btn-icon'
                        aria-hidden='true'
                    >
                        <SizesIcon />
                    </div>
                    {activeButton !== 'size' ? (
                        <div className='btn-text'>Size</div>
                    ) : (
                        <ExpendedOptions
                            valueName='Size'
                            options={AVAILABLE_SIZES}
                        />
                    )}
                </button>
                <button
                    type='button'
                    className='button-footer button'
                    onClick={() => setActiveButton('case')}
                >
                    <div
                        className='btn-icon'
                        aria-hidden='true'
                    >
                        <CaseIcon />
                    </div>
                    {activeButton !== 'case' ? (
                        <div className='btn-text'>Case</div>
                    ) : (
                        <ExpendedOptions
                            valueName='Case'
                            options={AVAILABLE_CASE_TYPES}
                        />
                    )}
                </button>
                <button
                    type='button'
                    className='button-footer button'
                    onClick={() => setActiveButton('band')}
                >
                    <div
                        className='btn-icon'
                        aria-hidden='true'
                    >
                        <BandIcon />
                    </div>
                    {activeButton !== 'band' ? (
                        <div className='btn-text'>Band</div>
                    ) : (
                        <ExpendedOptions
                            valueName='Band'
                            options={AVAILABLE_BAND_TYPES}
                        />
                    )}
                </button>
            </div>
        </div>
    )
}

export default Footer

const ExpendedOptions = ({
    valueName,
    options
}: {
    valueName: string
    options: string[]
}) => {
    const { data, changeAttribute } = useStore(watchStore)
    const selectedOptionIndex = options.findIndex(option =>
        data[valueName.toLowerCase() as keyof typeof data].includes(option)
    )
    return (
        <fieldset className='optionsFieldset'>
            <legend className='ally'>{valueName}</legend>
            <ul className='options'>
                {options.map((option: string) => (
                    <li key={option}>
                        <label className='optionsLabel'>
                            <input
                                type='radio'
                                name={valueName}
                                className='ally'
                                value={option}
                                checked={
                                    selectedOptionIndex ===
                                    options.indexOf(option)
                                }
                                onChange={() => {}}
                            />
                            <span>{option}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </fieldset>
    )
}

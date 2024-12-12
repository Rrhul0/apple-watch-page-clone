import React from 'react'
import BandIcon from '../icons/bandIcon'
import SizesIcon from '../icons/sizesIcon'
import CaseIcon from '../icons/caseIcon'
import { useStore } from 'zustand'
import {
    activeFooterButtonStore,
    activeSectionStore,
    watchStore
} from '../store/store'
import { findAvailableOptions } from '../utils/common'

const Footer = () => {
    const { activeButton, setActiveButton } = useStore(activeFooterButtonStore)
    const { setActiveSection } = useStore(activeSectionStore)
    const {
        data: { watchName }
    } = useStore(watchStore)

    const availableCases = findAvailableOptions({
        watchName,
        optionName: 'case'
    })

    const availableBands = findAvailableOptions({
        watchName,
        optionName: 'band'
    })
    const availableSizes = findAvailableOptions({
        watchName,
        optionName: 'size'
    })

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
                    onClick={() => {
                        setActiveButton('size')
                        setActiveSection('size')
                    }}
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
                            options={availableSizes}
                        />
                    )}
                </button>
                <button
                    type='button'
                    className='button-footer button'
                    onClick={() => {
                        setActiveButton('case')
                        setActiveSection('case')
                    }}
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
                            options={availableCases}
                        />
                    )}
                </button>
                <button
                    type='button'
                    className='button-footer button'
                    onClick={() => {
                        setActiveButton('band')
                        setActiveSection('band')
                    }}
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
                            options={availableBands}
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
    options: { label: string; value: string; type: string; typeValue: string }[]
}) => {
    const { data, changeAttribute } = useStore(watchStore)
    const types = options.reduce((acc, { type, typeValue }) => {
        acc[type] = typeValue
        return acc
    }, {} as Record<string, string>)
    return (
        <fieldset className='optionsFieldset'>
            <legend className='ally'>{valueName}</legend>
            <ul className='options'>
                {Object.entries(types).map(([type, typeValue]) => (
                    <li key={typeValue + type}>
                        <label className='optionsLabel'>
                            <input
                                type='radio'
                                name={type}
                                className='ally'
                                value={typeValue}
                                checked={data[
                                    valueName.toLowerCase() as keyof typeof data
                                ].startsWith(typeValue)}
                                onChange={() => {
                                    changeAttribute(
                                        valueName.toLowerCase() as
                                            | 'case'
                                            | 'band'
                                            | 'size',
                                        options.find(
                                            op => op.typeValue === typeValue
                                        )?.value ?? ''
                                    )
                                }}
                            />
                            <span>{type}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </fieldset>
    )
}

import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import ChevronDown from '../icons/chevronDown'
import { WATCHES } from '../constants'
import { useStore } from 'zustand'
import { watchStore } from '../store/store'

const CollectionsDrawer = () => {
    const {
        data: { watchName },
        changeWatch
    } = useStore(watchStore)
    const [isOpen, setIsOpen] = useState(false)
    const drawerRef = useRef<HTMLDivElement>(null)
    const backdropRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (
            drawerRef.current &&
            !drawerRef.current.contains(event.target as Node) &&
            backdropRef.current &&
            !backdropRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <div
            className='collectionsContainer'
            aria-hidden='true'
        >
            <button
                type='button'
                onClick={() => setIsOpen(true)}
            >
                <div className='collectionsBlock'>
                    Collections
                    <span className='visuallyhidden'>Apple Watch</span>
                    <ChevronDown />
                </div>
            </button>
            {isOpen &&
                ReactDOM.createPortal(
                    <>
                        <div
                            ref={backdropRef}
                            className='backdrop'
                            onClick={() => setIsOpen(false)}
                        />
                        <div
                            ref={drawerRef}
                            className='drawer'
                            aria-modal='true'
                        >
                            <ul
                                className='collections'
                                aria-label='Choose a collection'
                            >
                                {WATCHES.map(watch => (
                                    <li key={watch.value}>
                                        <button
                                            type='button'
                                            data-index='0'
                                            className='collection-item'
                                            disabled={watch.value === watchName}
                                            onClick={() =>
                                                changeWatch(watch.value)
                                            }
                                        >
                                            {watch.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>,
                    document.body
                )}
        </div>
    )
}

export default CollectionsDrawer

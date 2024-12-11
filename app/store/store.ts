import { create } from 'zustand'

interface StoreState {
    data: {
        watchName: string
        case: string
        band: string
        size: string
        amount: string
    }
    changeAttribute: (
        attribute: 'case' | 'band' | 'size',
        value: string
    ) => void
}

export const watchStore = create<StoreState>(set => ({
    data: {
        watchName: 'Apple Watch Series 10',
        case: 'Jet Black Aluminum Case',
        band: 'Black Solo Loop',
        size: '46mm',
        amount: '429'
    },
    changeAttribute: (attribute, value) =>
        set(state => ({
            data: {
                ...state.data,
                [attribute]: value
            }
        }))
}))

interface ActiveFooterButtonState {
    activeButton: 'case' | 'band' | 'size' | null
    setActiveButton: (button: 'case' | 'band' | 'size' | null) => void
}

export const activeFooterButtonStore = create<ActiveFooterButtonState>(set => ({
    activeButton: null,
    setActiveButton: button =>
        set(() => ({
            activeButton: button
        }))
}))

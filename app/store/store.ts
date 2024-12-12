import { create } from 'zustand'
import { WATCHES } from '../constants'

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
        watchName: 'S10',
        ...WATCHES[0].defaultValues
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

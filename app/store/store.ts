import { create } from 'zustand'

interface StoreState {
    data: {
        watchName: string
        case: string
        band: string
        size: string
        amount: number
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
        amount: 429
    },
    changeAttribute: (attribute, value) =>
        set(state => ({
            data: {
                ...state.data,
                [attribute]: value
            }
        }))
}))

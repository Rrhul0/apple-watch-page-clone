import { create } from 'zustand'
import { WATCHES } from '../constants'
import { section } from 'motion/react-client'

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

interface TypeActiveSectionState {
    activeSection: 'case' | 'band' | 'size' | 'intro'
    setActiveSection: (section: 'case' | 'band' | 'size' | 'intro') => void
}

export const activeSectionStore = create<TypeActiveSectionState>(
    (set, get) => ({
        activeSection: 'intro',
        setActiveSection: section => {
            const activeSection = get().activeSection
            const currentActiveSection = document.querySelector(
                `.${activeSection}mat`
            )
            console.log(currentActiveSection)
            if (currentActiveSection) {
                currentActiveSection.classList.replace('enterDone', 'exiting')
                setTimeout(() => {
                    currentActiveSection.classList.replace(
                        'exiting',
                        'exitDone'
                    )
                }, 1500)
            }
            const newActiveSection = document.querySelector(`.${section}mat`)
            console.log(newActiveSection)
            if (newActiveSection) {
                newActiveSection.classList.replace('exitDone', 'entering')
                setTimeout(() => {
                    newActiveSection.classList.replace('entering', 'enterDone')
                }, 1500)
            }
            set(() => ({
                activeSection: section
            }))
        }
    })
)

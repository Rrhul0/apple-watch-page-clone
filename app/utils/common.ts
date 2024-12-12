import { BANDS, CASES, SIZES, TypeArrayOption, WATCHES } from '../constants'

const OPTIONS = {
    case: CASES,
    band: BANDS,
    size: SIZES
}

export const findAvailableOptions = ({
    watchName,
    optionName
}: {
    watchName: string
    optionName: 'case' | 'band' | 'size'
}) => {
    const watchData = WATCHES.find(watch => watch.value === watchName)
    const availableOptions = watchData?.availableOptions?.[optionName]
    return (
        availableOptions
            ?.map(value => {
                const foundType = OPTIONS[optionName].find(item =>
                    value.startsWith(item.value)
                )
                if (foundType) {
                    const foundOption = foundType.options.find(
                        option => option.value === value
                    )
                    if (!foundOption) return undefined
                    return {
                        label: foundOption?.labelPrefix ?? '',
                        value: value,
                        type: foundType.label,
                        typeValue: foundType.value
                    }
                }
            })
            .filter(caseItem => caseItem !== undefined) ?? []
    )
}

export const getName = (data: TypeArrayOption | undefined) => {
    if (!data) return ''
    return `${data.labelPrefix ?? ''} ${
        data.subLabel ? data.subLabel : data.label
    }`
}

export const getImageUrl = (name: string | string[], isCaseType: boolean) => {
    const names = Array.isArray(name) ? name.join('+') : name
    return `/${names
        .split(' ')
        .map(w => w.toLowerCase())
        .join('_')}.${isCaseType ? 'png' : 'jpeg'}`
}

import { BANDS, CASES, SIZES, TypeArrayOption, WATCHES } from '../constants'

const OPTIONS = {
    cases: CASES,
    bands: BANDS,
    sizes: SIZES
}

export const findAvailableOptions = ({
    watchName,
    optionName
}: {
    watchName: string
    optionName: 'cases' | 'bands' | 'sizes'
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

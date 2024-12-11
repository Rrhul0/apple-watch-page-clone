export const STAGES = ['intro', 'sizes', 'cases', 'bands'] as const

export type TStage = (typeof STAGES)[number]

export const AVAILABLE_SIZES = ['42mm', '46mm']

export const AVAILABLE_CASES = {
    Aluminum: ['Silver', 'Rose Gold', 'Jet Black'],
    Titanium: ['Natural', 'Gold', 'Slate']
}

export const ALL_CASES = Object.entries(AVAILABLE_CASES).reduce(
    (acc, [material, cases]) => [
        ...acc,
        ...cases.map(c => `${c} ${material} Case`)
    ],
    [] as string[]
)

export const AVAILABLE_CASE_TYPES = Object.keys(AVAILABLE_CASES)

export const AVAILABLE_BANDS = {
    'Stainless Steel': {
        'Milanese Loop': ['Natural', 'Gold', 'Slate'],
        'Link Bracelet': ['Natural', 'Gold', 'Slate']
    },
    'Sport Loop': [
        'Ultramarine',
        'Lake Green',
        'Blue Cloud',
        'Ink',
        'Plum',
        'Pride Edition',
        'Black Unity'
    ],
    'Sport Band': [
        'Lake Green',
        'Stone Gray',
        'Starlight',
        'Plum',
        'Black',
        'Denim',
        'Light Blush',
        'Prime Edition',
        'Black Unity'
    ],
    FineWoven: {
        'Magnetic Link': ['Black', 'Dark Toupe', 'Blackberry']
    },
    'Braided Solo Loop': [
        'Lake green',
        'Midnight',
        'Denim',
        'Chartreuse',
        'Magenta',
        'Prime Edition',
        'Black Unity'
    ],
    'Solo Loop': [
        'Star Fruit',
        'Ultramarine',
        'Lake Green',
        'Black',
        'Light Blush'
    ],
    'Nike Sport Loop': [
        'Black/Blue',
        'Starlight/Pink',
        'Grey/Blue',
        'Green/Grey',
        'Blue/Red'
    ],
    'Nike Sport Band': [
        'Volt Splash',
        'Magic Ember',
        'Midnight Sky',
        'Pure Platinum',
        'Desert Stone',
        'Kargo Khaki',
        'Blue Flame'
    ]
}

export const ALL_BANDS = Object.entries(AVAILABLE_BANDS)
    .reduce<string[]>((acc, [material, bands]) => {
        if (Array.isArray(bands)) {
            return [...acc, ...bands.map(band => `${band} ${material}`)]
        } else {
            return [
                ...acc,
                ...Object.entries(bands).flatMap(([bandType, colors]) =>
                    colors.map((color: string) => `${color} ${bandType}`)
                )
            ]
        }
    }, [] as string[])
    .flat()

export const AVAILABLE_BAND_TYPES = Object.keys(AVAILABLE_BANDS)

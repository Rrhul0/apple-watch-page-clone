export const STAGES = ['intro', 'sizes', 'cases', 'bands'] as const

export type TStage = (typeof STAGES)[number]

export const STAGES = ['intro', 'sizes', 'cases', 'bands'] as const

export type Stage = (typeof STAGES)[number]

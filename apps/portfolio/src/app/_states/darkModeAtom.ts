import { atomWithStorage } from 'jotai/utils'

// TODO: ちらつきを防ぐ
export const darkModeAtom = atomWithStorage('darkMode', false)

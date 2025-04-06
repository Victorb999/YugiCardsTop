import { atom } from "jotai"
import { CardType } from "../containers/Cards/types"

export const cardSetAtom = atom("")
export const cardFilterAtom = atom({ fname: "", level: "" })
export const SelectedCardAtom = atom<CardType>({} as CardType)

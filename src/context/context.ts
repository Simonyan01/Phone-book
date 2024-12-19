import { IContext } from "../types/types"
import { createContext } from "react"

export const ContactContext = createContext<IContext | undefined>(undefined)

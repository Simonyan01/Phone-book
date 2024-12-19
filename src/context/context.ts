import { IContext } from "../types/contact-types"
import { createContext } from "react"

export const ContactContext = createContext<IContext | undefined>(undefined)

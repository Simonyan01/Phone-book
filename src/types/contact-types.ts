import { Dispatch } from "react"

export type IContact = {
  id: string
  name: string
  phone: string
}

export type IState = {
  contacts: IContact[]
  loading: boolean
}

export type IAction = {
  type: Types
  payload: unknown
}

export type IContext = {
  state: IState
  dispatch: Dispatch<IAction>
}

export type IContactProps = {
  contact: IContact
}

export enum Types {
  SET_LOADING,
  SET_CONTACTS,
  DELETE_CONTACT,
}

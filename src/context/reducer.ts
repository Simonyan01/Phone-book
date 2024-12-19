import { IContact, IAction, IState, Types } from "../types/types"

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case Types.SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload as IContact[],
        loading: false,
      }
    case Types.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== (action.payload as string)),
      }
    case Types.SET_LOADING:
      return {
        ...state,
        loading: action.payload as boolean,
      }
    default:
      return state
  }
}

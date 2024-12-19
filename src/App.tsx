import { ContactList } from "@components/contacts-list"
import { ContactContext } from "@context/context"
import { initialState } from "@context/state"
import { reducer } from "@context/reducer"
import { useReducer } from "react"

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      <ContactList />
    </ContactContext.Provider>
  )
}
import styles from "@styles/contact-list.module.scss"
import { ContactContext } from "@context/context"
import { ToastContainer } from "react-toastify"
import { useContext, useEffect } from "react"
import { fetchContacts } from "@context/api"
import { Types } from "../types/contact-types"
import { Contact } from "./contact"
import Loader from "./loader"

export const ContactList = () => {
    const context = useContext(ContactContext)

    if (!context) {
        throw new Error("Out of bounds")
    }

    const { state, dispatch } = context

    useEffect(() => {
        fetchContacts()
            .then((res) => {
                dispatch({ type: Types.SET_CONTACTS, payload: res })
            })
    }, [dispatch])

    return (
        <div className={styles.contactListContainer}>
            <h1 className={styles.title}>Phone Book</h1>
            {state.loading ? (
                <Loader />
            ) : (
                <div className={styles.contactGrid}>
                    {state.contacts?.map((contact) => (
                        <Contact key={contact.id} contact={contact} />
                    ))}
                </div>
            )}
            <ToastContainer />
        </div>
    )
}

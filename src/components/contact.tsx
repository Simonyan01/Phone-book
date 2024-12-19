import { ContactContext } from "../context/context"
import styles from "../styles/contact.module.scss"
import { IContactProps, Types } from "../types/types"
import { deleteContact } from "../context/api"
import { useContext } from "react"

export const Contact: React.FC<IContactProps> = ({ contact }) => {
    const context = useContext(ContactContext)

    if (!context) {
        throw new Error("Out of bounds")
    }

    const { dispatch } = context

    const handleDelete = async (id: string) => {
        await deleteContact(id)
        dispatch({ type: Types.DELETE_CONTACT, payload: id })
    }

    return (
        <div className={styles.contactCard} key={contact.id}>
            <div className={styles.contactInfo}>
                <strong>{contact.name}</strong>
                <span>{contact.phone}</span>
            </div>
            <button
                type="button"
                className={styles.deleteButton}
                onClick={() => handleDelete(contact.id)}
            >
                Delete
            </button>
        </div>
    )
}

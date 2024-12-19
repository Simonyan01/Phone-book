import { IContact } from "../types/types"
import { toast } from "react-toastify"
import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:8080",
})

export const fetchContacts = async (): Promise<IContact[]> => {
  const response = await API.get("/contacts")
  return response.data
}

export const deleteContact = async (id: string): Promise<IContact> => {
  const response = await API.delete(`/contacts/${id}`)

  if (response.status === 200) {
    toast.success("Contact deleted successfully ! ! !")
  } else {
    toast.error(`Failed to delete contact. Status: ${response.status}`)
  }

  return response.data
}

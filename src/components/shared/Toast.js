import { toast } from 'react-toastify'

export const notify = (text, type) => {
    type === "success" ?
        toast.success(text, { backgroundColor: "red" }) :
        toast.error(text, { background: "red" })
}
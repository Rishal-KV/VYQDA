import { MdDelete } from "react-icons/md";

import { dateHelper } from "../../helpers/dateHelper";
import { noteApi } from "../../api/noteApi";
const Card = ({ title, content, date, setNote, id, }) => {

    const handleDelete = (noteId) => {
        noteApi.deleteNote(noteId).then((res) => {
            setNote([...res.remainingNotes])
        })
    }
    return (
        <div className="w-full max-w-xs text-center relative">
            <div className=" h-64 overflow-y-scroll object-cover object-center w-full  mx-auto rounded-lg bg-customWhite border-4 border-blue-200 w-64 ">
                <div className="py-6 px-4">
                    <h5 className="text-lg font-bold text-gray">{title}</h5>
                    <p className="mt-2 font-medium text-gray">
                        {content}
                    </p>
                    <p className="mt-2 text-sm text-gray">Added on: {dateHelper(date)}</p>
                </div>
                <button onClick={() => handleDelete(id)} className="absolute p-2 text-2xl bottom-2 right-2 text-gray">
                    <MdDelete />
                </button>

            </div>
        </div>
    )
}

export default Card

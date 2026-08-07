import { FileText } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const NoteSection = () => {
    const [note, setNote] = useState('')

    const handleNoteChange = (e) => {
        setNote(e.target.value)
    }

    return (
        <div className="p-4 border-b">
            <h2 className="text-lg font-semibold mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2" />Order Note
            </h2>
            <div className="space-y-3">
                <Textarea 
                    className='w-full p-2 border rounded-md text-sm '
                    placeholder="Enter note..."
                    value={note}
                    onChange={handleNoteChange}
                />
            </div>
        </div>
    )
}

export default NoteSection
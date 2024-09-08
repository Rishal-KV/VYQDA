import Note from "../models/note.model.js";


export const addNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = await Note.create({ title, content });
        res.status(201).json({newNote,status:true,message:"Note Added!!!"})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const listNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}

export const deleteNotes = async (req, res) => {
    try {
        console.log(req.query,"queryyy")
        const { noteId } = req.query; 
       if (!noteId) {
            return res.status(400).json({ message: 'Note ID is required' });
        }

        const deleteCount = await Note.destroy({
            where: { id: noteId }
        });

        if (deleteCount === 0) {
            return res.status(404).json({ message: 'Note not found' });
        }

        const remainingNotes = await Note.findAll();

        res.status(200).json({remainingNotes,status:true});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

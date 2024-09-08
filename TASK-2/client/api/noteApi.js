import { axiosInstance } from "./axiosInstance";


export const noteApi = {
    addNote: async (data) => {
        try {
            const response = await axiosInstance.post('/notes', data);
            return response.data

        } catch (error) {
            throw error
        }
    },
    fetchNote: async () => {
        try {
            const response = await axiosInstance.get('/notes');
            return response.data
        } catch (error) {
            return error
        }
    },
    deleteNote: async (noteId) => {
        try {
            const response = await axiosInstance.delete(`/notes?noteId=${noteId}`);

            return response.data
        } catch (error) {
            return error
        }
    }

}
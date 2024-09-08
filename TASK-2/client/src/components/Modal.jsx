import React from 'react'
import { useFormik } from "formik";
import { noteValidationSchema } from '../../validations/note';
import { noteApi } from '../../api/noteApi';
import { toast } from 'sonner';

const Modal = ({ setNote }) => {
    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
        },
        validationSchema: noteValidationSchema,
        onSubmit: (data) => {
  noteApi.addNote(data).then((res)=>{
    if (res.status) {
        setNote((prevState) => [...prevState,res.newNote])
        toast.success(res.message)
        formik.resetForm({
            title : "",
            content : ""
        })
        document.getElementById('my_modal_1').close()
    }
  })
           
        },
    });
    return (
        <dialog id="my_modal_1" className="modal fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="modal-box bg-white p-6 rounded-lg max-w-lg w-full">
                <h3 className="font-bold text-lg mb-4">Add New Note</h3>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Title
                            <input
                                type="text"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm ${formik.errors.title && formik.touched.title ? 'border-red-500' : ''
                                    }`}
                                placeholder="Enter note title"
                            />
                        </label>
                        {formik.errors.title && formik.touched.title ? (
                            <p className="mt-2 text-sm text-red-600">{formik.errors.title}</p>
                        ) : null}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Content
                            <textarea
                                name="content"
                                value={formik.values.content}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm ${formik.errors.content && formik.touched.content ? 'border-red-500' : ''
                                    }`}
                                placeholder="Enter note content"
                                rows="4"
                            />
                        </label>
                        {formik.errors.content && formik.touched.content ? (
                            <p className="mt-2 text-sm text-red-600">{formik.errors.content}</p>
                        ) : null}
                    </div>
                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            type="button"
                            onClick={() => document.getElementById('my_modal_1').close()}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default Modal

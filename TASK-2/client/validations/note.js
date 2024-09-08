// src/validationSchema.js
import * as Yup from 'yup';

export const noteValidationSchema = Yup.object({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title can be up to 100 characters'),
  content: Yup.string()
    .required('Content is required')
    .min(10, 'Content must be at least 10 characters')
    .max(1000, 'Content can be up to 1000 characters'),
});

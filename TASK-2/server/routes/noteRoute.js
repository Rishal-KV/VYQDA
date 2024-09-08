import express from 'express';
import { addNotes, listNotes, deleteNotes } from '../controllers/noteController.js';
const noteRoute = express();

noteRoute.route('/notes').
post(addNotes).
get(listNotes).
delete(deleteNotes);

export default noteRoute;
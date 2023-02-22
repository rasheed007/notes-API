const noteModel = require('../models/noteModel');
const moment = require('moment');

// A controller for CRUD Operations for our noteApp

// CREATE
exports.createNote = async (req, res) => {
    const body = req.body;
    const note = await noteModel.create({
        description: body.description,
        created_at: moment().toDate(),
    })
    return res.json({ status: true, note })
}

// READ A PARTICULAR NOTE
exports.getNote = async (req, res) => {
    const { id } = req.params;
    const note = await noteModel.findById(id)

    if (!note) {
        return res.status(404).json({ status: false, note: null})
    }
    return res.json({ status: true, note })
}

// READ ALL NOTES , PAGINATION AND SORTING 
exports.getNotes = async (req, res) => {
    const { query } = req;

    const {
        created_at, 
        note = 'asc',
        note_by = 'created_at',
        page = 1,
        per_page = 5
     } = query;

     const findQuery = {};

     if (created_at) {
        findQuery.created_at = {
            $gt: moment(created_at).startOf('day').toDate(),
            $lt: moment(created_at).endOf('day').toDate(),
        }
     }

     const sortQuery = {};
     const sortAttributes = note_by.split(',')

     for (const attribute of sortAttributes) {
        if (note === 'asc' && note_by) {
            sortQuery[attribute] = 1
        }

        if (note === 'desc' && note_by) {
            sortQuery[attribute] = -1
        }
     }

     const notes = await noteModel
     .find(findQuery)
     .sort(sortQuery)
     .skip(page)
     .limit(per_page)

     return res.status(200).json({ status: true, notes})
}

// UPDATE OPERATION
exports.updateNote = async (req, res) => {
    const { id } = req.params;
    const update = req.body; // assuming the update data is sent in the request body
  
    try {
      const note = await noteModel.findByIdAndUpdate(id, update, { new: true });
      return res.json({ status: true, note });
    } catch (error) {
      console.log(error);
      return res.json({ status: false, error: error.message });
    }
  };
  
// DELETE OPERATION
exports.deleteNote = async (req, res) => {
    const { id } = req.params;

    const note = await noteModel.deleteOne({ _id: id})

    return res.json({ status: true, note })
}


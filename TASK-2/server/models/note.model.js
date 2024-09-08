import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Note = sequelize.define('Note', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },


}, {
    // Options
    tableName: 'notes',
    timestamps: true,
});


export default Note;
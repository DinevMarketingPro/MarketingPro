const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        nameOfProject: { type: String, required: true, trim: true },
        nameOfCompany: { type: String, required: true, trim: true },
        description: { type: String, default: "", trim: true },
        phone: { type: String, required: true, trim: true, minlength: 6 },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
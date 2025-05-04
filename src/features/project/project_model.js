const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    coverImage: { type: String }, // image URL
    description: { type: String },
    type: { type: String, enum: ['book', 'game', 'personal'], default: 'personal' },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);

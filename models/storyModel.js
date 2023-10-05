const mongoose = require('mongoose');


const StorySchema = new mongoose.Schema({
    storyTitle: {
        type: String},
    storyDetails: {
        type: String},
    likes: {
        type: Number,
        default: 0,
        }   
}, {timestamps:true})

const Story = mongoose.model('Story', StorySchema);

module.exports = Story;
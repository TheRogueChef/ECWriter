const Story = require('../models/storyModel');

module.exports={

allStories: (req, res) => {
    Story.find({})
        .then((allStories) => {
            res.json(allStories)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

oneStory: (req, res) => {
    Story.findOne({_id: req.params.id})
        .then((story) => {
            res.json(story)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},
}
const StoryController = require('../controllers/storyController')

module.exports = app => {
    app.get('/api/allStories', StoryController.allStories)
    app.get('/api/oneStory/:id', StoryController.oneStory)
}
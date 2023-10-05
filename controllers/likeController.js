const Story = require('../controllers/storyController');



const incrementLikes = async (req, res) => {
    const { storyId } = req.body;
    

    try {
        await Story.updateOne({ _id: storyId }, { $inc: { likes: 1 } });

        res.json({ message: 'Likes incremented' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    incrementLikes
};

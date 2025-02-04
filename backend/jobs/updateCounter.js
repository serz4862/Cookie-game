import User from '../models/userModel.js';

const updateCounter = async (req, res) => {
    try {
        let user = await User.findOneAndUpdate(
            {},
            { $inc: { counter: 1 } },
            { new: true, upsert: true }
        );

        let message = 'Counter updated';
        const chance = Math.random();

        if (chance < 0.50) {
            user.counter += 10;
            message = "You got 10 extra points!";
        } else if (chance < 0.75) {
            user.prizes += 1;
            message = "You won a prize!";
        }

        await user.save();

        res.status(200).json({
            message,
            data: {
                counter: user.counter,
                prizes: user.prizes,
            }
        });
    } catch (error) {
        console.error('Error in updateCounter:', error);

        res.status(500).json({
            error: 'Something went wrong. Please try again later.',
            details: error.message,
        });
    }
};

const resetCounter = async (req, res) => {
    try {
        let user = await User.findOneAndUpdate(
            {},
            { $set: { counter: 0, prizes: 0 } },
            { new: true, upsert: true }
        );

        res.status(200).json({
            message: 'Counter and Prizes have been reset!',
            data: {
                counter: user.counter,
                prizes: user.prizes,
            }
        });
    } catch (error) {
        console.error('Error in resetCounter:', error);

        res.status(500).json({
            error: 'Something went wrong during reset. Please try again later.',
            details: error.message,
        });
    }
};

export { updateCounter, resetCounter };

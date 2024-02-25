import User from '../models/user.model.js';

export const getMerits = async (req, res) => {
    try {
        const { uid } = req.query;
        const user = await User.find({ uid: uid });

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found',
            });
        }

        const ans = user.reduce(
            (acc, curr) => acc + parseInt(curr.parameters.merits),
            0
        );

        res.status(200).json({
            success: true,
            data: ans,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

export const getSocial = async (req, res) => {
    try {
        const { uid } = req.query;

        const user = await User.find({ uid: uid });

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found',
            });
        }

        const ans = user.reduce(
            (acc, curr) => acc + parseInt(curr.parameters.total_impacts),
            0
        );

        res.status(200).json({
            success: true,
            data: ans,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

const InfoDetails = require('../models/infoDetails.js')

exports.getInfo = async (req, res) => {
    try {
        const infoData = await InfoDetails.find({});

        res.status(200).json(infoData);

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

exports.addInfo = async (req, res) => {
    const data = req.body;

    const newInfo = new InfoDetails(data)
    try {
        await newInfo.save()

        res.status(201).json(newInfo)
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}
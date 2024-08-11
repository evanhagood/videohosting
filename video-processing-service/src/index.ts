import express = require('express');
import ffmpeg = require('fluent-ffmpeg');

    const app = express();

    app.post("/processvideo", (req, res) => {
        // Get path of the input video
        const inputFilePath = req.body.inputFilePath;
        const outputFilePath = req.body.outputFilePath;

        if(!inputFilePath || !outputFilePath) {
            res.status(400).send("Bad request: Missing file path.")
        }

        ffmpeg(inputFilePath)
            .outputOptions("-vf", "scale=-1:360") // video into 360p
            .on("end", () => {
                res.status(200).send("Video processing finished successfully");
            })
            .on("error", (err) => {
                console.log("an error occured");
                res.status(500).send(`Internal Server Errror: ${err.message}`);
            })
        .save(outputFilePath);
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Video processing service listening at http://localhost:${port}`);
    });
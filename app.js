/**
 * Author: Ryann Flores
 * Date: September 1, 2022
 * Description: An api with an endpoint /message that accepts and returns a JSON object
 */
import express from 'express';
import bodyParser from 'body-parser';
import { isFarewellExists, isGreetingExists } from './utils/utils.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * @description: Endpoint that accepts and returns a JSON object
 * @method: POST
 * @payload: { conversation_id: '',  message: ''}
 * @returns: { response_id: '',  response: ''}
 */
app.post('/message', function (req, res) {
    // only continue if the property conversation_id and message are both found
    if (req.body.hasOwnProperty("conversation_id") && req.body.hasOwnProperty("message")) {
        let finalMessage = isGreetingExists(req.body.message) ? 'Welcome to StationFive.' : isFarewellExists(req.body.message) ? 'Thank you, see you around' : `Sorry, I don't understand.`;

        res.json({ response_id: req.body.conversation_id, response: finalMessage });
    } else {
        // return a JSON response stating that the payload is invalid.
        res.json({ response_id: null, response: 'Invalid payload' });
    }
});

// standard entry point of the API
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});
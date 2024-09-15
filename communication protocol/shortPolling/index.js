import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let data = 'initial data';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/getData", (req, res) => {
    res.send({ data })
})

app.get('/updateData', (req, res) => {
    data = `updated data ${Math.random() * 10}`;
    res.send({ data })
})

const port = 4001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
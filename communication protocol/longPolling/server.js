const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

let data = 'initial data';
const clientWaiting = [];

app.get("/getData", (req, res) => {
    if (req.query.lastData !== data) {
        res.json({ data })
    } else {
        clientWaiting.push(res)
    }
});

app.get("/upgateData", (req, res) => {
    data = req.query.newData;
    console.log("new data",data)
    while (clientWaiting.length > 0) {
        let client = clientWaiting.pop();
        client.json({data})
    }

    res.send({message : "updated data send successfully"})
})





const port = 4002;
app.listen(port, () => {
    console.log(`server is listing on port on ${port}`)
})
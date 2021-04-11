const express = require('express');
const app = express();
const process = require('process');
const port = 3000;

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}   

app.get('/', (req, res) => {
    console.log('root on ' + process.pid);
    setTimeout(async () => {
        await sleep(5000);
        console.log('root done on ' + process.pid);
        res.send('Root ! ==> ' + process.pid);
    }, 1000)
})

app.get('/info', async (req, res) => {
    console.log('info on ' + process.pid);
    // await sleep(5000);
    res.send('Info ! ==> ' + process.pid);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
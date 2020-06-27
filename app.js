const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT;
 
app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(PORT, () => console.log('app listening on port ' + PORT));


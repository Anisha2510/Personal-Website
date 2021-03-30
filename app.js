const express = require('express');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home')
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});
// app.listen(3000, () =>{
//     console.log('PORT 3000 CONNECTED!');
// })
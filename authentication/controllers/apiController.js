const fetch = require('node-fetch');
const apiController = {};

apiController.googleBooks = (req, res, next) => {
    const urlPartOne = 'https://www.googleapis.com/books/v1/volumes?q='
    const urlPartTwo = req.body.updatedString
    const urlPartThree = '&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    const finalUrl = urlPartOne + urlPartTwo + urlPartThree;
    // const finalUrl = 'https://www.googleapis.com/books/v1/volumes?q=Moby+Dick&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    console.log('in api controller')
    res.locals.data = [];
    fetch(finalUrl)
    .then(response => response.json())
    .then(data => {
        res.locals.data.push(data.items[0]);
        return next();
    })
    .catch(err => console.log(err))
} 

apiController.otherAPI = (req, res, next) => {
    const urlPartOne = 'https://www.googleapis.com/books/v1/volumes?q='
    const urlPartTwo = req.body.updatedString
    const urlPartThree = '&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    const finalUrl = urlPartOne + urlPartTwo + urlPartThree;
    // const finalUrl = 'https://www.googleapis.com/books/v1/volumes?q=Moby+Dick&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    console.log('in api controller')
    res.locals.data = 'in api controller'
    fetch(finalUrl)
    .then(response => response.json())
    .then(data => {
        res.locals.data.push(data.items[0]);
        return next();
    })
    .catch(err => console.log(err))
} 

module.exports = apiController

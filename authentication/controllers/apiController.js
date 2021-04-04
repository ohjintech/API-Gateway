const fetch = require('node-fetch');
const apiController = {};

apiController.googleBooks = (req, res, next) => {
    const urlPartOne = 'https://www.googleapis.com/books/v1/volumes?q='
    const urlPartTwo = req.body.updatedString
    const urlPartThree = '&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    // const finalUrl = urlPartOne + urlPartTwo + urlPartThree;
    const finalUrl = 'https://www.googleapis.com/books/v1/volumes?q=Moby+Dick&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU'
    console.log('in api controller')
    res.locals.data = 'in api controller'
    fetch(finalUrl)
    .then(response => response.json())
    .then(data => {
        consoledData = data.items;
        console.log(consoledData);
        return next();
    })
    .catch(err => console.log(err))

    // res.locals.finalUrl = finalUrl;
    // axios.get(finalUrl)
    // .then(response => {
    //     console.log('response data:', response.data);
    //     // console.log(response.data);
    //     // res.send(response.data.status);
    //     res.locals.data = response
    //     return next();
    // })
    // .catch(error => {
    //     console.log(error);
    // });
    // fetch(finalUrl)
    // .then(response => 
    //     response.json())
    // .then(data => {
    //     // res.locals.data = data;  
    //     console.log('data');
    //     return next(); 
    // })
    // .catch(err => console.log('This is the catch'))
} 


module.exports = apiController

const express = require('express');
const app = express();

app.get( '/', (request, respond) => {
    respond.send('Hello World');
} );

app.get( '/api/courses', (request, respond) => {

    respond.send( [1, 2, 3] );
});

app.listen(3000, () => {

    console.log('Listening to you Saloma');
});
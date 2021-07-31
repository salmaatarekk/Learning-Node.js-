const express = require('express');
const app = express();

const courses = [
    { id: 1, name: 'course1'},
    { id : 2, name: 'course2'},
    {id :3, name :'course3'}
];

app.get( '/', (request, respond) => {
    respond.send('Hello World!!!!');
} );

app.get( '/api/courses', (request, respond) => {

    respond.send( courses );
});

app.get('/api/courses/:id', (request, respond) => {
   const course =  courses.find(c => c.id == parseInt(request.params.id) );
   if(!course)
   respond.status(404).send('The course with the given ID was not found') ;
   else
   respond.send(course);

});


// PORT 
let port = process.env.port || 3000;
app.listen(port, () => {

    console.log(`Listening to you ${port}...`);
});
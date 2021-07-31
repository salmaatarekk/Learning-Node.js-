const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json()); 


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


app.post('/api/courses', (req, res) => {

    // Validate the input first
    const schema = {
        name : Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema);
    if(result.error)
    {
        res.status(404).send(result.error.details[0].message);
        return;
    }

    //if ( !req.body.name || req.body.name.length < 3) 
    //{
        // 400 bad request
      //  res.status(400).send('Name is required and should be minimum 3 characters');
        //return;
   // }

    const course = {
        id : courses.length + 1,
        name : req.body.name
    };
    courses.push(course);
    res.send(course);

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
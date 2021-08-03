const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
    .then( () => console.log('Connected to mongoDB...') )
    .catch(err => console.error('Couldnot connect to mongoDB', err));

const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String ], 
    date : { type : Date, default : Date.now },
    isPublished : Boolean
});

const Course = mongoose.model( 'Course', courseSchema ); // This is a class Not an Object
async function createCourse()
{

const course = new Course({
    name : 'Angular Course',
    Author : 'Mosh',
    tags : ['angular', 'frontend'],
   isPublished : true 
});

const result = await course.save();
console.log(result);
}

async function getCourses()
{
    // eq ( equal)
    // ne ( not equal)
    // gt ( greater than)
    // gte ( greater than or equal to)
    // lt ( less than)
    // lte (less than or equal to)
    // in
    // nin (not in)

    //LOGICAL OPERATORS/
    // or
    // and

   const courses = await Course
   //.find( { author : 'Mosh', isPublished : true } )
   //.find( {price : {$gt : 10, $lte : 20} })
  // .find( {price : {$in : [10, 20, 30] } })
  //.find()
  //.or([{author : 'Mosh'}, {ispublished : true}])
   //.find({author : /^Mosh/}) // authors start with Mosh
  // .find({author : /Hamedani$/i }) // authors ends with Hamedani // i for case insensetive
   .find({author : /.*Mosh.*/}) // contains Mosh..{.*} zero or more characters 
   .skip((pageNumber - 1) * pageSize)
   .limit(10).sort( {name : 1 }) //  1 sort accending , -1 descending
   //.select({name : 1, tags : 1});
   .count();
   
   console.log(courses);
}

getCourses();

const express = require('express')
const app = express()
app.use(express.json()); 
const courses=[{
    id: 1,
    name: "JavaScript"
},
{
    id: 2,
    name: "FSD"
}]
app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/courses', function(req,res){
    res.send(courses);
});
app.get('/courses/:id', function(req,res){
    let courseId=req.params.id
    var course = courses.find(function(x) {
        if(x.id == courseId)
            return true;
            
    });
    var course = courses.find((c) => c.id == parseInt(courseId));
    if(!course){
        res.status(404).send("Course  not found");
    }else{
        res.send(course)
    }
  
    console.log(course)
});

app.post("/course", function (req, res) {

    var course = { id: courses.length + 1, name: req.body.name }; 
    //push that object into the courses array
    console.log(req) 
    courses.push(course); 
    res.send(course); 
}); 
app.listen(3000)
console.log("server listin on port 3000")
   
const { MongoClient } = require('mongodb');

const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


//Checking Connection

// mongoClient.connect(url,(err,db)=>{
//     if(err)throw err;
//     console.log("Connected");
//     db.close();
// })


//Creating Database 

// mongoClient.connect(url,(err,db)=>{
//     if(err) throw err
//     let dbo = db.db("quiz")

//     dbo.createCollection("questions",(err,res)=>{
//         if(err)throw err
//         console.log("Collection questions is created");
//     })

//     dbo.createCollection("options",(err,res)=>{
//         if(err) throw err
//         console.log("Collection option is created");
//     })

//     dbo.createCollection("answers",(err,res)=>{
//         if(err) throw err
//         console.log("Collection answers is created");
//     })
// })

//Insert 

// const question = [{ question:"Which is the hottest planet in our solar system?"},
//     { question: "Which is the largest astero?"},
//     { question: "What year were the first astronauts selected?" },
//     { question: "What mass does the sun take up in the solar system?" },
//     { question: "Which was the first animal to go into space?" }]


// const options = [ {options: ["Mercury","Earth","Venus","Mars"] },
//                 { options: [ "Ceres","4 Vesta","Bennu","2 Pallas"] },
//                 { options: ["1959", "1998", "1958", "1963"] },
//                 { options: ["Scott Kelly", "Yuri Gagarin", "Nick Hauge", "Neil Armstrong"] },
//                 { options: ["Mouse", "Cat", "Dog", "Monkey"] }] 


// const answers = [{ answer: "Mercury" }, { answer: "Ceres" }, { answer: "99.86" }, { answer: "Yuri Gagarin" },
//                  { answer: "Dog" }]


// mongoClient.connect(url,(err,db)=>{
//     if(err) throw err
//     var dbo = db.db("quiz")

    //inserting data into questions document
    // dbo.collection("questions").insertMany(question,(err,res)=>{
    //     if(err)throw err
    //     console.log("documents inserted into questions collection");
    // })

    //inserting data into options document
    // dbo.collection("options").insertMany(options, (err, res) => {
    //     if (err) throw err
    //     console.log("documents inserted into options collection");
    // })

    //inserting data into answers document
    // dbo.collection("answers").insertMany(answers, (err, res) => {
    //     if (err) throw err
    //     console.log("documents inserted into answers collection");
    // })
    // db.close();

// })

//Display 

MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    var dbo = db.db("quiz")

    // Display only one question
    dbo.collection("questions").findOne({ question: "Which is the largest astero?"},(err,res)=>{
        if(err) throw err
        console.log(res);
        db.close()
    })

    // Display all qustions
    dbo.collection("questions").find({}).toArray(function(err, res) {
        if (err) throw err
        console.log("Found");
        console.log(res);
        db.close()
    })
})

//update 

// mongoClient.connect(url,(err,db)=>{
//     if(err) throw err
//     var dbo = db.db("quiz")
//     dbo.collection("questions").updateOne({ question: "What year were the first astronauts selected?" },
//         { $set: { question: "What year were the second astronauts selected?"}},(err,res)=>{
//         if(err) throw err
//         console.log("Updated one document");
//         db.close()
//     })
// })

//Delete 

// mongoClient.connect(url,(err,db)=>{
//     if(err) throw err
//     var dbo = db.db("quiz")
//     dbo.collection("questions").deleteOne({ question: "What year were the second astronauts selected?" },(err,res)=>{
//         if(err) throw err
//         console.log("Deleted one document");
//         db.close()
//     })
// })
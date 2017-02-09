console.log("satrted the application")
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser());
var mongo=require('mongodb').MongoClient;
const URL = "mongodb://localhost:27017/APPStyles"
var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Server  listening at http://%s:%s", host, port)
})


app.get('/home_style',(req,res)=>{

        mongo.connect(URL,(err,db)=>{
        if(!err){
            db.collection('HomeStyle',(err,collection)=>{
                if(!err){
                    collection.find({"target":"homebgcolor"}).toArray((err,docs)=>{
                        if(err){
                            db.close()
                        }
                        res.send(docs)
                        db.close()
                    })
                }
            })
        }
    })
    }
    
)


app.post('/home_style',(req,res)=>{
    console.log("Updating Style To Database")
    const HomeBgColor = req.body.homebgColor
    console.log(HomeBgColor)
    

    mongo.connect(URL,(err,db)=>{
        if(!err){
            db.collection('HomeStyle').update({
                "target" : "homebgcolor"
            },{
                "target" : "homebgcolor",
                "bgcolor":"#000"
            },(err, res)=>{
                if(err){
                    console.log(err)
                }
            })
            db.close()
            res.send("Updated BG Successfully")

            
        }
    })
    

})
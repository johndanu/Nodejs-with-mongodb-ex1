var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = [
    {"Song Name": "Thaniye Thananthaniyea", Film: "Rhythm", "Music Director" : "A.R. Rahman", Singer:"Shankar Mahathevan"},
    {"Song Name":"Evano Oruvan",Film:"Alai Payuthey","Music Director" : "A.R. Rahman", Singer:"Swarnalatha"},
    {"Song Name":"Roja Poonthoodam",Film:"Kannukul Nilavu","Music Director" : "Ilayaraaja", Singer:["Unnkirishnan", "Anuradha Sriram"]},
    {"Song Name":"Vennilavae Vennilavee Vinnaithaandi",Film:"Minsara Kanavu","Music Director" : "A.R. Rahman", Singer:["Hariharan","Sadhana Sargam"]},
    {"Song Name":"Sollamal Thottu Chellam Thendral",Film:"Dhaeena","Music Director" : "Yuvan Shankar Raja", Singer:"Hariharan"}];
  dbo.collection("songdetails").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

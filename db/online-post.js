var db = new restdb("5e9f69b5436377171a0c26f8");
var query = {}; // all
var hint = {"$max": 10}; // first 10 only

var obj = new db.wishes({"email": "jay@j.com", "name": "test", "message": "message", "active": false});

obj.save(function(err, res){
  if (!err){
    console.log(err)
  }
  console.log(res)
});

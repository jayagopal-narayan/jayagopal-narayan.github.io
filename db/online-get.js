var db = new restdb("5e9f69b5436377171a0c26f8");

// var obj = new db.wishes({"email": "jay@j.com", "name": "test", "message": "message", "active": false});

// db.product.find(query, hint, function(err, productlist){
//   console.log(productlist)
//   console.log(err)
//   console.log('check')
//   // productlist is an array of product objects ...
// });

var query = {}; // get all records
var hints = {"$max": 10, "$orderby": {"_id": -1}}; // top ten, sort by creation id in descending order
db.wishes.find(query, hints, function(err, res){
// db.wishes.getById('5ea01d1fe332cd26000d0468', function (err, res){
  if (err){
    console.log(err)
  }
  if (res){
    console.log(res)
  }
});

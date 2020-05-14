
  var dbo = db.db("dashboarddb");
  var myobj = { username: "jaswanth", password: "jaswanth" };
  dbo.collection("authentication").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
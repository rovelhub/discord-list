let router = require("express").Router();
var { fetch } = require("rovel.js");

router.get("/themes/:name",(req, res)=>{
 var name = req.params.name;
 const themes = ["discord", "dracula"];
 if(themes.includes(name)){ //we're checking the name so if its invalid, it doesn't fuck up the css.
  res.cookie('theme', name, {
   maxAge: 30 * 3600 * 24 * 1000, //30days
   httpOnly: true,
   secure: true
  });
  res.json({success: true});
 }
 else{
  res.json({err: "invalid_theme"});
 }
});

module.exports = router;
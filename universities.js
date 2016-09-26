var request = require('request');

exports.getUniversitiesIn = function(country,cb)  {
  return request('http://universities.hipolabs.com/search?country=' + country,function(err,response){
    console.log('Found',err,response.data);
    if(err) return cb(err);
    cb(null,response.data);
  });
}


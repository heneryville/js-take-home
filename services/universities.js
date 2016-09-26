var request = require('request');

exports.findByCountry = function(country,cb)  {
  return request('http://universities.hipolabs.com/search?country=' + country,function(err,data){
    if(err) return cb(err);
    cb(null,JSON.parse(data.body));
  });
}


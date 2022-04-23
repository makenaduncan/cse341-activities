// const res = require("express/lib/response");

displayName = (req, res) => { 
    const data =
      'Kelly Summers';
    res.status(200).send(data);
  };

//   res.status(200).send(data) will let us send whatever we want. 200 is an http response status code
  
  module.exports = {
    displayName,
  };

//   req is short for request and res is short for response
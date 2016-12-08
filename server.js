const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))
app.get('/', (request, response) => {
  var options = {
   root: __dirname + '/public/',
   dotfiles: 'deny',
   headers: {
       'x-timestamp': Date.now(),
       'x-sent': true
   }
 };

 var fileName = "index.html";
 response.sendFile(fileName, options);
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

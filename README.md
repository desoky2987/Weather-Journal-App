# Weather-Journal App Project
## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 
### Table of Contents
- Project Title
- Demo-Preview
- Table of Contents
- Instructions
- Extras
- Usage
- Development
- Contribute
- Author Name
### Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.
#### Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.
##### Usage
Weather-Journal App Project use to get temp from a weather abi
###### Development 
in server.js
- install ( express , body-parser , cors )
- require('express')
- require('body-parser')
- require('cors')
- app.listen(port, () ) to test server running
- app.get('/getRoute', (req,res) to get data in server side
- app.post('/postRoute', (req,res) to post data in server side
in app.js
- .addEventListener on generate botton on click 
- await fetch to get the response data from abi
- .json() to convert data from stream to js
- await fetch('/postRoute', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify ({})
} to post data in client side with fehch
- updateUI = async () to update data into project object
- await fetch('/getRoute') to get data in client side with fech
###### Author Name
Mahmoud Mohamed Mahmoud Desoky

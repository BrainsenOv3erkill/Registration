

const express = require("express");
const app = express();
const PORT = 3000;

const fs = require("fs");  




app.use(express.urlencoded({ extended: true }));


 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html" );

});



app.post("/submit", (req, res) => {

//  const { name, email, password } = req.body;    

  let datenSpeicher = []
    datenSpeicher.push(req.body.name)
    datenSpeicher.push(req.body.email)
    datenSpeicher.push(req.body.password)


     fs.appendFile(__dirname + "/userdaten.txt", datenSpeicher.join("\n"), (err) => {
            if (err) {
              res.status(500).send('Fehler beim Speichern der Daten');
              return;
            }
            console.log('Daten wurden zur Datei hinzugefügt.');
            res.send('Daten wurden erfolgreich empfangen!');
     })

//    console.log(req.body)  
//    res.send(201);
});

app.listen(PORT, () => {
    console.log(`Der Server wurde gestartet auf Port: ${PORT}`);

});
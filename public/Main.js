const sqlite3 = require('sqlite3').verbose();
const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {
    win = new BrowserWindow({width:800, height:600});

    win.loadURL('http://localhost:3000/');
};

const dbPath = path.resolve(__dirname, 'pollen.db');

let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Great success! VERY NICE!');
});

function insertData(){
    db.run("INSERT INTO pollen(name) VALUES('ya')");
}

db.run("CREATE TABLE IF NOT EXISTS pollen(name text)", (err) => {
    if (err){
        return console.error(err.message);
    }
    //console.log('pollen TABLE created successfully'); 
    insertData();
}
);




app.on('ready', createWindow);

app.on('window-all-closed', () => {
    db.close();
    app.quit();
});
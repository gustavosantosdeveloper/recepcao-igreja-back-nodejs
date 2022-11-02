const database = require('mongoose')
const senha = 'lucas2005'
const URL_DATABASE = `mongodb+srv://zumiramongo:${senha}@cluster0.w4zwpjz.mongodb.net/?retryWrites=true&w=majority`
connection();
async function connection(){
    try{
        await database.connect(URL_DATABASE);
        console.log(database.now());
    }
    catch(error){
        console.log(error);
    } 
}

module.exports = database;
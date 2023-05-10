const mysql=require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Sahil3453%%',
    database:'nodecomplete'
});
module.exports=pool.promise();


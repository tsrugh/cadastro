import conn from "./src/connection/connection.js";
import {promisify} from 'util'

function main(){
    
    conn.connect()
   
    const teste = promisify(conn.query).bind(conn)

    teste(`SELECT * FROM Usuario`).then((results) => {
        console.log(results)
    }).catch((error) => {

        console.log('error', error)
        
    }).finally(() => {

        conn.end()
    })
}


main();
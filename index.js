import conn from "./src/connection/connection.js";
import {promisify} from 'util'
import http from 'http'

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


const routes = {

    '/listar:get': (request, response) => {

        response.write('Bom dia')
        return response.end()

    },
    default(request, response) {
        response.writeHead(404)
        return response.end('Not found')
    } 



}


const handler = (request, response) => {

    const {url, method} = request;
    const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;
    const chosen = routes[routeKey] || routes.default
    return chosen(request, response)

} 

const app = http.createServer(handler)
.listen(3000, () => console.log('Running at 3000'))


//main();


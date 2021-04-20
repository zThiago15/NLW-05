import express from "express";
import "./database";
import{ routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

/*Métodos HTTP
    GET -> Selecionar/buscar
    POST -> Criar
    PUT -> Editar/Alterar
    DELETE -> Apagar
    PATCH -> Alterar um dado específico
*/

//Rota GET
// app.get("/", (request, response) =>{ //Rota e a função com os parâmetro request e response que são do express
//     return response.json({
//         message: "Eu espero muito que a Mama não faça nada com o garotinho que ficou pra tras, por favor!"
//     });
// }); 

// //Rota POST
// app.post("/", (request, response) => {
//     return response.json({message: "Ep 12 de The Promised Neverland cadastrado com sucesso!"});
// });


app.listen(3333, () => console.log("Server is running on port 3333"));
import URL from "./targetProcess.js";
import express from "express";
import bodyParser from "body-parser";
//abc
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const getRequest = async () => {
  try {
    return await URL.get(
      "/Requests?access_token=Njg6S1lOeDNYcHNtZjdsN0h2K0c5QVdlakRaUW9LZGFpajJvU3dxNjFaa1Rvbz0=&format=json&skip=0&take=1000&where=Project.id in (6913) and EntityState.Name eq 'Aproved'"
    );
  } catch (error) {
    console.error(error);
  }
};

const getPriority = (name) => {
  // TO DO
  // funcion para sacar la informacion de name y solo tener los datos de prio 1 , sacar un valor entero.

  return; // PRIORIDAD
};

app.get("/request", async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");

    const response = await getRequest();

    const responseMaped = response.data.Items.map((item) => {
      return {
        name: item.Name,
        description: item.Description,
        team: item.Team,
        priority: getPriority(item.Name),
      };
    });

    const json = res.json(responseMaped);

    const regex = /(<([^>]+)>)/gi;
    const result = json.replace(regex, "");
    alert(result);
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

import axios from "axios";
const URL = axios.create({
  baseURL: "https://decathlon.tpondemand.com/api/v1",
});

export default URL;

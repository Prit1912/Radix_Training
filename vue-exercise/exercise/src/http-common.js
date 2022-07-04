import axios from "axios";

export default axios.create({
  baseURL: `http://${process.env.VUE_APP_Host}:${process.env.VUE_APP_Port}`,
  headers: {
    "Content-type": "application/json",
  }
});
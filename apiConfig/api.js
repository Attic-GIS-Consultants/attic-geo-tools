import axios from "axios";
export default axios.create({
    baseURL: "https://attic-geo-api.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});
import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params:
    {
        key : "b4f3258529b248fcbceea017f092f469"
    }
});
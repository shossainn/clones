import axios from "axios";


/**BaseURLs to make requests to the movie databse */
const instance = axios.create ({
    baseURL: "Https://api.themoviedb.org/3",
});

export default instance;
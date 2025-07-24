import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '726ad44e870247428bf850b830035dcf'
    }
});
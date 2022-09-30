import axios from "axios";

const TOKEN="ccplbfiad3idf7jqe1ugccplbfiad3idf7jqe1v0"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
});
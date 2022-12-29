import apiClient from "../axios";

const userApi = {
    getAllUser: () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        return apiClient.get(url);
    },
};

export default userApi;
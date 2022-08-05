import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const fetcAllUsers = (page) => {
    return client.get('users?page=' + page).then((response) => {
        return response.data
    })

}
export const AddUser = (data) => {
    return client.post('users', data).then((response) => {

        return response.data
    })

}

export const fetchSingleUser = (id) => {
    return client.get('users/' + id).then((response) => {
        return response.data
    })
}

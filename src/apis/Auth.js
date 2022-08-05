import axios from "axios";

const Auth = {
    login: (data, successCb, failCb) => {
        axios.post(process.env.REACT_APP_API_URL + 'login', data).then(response => {

            successCb(response);

        }).catch(err => {
            failCb(err);
        });
    },
    register: (data, successCb, failCb) => {
        axios.post(process.env.REACT_APP_API_URL + 'register', data).then(response => {

            successCb(response);

        }).catch(err => {
            failCb(err);
        });
    },
    logout: (successCb) => {

        localStorage.clear();

        successCb("success");
    },
    checkAuth: (successCb, failCb) => {
        axios.get('/check-auth', { headers: { Authorization: 'Bearer ' + localStorage.getItem("user.api_token") } })
            .then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            });
    }
};

export default Auth;
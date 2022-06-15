import axios from "axios"

export function fetchBean(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: id }), 500)
    })
}

export function addBean(bean) {
    return new Promise((resolve, reject) => {
        axios.post("http://localhost:5000/beans/add", bean)
        .then(data => {
            if (!data) {
                return reject(data)
            }
            return resolve(data);
        })
        .catch(error => {
            return reject(error);
        });
    });
}
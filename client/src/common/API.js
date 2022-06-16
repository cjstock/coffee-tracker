
import axios from "axios"

export function fetchBean(queryKey) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:5000/${queryKey[0]}/${queryKey[1]}`)
        .then(data => {
            if (!data) {
                return reject(data)
            }
            return resolve(data);
        })
        .catch(error => {
            return reject(error);
        });
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

export function fetchBeans() {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:5000/beans")
        .then(res => {
            if (!res.data) {
                return reject(res.data)
            }
            return resolve(res.data)
        })
        .catch(error => {
            return reject(error)
        })
    })
}
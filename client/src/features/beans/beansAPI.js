import React from 'react';
import axios from 'axios';

export default function fetchBeans() {
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
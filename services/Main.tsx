import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/v1/main',
    timeout: 1000,
})

export const getList = (subscriber:any) => {
    instance.get('/companies')
    .then((res)=>{
        subscriber(res.data)
    })
}
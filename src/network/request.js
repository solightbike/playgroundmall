import axios from 'axios'

export function request(config){
    const instence = axios.create({
        baseURL:'http://123.207.32.32:8000/',
        timeout:5000
    })

    instence.interceptors.request.use(config=>{
        return config
    },err=>{
        return err
    })

    instence.interceptors.response.use(res=>{
        return res
    },err=>{
        return err
    })

    return instence(config)
}
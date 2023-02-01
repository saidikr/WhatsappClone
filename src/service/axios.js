import axios from 'axios'

const instance=axios.create({
    // baseURL: 'http://localhost:9000'
    baseURL: 'https://chatmessengerapp1007.onrender.com/'
})

export default instance
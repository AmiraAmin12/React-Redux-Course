import axios from 'axios';

 export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID rT-X06h-mLGbXen2te3a9b53MZ6AvJ3mMAOm81H5PHg'

    }
});
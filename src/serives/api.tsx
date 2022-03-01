import axios from 'axios';
import md5 from 'md5';

const publicKEY = "4e31d9fc5d8c16b52a84a77c05aeb9fd";
const privateKEY = "cd81caf147a9d39d4d4a5deacbf83327407fb934";

const time = Number(new Date());

const hash = md5(time + privateKEY + publicKEY);

const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public/",
    params: {
        ts: time,
        apikey:publicKEY,
        hash,

    },
});

export default api;

import axios from 'axios';

export default axios.create({

    //baseURL: process.env.VUE_APP_BASE_URL
     baseURL: 'http://DESKTOP-7H09IIP:51/gestion_projet/gestion_projet_back_end/api',
    // baseURL: 'http://DESKTOP-7H09IIP:51/SID-CF/back-end'
})

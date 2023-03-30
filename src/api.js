import axios from "axios";
import React, { useEffect, useContext} from 'react';


const api = axios.create({
  baseURL: "https://sms.yplay.com.br/",
  headers: {
    Authorization: 'vinicius.okaeda:1670414227:a171a058f5d65e68031c5fae2bbb57bbac513bf8'
  }
});



const api3 = axios.create({
  baseURL: "https://mw.sumicity.net.br/",
  headers: {
    "Authorization-user": 'api.click@youcast.tv.br:1658250327:5fedbce9cfb2a8e148414556e51bf0bf497f67ff'
  }
});



export default api;
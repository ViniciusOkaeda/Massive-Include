import './App.css';
import React, { useEffect, useContext} from 'react';
import usersMassa from './script.json';
import usersMassa2 from './script2.json';
import usersMassa3 from './script3.json';
import usersMassa4 from './script4.json';
import usersMassa5 from './script5.json';
import usersMassa6 from './script6.json';
import usersMassa7 from './script7.json';
import usersMassa8 from './script8.json';
import axios from 'axios';

function App() {

  const [ shaHashSMS, setShaHashSMS] = React.useState('');
  const [ shaHashMW, setShaHashMW] = React.useState('');

  const [ userNameSMS, setUserNameSMS ] = React.useState('vinicius.okaeda');
  const [ secretSMS, setSecretSMS ] = React.useState('9m15lgh3n6aykipou3pe4ecxgsylqbjtzz2fixu0')
  const [ userNameMW, setUserNameMW ] = React.useState('vinicius.okaeda@youcast.tv.br');
  const [ secretMW, setSecretMW ] = React.useState('coebngqvwmebnprwlxtv6v4e7ixrk0px6yc76m2w');
  const [ timeStp, setTimeStp] = React.useState(null);


  const [ usMass, setUsMass] = React.useState([]);

  //usMass.forEach(element => console.log(element));

  //IDS
// (777) - hilan - Homepage
// (693) - Canais Locais - SP
// (687) - Parceiro - Pacote Start
// (688) - Parceiro - Pacote Premium

//IDS PARA DESATIVAR (CLIENTE) : HILAN 
// 669 - CLIENTE BASIC
//  670 - CLIENTE COMPACT
//  671 - CLIENTE PREMIUM
//  672 - CLIENTE FULL

//IDS PARA DESATIVAR (GENERICOS)
// (87) - SVOD Studio
// (88) - SVOD Kids
// (89) - SVOD Nacional
// (90) - TVOD
// (93) - Yplay Light
// (94) - Yplay Completo
// (97) - Yplay Urban
// (703) - Ybox VOD
// (566) - Ybox CANAIS

  //PACOTIZAÇÃO - MIGRAÇÃO
  //BASIC -> START (PACOTE START, HOMEPAGE, CANAIS LOCAIS)
  //COMPACT -> START (PACOTE START, HOMEPAGE, CANAIS LOCAIS)
  //PREMIUM -> PREMIUM (PACOTE PREMIUM, HOMEPAGE, CANAIS LOCAIS)
  //FULL -> PREMIUM (PACOTE PREMIUM, HOMEPAGE, CANAIS LOCAIS)

  
   async function cancel(){
    const retorno = await usersMassa4;
    retorno.forEach(function(color, idx, sourceArr) {
    console.log(color)
    //console.log(api.post("api/integration/cancel", color))
    api.post("api/integration/cancel", color)
    });
    setUsMass(retorno);
  }
   async function cancel2(){
    const retorno = await usersMassa5;
    retorno.forEach(function(color, idx, sourceArr) {
    console.log(color)
    //console.log(api.post("api/integration/cancel", color))
    api.post("api/integration/cancel", color)
    });
    setUsMass(retorno);
  }
   async function cancel3(){
    const retorno = await usersMassa6;
    retorno.forEach(function(color, idx, sourceArr) {
    console.log(color)
    //console.log(api.post("api/integration/cancel", color))
    api.post("api/integration/cancel", color)
    });
    setUsMass(retorno);
  }
   async function cancel4(){
    const retorno = await usersMassa7;
    retorno.forEach(function(color, idx, sourceArr) {
    console.log(color)
    //console.log(api.post("api/integration/cancel", color))
    api.post("api/integration/cancel", color)
    });
    setUsMass(retorno);
  }
   async function cancel5(){
    const retorno = await usersMassa8;
    retorno.forEach(function(color, idx, sourceArr) {
    console.log(color)
    //console.log(api.post("api/integration/cancel", color))
    api.post("api/integration/cancel", color)
    });
    setUsMass(retorno);
  }

    async function subs(){
      const retorno = await usersMassa;
      console.log("aqui", retorno)
      retorno.forEach(function(color, idx, sourceArr) {
      console.log("o us", color)
      api.post("api/customer/deleteCustomer", color)
      });
      setUsMass(retorno);
  }
    async function subs2(){
      const retorno = await usersMassa2;
      console.log("aqui", retorno)
      retorno.forEach(function(color, idx, sourceArr) {
      console.log("o us", color)
      api.post("api/integration/subscribe", color)
      });
      setUsMass(retorno);
  }
    async function subs3(){
      const retorno = await usersMassa3;
      console.log("aqui", retorno)
      retorno.forEach(function(color, idx, sourceArr) {
      console.log("o us", color)
      api.post("api/integration/subscribe", color)
      });
      setUsMass(retorno);
  }

  useEffect(() => {
    var sha1 = require('sha1');
    var timestamp = Date.now();
    console.log("o time", timestamp)
    setTimeStp(timestamp);
    setShaHashSMS(sha1(timestamp+userNameSMS+secretSMS))
    setShaHashMW(sha1(timestamp+userNameMW+secretMW))
    //subs();
    //subs2();
    //subs3();

    //cancel();
    //cancel2();
    //cancel3();
    //cancel4();
    //cancel5();
  },[])
  const api = axios.create({
    baseURL: "https://sms.yplay.com.br/",
    headers: {
      Authorization: userNameSMS+':'+timeStp+':'+shaHashSMS
    }
  })
  //console.log("o hash teste", shaHashMW)
  console.log("o sha", shaHashSMS)

  //console.log("o teste", usMass);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

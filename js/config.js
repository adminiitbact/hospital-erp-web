var prod = true;

if(prod){
    protocol="http";
    hostname="cov2.in";
    port="80";
}else{
    protocol="http"
    hostname="staging.iitbact.org";
    port = "8080";
}

apiURL = protocol+"://"+hostname+":"+port+"/hospitalerp/api/";
firebaseConfig = {
    apiKey: "AIzaSyAtDZfhftwpIpN9rZ5I4GHYijGuCbZbib0",
    authDomain: "hospital-erp-prod.firebaseapp.com",
    databaseURL: "https://hospital-erp-prod.firebaseio.com",
    projectId: "hospital-erp-prod",
    storageBucket: "hospital-erp-prod.appspot.com",
    messagingSenderId: "374895034375",
    appId: "1:374895034375:web:68dac98f0009c12906aaa2",
    measurementId: "G-FMK8FK9CQ1"
    };

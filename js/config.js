var prod = true;

if (prod) {
    protocol = "https";
    hostname = "cov2.in";
    port = "443";
    subdomain = "/hospitalerp/api/";
} else {
    protocol = "http"
        // hostname = "iitbactbackend-dev.ap-south-1.elasticbeanstalk.com";
    hostname = "staging.cov2.in";
    port = "80";
    subdomain = "/hospitalerp/api/";
}

apiURL = protocol + "://" + hostname + ":" + port + subdomain;
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

function log(key, value) {
    if (!prod) {
        console.log(key);
        console.log(value);
    }
}

function getUrlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}


severityMap = {
    "MILD": "Mild or Very Mild",
    "MODERATE": "Moderate",
    "SEVERE": "Severe",
};

testStatusMap = {
    "PENDING_TEST": "Test Pending",
    "PENDING_RESULT": "Test Result Pending",
    "POSITIVE": "Positive",
    "NEGATIVE": "Negative",
};

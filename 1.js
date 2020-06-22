async function cors(url, options) {
    const {authString, serverUrl} = localStorage;
    const body = {
        url: url,
        options: options,
        type: 'cors'
    };
    const fetchOptions = {
        'method': "POST",
        headers: {'x-auth': authString, 'Content-type':'application/json'},
        body: JSON.stringify(body)
    };
    const response = await fetch(serverUrl, fetchOptions);
    const responseText = await response.text();
    return responseText;
}

async function getStatic(key) {
    const {authString, serverUrl} = localStorage;
    const url = `${serverUrl}/?q=${key}`;
    const response = await fetch(url, {headers:{"x-auth": authString}});
    const responseText = await response.text();
    return responseText;
}

async function write(data) {
    const {authString, serverUrl} = localStorage;
    const body = {
        data: data,
        type: 'write'
    };
    const fetchOptions = {
        'method': "POST",
        headers: {'x-auth': authString, 'Content-type':'application/json'},
        body: JSON.stringify(body)
    };
    const response = await fetch(serverUrl, fetchOptions);
    const responseText = await response.text();
    return responseText;
}

async function authenticate() {
    const urlParams = new URLSearchParams(window.location.search);
    const authString = urlParams.get('q');
    const serverUrl = urlParams.get('u');
    localStorage.authString = authString;
    localStorage.serverUrl = serverUrl;
}

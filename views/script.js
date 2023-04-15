const baseURL='http://localhost:5000'
// const baseURL='http://localhost:3000'


docCookie.innerText = document.cookie

addToken.onclick = (e) => {
    const newRequest = new Request(`${baseURL}/set`, {
        credentials: 'include',
        mode:'cors',
    })
    fetch(newRequest).then(res => res.json()).then(res => { console.log(res); })
};
onlyFetch.onclick = (e) => {
    const newRequest = new Request(`${baseURL}/only`, {
        mode:'cors',
        credentials: 'include'
    })
    fetch(newRequest).then(res => res.json()).then(res => { console.log(res); })
};


set.onclick = (e) => {
    const ID=Math.random().toString(36).substring(2, 15);
    const cookie = `token=${ID};expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Strict`;
    document.cookie = cookie;
    docCookie.innerText = cookie
};


deleteWithFetch.onclick = (e) => {
   
};


deleteInBrowser.onclick = (e) => {
   
};


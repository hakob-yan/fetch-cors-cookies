docCookie.innerText=document.cookie

addToken.onclick = (e) => {
    const newRequest= new Request('/set',{
        mode:'cors',
        credentials:'omit'
    })
    fetch(newRequest).then(res=>res.json()).then(res=>{console.log(res);})
};



set.onclick = (e) => {
    const id='id='+Math.random().toString(16).slice(2)
    document.cookie=id;
    docCookie.innerText=id
};


deleteWithFetch.onclick = (e) => {
    console.log(e);
};


deleteInBrowser.onclick = (e) => {
    console.log(e);
};


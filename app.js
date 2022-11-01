async function getQuotes(){
    const url = "https://type.fit//api/quotes";
    const re = await fetch(url);
    const apQ = await re.json();
    try{
        const res = await fetch(url);
        const apiQ = await res.json();
        for (const ele of apiQ) {
            document.querySelector("#text").innerHTML = `"${ele.text}"`;
            document.querySelector(".author-name").innerHTML = `- ${ele.author}`;
        }
    }
    catch(err){
        console.log(err);
    }
}
getQuotes();

async function nextQuote(){
    let img = ['url("https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80")','url("https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80")','url("https://images.unsplash.com/photo-1617731053466-d40ac1568fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")' ,'url("https://images.unsplash.com/photo-1534802332599-c51e9190031e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80")', 'url("https://images.unsplash.com/photo-1461906903741-bf21de16ae85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")'];
    let randomImg =  img[Math.floor(Math.random() * img.length)];
    console.log(randomImg);
    document.body.style.backgroundImage = randomImg;
    document.body.style.backgroundRepeat =" no-repeat";
    document.body.style.backgroundSize =  " 1850px 1385px";
    document.querySelector("#heading").style.color = "white";
    const ur = "https://type.fit//api/quotes";
    const res =  await fetch(ur);
    const arrayOfQuotes = await  res.json();
    const randomQ = arrayOfQuotes[Math.floor(Math.random()*arrayOfQuotes.length)];
    document.querySelector("#text").innerHTML = `"${randomQ.text}"`;
    document.querySelector(".author-name").innerHTML = `- ${randomQ.author}`;

    // if author name is null
    if(randomQ.author == null){
        document.querySelector(".author-name").innerHTML = `- ${"Unknown"}`;
    }
    document.body.style.transition= "1.2s";
    document.querySelector("#heading").style.transition = "1.2s";
    document.querySelector("#text").style.transition = "1.2s";
    document.querySelector(".author-name").style.transition = "2s";
}

async function fetchdata(){
    try{
        console.log("server started")
     let response= await fetch("https://api.github.com/users?per_page=10");
     let data = await response.json();
    //  console.log(data);
    //  for(let i=0 ; i<data.length ;i++){
    //      console.log(data[i].login , data[i].node_id ,  data[i].html_url);
    //  }
    data.forEach((element) => {
        let h1 = document.createElement("h1");
        h1.setAttribute("h1", h1);
        h1.textContent = element.login;
        let a = document.createElement("a");
        a.setAttribute("a" , a)
        a.textContent= element.node_id;
        a.setAttribute("href" , element.html_url);
        let top =document.getElementById("top")
        top.appendChild(h1);
        top.appendChild(a);
    });
    }
    catch(error){
        console.log(error);
    }
}
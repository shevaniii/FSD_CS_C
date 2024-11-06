async function fetchdata(){
    try{
     let response= await fetch("https://api.github.com/users?per_page=10");
     let data = await response.json();
    //  console.log(data);
    //  for(let i=0 ; i<data.length ;i++){
    //      console.log(data[i].login , data[i].node_id ,  data[i].html_url);
    //  }
    data.forEach((element) => {
        console.log(`login ${element.login} , Node Id ${element.node_id} , htmlUrl ${element.html_url}`);
    });
    }
    catch(error){
        console.log(error);
    }
}
fetchdata();
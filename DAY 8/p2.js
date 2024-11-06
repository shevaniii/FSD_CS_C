async function FoodOrder(name , time){

    return new Promise((resolve , reject)=>{
        if(name == "springRoll"){
            reject("springRoll is not available. ");
        }
        setTimeout(()=>{
            resolve("your "+ name + "has been prepared.")
        }, time);
        });
    }
async function restaurant(){
    console.log("orderfood ");
    let pasta = await FoodOrder("pasta " , 3000);
    console.log(pasta);
    try{
        let springRoll = await FoodOrder("springRoll " , 2000);
        console.log(springRoll);
    }
    catch(error){
       console.log(error);
    }
    let momos = await FoodOrder("momos" , 3000);
    console.log(momos);
    console.log("All order prepared")

}
restaurant();
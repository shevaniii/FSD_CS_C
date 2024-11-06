async function FoodOrder(name , time){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("your "+ name + "has been prepared.")
        }, time);
        });
    }
async function restaurant(){
    console.log("orderfood ");
    let pasta = await FoodOrder("pasta " , 3000);
    console.log(pasta);
    let springRoll = await FoodOrder("springRoll " , 2000);
    console.log(springRoll);
    let momos = await FoodOrder("momos" , 3000);
    console.log(momos);
    console.log("All order prepared")

}
restaurant();
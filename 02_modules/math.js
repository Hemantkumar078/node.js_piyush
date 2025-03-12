function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
// so now to exports it so we can use somewhere else 
//using (exports. ) we can exports multiples things they not override
// exports.add=(a,b)=> a+b;
// exports.sub=(a,b)=> a-b;
module.exports={add,sub};
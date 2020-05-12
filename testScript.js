var objReq = {
name: "Anis",
lastName: "Dhaoui"
};
console.log(objReq);

var jsonReq = JSON.stringify(objReq);
console.log(jsonReq);

var reqObj = JSON.parse(jsonReq);
console.log(reqObj);
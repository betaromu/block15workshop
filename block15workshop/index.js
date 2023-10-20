const userInputArray = prompt(
    "Please enter some frozen yogurt flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  const stringArray = userInputString.split(",");
  function customerOrder(str){
      const order = {}
      for (let i =0; i < stringArray.length; i++){
        if (stringArray[i] in order) {
            order[stringArray[i]] += 1
        }
        else {order[stringArray[i]] = 1}
    }
return order
}
const orderSummary = customerOrder(userInputArray)
console.table(orderSummary)
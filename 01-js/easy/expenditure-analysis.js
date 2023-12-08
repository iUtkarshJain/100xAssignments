/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
// can be optimized with the help of map
function calculateTotalSpentByCategory(transactions) {
  const res = [];
  function findCategoryIndex(category){
    for(let i = 0; i < res.length; i++)
      if(res[i].category == category)
        return i;
    return -1;
  }

  for(let i = 0; i < transactions.length; i++){
    let idx = findCategoryIndex(transactions[i].category);
    if(idx == -1)
      res.push({category: transactions[i].category, totalSpent: transactions[i].price});
    else
      res[idx].totalSpent += transactions[i].price;
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;

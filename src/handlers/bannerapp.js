'use strict';

module.exports.sayHello = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  if (req.query.hhid || (req.body && req.body.hhid)) {
    context.res = {
      // status: 200, /* Defaults to 200 */
    body: { "Banner-Type": "Multi-product", 
          "Product-Main": "Meals",
           "Product-Sub-Category": "Artisan Burgers",
           "Category1-Name": "Burger Type",
           "Category1-List ": [ "Classic", "Double Decker"],
           "Category2-Name": "Chips", 
           "Category2-List" : ["Lays", "Cheetos"],
           "Category3-Name": "Drinks",
           "Category3-List ": ["Artisan Soda", "Artisan Pepsi"],
           "Category4-Name": "Qty",
           "Category4-List": [1,2,3],
           "Price": 9.99
          }
  
    };
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a House HoldId on the query string or in the request body',
    };
  }
};

define(["credits2","products2"], function(credits,products) {

    console.log("Function : purchaseProduct");
  
    return {
        purchaseProduct: function() {
  
                var credit = credits.getCredits();
                if(credit > 0){
                  products.reserveProduct();
                  return true;
        };
        return false;
      }
    }
  });
// Instruction: The Daily Gazette accepts classified ads in several categories. For most ads, the newpaper charges 10 cents per word for the first 50 words and 8 cents per word for every word after that. Design a flowchart and psuedocode for a program that accepts data about an ad: customer name, ad category, and number of words. Display all the input data and the price for the ad. --

// A. Modify the newspaper ad program to provide a 10 percent discount for ads over 300 words. --

// B. Modify the newspaper ad program to display the details of the ad only if it is in the Used cars category.

// C. Modify the newspaper ad program so the ad rates are the same as in the original program unless the ad is in the Found category, in which case it is free, or in the Business services category, in which case the charge is 20 cents per word.


// --------- NOTE --------- //

// if button ad data check,

//   show the form and hide the number of words
//     if the form is empty, make it 0
//     else if the form has value
//       split it
//       length to get the number of words
//       then do the calculation
      
//       if the category is specified
//         display the data

// else follow the number of words

// --------- NOTE --------- //


// Understanding the logic
// if words less than or equal 50
//   then 10 cents times 50
// if words greater than to 50
//   then 8 cents times (words - 50)


$('#submit').on('click', function(){
  // console.log("Daily");

  var customerName = $('#customerName').val();
  var adCategory = $('#adCategory').val();
  var numberOfWords = $('#numberOfWords').val();
  var intNumberOfWords = parseFloat(numberOfWords);

  if(adCategory.includes("Cars")){
    console.log("Cars");

    $('#priceAd').append(`<p>Customer name: ${customerName}</p>`);
    $('#priceAd').append(`<p>Ad category: ${adCategory}</p>`);
    
    $('#priceAd').append(`<p>Number of words: ${intNumberOfWords}</p>`);

    
    dailyGazetteCalculation(intNumberOfWords);
    
  } 
  else if(adCategory.includes("Found")){
    console.log("Found");
    dailyGazetteCalculation(0);

  } 
  else if(adCategory.includes("Business")){
    console.log("Business");
    businessCategory(intNumberOfWords, 0.2);
  } 
  
  
  else{
    dailyGazetteCalculation(intNumberOfWords);
  }

})

function businessCategory(n, c){
  var charge = n * c;

  $('#priceAd').append(`<p>Price for the advertisement: ${charge}</p>`);
}

function dailyGazetteCalculation(n){

  var charge = 0;
  var tenCents = 0.1;
  var eightCents = 0.8;

  if(n == 0){
    $('#priceAd').append(`<p>Price for the advertisement: free</p>`);
  }
  else if(n <= 50){
    charge = n * tenCents;
    $('#priceAd').append(`<p>Price for the advertisement: ${charge}</p>`);
  } else{

    if(n > 300){
      charge = 50 * tenCents;
      moreThanFiftyCharge = charge + ((n - 50)  * eightCents);

      var discount = n * 0.1;

      var discountedAds = moreThanFiftyCharge - discount;

      intDiscountedAds = parseInt(discountedAds);

      $('#priceAd').append(`<p>Price for the discounted advertisement: ${intDiscountedAds}</p>`);

    } else{
      charge = 50 * tenCents;
      moreThanFiftyCharge = charge + ((n - 50)  * eightCents);
      $('#priceAd').append(`<p>Price for the advertisement: ${moreThanFiftyCharge}</p>`);
    }
    
  }
}


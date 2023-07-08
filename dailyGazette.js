// Instruction: The Daily Gazette accepts classified ads in several categories. For most ads, the newpaper charges 10 cents per word for the first 50 words and 8 cents per word for every word after that. Design a flowchart and psuedocode for a program that accepts data about an ad: customer name, ad category, and number of words. Display all the input data and the price for the ad.

// A. Modify the newspaper ad program to provide a 10 percent discount for ads over 300 words.

// B. Modify the newspaper ad program to display the details of the ad only if it is in the Used cars category.

// C. Modify the newspaper ad program so the ad rates are the same as in the original program unless the ad is in the Found category, in which case it is free, or in the Business services category, in which case the charge is 20 cents per word.

// D. Modify the newspaper ad program to accept the ad data, then to prompt the user for and accept an ad category. Display the data only if the ad is in the specified category.


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

  var intNumberOfWords = parseInt(numberOfWords);

  var charge = 0;
  var tenCents = 0.10;
  var eightCents = 0.08;



  if(numberOfWords <= 50){
    charge = charge + (numberOfWords * tenCents);
  } else if(numberOfWords > 50){
    
    // -------------------------------------------- //
    // NOTE: Go down to categories logic 
    // -------------------------------------------- //

    charge = charge + (50 * tenCents);
    charge = charge + ((numberOfWords - 50)  * eightCents);
  }


  $('#priceAd').append(`<p>Customer name: ${customerName}</p>`);
  $('#priceAd').append(`<p>Ad category: ${adCategory}</p>`);
  $('#priceAd').append(`<p>Number of words: ${intNumberOfWords}</p>`);
  $('#priceAd').append(`<p>Price for the advertisement: ${charge}</p>`);

})
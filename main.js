 var bitcoin = document.getElementById("bitcoin");

 var ethereum = document.getElementById("ethereum");

 var dogecoin = document.getElementById("dogecoin");


 fetch("https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2CDogecoin&vs_currencies=Inr")
   .then((res) => {
     return res.json();
   })
   .then((data) => {

     //console.log(JSON.stringify(data));
     bitcoin.innerHTML = data.bitcoin.inr;

     ethereum.innerHTML = data.ethereum.inr;

     dogecoin.innerHTML = data.dogecoin.inr;

   })

var btcRate = 1934.53;

function convertBTC() {
  var usdValue = valueForEl("usd");
  document.getElementById("btc").value = convertToBTC(usdValue);
}

function convertToBTC(dollarAmt) {
  return dollarAmt / btcRate;
}

function valueForEl(id) {
  return document.getElementById(id).value;
}

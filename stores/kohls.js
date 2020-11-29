setTimeout(()=>{if (document.getElementsByClassName("pdp_outofstockproduct")[0].children[1].innerText != "We’re very sorry, this item is out of stock.") {
  discordwh();
  beep(60);
}}, 5000);
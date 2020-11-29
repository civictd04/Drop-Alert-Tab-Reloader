setTimeout(()=>{if ($(".uk-button.uk-disabled")[0].innerText.indexOf("Sold Out") >= 0){
  discordwh();
  beep();
}}, 5000);
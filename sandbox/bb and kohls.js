var intrvl = setInterval(()=>{console.clear(); if (!document.getElementsByClassName("add-to-cart-button")[0].disabled || !document.getElementsByClassName("add-to-cart-button")[1].disabled) { beep(120); clearInterval(intrvl);} else { try { $($('span:contains("Smart Capable")')[0]).click(); } catch { $($('span:contains("Smart Capable")')[1]).click();}}},10000)

var intrvl = setInterval(()=>{console.clear(); if ($('span.prod_price_amount:contains("399")').length > 0 || $('span.prod_price_amount:contains("499")').length > 0) { beep(120); clearInterval(intrvl);} else { try { $($('span.facet_name:contains("Turtle Beach")')[0]).parent().click(); } catch { $($('span.facet_name:contains("Turtle Beach")')[1]).parent().click(); }}},10000)


var intrvl = setInterval(()=> { 
  if (document.getElementsByClassName("sc-page-range-label")[0].innerText.indexOf("Showing 1-2") < 0 &&
  document.getElementsByClassName("sc-page-range-label")[0].innerText.indexOf("Showing 1-1") < 0) 
  { beep(120); clearInterval(intrvl); } 
else {
  console.clear();
  document.getElementById("checkbox2").click();
}
}, 10000); 


(window.webpackJsonp=window.webpackJsonp||[]).push([["app_order_index"],{CMxJ:function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("card-element"),t=Stripe(e.dataset.public_key,{locale:e.dataset.locale}),n=t.elements().create("card",{style:{base:{fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px"},invalid:{color:"red",iconColor:"red"}}});n.mount("#card-element");var r=document.getElementById("card-errors");n.addEventListener("change",(function(e){e.error?r.textContent=e.error.message:r.textContent=""})),document.getElementById("payment-form").addEventListener("submit",(function(e){e.preventDefault(),t.createToken(n).then((function(e){e.error?document.getElementById("card-errors").textContent=e.error.message:function(e){var t=document.getElementById("payment-form"),n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","stripeToken"),n.setAttribute("value",e.id),t.appendChild(n),t.submit()}(e.token)}))}))}))}},[["CMxJ","runtime"]]]);
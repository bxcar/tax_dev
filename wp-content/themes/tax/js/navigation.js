!function(){function g(){for(var a=this;-1===a.className.indexOf("nav-menu");)"li"===a.tagName.toLowerCase()&&(-1!==a.className.indexOf("focus")?a.className=a.className.replace(" focus",""):a.className+=" focus"),a=a.parentElement}var a,b,c,d,e,f;if(a=document.getElementById("site-navigation"),a&&(b=a.getElementsByTagName("button")[0],"undefined"!=typeof b)){if(c=a.getElementsByTagName("ul")[0],"undefined"==typeof c)return void(b.style.display="none");for(c.setAttribute("aria-expanded","false"),-1===c.className.indexOf("nav-menu")&&(c.className+=" nav-menu"),b.onclick=function(){-1!==a.className.indexOf("toggled")?(a.className=a.className.replace(" toggled",""),b.setAttribute("aria-expanded","false"),c.setAttribute("aria-expanded","false")):(a.className+=" toggled",b.setAttribute("aria-expanded","true"),c.setAttribute("aria-expanded","true"))},d=c.getElementsByTagName("a"),e=0,f=d.length;e<f;e++)d[e].addEventListener("focus",g,!0),d[e].addEventListener("blur",g,!0);!function(a){var b,c,d=a.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(b=function(a){var c,b=this.parentNode;if(b.classList.contains("focus"))b.classList.remove("focus");else{for(a.preventDefault(),c=0;c<b.parentNode.children.length;++c)b!==b.parentNode.children[c]&&b.parentNode.children[c].classList.remove("focus");b.classList.add("focus")}},c=0;c<d.length;++c)d[c].addEventListener("touchstart",b,!1)}(a)}}();
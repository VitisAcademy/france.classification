function twinsGenerator(){let n=document.querySelector(".twins");for(let t=0;t<contentTwins.length;t++)n.insertAdjacentHTML("beforeend",`<div class="twins__img">${contentTwins[t]}</div>\n      <input type="text" class="twins__input">`);n.insertAdjacentHTML("beforeend",'<div class="button" onclick="scoreButton(1);twinsChecker()">Нажмите для завершения!</div>')}function twinsChecker(){let n=document.getElementsByClassName("twins__input");for(let t=0;t<contentTwins.length;t++)userTwins.push(`${contentTwins[t]}: ${n[t].value}`)}twinsGenerator();
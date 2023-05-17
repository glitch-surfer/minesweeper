(()=>{"use strict";const e=()=>{const e=[],t=document.querySelectorAll(".cell"),n=Math.sqrt(t.length);for(let o=0;o<t.length;o+=n){const c=[];for(let e=0;e<n;e+=1)c.push(t[o+e]);e.push(c)}return e},t=e=>{const t=e;t.classList.add("is-open"),t.textContent=t.dataset.number,t.isOpen=!0},n=o=>{const c=o;t(c);const s=e(),d=[...document.querySelectorAll(".cell")].findIndex((e=>e===c));let a,r;10===document.boardSize?(a=d>document.boardSize-1?+d.toString()[0]:0,r=d>document.boardSize-1?+d.toString()[1]:d):(a=Math.floor(d/document.boardSize),r=d%document.boardSize);const u=[];u.push(s[a-1]?.[r]),u.push(s[a-1]?.[r+1]),u.push(s[a-1]?.[r-1]),u.push(s[a]?.[r+1]),u.push(s[a]?.[r-1]),u.push(s[a+1]?.[r+1]),u.push(s[a+1]?.[r]),u.push(s[a+1]?.[r-1]),u.filter((e=>e&&"🚩"!==e.textContent)).forEach((e=>{e.dataset.number||e.isOpen?t(e):n(e)}))},o=e=>{const o=e.target;!o.classList.contains("cell")||o.isBomb||o.textContent||(o.isOpen||(document.querySelector(".moves-count").innerHTML=`Your moves: ${document.movesCount+=1}`,document.querySelector(".sound-switcher").checked&&new Audio("../src/assets/sounds/empty-cell.mp3").play()),t(o),o.dataset.number||n(o))},c=e=>{const t=e.target,n=document.querySelector(".counter");if(e.preventDefault(),t.classList.contains("cell")&&!t.isOpen){const e=new Audio("../src/assets/sounds/flag.mp3");t.closest(".cell").textContent?(document.querySelector(".sound-switcher").checked&&e.play(),t.textContent="",document.flagCount+=1,n.textContent=`Mines count: ${document.flagCount}`):(document.querySelector(".sound-switcher").checked&&e.play(),t.textContent="🚩",document.flagCount-=1,n.textContent=`Mines count: ${document.flagCount}`)}},s=e=>{const t=document.querySelector(".btn"),n=document.querySelector(".board");"🚩"!==e.target.textContent&&(e.target.isBomb?([...document.querySelectorAll(".cell")].filter((e=>e.isBomb)).forEach((e=>{const t=document.createElement("div");t.classList.add("bomb"),e.classList.add("is-open"),e.textContent="",e.append(t)})),document.querySelector(".sound-switcher").checked&&new Audio("../src/assets/sounds/bomb.mp3").play(),e.target.firstElementChild.style.backgroundColor="red",clearInterval(document.timer),t.textContent="😩",n.removeEventListener("click",o),n.removeEventListener("contextmenu",c),n.removeEventListener("click",s)):[...document.querySelectorAll(".cell")].filter((e=>!e.isOpen)).length===document.minesCount&&(document.querySelector(".sound-switcher").checked&&new Audio("../src/assets/sounds/win.mp3").play(),clearInterval(document.timer),t.textContent="🤩",document.body.classList.add("win"),n.removeEventListener("click",o),n.removeEventListener("click",s),n.removeEventListener("contextmenu",c),(()=>{const e=+localStorage.getItem("gameId")+1||1,t=document.body.classList.value.includes("layout")?document.body.classList.value.split(" ")[0].slice(0,7):"easy";e>10&&localStorage.removeItem(""+(e-10)),localStorage.setItem(e,`Game #${e} _ Mode: ${t} _ Time: ${document.querySelector(".timer").textContent.slice(7)} _ Moves: ${document.querySelector(".moves-count").textContent.slice(11)}`),localStorage.setItem("gameId",e)})()))},d=s,a=t=>{document.querySelector(".board").removeEventListener("click",a),((e,t)=>{const n=document.querySelectorAll(".cell"),o=((e,t)=>{const n=[];for(;n.length<e;){const e=(o=document.boardSize**2-1,Math.floor(Math.random()*(o-0+1))+0);n.includes(e)||e===t||n.push(e)}var o;return n})(e,[...n].findIndex((e=>e===t.target)));[...n].filter(((e,t)=>o.includes(t))).forEach((e=>e.isBomb=!0))})(document.minesCount,t),(()=>{const t=document.querySelectorAll(".cell"),n=(()=>{const t=e(),n=[];for(let e=0;e<t[0].length;e+=1)for(let o=0;o<t[0].length;o+=1){const c=[];c.push(t[e-1]?.[o]),c.push(t[e-1]?.[o+1]),c.push(t[e-1]?.[o-1]),c.push(t[e]?.[o+1]),c.push(t[e]?.[o-1]),c.push(t[e+1]?.[o+1]),c.push(t[e+1]?.[o]),c.push(t[e+1]?.[o-1]),n.push(c.filter((e=>e&&e.isBomb)).length)}return n})();t.forEach(((e,t)=>{const o=e;!o.isBomb&&n[t]&&(o.dataset.number=n[t])}))})(),(()=>{let e=0;document.timer=setInterval((()=>{document.querySelector(".timer").innerHTML=`Timer: ${e+=1} sec`}),1e3)})(),document.querySelector(".btn").textContent="😎"},r=a,u=()=>{document.movesCount=0;const e=(()=>{const e=document.createElement("main");e.classList.add("main");const t=document.createElement("div");t.classList.add("board"),t.setAttribute("id","board");for(let e=0;e<document.boardSize**2;e+=1){const e=document.createElement("div");e.classList.add("cell"),t.append(e)}return e.append(t),e})();e.prepend((()=>{const e=document.createElement("div");e.classList.add("controls-panel");const t=document.createElement("p");t.classList.add("moves-count"),t.textContent="Your moves: 0",e.append(t);const n=document.createElement("btn");n.classList.add("btn"),n.textContent="😉",e.append(n),document.flagCount=document.minesCount;const o=document.createElement("p");return o.classList.add("counter"),o.textContent=`Mines count: ${document.flagCount}`,e.append(o),e})()),document.body.append(e);const t=document.getElementById("board");t.addEventListener("click",r),t.addEventListener("click",o),t.addEventListener("click",d),t.addEventListener("contextmenu",c),document.querySelector(".btn").addEventListener("click",(()=>{clearInterval(document.timer),document.querySelector(".timer").textContent="Timer: 0 sec",document.querySelector("main").remove(),document.body.classList.remove("win"),u()}))},l=u,m=()=>{clearInterval(document.timer),document.querySelector(".timer").textContent="Timer: 0 sec",document.querySelector("main").remove(),document.body.classList.remove("win"),l()},i=e=>{e.target.classList.contains("easy-mode")?(document.boardSize=10,document.body.classList.remove("medium-layout"),document.body.classList.remove("suicide-layout"),document.querySelector('input[type="range"]').value=10,document.minesCount=10,m()):e.target.classList.contains("medium-mode")?(document.boardSize=15,document.body.classList.remove("suicide-layout"),document.body.classList.add("medium-layout"),document.querySelector('input[type="range"]').value=25,document.minesCount=25,m()):e.target.classList.contains("suicide-mode")&&(document.boardSize=25,document.body.classList.remove("medium-layout"),document.body.classList.add("suicide-layout"),document.querySelector('input[type="range"]').value=99,document.minesCount=99,m())},p=e=>{e.target.closest(".modal")?e.target.closest(".btn-modal")&&(document.querySelector(".overlay").remove(),document.body.style.overflow=""):(document.querySelector(".overlay").remove(),document.body.style.overflow="")},y=()=>{const e=document.createElement("div");e.classList.add("overlay"),document.body.append(e),document.body.style.overflow="hidden",e.addEventListener("click",p)};document.minesCount=10,document.boardSize=10,document.body.append((()=>{const e=document.createElement("div");e.classList.add("mode"),e.addEventListener("click",i);const t=document.createElement("span");t.textContent="About",t.classList.add("about__btn");const n=document.createElement("span");n.textContent="Easy",n.classList.add("easy-mode"),e.append(n);const o=document.createElement("span");o.textContent="Medium",o.classList.add("medium-mode"),e.append(o);const c=document.createElement("span");c.textContent="Suicide",c.classList.add("suicide-mode"),e.append(c);const s=document.createElement("p");s.classList.add("settings-subtitle"),s.textContent="Mines:",e.append(s);const d=document.createElement("input");d.setAttribute("type","range"),d.setAttribute("value","10"),d.setAttribute("min","10"),d.setAttribute("max","99"),d.addEventListener("input",(e=>{document.querySelector(".counter").textContent=`Mines count: ${e.target.value}`,document.minesCount=+e.target.value,m()})),e.append(d);const a=document.createElement("div");a.classList.add("settings"),a.classList.add("controls-panel");const r=document.createElement("button");r.classList.add("btn-results"),r.textContent="results",a.append(r);const u=document.createElement("p");u.classList.add("timer"),u.textContent="Timer: 0 sec",a.append(u);const l=document.createElement("label"),p=document.createElement("span");p.textContent="🔔",l.append(p);const y=document.createElement("input");y.setAttribute("type","checkbox"),y.setAttribute("checked","true"),y.classList.add("sound-switcher"),l.append(y),a.append(l);const b=document.createElement("button");b.classList.add("theme-switcher"),a.append(b),b.addEventListener("click",(e=>{e.target.classList.toggle("is-dark")}));const v=document.createElement("header");return v.classList.add("header"),v.append(t),v.append(e),v.append(a),v})()),l(),document.querySelector(".theme-switcher").addEventListener("click",(()=>{document.body.classList.toggle("dark-theme")})),document.querySelector(".btn-results").addEventListener("click",(()=>{y();const e=document.querySelector(".overlay"),t=document.createElement("h2");t.classList.add("modal-title"),t.textContent="Latest Results",e.append(t);const n=(()=>{const e=+localStorage.getItem("gameId"),t=[];for(let n=0;n<10;n+=1){const o=localStorage.getItem(e-n);t.push(o)}return t})(),o=document.createElement("ul");o.classList.add("modal");const c=document.createElement("button");c.classList.add("btn-modal"),c.textContent="✖",o.append(c),n.forEach((e=>{const t=document.createElement("li");t.textContent=e,o.append(t)})),e.append(o)})),document.querySelector(".about__btn").addEventListener("click",(()=>{y();const e=document.querySelector(".overlay"),t=document.createElement("h2");t.classList.add("modal-title"),t.textContent="About Game",e.append(t);const n=document.createElement("div");n.classList.add("modal"),n.classList.add("about");const o=document.createElement("button");o.classList.add("btn-modal"),o.textContent="✖",n.append(o);const c=document.createElement("img");c.classList.add("about__img"),c.setAttribute("src","../src/assets/img/about.png"),n.append(c);const s=document.createElement("a");s.setAttribute("href","https://github.com/glitch-surfer"),s.classList.add("about__text"),s.textContent="Made by Glitch_surfer",n.append(s),e.append(n)})),document.querySelector("label").addEventListener("click",(e=>{const t=e.target;document.querySelector(".sound-switcher").checked?t.textContent="🔕":t.textContent="🔔"}))})();
//# sourceMappingURL=bundle.js.map
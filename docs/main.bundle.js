!function(i){var s={};function n(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=i,n.c=s,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,i){i(1),i(2),i(3),e.exports=i(4)},function(e,t,i){"use strict";window.GameConstants={Fireball:{size:window.fireballSize||24,speed:window.getFireballSpeed||function(e){return e?2:5}},Wizard:{speed:window.wizardSpeed||2,width:window.wizardWidth||61,getHeight:window.getWizardHeight||function(e){return 1.377*e},getX:window.getWizardX||function(e){return e/3},getY:window.getWizardY||function(e){return e-100}}},window.Game=function(){function e(e){this.container=e,this.canvas=document.createElement("canvas"),this.canvas.width=e.clientWidth,this.canvas.height=e.clientHeight,this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this._onKeyDown=this._onKeyDown.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._pauseListener=this._pauseListener.bind(this),this.setDeactivated(!1)}var n=["Niko","Baki","Oma"],a={0:{width:61,height:84,url:"img/wizard.gif"},"0-reversed":{width:61,height:84,url:"img/wizard-reversed.gif"},1:{width:24,height:24,url:"img/fireball.gif"}},s={0:function(e,t,i){t.keysPressed.UP&&0<e.y&&(e.direction=-9&e.direction,e.direction=4|e.direction,e.y-=e.speed*i*2),t.keysPressed.UP||e.y<300-e.height&&(e.direction=-5&e.direction,e.direction=8|e.direction,e.y+=e.speed*i/3),t.keysPressed.LEFT&&(e.direction=-3&e.direction,e.direction=1|e.direction,e.x-=e.speed*i),t.keysPressed.RIGHT&&(e.direction=-2&e.direction,e.direction=2|e.direction,e.x+=e.speed*i),e.y<0&&(e.y=0),e.y>300-e.height&&(e.y=300-e.height),e.x<0&&(e.x=0),e.x>700-e.width&&(e.x=700-e.width)},1:function(e,t,i){1&e.direction&&(e.x-=e.speed*i),2&e.direction&&(e.x+=e.speed*i),(e.x<0||700<e.x)&&(e.state=1)}},r={CONTINUE:0,WIN:1,FAIL:2,PAUSE:3,INTRO:4},i={0:function(e){return e.garbage.filter(function(e){return 1===e.type}).filter(function(e){return e.x<10&&240<e.y})[0]?r.WIN:r.CONTINUE}},t={0:function(e){return e.objects.push({direction:2,height:window.GameConstants.Wizard.getHeight(window.GameConstants.Wizard.width),speed:window.GameConstants.Wizard.speed,sprite:a[0],state:0,type:0,width:window.GameConstants.Wizard.width,x:window.GameConstants.Wizard.getX(700),y:window.GameConstants.Wizard.getY(300)}),e}};e.prototype={level:0,setDeactivated:function(e){this._deactivated!==e&&((this._deactivated=e)?this._removeGameListeners():this._initializeGameListeners())},getInitialState:function(){return{currentStatus:r.CONTINUE,garbage:[],lastUpdated:null,keysPressed:{ESC:!1,LEFT:!1,RIGHT:!1,SPACE:!1,UP:!1},levelStartTime:null,objects:[],startTime:null}},initializeLevelAndStart:function(e){(e=void 0===e||e)||!this.state?(this._imagesArePreloaded=void 0,this.state=this.getInitialState(),this.state=t[this.level](this.state)):this.state.currentStatus=r.CONTINUE,this.state.levelStartTime=Date.now(),this.state.startTime||(this.state.startTime=this.state.levelStartTime),this._preloadImagesForLevel(function(){this.render(),this._initializeGameListeners(),this.update()}.bind(this))},pauseLevel:function(e){e&&(this.state.currentStatus=e),this.state.keysPressed.ESC=!1,this.state.lastUpdated=null,this._removeGameListeners(),window.addEventListener("keydown",this._pauseListener),this._drawPauseScreen()},_pauseListener:function(e){if(32===e.keyCode&&!this._deactivated){e.preventDefault();var t=this.state.currentStatus===r.WIN||this.state.currentStatus===r.FAIL;this.initializeLevelAndStart(t),window.removeEventListener("keydown",this._pauseListener)}},_drawPauseScreen:function(){var e;switch(this.state.currentStatus){case r.WIN:if(window.renderStatistics){var t=this._generateStatistics(new Date-this.state.startTime),i=this._shuffleArray(Object.keys(t));return void window.renderStatistics(this.ctx,i,i.map(function(e){return t[e]}))}e="Вы победили Газебо!\nУра!";break;case r.FAIL:e="Вы проиграли!";break;case r.PAUSE:e="Игра на паузе!\nНажмите Пробел, чтобы продолжить";break;case r.INTRO:e="Welcome! Press Spacebar to \n start the game."}this._drawMessage(e)},_generateStatistics:function(e){for(var t={You:e},i=0;i<n.length;i++){var s=e+(3e3*Math.random()-1500);s<1e3&&(s=1e3),t[n[i]]=s}return t},_shuffleArray:function(e){for(var t=e.length-1;0<t;t--){var i=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[i],e[i]=s}return e},_drawMessage:function(e){function t(e,t,i,s){n.beginPath(),n.moveTo(e,t),n.lineTo(e+10,t+s/2),n.lineTo(e,t+s),n.lineTo(e+i/2,t+s-10),n.lineTo(e+i,t+s),n.lineTo(e+i-10,t+s/2),n.lineTo(e+i,t),n.lineTo(e+i/2,t+10),n.lineTo(e,t),n.stroke(),n.closePath(),n.fill()}var n=this.ctx;n.fillStyle="rgba(0, 0, 0, 0.7)",t(190,40,320,100),n.fillStyle="rgba(256, 256, 256, 1.0)",t(180,30,320,100),n.fillStyle="#000",n.font="16px PT Mono",e.split("\n").forEach(function(e,t){n.fillText(e,200,80+20*t)})},_preloadImagesForLevel:function(i){if(void 0===this._imagesArePreloaded&&(this._imagesArePreloaded=[]),this._imagesArePreloaded[this.level])i();else for(var e=Object.keys(a),s=e.length,n=this,t=function(e){var t=new Image(e.width,e.height);t.onload=function(){e.image=t,0==--s&&(n._imagesArePreloaded[n.level]=!0,i())},t.src=e.url},r=0;r<e.length;r++)t(a[e[r]])},updateObjects:function(t){var e=this.state.objects.filter(function(e){return 0===e.type})[0];this.state.keysPressed.SHIFT&&(this.state.objects.push({direction:e.direction,height:window.GameConstants.Fireball.size,speed:window.GameConstants.Fireball.speed(!!(1&e.direction)),sprite:a[1],type:1,width:window.GameConstants.Fireball.size,x:2&e.direction?e.x+e.width:e.x-window.GameConstants.Fireball.size,y:e.y+e.height/2}),this.state.keysPressed.SHIFT=!1),this.state.garbage=[];var i=this.state.objects.filter(function(e){return s[e.type](e,this.state,t),1!==e.state||(this.state.garbage.push(e),!1)},this);this.state.objects=i},checkStatus:function(){if(this.state.currentStatus===r.CONTINUE){this.commonRules||(this.commonRules=[function(e){return 1===e.objects.filter(function(e){return 0===e.type})[0].state?r.FAIL:r.CONTINUE},function(e){return e.keysPressed.ESC?r.PAUSE:r.CONTINUE},function(e){return 18e4<Date.now()-e.startTime?r.FAIL:r.CONTINUE}]);for(var e=this.commonRules.concat(i[this.level]),t=r.CONTINUE;t===r.CONTINUE&&e.length;)t=e.shift()(this.state);this.state.currentStatus=t}},setGameStatus:function(e){this.state.currentStatus!==e&&(this.state.currentStatus=e)},render:function(){this.ctx.clearRect(0,0,700,300),this.state.objects.forEach(function(e){if(e.sprite){var t=1&e.direction,i=a[e.type+(t?"-reversed":"")]||a[e.type];this.ctx.drawImage(i.image,e.x,e.y,e.width,e.height)}},this)},update:function(){this.state.lastUpdated||(this.state.lastUpdated=Date.now());var e=(Date.now()-this.state.lastUpdated)/10;switch(this.updateObjects(e),this.checkStatus(),this.state.currentStatus){case r.CONTINUE:this.state.lastUpdated=Date.now(),this.render(),requestAnimationFrame(function(){this.update()}.bind(this));break;case r.WIN:case r.FAIL:case r.PAUSE:case r.INTRO:this.pauseLevel()}},_onKeyDown:function(e){switch(e.keyCode){case 37:this.state.keysPressed.LEFT=!0;break;case 39:this.state.keysPressed.RIGHT=!0;break;case 38:this.state.keysPressed.UP=!0;break;case 27:this.state.keysPressed.ESC=!0}e.shiftKey&&(this.state.keysPressed.SHIFT=!0)},_onKeyUp:function(e){switch(e.keyCode){case 37:this.state.keysPressed.LEFT=!1;break;case 39:this.state.keysPressed.RIGHT=!1;break;case 38:this.state.keysPressed.UP=!1;break;case 27:this.state.keysPressed.ESC=!1}e.shiftKey&&(this.state.keysPressed.SHIFT=!1)},_initializeGameListeners:function(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)},_removeGameListeners:function(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)}},e.Verdict=r;var o=new e(document.querySelector(".demo"));return window.restartGame=function(e,t){a[0].url=e,a["0-reversed"].url=t,o.initializeLevelAndStart(),o.setGameStatus(r.INTRO)},window.restartGame("img/wizard.gif","img/wizard-reversed.gif"),o}()},function(e,t,i){"use strict";function s(){r.classList.remove("hidden"),document.addEventListener("keydown",c)}function n(){r.classList.add("hidden"),document.removeEventListener("keydown",c)}var r=document.querySelector(".setup"),a=document.querySelector(".setup-open"),o=document.querySelector(".setup-close"),d=document.querySelector(".setup-user-name"),c=function(e){27===e.keyCode&&n()};a.addEventListener("click",s),a.addEventListener("keydown",function(e){13===e.keyCode&&s()}),o.addEventListener("click",n),d.addEventListener("keydown",function(e){e.stopPropagation(),27===e.keyCode&&d.blur()}),document.querySelector(".setup-similar").classList.remove("hidden");var l=[],u=["Turino","Magico","Blizzardo","Lighter","Menge","Ingardio","Candlo","Rodrigo"],h=["Sam","Ben","James","Frodo","Diego","Arturo","Menge","Jhoe"],f=["rgb(101, 137, 164)","rgb(241, 43, 107)","rgb(146, 100, 161)","rgb(56, 159, 117)","rgb(215, 210, 55)","rgb(0, 0, 0)"],y=["black","red","blue","yellow","green"],w=["#ee4830","#30a8ee","#5ce6c0","#e848d5","#e6e848"];function g(e){return Math.floor(Math.random()*e)}!function(){for(var e=0;e<4;e++){var t=g(h.length),i=g(u.length),s=g(f.length),n=g(y.length),r={};r.name=u[i]+" "+h[t],r.coatColor=f[s],r.eyesColor=y[n],l.push(r)}}();for(var m=document.querySelector(".setup-similar-list"),p=document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item"),v=(document.querySelector(".wizard-eyes"),0);v<4;v++){var S=p.cloneNode(!0);S.querySelector(".setup-similar-label").textContent=l[v].name,S.querySelector(".wizard-coat").style.fill=l[v].coatColor,S.querySelector(".wizard-eyes").style.fill=l[v].eyesColor,m.appendChild(S)}document.querySelectorAll(".wizard-coat"),document.querySelector(".setup-fireball");var b=document.querySelector(".setup-fireball-wrap"),k=b.querySelector("input");document.addEventListener("click",function(e){e.target.classList.contains("wizard-coat")?e.target.style.fill=T(f):e.target.classList.contains("wizard-eyes")?e.target.style.fill=T(y):e.target.classList.contains("setup-fireball")&&(b.style.background=T(w),k.value=b.style.background),console.log(k)});var T=function(e){return e[g(e.length)]}},function(e,t,i){"use strict";function r(e,t,i,s){e.fillStyle=s,e.fillRect(t,i,420,270)}window.renderStatistics=function(e,t,i){r(e,110,20,"rgba(0, 0, 0, 0.7)"),r(e,100,10,"#fff"),e.fillStyle="#000",e.font="16px PT Mono",e.textBaseline="hanging",e.fillText("Hooray you won!",150,30),e.fillText("List of results:",150,50);for(var s=function(e){for(var t=e[0],i=0;i<e.length;i++)e[i]>t&&(t=e[i]);return t}(i),n=0;n<t.length;n++)e.fillStyle="black",e.fillText(t[n],150+90*n,260),e.fillText(i[n].toFixed(),150+90*n,230+-150*i[n]/s),"You"===t[n]?e.fillStyle="rgba(255, 0, 0, 1)":e.fillStyle="hsl(250,"+100*Math.random().toFixed(3)+"%,50%)",e.fillRect(150+90*n,250,40,-150*i[n]/s)}},function(e,t){}]);
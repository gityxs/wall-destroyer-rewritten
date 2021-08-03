(this["webpackJsonpwall-destroyer"]=this["webpackJsonpwall-destroyer"]||[]).push([[0],{82:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),s=(n(82),n(132)),A=n(145),o=n(134),l=n(97),g=n(130),d=n(11),j=n(20),b=n(1),u=[{cost:1e12,bricks:25,knowledge:1,text:Object(b.jsxs)(b.Fragment,{children:["Destroy the wall and move on to a bigger one.",Object(b.jsx)("br",{}),"Gives ",Object(b.jsx)("b",{children:"25"})," bricks.",Object(b.jsx)("br",{}),"Awards ",Object(b.jsx)("b",{children:"250,000,000,000"})," cash.",Object(b.jsx)("br",{}),"Worth ",Object(b.jsx)("b",{children:"1"})," cosmic knowledge."]})},{cost:1e14,bricks:100,knowledge:1,text:Object(b.jsxs)(b.Fragment,{children:["Destroy the big 2nd wall and move on to a bigger one.",Object(b.jsx)("br",{}),"Gives ",Object(b.jsx)("b",{children:"100"})," bricks.",Object(b.jsx)("br",{}),"Awards ",Object(b.jsx)("b",{children:"25,000,000,000,000"})," cash.",Object(b.jsx)("br",{}),"Worth ",Object(b.jsx)("b",{children:"1"})," cosmic knowledge."]})}],h=Object(j.b)({name:"game",initialState:{money:0,damage:0,bricks:0,wall:0,knowledge:0,dps:1},reducers:{increaseMoney:function(e,t){var n=t.payload;e.damage+=n,e.money+=n},decreaseMoney:function(e,t){var n=t.payload;e.money-=n},decreaseDamage:function(e,t){var n=t.payload;e.damage-=n},increaseKnowledge:function(e,t){var n=t.payload;e.knowledge+=n},increaseBricks:function(e,t){var n=t.payload;e.bricks+=n},decreaseBricks:function(e,t){var n=t.payload;e.bricks-=n},tryDestroyWall:function(e){var t=u[e.wall].cost;e.damage>=t&&(e.money+=t/4,e.knowledge+=u[e.wall].knowledge,e.bricks+=u[e.wall].bricks,e.wall++)},updateDps:function(e,t){var n=t.payload;e.dps=n}}}),O=h.reducer,m=h.actions,E=m.increaseMoney,x=m.decreaseMoney,p=m.decreaseBricks,B=m.tryDestroyWall,C=m.updateDps,f=n(39),I=n(133),U=n(95),Q=n(126),R=n(127),w=n(128),y=Object(j.b)({name:"buildings",initialState:{puncher:0,clubber:0,swordsman:0,gunshooter:0,grenademan:0,wreckingBall:0,bulldozer:0,airstrikeCaller:0},reducers:{increaseBuilding:function(e,t){e[t.payload]+=1}}}),v=y.reducer,k=y.actions.increaseBuilding,D=Object(j.b)({name:"system",initialState:{lastUpdate:0,format:"standard"},reducers:{setFormat:function(e,t){var n=t.payload;e.format=n},setLastUpdate:function(e,t){var n=t.payload;e.lastUpdate=n}}}),Y=D.reducer,F=D.actions,G=F.setLastUpdate,S=F.setFormat,M=n(93),V=function(e,t){return t*Math.pow(1.1,e)},K=function(e){if(e<=100)return(Math.round(1e3*e)/1e3).toString();var t=$.getState().system.format;return M.format(e,{format:t})},N=function(e,t){return e.length===t.length&&e.every((function(e,n){return e===t[n]}))},J=Object(j.b)({name:"upgrades",initialState:{boughtUpgrades:[],unlockedUpgrades:[]},reducers:{addUpgrade:function(e,t){var n=t.payload;e.boughtUpgrades.push(n)},updateUnlockedUpgrades:function(e,t){var n=t.payload;N(e.unlockedUpgrades,n)||(e.unlockedUpgrades=n)}}}),P=J.reducer,H=J.actions,W=H.addUpgrade,z=H.updateUnlockedUpgrades,T=Object(j.b)({name:"achievements",initialState:{achievements:[]},reducers:{updateAchievements:function(e,t){var n=t.payload;N(e.achievements,n)||(e.achievements=n)}}}),q=T.reducer,X=T.actions.updateAchievements,L="0.2",Z=function(){var e=localStorage.getItem("save");return e?JSON.parse(e).state:{}}(),$=Object(j.a)({reducer:{system:Y,game:O,buildings:v,upgrades:P,achievements:q},preloadedState:Z}),_={puncher:{cost:20,power:.1,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gkIAwUVPqgzlgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAEsklEQVRo3u1avUvkQBR/ya2V13ki24pEq8VOjpCFrYRjwUawtrHQRlubu2tstZH7Dw5ObAQ5sF1IL1tpOLuTsITt7XLF+ebevsxnNmsi58Dykk0myfvN733Mm/HyPIf/vfnw1t5AeAPhDYR/rdW0D4p6Ud5ut7X3XHy/8Kp8p9eU6BD1ohwAoLPeEf8FqwEk98mEBACIBzEAACwuLYp7z0/PvVcNQtSL8s56B7JRJhTjivNGgehv9eH66ro0ILWDQOlPR5YCkY2yQr/dvV1xjAD0t/ri3AWIVpMAyEYZpGkK+B8qTxWWNao8Hr+q6JCmKaRpKgA4/nwMYTeE3b1dIZO7BADAKPG4v9WHg6OD/FUwAQBge2d74txG4WAtKEgAgM1Pm3Dz80acN54JUS/Kt3e2IblPnPvKAHm1yRINf7b3U8mBmJubK0SKxoJAHaItEDxfUAFRJkzWxgQaDk1AyADQAYGO0dY5vnie4JoYqQDKRhmE3bDQjzpFNAsTK2phAgVAp6gOgMWlRSUjeP7QKCagL1BlhiomYBveDsUxfY6sP2eEjg1+HQDwNFjHBFR+eDuEdrsNnfVOIaM0MaJRyRICYMuEYDWAyx+XwFNr2p8Cyp+T3CUQD2Lj1LtVlzOUMYE3nvnJ+uN5NsoEILIJVyOYoAJAZ9Oc0iYGyXyCTeI0c8fIfYGrU0Rf4NI/WAusw+PMHeM0ANiYQoEJawHEg9gJgBcxBxUAskzQxRRof6wyxYMYwm4oADw4OshtgJiZOegqRrZMOPl6ArTois+h+QKfjvPptU2VqTYmmACgTEjTdEKqirGyekNt5kBZYAJABgRVgJbbbJ2iCwAzcYx83cCUIaqYgM5NZ1K20+oXBQEBQNpWYQoqIG2YYFt1rsQx4sKJbOVI5xRVjTpFXXQx5QkzD5GoOFee23AZJtAsD/vz5+AzuGnFg9i5bunMBN2oVxUVMFPkPkHFCGoqNE+wZUOrauWRCa4J0oRTex5J6l+4pCwMu+FU0aHlQnmVg6qSCddX12K+QIGwKcmVAUAZHaJelKOnxyIGV4pLChauKJnygwJLNKmyTUmu7DqEL1NeprhJ8o8ukx/g4mtnvVPoz89NVWen6KCivGnkTYAMb4fgWlXmo00V5+/QTb5c27uNjxtflleWwff8giLz7+e1nfE6ldjf93x4+PUAyyvL4v7xeCw+fOHDQoEhT09PEKwGMB6PJ97hez6kaSq+UfW85P5vOe3x96PT4ou3f7if65KRaapIOIq2Gy9MCzF89sh9EUC5rTze/uH+TObSVQGhAkS2hafsXianuYM21WXXuA/h5XHTe2Q2TyX+j3nFNJu5tEwwLZS6rCjzMGcCwjggjnVEayYUMrhnBWUjYXNdlUC5gqcC4Pz03JsWgAII9MM49eh1TlHTdSrDbgjxIHYCIlgLxC+5T5w3ZlmZg2nZu+x1k9T5GtnqchXUl4Jw9u0sN3lfm+s6OY29z0rxyphQhcK00Q2as1a8FBNsFS4DBipf9Z5la8doisOqeC1zhq6hLx7EIsmpC4AJJtiMeNXUr1NxKRNsRlyVJ7gq3yQACkywKoGVZEHddl8qOlSheNOVx/YHk4khyVHi9SEAAAAASUVORK5CYII=",type:"Meele",description:"Punches the wall for you."},clubber:{cost:100,power:1,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAACKUlEQVR4Xu2Xu00EQRBELzNywMElBAxEAngYePgkgIuERwpY5IGJs6hOKlQqde9HWFNDSa2d3bvbox+vh+V0+s96bq8uFpa/Fh82/vF8t3y/P55rKhhsHvVyf30uwlg+X/NBoMGnm8vfxhUGjYgGgcbQLCCwcRrg55EQ1IDKBDUCx0gb1AJCcBBqRNxY0AK3QX/zbkPc/qAQaMAaCDQfB6IywfcGB8HzGBDa/F9AREDQkdC9gUAchK6Ht8EhaOME4U0rCP7VGNoGhYCmOhBqhNsQORIOYQ+IKBsIwhvnuTeuYzE0BKSzoQLBawqEx2lA6DU3glbEgehgVCB0PPD5YWHwhycItcJrC0SkFVtGKBCuI0CoFQ6gAuFGRIBAuvFQKFOBWLMifjQQB1FZ4XDiQXRW8DU3AgAUBMu/Y4ioBZUVDqMDgeK/4dPAoB3ViETA0EYdhtqgaxxphMPw7xgibgVhVFboeKgNESAQh+FWTAMCqWAcBTE8BMZB+GgoAF4niK+3hywQhMG12+BWoKIgMDoSDkIhaEWNBaPjoWOxBkOfMP1+w2YNRDcifJ6IA1HB6IBMYYXvDw5kSiscCMfDYURacRRGpBVIB0OBVDDirEA6GFtmxMKoQDgAnsfCUCvcCG1eYeh+EQeDVmBdjUZlRdzmqVZwvRdGpBUK4+iI+P2GDmHstSIWBLIHBq7raPg9YqIj0gFBRUNA2Hz1fEEj/DOx8RFh+fumzg/sbsl4jNp65gAAAABJRU5ErkJggg==",type:"Meele",description:"Not to be confused with the other kind of clubbing."},swordsman:{cost:1100,power:2.5,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAAB8UlEQVR4Xu2Vwc2CUBCE7cq7N69U4Y0GqMDEEqyBg3cLoAeLsALMkIzZf/LgfyQe2F0m2RievBfmY3Y5HJLqfr+PLP0vvGj8/X7nA0Dzr9drHIYhFwSah3FUqhSoeQJAEsJDoPnn8zlVSgBqXgGEhlAC0Pf9tyXCp6AEwM6DHUDkNlgagGkA0PwOYAewA5gM209gSgBcCw8AZtYA4P16jlvBzOPxKAKgeQWgZ7hWDQCYTwMg5QBUAEvxTw9A97uXAkClAcBILwFINQBRqQegvn2Nf3oAut+9/gMQuv+hGgCh+78WQOj+twDmvgDhzEMlAFjDrxsAbduOKF2vUQ2Azfc/zF+v1+kB14KoAYAEbL7/CQG1BkINgE2/fSsLoTYNCoADsJQA3btJwXTXdVUQGGsCQNG8WwBUTRrUfCgAkEKAQQuiFgCTYs92pTkQt9utCAC/FoJr85TOBrZFGgDUXBpoXgHws6jnuFYpDRaEBeC+/5dUAqFtEdY8dTweJ9MWhLaF7gklADifzyNBlOaD7gklAmiaZipcMw3hQcCsArhcLt80hE8EjJ5Opz8AcI11e9/cjHALgw9vARACU6F7IAXhFgaNoNgCFoDeryqBcNci1gQhlOK/JJ0TBOISAkGsAWBFGK7bgSBcGfiV3L7BH+kDhe3NPu15WsUAAAAASUVORK5CYII=",type:"Meele",description:"Some question the use of swords on a brick wall. Those guys are lame."},gunshooter:{cost:16e3,power:30,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAADtElEQVR4Xu1YP4sTURy8r+NH0P46SSUIgpDKToOkDEQwFpY2kiaNjeXBpbTxIwhWFhZ+CK0jszDLOPzevpdkN7sbd2B4m/d3Zn5v73J3czNhwoQx4cPbF4cUfe5VAkZ/fPtSGf7+dXv48+u+Ij4ffv8cZxguOFdV9N99/liN3396UwUBMhwEwTB87SCh1eNnGGSlIyMeAoNgCKl1vSMlSkMgaVCvua/X+U6dNxioUe9n1f02aHUHb9ARCW0KwRmNjeo9j8ziOao2x1hxXnuOcZwhROt7RyQmFYJTx/ynO8d0TirEXpEyG4lVo15tjun7zzFFFGDvSIXgZH+q2j5/UCabAKHHVJz9UbW5l34v4Ni5WC6XB9D7W4FXzs16xX2uG031nwqa3+/33YZwTMXRdlFtmnVut9tuAwBOqXjUdwrU7G63q8wqddzXtoo+Kw6jMA/O5/P6mdQwfJ9W4dW+RMXdONr1el236GPLMHSP1kO5RMXduBpGq88agK6PXhU/8yx0VXE35ea9Xa1WdSi+1m+Fn90rIDZVcRqkGTIKIDLuLTiYAFQ0hatxNaNUQ01znz9+VNHXYa5ruShcdGRcBUeM9uDY7cMHtfn3r59WxPMgAnDRWk2vVMTZbFbTx2gefPXstjavnxkE1ru2TpETXsLS9bwBMA0ylHcvn/wTBOg6W4cbXywWRSaUvkfUD2JvjuFZg9BANAiG4brPRiSaIrV1symDuX4+54KIqEG08hsiEufGm0JQg2omMk6TGkBJELkbcdI3RxWoItWsPqtwitU5kXGfj5bkuiiQVBARNYijvji5cRWQMh6Z9DB0ru9H4jeL7xHNTQWRuxH4zVEUhBtVAWogMk5h2q+C2aKf3xV0PRjpiObpfqkgmm5EYxgUmAuCjIyzn2MqOBVESgfPZetnRUEooxtR9HqogMgkxWw2m6Rxb5W6JhWEztEzlVznIURhIAAPo/H1oDgK1uq5iZxx3YdsOiu1N/s414tTEoQG4q+HaqrBA3mACqG4SFSJcYcb9PN0fTTvmCCi1yMbhNJNMiT/7MJL4ef5OKFnHnsj+LcGg8i+FgAPjAx7tZqEtw3VUnoj9G8NPmMN9mm8DQAP5AF9mI5QeiNIDYKvNNajzd4GYCjGHSU3QqnjIMPg/zt8/9EgF4QbZ7/eHt4K33tUiIIA1bib9iBGHwKgQfgPcr8l3g7tNT8LapzXPgpCA7mqAAgG4TcjCuQqAyAYQET9OeHrrg5q9r8yPmHChAkTJnSDv59E4elJK8IpAAAAAElFTkSuQmCC",type:"Ranged",description:"Shoots his gun."},grenademan:{cost:4e5,power:500,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAAFDElEQVR4Xu2YvY4cRRRG/VzOySBwuBICIfEAfgEkpya0SBApEBA4ISBEiACRIsfOLDk3GcHAHfmzzpy5VV09rNiVmZI+3Z76/07f6u7dBw+u5Vqu5Vqu5VruZbm5uTlY7nPviw3sNeJxe8ffefHGbcK/XR5+8PBApX7Uf6tsrXfrxQvaUIl93Fb68OOPDp88/vSop9992QJx8dxs43pd+60Vm/zhmydnhmgqAFhPwzUu1x7r9QxgBLjG3RqEMkh1G40Ryn1YZ8Mcb4gx0s1JGGwjwF0gbDZ69eLHw5+vfjtqtNnU+27QcMYRCO9iB5B9DMIQPM57KdnzSSmzvzx/evjj56+PKuOJhhJxwzTKO+JNUDTHesLq+rOuW+vRZ49O2tLO7GhLIFTsQCRShmJAvCO+w0zztNuM+xuE7zz7dVnlPZaGEEYZ4RjVMeGRKXkxq+6WDW2BSz3TP/L8nQ5/vTlT1Z9BiAKBmoGwCMaAViDt1eHNy3X9Y772fwYhIKjA2JsZK5pB4h663yUbS53jVCMINGsobN/KkEvARIRRv2ne6ow7dqr9TSHQRNXxbBrKFhjPt6KYztwrMGjYEBypFgKVhf20zdM7ryOP68AQxAqQDkLqE0fqjCd6n2cAePbzprACocznfRwQNO1xbjcQg+kgEIBjB8Drl9i3frcQEkeb9aQlQrCxtK8epazRQUi9AXjOKK/S3DC3l4YQauFnX3z+Tjbna0+cOdLmj5yoA5NxHYQY95iYzHcEv0Hcd9d3Qpn/9dsnRxlIB8Xy4qVAyKa58WqPYaqbK4D4XBrdbT8Io1rrDEJARIFAGC9++uoEyAjKCI43WOLmR+N4jnne95g+UWXB29hCYCY8f/b4BEAXV6DMZBOlGQD3tcFAcrR2ZcIKiIql179/fwYlYFah2Gj3u1Nn3LHTCYT6wc9kZsIeEAQyArMCJObrOtHGR+oAMBIqcqB/O5T5LiNmQDoVCMpQDIQZUG2XwKBxms7cmX8IgZkQ7QExAsLsGEFxJhBC6h070TRfl25rIfhIRARhGB0AxxEMQlmBYADsS/H16e+R4XdCQEQzIKOssHHHTjGfGNMdBMPgfvmh1BrPw/Dt63H6doj5VSAjGAbgaBCBkDVHECj/DZOPrjPjIxmCF4jprj5teYBeCsQgeByyHq995reMVz9Gqs0EG+TE/NxlfSkwarMEMoMyApHj4PNvlQnuwWZpuqujWgiJSX0DYer53MVAlyVbIHwcOgg2vqIOBOd5B6CDYBAzIF2GBEbiDEjVJRO2joPBzDQynva6biFYBEBxcxH7sZ5jRkAIIRslBNavguAekrWuP4EQEDFjACMQHRC2sd5tFQmEmZDNZo7UbUWu5ddm6qffCSnpvJoRjhmf67y3/SSPSY6dQXB7Z5xH1Mf0+DDc+k5w4QQGQSAdiGw+4hdcHqr+z08M1nUHwX0iPqwN2m+DE61AYOHEqxmR6E1ns/wfINtLIwjU6EOJD8Tu7XAxBJYs1sEwAILogPCPmw4ar8tEjAQC50o7+41irZV57G9X4QYMpAOxBaRrt7HSzPhIHYh/DcDFZraAdOIcHYS9xq0AyDz2cKulg7EKwkB8XSYMZ1X/iXkX3tk9QHK3M44wLgFxJ+a7YiBbIDoIbh9FGr8X5rvi7OhAzCDYOHWvjXfF2REQ9XsGwbr3d3210EjusiEQxntjfFRo0JnwXhvvCmH878zfRfkbxaKzGPXGbs0AAAAASUVORK5CYII=",type:"Ranged",description:"A man with grenades. I am a master of descriptions."},wreckingBall:{cost:8e6,power:7e3,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAAC/UlEQVR4Xu3WMW4CMRAFUK7EAWip6CnpET0FF6DmIhyR5K/0o6+v8dprkbWJM9JoEsCbnbdjk83mO7bb7Wu/379QmZfLZap4f4ggAvJ4PE5JhOEgohx2Itg0Ee73+zgQjsDXhkSIpoHbw9f8yXAIRRhyIvybYsjzQZOvDQkRHZRDnRFESP03OcxEKMTQZ4ROgW6D4SAQnAptWLeHAtWGY0fpa1YNIqTOiNqp0GvpttPtp7U5iEL4GbEUwhsvAfDaDEOfhN9ECQTXpBovBdDq97Fa8CmWnBN8n2sUIIKIGs0lPtcFBJMIqJyK3wTQbAahDfLGHcQbfzcAsPlzEwiEToLeBAGYKYAlEGzYq2ZTCNw4b2AOIIKoBWA6SBMIbdoBIoilAAqRSv9sU4gIIQWwBMIn4Pl8TukQrM0QcgAOcTgcXrfb7XU+n6sAUhDMZhCOMAfAPJ1OPxCp1EZTEArWBKEEQCEIgJtdChEBRJOAv7MqRAphDoC/EwJbo2RLOIJj6LouEKJJUAQ+MUwCJ8NTAXLToOtWnYQUQAShCArBLZGahDkMBbher9NEIVeFmEOIJsEhCJCahBwEEusfj8cPgH7rNEdwgAhCATgJpROBJ4/mCYBr4T1CdD0JnqUAaBLNsWltXs+Ej5kEzwgCjeiIs2GmIzG5DtfpAsEBIgg2jsbYAKo2nGuciet8zCSkDkevbMybjdInqOtJcACF0MmYq964Vk5CVwgOsdvtpqbxs6c3tLTqVlgNAZGDUABUPnkHYHpjSyrPklUBEDkEh+Ak8PcoowZzVc+CLhFSEN58lFHDUeVhynWrIiByELgprbhZQOjrJemNs/oWWx0AkUOIQGohPPUbhq81QUCUQOAGWbklaiG0+S4AECUIDqIQelimQLxxB8C6pgiIUght1CG8zqVepwsARimEg0QAqeqQXQEwaiFqa3cAjKUQTG8wV7sFYNRCeHrjzO4BGLjRd2EweU3/W93HOzA+tnkPNlIKop/3a/2J0AZT6Wv+4w3xBfKotDtz7nQZAAAAAElFTkSuQmCC",type:"Heavy duty",description:"Something actually meant for destroying walls."},bulldozer:{cost:12e7,power:8e4,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAAE60lEQVR4Xu2avWpUURSFU/oUprE1EOwsrCNYpLARUgmKNiJWBtJZSMQiYCtYpbH0AXwEH8c2sob5hjVr9rk/M2Oca7JhcX7uOeee9d197syE7O3dxm3cRl+8O75z9TeU99m58M3++PTo6te3x6P0++ezlTK1szDY2Nf3D2bmXTKT9a6yJQezcxC0oY/P784AIBmqgCScTPWhyj3888gNjtHJyclCp6eng3R4eLh7EBTa2NHR0WyDKrskw5SS5gzVZCAMMeYAhsYkIGCqz1xCuLi4mNUvLy9n5TyO51rEJCBkJpiRFTMO4ezsbAFhHjlnVp8EhCIT0swsEgKZoJiXCWA6EBqZ4LEwk5mgcBg2floQikzwWDLDpwPjVBcMtbu08xCKTEgAZSa46O/SFCEsAQCCf09Ig0OUX7rWUXrYOBoQlgCov4Lg5sb+jsg6BvPatfwIcwgOA+P6+OMjkDGM+/L2YOV3Rf7GGFLKlM/p01Z/iHmKeSb4W9/f/A6KeQIBjC4obthNU+e616sSbQ3C9w8PFwtKGFT4eReIhJBzhwoz2b+u0tPokBEtRHphUJlAFqAKAvOpy1yrxHhCyIypxHyfu7VswAQLYlCmAcHRqCBojo6Ag2iJe/C3Coei9YbKIWzl3dCCUAEAgiTjzFVJm7JLVTZoTb5M9ZWam2ukr1HhTzEhOAA/DpIb4sWYIFpAqmzQmryU03SWeaw2zoYuCIQDAQLzhgCoYOSTdAh9MMiErYFoQegT4/X3SQdRAalUZUNCaMFICBsfC0ywKCb5QpRiY8zRfJUJIUEkkJaJCkLCcMOssVE2sBlJm/On3RKGgADIKisSBPfhnpkNPIAKAiWZ4B66ssE9oqUB1carzWeJoZZa6/pcyswGILRgdEHwTxzkvznKbGHDXU8z5VlQXcNcnxiX2ZAQEkZCePP03tK6HI0sda0JYYjSsPfltcwaLyXMqg9DmQ0VBErmIIx2SeMcxhKE89cHV5IusEmvV+nVkoNIJYgcr7ZDkNx83itNVsoj4vUlCGnCN5hAsq0F6RsKy9elzZPNY+FKgynmtUrWKDMhb9Ylnlg+UYfEDbMtvXiyX67Juq40OcZwVfqaqg+GwAsT5fVKmUkOijGCkUCGGEVD2w6AdpkJvrl1TOfc7Jeq44N4MpWZIfI51XzWdzBqL0HwlxZm0gRKSOev7i+UYxHX0nwel9z8usoskFhffU0I1cvK4XhatwSU7Pe+PB7U08g2VWWCjoS+W6xA8JeT93mWpCpAgpH9gGAdh6t29Y8hup6G1hWgm0eC1HajtBNQwkkoyMf4OF/Hr+V/xXg7r7X6uqR7OIAmBHXyxByMQ8g+N+tlQklVmZDZkEY1Ps119bu4L+0VCLnBSg7K+xJGgsGkG/Y2wNL4pqUbl/zp01a5AqEyOkZV9mAy+xyUrpMJXRlRlT4+94PxPAYOYwEhYbghoKwDByCqY9oheSZ8frk/M6PrLSCV/H5u0o1T+tj0vhJpxk2tC8WzpA8EZUu+rj9hjkECYGz6XCsqUw6lD4yDqI6EzCcIlbmOG3R5n49PH1uL3Jib9HqVOZ4NmQnI1/UsSOOuazHeFwmlpcwGz4TKOOYrCDthfGwAIUFg3N8HbtwBTNJ4hr6zOwiOSh+AyRvPqI4G2VAZ/6/MZ2DQIdwI41XcWOO7FH8AuNovDqBiX+cAAAAASUVORK5CYII=",type:"Heavy duty",description:"Rams the wall. So good."},airstrikeCaller:{cost:5e9,power:25e5,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAADzElEQVR4Xu2XQU/CQBSE/T+cvHBDE08cDMaTBzl5gRshMSYknvkd/tOaaTJkGPa1u6VCa5jkBWy3tfM57229u7vppptu6lGz2ax6fn4+KV8HRWubrvE1TWuvJhj7+Pio6/Pz81D+0Cisnc/n1dvbW124ZrPZ1OVrWXpPvbc/x1UFY6+vr0kQKB7HOhQBEAJB0LSfS91zkBDwoA6C32GIoDQJCoAQ9vv9AYRCcBiDhACDCoFF4zzflgRAiEAMPgkE4CBSENqSEEFQEIOF4GlQ47lJ+Pr6OoIQgRg0BDwkH9wB5CahCcSgkwBjCsJToFByktDWEoODADkIhxCBcACsKAmoQQKAaFZB4LsnIQeCJ8FBDBoCAfDTAZQmIWqJwUNQEKlWyIXQ1BIXhXB/f1+h/HgkBxElQUHQFEzje5QEVhuAyWRSofTY09NThdJjqXUHw1ovLy/1g/nxJjAKIpUEbwlCUACeBG6pOQCm02n18PBQG0TB/Pv7e7Ver+vvPL5YLOo6AgFjj4+PtfEIgp6X330iGIwAsPAzTCkAT4KCaAMAKQSadAg8zzUnELAARpsg8Lz87qRSreClxqMkEILfPyWFQJMpCAoq2RJYEEHguaOLAnkSosoBUQpBQTRBYNsc3USNMvp4sN1u1xkCro9A5AAogQB5GpognACgNPoOoRRAX0n4+fnJBqFpgGlEnhAcRAgBiiD4ukjeChGIHADb7bYIAkQQDuH7+/sAoREA1AcEfV9w8yUgWCUQIG6PKQitAKA+IDAJ3OO1UgBwfLVanVRpO6giCL4uqXMgpFLgaXAoBIDoa7EdAKkLiKtCYApgTpMQtQKM8hPlaeB8uBgEAlAIJSCahqL/9bWWy+WRaRrnZ2kSCMB3B+4Qvv5IDqE0DX1ujwriXAhFaegTgiehKwC+NJWAuBoEDsU2AF1BdIVQPBcUAkGUQOC2iGoCUQJAf+4C4awkKARcmAuBxv0dIRdEtDuUJAHy3SFrKFLeEjkAoNRQbNsdYNI/PQldZgLkELJSoIJpLT+f0pBmAgXTWn6+d/U9E7xKZsLV9BczQQF0ScLF1fdMUACjgvCXM2FU7dDXTPD3hNEk4TYTpB1SLeHzwGeBzwRvhVG0A0QQCuDclhgVAMjnQgkAB6EzYRStQBECE6BzIQcEymfCaOYBFW2T+PR5kJoLqZkwuiRABMEURC3hKdA0MBGjBADpVkkYBOIQHIAnYnStoPLZ0NYSNK9JGN2ukFLb/xKpJHhLjBoABRD+JpkDAub/BQAVYaAcAIvG/535lNTsUIz/Ag7aqgVKOZalAAAAAElFTkSuQmCC",type:"Heavy duty",description:"You know, the guy that calls airstrikes."}},ee=function(e){var t=e.text,n=e.img,a=e.name,r=(Object(d.c)((function(e){return e.system.format})),Object(d.c)((function(e){return e.buildings[a]}))),c=Object(d.b)(),i=V(r,_[a].cost);return Object(b.jsxs)("div",{children:[Object(b.jsxs)(U.a,{button:!0,style:{border:"1px"},onClick:function(){return function(e){var t=$.getState(),n=V(t.buildings[e],_[e].cost);return t.game.money>=n?function(t){t(k(e)),t(x(n))}:function(e){}}(a)(c)},children:[Object(b.jsx)(Q.a,{children:Object(b.jsx)("img",{src:n,alt:a})}),Object(b.jsx)(R.a,{primary:t,secondary:"".concat(K(i)," cash")}),r]}),Object(b.jsx)(w.a,{})]})},te=n(131),ne=n(5),ae=n(144),re=function(e){var t=e.children,n=e.text,a=Object(ne.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",border:"1px solid #dadde9",maxWidth:200,minWidth:200}}}))(ae.a);return Object(b.jsx)(a,{title:n,arrow:!0,children:Object(b.jsx)("div",{children:t})})},ce=function(){var e=Object(d.c)((function(e){return e.game.wall})),t=Object(d.b)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(se,{cost:u[e].cost}),Object(b.jsx)(ie,{cost:u[e].cost}),Object(b.jsx)("br",{}),Object(b.jsx)(re,{text:u[e].text,children:Object(b.jsx)(g.a,{style:{marginTop:"10px",marginBottom:"10px"},variant:"contained",onClick:function(){return t(B())},children:"Destroy Wall"})}),Object(b.jsx)(w.a,{})]})},ie=function(e){var t=e.cost,n=Object(d.c)((function(e){return e.game.damage}))>t?"green":"red";return Object(b.jsxs)("label",{style:{color:n},children:["Needs: ",K(t)," Damage"]})},se=function(e){var t=e.cost,n=Object(d.c)((function(e){return e.game})).damage,a=Math.min(n/t*100,100);return Object(b.jsx)(te.a,{variant:"determinate",value:a})},Ae=Object(s.a)((function(e){return Object(A.a)({root:{width:"100%",maxWidth:360}})})),oe=function(){var e=Ae(),t=function(e){var t=(e.charAt(0).toUpperCase()+e.substr(1)).replaceAll(/([A-Z])/g," $1").trim();return Object(b.jsx)(re,{text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{color:"inherit",children:t}),_[e].type+" Building",Object(b.jsx)("br",{}),"Does "," ",Object(b.jsx)("b",{children:_[e].power})," ","base damage.",Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:_[e].description})]}),children:Object(b.jsx)(ee,{text:t,img:_[e].img,name:e})})};return Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(I.a,{component:"nav",children:[Object(b.jsx)(ce,{}),t("puncher"),t("clubber"),t("swordsman"),t("gunshooter"),t("grenademan"),t("wreckingBall"),t("bulldozer"),t("airstrikeCaller")]})})},le=Object(s.a)((function(e){return Object(A.a)({paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})})),ge=function(){var e=Object(d.c)((function(e){return e.game})),t=e.money,n=e.bricks,a=e.dps,r=le();return Object(b.jsxs)(l.a,{className:r.paper,children:[Object(b.jsx)("label",{children:"Resources"}),Object(b.jsx)(w.a,{}),Object(b.jsxs)("label",{children:["Money: ",K(t),"(+",K(a),"/s)"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Bricks: ",n]})]})},de={overnab:{isUnlocked:function(){return $.getState().game.damage>=1},text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{color:"inherit",children:"Overnab"}),"Damage the wall."]}),img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABQUlEQVR4Xu3WMU4DMRRFUa+KOh0ofSQqGrZAQ5MFsIDUVJRZQuiQWBXoI01kbjz4WbaHOPnFQZoA9rsJBeHp7fXrEgT78vJxGNqvEBaOIhlyv30eyp8h7w+3s/abVXO8Q+UhhiNa4B2qriGfj+tiPENVFcIRLXCgykM8JIMDVR7iIRkcqPIQD8ngQJWH9MQ4RTaE5RNe3hJHKjyEl8/Z3d38iJ/5ff4ORyq6h8TiqFTAhCMVi4VMESGE5KcUP3OkokvI3Ls9DY6D+DMcqOoSQnzH49f4OgeqFgmJx6eea/+sFg8hhhkOVP1rSAoHqrIhvOhcVYXwU6rF80t4iOGQWjy/hIcYDqnF80t4iOGQWjy/hIcYDqnF80t4iOEQFc9pIRvCf85iPKwF3qHyEMMRLfAO1fWEjGQ2ZEQnISM7hlyCb6EoEWAtF3fxAAAAAElFTkSuQmCC"},scrub:{isUnlocked:function(){return $.getState().game.damage>=100},text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{color:"inherit",children:"Scrub"}),"Deal ",Object(b.jsx)("b",{children:"100"})," damage to the wall."]}),img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABeklEQVR4Xu2WMVLDMBQFfSpqujD0zFCl4Qo0NByAA1CnouQI0DHDqWB+8Rllka1nWcKWUbGJrXi+dm0XGe5fTl97YLCPp4+3pjkLYWErRENuHx+aYjLk/XgY5fXmsjjcQ6WHGJQoAfdQqRryeXc9G85QWRRCiRJQUKWH9JAEFFTpIT0EPF9dnJ1TUKV6CEUJf6egSvWQmCx/I5RUqB7iclxnhK9RUGW1kHB99RAVl46tcd1gtEIyhOUON08RCocRmw+hKI+HYYhGbCKE0mNYhIfEYiipUDyEYjH5qYhNhEwRxjCEUZRUqBISu9Phkwm/eR0FVaqEEI/wAK41E+JQPHy1fI2CKn8SEt79WEgIBVWqh1Cc57yegirJEG60FIbEYnJYFMKnlMPYazeXTYT4sc3MjVk9xPAYm7mbkFx6iEGhXHYT4nD+HHqIQZGlcP4ceohBERXOKUEyhH/OQjisBNxDpYcYlCgB91D5PyEtMRrSIr9CWuYnZA98Awbw7W45EJWLAAAAAElFTkSuQmCC"},lessScrub:{isUnlocked:function(){return $.getState().game.damage>=1e3},text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{color:"inherit",children:"Less of a Scrub"}),"Deal ",Object(b.jsx)("b",{children:"1,000"})," damage to the wall."]}),img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAByUlEQVR4Xu2WMU7EMBBFcypqOhA9EhUNV6Ch4QAcgJqKkiNAh8SpQIM06PPWTia2E+IlxdvEY6/9n51IGW6fnz6PgcF+Ht5fu+aXCA17ISlydX/XFaMib9dnWV4uT5vDNaLsIgZDtIBrRFlU5OPmYjacI0qVCEO0gAGj7CK7SIbH85PvKwNGWV3EA5MuRVIymxZhYLZZc0nHAvp1isVF9ARyIgzvAqyNUS3CsCnGxlhtGIbZwUm1iAZlyGif9jNglGYiqXCpoBzH/zNglCoRxYNpO9fnNX+kOBelI0yK0Nzh4oQBKWYSmxPhjvPl1ZqKpCT+VERlFN91haeRkmHICM1EVCZVo0hq7GZEUuROSEUoxZARFhHRgBSaOhUGjNJMRHdeoYThNZVRGDJCUxHWiAfXNusWqkSmmcgY3HGK+BgVmSuzuIiHSr0TXte2B5srMynCYCUwvN5ru4YqEZ5SDgvLmvYpXCPKKiIemDWv2+Nl9zZnqcwqIr7brLPf5ty8CGup/lIJYxWRKVSkVGYzIl08WhFKBZzNiBg1MruIwSC1dCfCeVowKcKPM4WTtYBrRNlFDIZoAdeI8n9EeiIr0iMHIj3zI3IMfAFcHby8kP107AAAAABJRU5ErkJggg=="}},je=function(e){var t=e.name;return Object(b.jsx)(re,{text:de[t].text,children:Object(b.jsx)("img",{src:de[t].img,alt:"A"})})},be=Object(s.a)((function(e){return Object(A.a)({paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})})),ue=function(){var e=Object(d.c)((function(e){return e.achievements.achievements})),t=be();return Object(b.jsxs)(l.a,{className:t.paper,children:["Achievements",Object(b.jsx)(w.a,{style:{marginBottom:"5px"}}),Object(b.jsx)(o.a,{container:!0,spacing:7,children:e.map((function(e){return Object(b.jsx)(o.a,{item:!0,xs:1,children:Object(b.jsx)(je,{name:e})})}))})]})},he={gloves:{isVisible:function(){return $.getState().buildings.puncher>=1},isBuyable:function(){return $.getState().game.money>=100},buy:function(e){return e(x(100))},effect:{puncher:1.5},text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{color:"inherit",children:"Gloves"}),"Hand punches do ",Object(b.jsx)("b",{children:"1"})," more damage. Punchers do ",Object(b.jsx)("b",{children:"50%"})," more damage.",Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:"A little padding."}),Object(b.jsx)("br",{}),"Costs ",Object(b.jsx)("b",{children:"100"})," Cash"]}),img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADl0lEQVR4Xu2YXU/TUBjH+RZ+Cj6BQYQRRMEAgktIRpwBAplageFgiEQTBnG6oIkEgcGQN0HBtyiJUYiIMxE1IRiuiN4YTbjwMxx9ujzt6XPaUVy7tYSLH2w9pz3/X0/PS5fXMTfJDgJ58Cf6cdXVaESooVvQFSmXAq4irciR/HxXcCjiNA5FnMahiNPIqUhVdSG7316kgdYxi+0i0UvFcsDBy2pQn1f9DsRDJRnL2CpC7zYy1KZ+3lnqYH+S99j3V5GMZLIiEu/1CjJUBFifDv+3jG0ifCAMCkxfrzEUARwlki4ofYygnK/z801UKfPXFQvXNsJSEc+pYxoJIDnaqCvzNHbeUHYu2rTvXrFMhArw0KAIlCW6y4Ty7RcRNnPtdPZFCssKlNBTA41s63G3RuTrg4AQFkWm/wWmjxc8eiPBHPQIBn4UqVXCbC6oM9CT/mq2NSsJMlAWv1IiiGBZTkTwzuqFQd4N+TWh4dhosNhZIunCUDYmWuTy9bEL8vd4Z6lwfs5E9MYBhlnoq2EvYz6WCJcJUohjRKZ6ynXDgAQvtzEblntgtMOjKwN1+HWGtmVExiJXm1KbQmBp4KwiA8Cx8VDqseFlgO2lXjZ/0y/IUEIN5hbFjERCDR52t1UVAfjpFI/xclQIgOma7oB5aLt6ZCRCG+SBFf39sHrHeRkjIeDLjHoDciKCQWgIHrMywHr8onIebPtp2xRLRGiwyT6fIEHrUqgIsBg9pzmXtm+5CKwLfJhfK7fl/1QCwRkLJwIjGX4nPChlQQQwCvR2rF1T79mtevZ6pE0Z3DDVUgEePC/c5BHat0wE6GkulRvitx9UBlgeluR6G3NdyrHdtUEZWhdZGVdvgrf2uNC2pSIANoaru5EM1Pn2PH0PALtrd/b9Dm+JSNFJdRsP4E6XCkFZMiEJwXl+LEfYp6k2zfVa6vdeFC0RASoqtb9R4ZshLwPHYWzQ8DwfEq3yJGC2JxDLRBC/z3hjiNDwn2eCbHW4mT28UaWRgB/w6PWNsFwEqTijBuJZiPo1Eov9tfLLFS8A+LzpBzfFNhEgJqk7XDpekN+rMbY536XUC0p1wnXMYKsIf4fpeOGh+yt6HTPYKgJgOPqaywM7Aax39ESBcA0z2C7SGagUeoWKAFinL7D3VKuH7SLAfkQibhDhF0oqkpxIbWEcO0YAMyJ8r9DzzZAVEcDM45VJr+wp4iYMRdyIIOJmFJGDwF+1bgdGWay7XQAAAABJRU5ErkJggg=="},paddedGloves:{isVisible:function(){return $.getState().buildings.puncher>=5},isBuyable:function(){return $.getState().game.money>=400},buy:function(e){return e(x(400))},effect:{puncher:2},text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{color:"inherit",children:"Padded Gloves"}),"Punchers and hand punches do ",Object(b.jsx)("b",{children:"twice"})," as much damage.",Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:"Actually significant padding."}),Object(b.jsx)("br",{}),"Costs ",Object(b.jsx)("b",{children:"400"})," Cash"]}),img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADhUlEQVR4Xu2Y60sUURTA/S/6A6IPRRJRZJERKgi6EWhYUoullpY9QNpIk80K+pD5WHpIRGmaKNkDRYykFySJRVBQQUl9KfFBlpAh+enGme3M3jn33tlZZ2adET/8xL33zpzzu3fvPTObEuq8xRYDKfCnbuiZrzGIUEO/IBUpPF3tK0xF1m8P+AJLIstSUz3PkojXWBLxGksiThAJrGA9+zcYoGOs4rpI276NWoJdJWmGRPEz0F8eHWNHxlUROtvI/dLY/zPtQfa37xSbfdJoSyYpIgOVGYIMFWEvmtjEvbPzlnFNhE8IEkWeHzdK8SKAp0RkifLJzvTUGvp5mbmXN70hwksAY015eqJzQ626zMdwllL2w4W8hGUcE6ECPHyi9Gs0cHiL0A88PbZ1YUWGq7LYdMcRQUSWLPRBwrQfvnq9B4zHdTwcEcGEX4Uy9Rn/1X5Ib39dlSkkiyL9ZWnKvgURwZnFREBmtH6bdGVwHLTBzHtKxCwZyuTlnVr/eCRf+/zw4Cbh+gUTmWxWiwyHMtiX8Gb2qCJdkEI8I/L4qLhpUYKXG28t11agryz2rMXLwBi+ztBYKmyLtOxYqQd9w21qANrggZCuFDDdVcneVkePWDOa88WYMmyJQJDuEmNg/jjFNl6OCgG/u0PCEzAPjSvDlggNyAMVffRirlSGCmGBBKZvVwj3OhdYLcSmOCaCSdEkeKzKAHiiAQ9K46+KIyI0scET5o/tMmRS72uMe4jGd1wE6gJNxmx18MTCg8BMBq+5U7xOiO+YCC+jSmgkEtv0wKeadDbSuEvf3HDU0gmQiVwtWCvEdlSkMRgtct/O5yhlgM/1Bdq4iZYyoU8GSHy9VKSL0LgU2yIABsPqrpLRRO6GhXYZfFFMmgjAB/15o0QqpMn+f85S8af3jDYhiUgAjokAfHB8M+RloB32Bk2eZ+zKHkNxpDFUOCoC1O5WH70ITf7HtSL2vS6XDVZmGCQigeXC/VU4LoKcDGYLAsC7mujLFwIvXfByRR9R6P3i4ZoI0FEcS47uFwR+mJtqi71NNpRmC/exgqsi/AzT/cIzdb3Y1moArooAmBxfZ6jI7EC9Pi6cs0q4hxVcF2nYG9v8KhEAx7QVmldwFa6LAImItBeuEa63QlJF+EKpEgHo9VbwjAhUfBzXGUx8VZIiAiTy9ZrPqsQV8RNKET8iiPgZXWQx8A+RCCWpnuxxjwAAAABJRU5ErkJggg=="},steelPlatedGloves:{isVisible:function(){return $.getState().buildings.puncher>=25},isBuyable:function(){return $.getState().game.money>=1e4},buy:function(e){return e(x(1e4))},effect:{puncher:2},text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{color:"inherit",children:"Steel Plated Gloves "}),"Punchers and hand punches do ",Object(b.jsx)("b",{children:"twice"})," as much damage.",Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:"A brilliant plan."}),Object(b.jsx)("br",{}),"Costs ",Object(b.jsx)("b",{children:"10,000"})," Cash"]}),img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEHElEQVR4Xu2YW0sbQRiG/Rf9Fd4VetHrQqFgE1oxnhpr4gGsrVarRiVW8VBjaoP0wqLGCLFKBJWKeqH0Rs2FhwsRBc/iH5nuuzjLzDe7MdZdTcSLR5Od2fm+Z2fnlJzG3zH2EMjBn1Dyb1YjiVDDbMFUxBMMZBUpRZ7k5mYFjyKZxqNIpvEokmncq0ip18uam5slXpWUKPXSwVGR194y9rG+Xk+wvqFB///M7WYev599vvoO2traJJk32n20retwVIQ+bc6Xpibj88LCAtva2mLr6+tSnZv2jGMiL4qKjKS+dnUpMlRkf3+fLS4vS2W0zVQ4JiImhEQPDg70ZLt7ekxFjo+P2dnZWeaIPHW5TBOFBBI9PDxkKysrUjmvc35+zra3t42ywooKpX0rbBVxv1NnoVgsZiS6s7NjPPnI0JAiu7e3p5f9HB6+ca/YJkIFRHiiHCR7cnKil3V0dEjl6LGNjQ3WdTWuaBwrbBFxCT3xLRxm8/PzksjU1JQig95BGRIWXy+AV6+lpeXuRXjCoVBITxBPfG5uzrg+MDDAZmZmFBmUtba2KiK87F5E+JNFEhjYeHWi0ajUMyMjI1LSuIYnn1EiNJnd3V1JQiQej+t1JiYm9O/t7e3K/fcmYjYOeDL9/f1sSJulgsGgIsWxEsnPz1fimWGbSGdnp2kykBDlEtpYQQ8EAgFTGdQR1xmPx6PEM+PWItXV1UbQsDZjcRmAa9gQ0p4Cf7Rr4cFBRYbir6xUYppxKxEEaWhslAKL0ym/JspRIbC0tKTsgEVoXDNuJUIDimBFHxsbM5WhQpjlTk9P2cXFhbIGgYI0dsK2ifCkaBIiqWSw/hwdHbHLy0v9M5/RQJO27X9ZXKzEt12EJtbd16dI0LoUUQo9gw3k4I+IdC+Nb7sI1gUxmbW1tZS9w2csPhGYyaBnNjc3jXtwoqTxbRcBVglFx8elepFIhI1qKz4f3Jhqxfoc9AjfjwG/NjvS+LaJ4L311dTogcTtB5UBv0ZH9XpYR/i1ZDKpQ+ti8OMgNi6ME8/7ciW+bSIcHoyv7lYyes8tLirXKZATF0Xg0o7ONK7tIi5vmRSU73SpEMr4PsuK1dVV/YGI7fl8PiUmxRYRUEBk+MlQlMF1jA2avEh8clJaHJ/n5SmxzLBNhFNcVSUJmUGTn56eZqPaGOrt7ZUk8AMebd8K20WMhi2EvmtrgyiBQxcOV3SLUlqeenBTHBMBdcKviXS8cPDD3OzsrFGvoq5OaScdHBURnzAdLyKJREKqS9tJB0dFAE+OHnNFsBPg9d4WFiptpIPjIv7aWqVXqAjgdWq0+rSNdHBcxK0dVW8i8iFTRQBPUlworUQAvT8dMkYEKz6v9+k/Zq47FUk1c922V64VySYsRbIRRSSbMUQeAv8A59N+UWlwTWsAAAAASUVORK5CYII="},magicMining:{isVisible:function(){return $.getState().game.wall>=10},isBuyable:function(){return $.getState().game.bricks>=10},effect:{},buy:function(e){return e(p(1))},text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{color:"inherit",children:"Magic Mining"}),"We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.",Object(b.jsx)("br",{}),"Costs ",Object(b.jsx)("b",{children:"1"})," Brick"]}),img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACOklEQVR4Xu3TvU0DQRCGYQf0QBWOCEgpgzaQSEgogCqIKIOQNhCVGJ3FWuN3v9l/n24tgg+4/ZmZ52x2zx/vh2vIbvnx9vU5dc4gFM4SCXl8fZkqScjtfj9F/iFbyzDIzd0hWlszQyALYnrIFhBLuiABsSbE69cMCQUPD5fH2BfmvbzNQ+zgqV6bhtgeuT5DIV4TL7nzq0NaMPa8d8f2yJ3thozCcM/u5z6NJcUQVYSQWgwHze2rMyFVEFVIYWpAuUFz+yHVEBbzIKUYe1+ds7VTtZogLBhhnjSIzXmX51iX+10QVZR7R4jBpAbgXbdmps4QiNov/VTsvfB3VMvU8+o0Q1g02u+ERAhAWKsLwsIRRHy97ADRHd5lUGsMRBQ+7dtPQ5yz9c7uiKFzdcZAVEM0tc92+GOt1ODM6hC19rceIXgmFfEymiDFGD6b9V7EEoUYA+Fvb0ieLU0Boh9iG6UQJfsqAnF5CP9mOiA5xHjIqBi0h+BzFURiRkMKvk5qLQthsQiC5iE/99/HcD2ZCgTXqyA20QDApCDROu6rQdnf7hVD2CCChGEwrMLwmXfVoLan2q+G2GZcK4Hwmff4xtWL64LIwZkERKF4zw7NhLMeYgwkABL/8K0Qey6FGAMJwxRCIky4qwKEhXCtGHLCsJloXAVRQa0cog0iGnkhoBeiUgyxbyDVTIWAVHK1CbBr1ZAzjGhWO7xEhNoMz7RA5KfiFF/CQVPhXRkHUwWZKS5kxkSQmXOCXEN+AYZWuAVM5ZjAAAAAAElFTkSuQmCC"}},Oe=function(e){var t=e.name,n=e.disabled;return Object(b.jsx)(re,{text:he[t].text,children:Object(b.jsx)(me,{name:t,disabled:n})})},me=function(e){var t=e.name,n=e.disabled,a=(Object(d.c)((function(e){return e.system.lastUpdate})),Object(d.b)()),r=he[t],c=r.isBuyable()?{filter:"grayscale(0%)"}:{filter:"grayscale(100%)"};return!0===n?Object(b.jsx)("img",{src:r.img,alt:"U"}):Object(b.jsx)("img",{onClick:function(){return function(e,t){he[e].isBuyable()&&(he[e].buy(t),t(W(e)))}(t,a)},style:c,src:r.img,alt:"U"})},Ee=Object(s.a)((function(e){return Object(A.a)({paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})})),xe=function(){var e=Object(d.c)((function(e){return e.upgrades.boughtUpgrades})),t=Object(d.c)((function(e){return e.upgrades.unlockedUpgrades})),n=Ee();return Object(b.jsxs)(l.a,{className:n.paper,children:["Upgrades:",Object(b.jsx)(w.a,{style:{marginBottom:"5px"}}),Object(b.jsx)(o.a,{container:!0,children:t.map((function(e){return Object(b.jsx)(o.a,{item:!0,xs:2,children:Object(b.jsx)(Oe,{name:e})})}))}),Object(b.jsx)(w.a,{style:{marginBottom:"5px"}}),Object(b.jsx)(o.a,{container:!0,children:e.map((function(e){return Object(b.jsx)(o.a,{item:!0,xs:2,children:Object(b.jsx)(Oe,{name:e,disabled:!0})})}))})]})},pe=function(e){var t=$.getState(),n=(new Date).getTime(),a=n-t.system.lastUpdate;e(G(n));var r={puncher:0,clubber:0,swordsman:0,gunshooter:0,grenademan:0,wreckingBall:0,bulldozer:0,airstrikeCaller:0};Object.keys(_).forEach((function(e){return r[e]=(n=e,t.buildings[n]*_[n].power*(a/1e3));var n})),t.upgrades.boughtUpgrades.forEach((function(e){var t=he[e].effect;for(var n in t)r[n]*=t[n]}));var c=Object.values(r).reduce((function(e,t){return e+t}));e(C(c*(1e3/a)));var i=t.upgrades.boughtUpgrades,s=Object.keys(he).filter((function(e){return he[e].isVisible()})).filter((function(e){return!i.includes(e)}));e(z(s));var A=Object.keys(de).filter((function(e){return de[e].isUnlocked()}));return e(X(A)),c},Be=n.p+"static/media/destroyWall.2891c68d.png",Ce=n(15),fe=n(141),Ie=n(139),Ue=n(69),Qe=n.n(Ue),Re=n(142),we=n(140),ye=n(143),ve=n(135),ke=n(136),De=n(137),Ye=n(138),Fe=n(68),Ge=n.n(Fe),Se=Object(s.a)((function(e){return Object(A.a)({button:{padding:e.spacing(1),paddingLeft:"10px"},typography:{padding:e.spacing(2)}})})),Me=function(){var e=Se(),t=Object(a.useState)(!1),n=Object(Ce.a)(t,2),r=n[0],c=n[1],i=function(){c(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a,{size:"small",color:"primary",className:e.button,onClick:function(){c(!0)},children:"Changelog"}),Object(b.jsxs)(ye.a,{open:r,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(b.jsx)(ve.a,{id:"alert-dialog-title",children:"Changelog"}),Object(b.jsx)(ke.a,{children:Object(b.jsxs)(De.a,{id:"alert-dialog-description",children:["v.0.2 - Upgrades",Object(b.jsx)("hr",{}),"Made upgrades actually do something, should be a solid system to add a lot more upgrades in the future. Also added money/s display.",Object(b.jsx)("hr",{}),"v.0.1 - Initial prototype",Object(b.jsx)("hr",{}),"The first release of the game. Contains the 8 original buildings, a destroyable first wall, a punch wall button and the resources money, damage and bricks. Also includes a prototype upgrade system with 3(4) test upgrades that do not function yet as well as a prototype achievement system with 3 achievements. There also is a simple settings menu with a notation change option, a hard reset button and this changelog."]})}),Object(b.jsx)(Ye.a,{children:Object(b.jsx)(g.a,{onClick:i,variant:"contained",color:"primary",autoFocus:!0,children:"Close"})})]})]})},Ve=Object(s.a)((function(e){return Object(A.a)({button:{padding:e.spacing(1),paddingLeft:"10px"},typography:{padding:e.spacing(2)}})})),Ke=function(){var e=Ve(),t=Object(d.c)((function(e){return e.system.format})),n=Object(d.b)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{className:e.typography,children:"Settings"}),"Notation:",Object(b.jsxs)(Re.a,{style:{padding:"10px"},value:t,onChange:function(e){n(S(e.target.value))},children:[Object(b.jsx)(we.a,{value:"standard",children:"Standard"}),Object(b.jsx)(we.a,{value:"scientific",children:"Scientific"}),Object(b.jsx)(we.a,{value:"engineering",children:"Engineering"})]}),Object(b.jsx)("br",{}),Object(b.jsx)(Ne,{}),Object(b.jsx)("br",{}),"v.",L," -",Object(b.jsx)(Me,{})]})},Ne=function(){var e=Ve(),t=Object(a.useState)(!1),n=Object(Ce.a)(t,2),r=n[0],c=n[1],i=function(){c(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a,{variant:"contained",color:"secondary",className:e.button,startIcon:Object(b.jsx)(Ge.a,{}),onClick:function(){c(!0)},children:"HARD RESET"}),Object(b.jsxs)(ye.a,{open:r,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(b.jsx)(ve.a,{id:"alert-dialog-title",children:"Delete Save?"}),Object(b.jsx)(ke.a,{children:Object(b.jsx)(De.a,{id:"alert-dialog-description",children:"Are you sure you want to completely delete all your save data? This action cannot be undone."})}),Object(b.jsxs)(Ye.a,{children:[Object(b.jsx)(g.a,{onClick:function(){!function(){var e={version:L},t=JSON.stringify(e);localStorage.setItem("save",t),window.location.reload(!0)}(),i()},color:"secondary",children:"Reset"}),Object(b.jsx)(g.a,{onClick:i,variant:"contained",color:"primary",autoFocus:!0,children:"Cancel"})]})]})]})},Je=function(){var e=r.a.useState(null),t=Object(Ce.a)(e,2),n=t[0],a=t[1],c=Boolean(n);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(fe.a,{onClick:function(e){return a(e.currentTarget)},style:{position:"fixed",bottom:0,right:0},children:Object(b.jsx)(Qe.a,{})}),Object(b.jsx)(Ie.a,{style:{marginLeft:"10px"},id:c?"simple-popover":void 0,open:c,anchorEl:n,onClose:function(){return a(null)},anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(b.jsx)(Ke,{})})]})},Pe=Object(s.a)((function(e){return Object(A.a)({root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})}));var He=function(){var e=Object(d.b)(),t=Pe();return Object(a.useEffect)((function(){var t=setInterval((function(){var t=pe(e);e(E(t))}),100);return e(G((new Date).getTime())),function(){return clearInterval(t)}}),[]),Object(a.useEffect)((function(){var e=setInterval((function(){!function(){var e=$.getState(),t={version:L,state:e},n=JSON.stringify(t);localStorage.setItem("save",n)}()}),5e3);return function(){return clearInterval(e)}})),Object(b.jsxs)("div",{className:t.root,children:[Object(b.jsx)(Je,{}),Object(b.jsxs)(o.a,{container:!0,spacing:2,children:[Object(b.jsx)(o.a,{item:!0,xs:3,children:Object(b.jsx)(l.a,{className:t.paper,children:Object(b.jsx)(oe,{})})}),Object(b.jsx)(o.a,{item:!0,xs:5,children:Object(b.jsxs)(o.a,{container:!0,spacing:1,children:[Object(b.jsx)(o.a,{item:!0,xs:6,children:Object(b.jsxs)(l.a,{className:t.paper,children:[Object(b.jsx)("img",{alt:"Wall",src:Be}),Object(b.jsx)(g.a,{variant:"contained",onClick:function(){return e(E(10))},children:"Punch Wall"})]})}),Object(b.jsx)(o.a,{item:!0,xs:6,children:Object(b.jsx)(ge,{})}),Object(b.jsx)(o.a,{item:!0,xs:12,children:Object(b.jsx)(ue,{})})]})}),Object(b.jsx)(o.a,{item:!0,xs:4,children:Object(b.jsx)(xe,{})})]})]})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(d.a,{store:$,children:Object(b.jsx)(He,{})})}),document.getElementById("root")),We()}},[[92,1,2]]]);
//# sourceMappingURL=main.7176df36.chunk.js.map
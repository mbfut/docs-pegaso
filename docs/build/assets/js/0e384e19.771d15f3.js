"use strict";(self.webpackChunkpegaso_docs=self.webpackChunkpegaso_docs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="Installazione",l={unversionedId:"intro",id:"intro",title:"Installazione",description:"Contattaci scrivendoci una email a pegaso@futurasistemi.it o chiamando il 045 510 712 per installare Pegaso.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Configurazione",permalink:"/docs/category/configurazione"}},s={},c=[{value:"Installare librerie",id:"installare-librerie",level:2},{value:"Crea collegamento su desktop",id:"crea-collegamento-su-desktop",level:2},{value:"Installare le Procedure di Servizio (PDS)",id:"installare-le-procedure-di-servizio-pds",level:2},{value:"Crea collegamente su rete locale",id:"crea-collegamente-su-rete-locale",level:2},{value:"Rendere permanente la connessione con il server",id:"rendere-permanente-la-connessione-con-il-server",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installazione"},"Installazione"),(0,i.kt)("div",{class:"text--center"},(0,i.kt)("img",{src:"/img/logo_pegaso_bgr_bianco.png",width:"500",alt:"Logo Pegaso"})),(0,i.kt)("p",null,"Contattaci scrivendoci una email a ",(0,i.kt)("inlineCode",{parentName:"p"},"pegaso@futurasistemi.it")," o chiamando il 045 510 712 per installare Pegaso."),(0,i.kt)("h2",{id:"installare-librerie"},"Installare librerie"),(0,i.kt)("p",null,"In C:\\Adpegaso\\Utility"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clicca su ",(0,i.kt)("inlineCode",{parentName:"li"},"pdfcreator.exe")," e completa l'installazione."),(0,i.kt)("li",{parentName:"ol"},"Clicca su ",(0,i.kt)("inlineCode",{parentName:"li"},"vfp9sp2rt.exe")," e completa l'installazione.")),(0,i.kt)("h2",{id:"crea-collegamento-su-desktop"},"Crea collegamento su desktop"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Adpegaso\\BIN"),", tasto destro su ",(0,i.kt)("inlineCode",{parentName:"p"},"adfwin32.exe")," > Invia a Desktop (crea collegamento)"),(0,i.kt)("h2",{id:"installare-le-procedure-di-servizio-pds"},"Installare le Procedure di Servizio (PDS)"),(0,i.kt)("p",null,'Copia e incolla il collegamento Pegaso sul desktop. Premi tasto destro sulla copia appena fatta > Propriet\xe0 > In Destinazione aggiungere: BIN\\adfwin32.exe "PROCEDURE DI SERVIZIO"\nRinomina la copia di Pegaso in PDS.'),(0,i.kt)("h2",{id:"crea-collegamente-su-rete-locale"},"Crea collegamente su rete locale"),(0,i.kt)("p",null,"Nel computer server* dove \xe8 installato Pegaso, in C:\\Adpegaso, tasto destro > Propriet\xe0 > Condivisione > Condivisione Avanzata > Permissioni > Aggiungi > Scrivi nome utente > Controlla nomi > OK > Permetti Pieno controllo"),(0,i.kt)("p",null,"In C:\\Adpegaso, tasto destro > Propriet\xe0 > Sicurezza > Modifica > Aggiungi > Scrivi nome utente > Controlla nomi > OK > Permetti Pieno controllo"),(0,i.kt)("h3",{id:"rendere-permanente-la-connessione-con-il-server"},"Rendere permanente la connessione con il server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Posizionarsi sul pc client (postazione di rete) e aprire le \u2018RISORSE DI RETE\u2019 da icona sul desktop"),(0,i.kt)("li",{parentName:"ul"},"Cliccare due volte sull\u2019icona corrispondente al Server (apparir\xe0 l\u2019elenco di tutti i pc della rete) su cui \xe8 stato installata la postazione principale di Pegaso"),(0,i.kt)("li",{parentName:"ul"},"Cliccare con il tasto destro del mouse sulla cartella \u2018ADPEGASO\u2019 e selezionare la voce \u2018Connetti unit\xe0 di rete\u2019")),(0,i.kt)("p",null,"Selezionare una unit\xe0 di rete libera (esempio \u2018F:\u2019), segnare il campo \u2018Riconnetti all\u2019avvio\u2019 (in modo tale che ogni volta che viene riacceso il PC venga ripristinata automaticamente la connessione), e confermare con FINE."),(0,i.kt)("p",null,"Note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Il server deve essere connesso alla stessa rete internet degli altri utenti e deve essere acceso e connesso per funzionare."),(0,i.kt)("li",{parentName:"ul"},"Il vostro tecnico di rete deve configurare la rete con IP STATICI non dinamici (NO DHCP)."),(0,i.kt)("li",{parentName:"ul"},"Se sul computer di un utente scompare l'icona di Pegaso ",(0,i.kt)("img",{src:"/img/favicon.ico",alt:"Icona Pegaso"})," sul desktop e in Rete compare una croce rossa sulla condivisione di Adpegaso significa che il server \xe8 sconnesso."),(0,i.kt)("li",{parentName:"ul"},"Rivolgiti al tuo tecnico di rete per risolvere il problema."),(0,i.kt)("li",{parentName:"ul"},"L'assistenza di Futura Sistemi \xe8 responsabile solo del programma Pegaso. Non \xe8 responsabile dei dispositivi (computer, reti, stampanti) dei clienti.")))}d.isMDXComponent=!0}}]);
### Důležité nástroje a průvodce, jak postupovat kupředu
Díky webovým prohlížečům, které podporují JavaScript a obsahují JS runtime který JavaScript spouští a řídí, je možné začít programovat ihned pomoci jakéhokoliv textového editoru a webového prohlížeče. Existují ale důležité nástroje bez kterých se žádný JavaScriptový vývojář nakonec neobejde. Ne všechny nástroje jsou důležité pro každého. 

Proto zde volím hierarchii od nejzákladnějších nástrojů a jazyků až po ty méně základní. Pokud jste zelenáči a nevíte o programování webových aplikací nic, tak je pro vás důležitý bod jedna až pět. Jestli jste mírně pokročilí, tak jedna až deset. Jinak už je to samozřejmě na vás a můžete i celou kapitolu přeskočit a použít tahák pro rekapitulaci vašich znalostí a opravit nebo doplnit chybná místa.

##### 1. Použití vývojářských nástrojů v prohlížečích
* [Prohlížeč Chrome](https://www.google.com/chrome/) (doporučuji)
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) 
* [Prohlížeč Firefox](https://www.mozilla.org/cs/firefox/new/) nebo [Firefox Developer Edition](https://www.mozilla.org/cs/firefox/developer/) (doporučuji)
* [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools) 
* [Prohlížeč Edge](https://www.microsoft.com/cs-cz/edge)
* [Microsoft Edge (Chromium) Developer Tools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium)
> TIP: Vývojářské nástroje v prohlížeči otevřeme zmáčknutím klávesy F12

##### 2. Vývojové prostředí (IDE) namísto jednoduchého textového editoru
* [Visual Studio Code](https://code.visualstudio.com/) (doporučuji jak pro Linux, tak Windows i Mac)
* [WebStorm](https://www.jetbrains.com/webstorm/) (placené a používané na Macu) 
* [Atom](https://atom.io/) (velice robustní)
* [Brackets](http://brackets.io/) (Celé IDE je naprogramované v JavaScriptu, doporučuji vyzkoušet!)

##### 3. Odlehčené editory
Je vhodné si k nabušenému prostředí vybrat ještě odlehčený editor pro nahlížení do kódů.
* [Gedit](https://help.gnome.org/users/gedit/stable/) (Vhodné pro linux - pomoci doplňků lze z odlehčeného editoru vytvořit mocné IDE)
* [Vim](https://www.vim.org/) (těžce se učí ale Vim že stojí za to a navíc fachá i v terminálu)
* [Sublime Text](https://www.sublimetext.com/) (placené)
* [Notepad++](https://notepad-plus-plus.org/) (pouze win)
* [PSpad](http://www.pspad.com/) (pouze win)
* [Total Comander](https://www.ghisler.com/) (pouze pro win a vhodné hlavně pro nahlížení do souborů a rychlé editování)
##### 4. Online editory
Ačkoliv bychom si mohli myslet, že jsou zbytečné, tak je opak pravdou!
* [Codepen](https://codepen.io/pen/)
* [JSFiddle](https://jsfiddle.net/)
* [PLAYCODE](https://playcode.io/)
##### 5. HTML5 a CSS3
Každý JS vývojář by měl znát samozřejmě i HTML5 a CSS3. Co naplat pokud tyto jazyky neznáte, budete se je muset nejdříve trochu naučit. 
* *Ukázka html5*
```html
<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h1>Ahoj světe!</h1> 
</body>
</html>
```

* *Ukázka CSS3*
```css
h1 {
color: red;
text-align: center;
}
```

* [Jak psát web](https://www.jakpsatweb.cz/) (doporučuji, protože bych se bez těchto stránek v roce 2002 už "nikam" neposunul)
* [Ponořme se do HTML5](https://knihy.nic.cz/) (od edice CZ.NIC - Mark Pilgrim)
* [HTML: HyperText Markup Language na MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS: Cascading Style Sheets na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

##### 7. Verzování a příkazový řádek
Verzovací nástoj uchovává historii veškerých změn provedených ve vašich zdrojových kódech během vývoje.

* [Bash terminál](https://wiki.ubuntu.cz/p%C5%99%C3%ADkazov%C3%A1_%C5%99%C3%A1dka) (pro uživatelé Unixových operačních systémů, lze ale nainstalovat i ve Windows)
* [PowerShell](https://docs.microsoft.com/cs-cz/powershell/scripting/overview?view=powershell-7.1) (pro Microsoft Windows)
* [Pro Git](https://knihy.nic.cz/) (Scott Chacon - volně stažitelná kniha)
* [Git](https://git-scm.com/downloads)
* [Github](https://github.com/)

##### 8. Přenos a zápis dat
JavaScript Object Notation (JavaScriptový objektový zápis, JSON) je způsob zápisu dat (datový formát) nezávislý na počítačové platformě, určený pro přenos dat, která mohou být organizována v polích nebo agregována v objektech. Vstupem je libovolná datová struktura (číslo, řetězec, boolean, objekt nebo z nich složené pole), výstupem je vždy řetězec. [Wikipedie - JavaScript Object Notation](https://cs.wikipedia.org/wiki/JavaScript_Object_Notation)

```json
{
"workbench.iconTheme": "material-icon-theme",
"git.enableSmartCommit": true,
"[json]": {
"editor.quickSuggestions": {
"strings": true
},
"editor.suggest.insertMode": "replace"
}
}
```

Ačkoliv patří JSON do JS, tak se používá pro svou odlehčenost i v jiných programovacích jazycích a je vhodný pro přenos dat z [NoSQL databází](https://cs.wikipedia.org/wiki/NoSQL), které mají podobnou strukturu. Před učením node.js je vhodné se dovědět něco o tomto objektovém zápisu. V JSONu se například zapisují i nastavení Visual Studio Code.

* [JSON](https://www.json.org/json-cz.html). 
* [JSON : jednotný formát pro výměnu dat](https://www.zdrojak.cz/clanky/json-jednotny-format-pro-vymenu-dat/) (zdrojak.cz - Martin Hassman)
* [What is JSON](https://www.w3schools.com/whatis/whatis_json.asp) (w3schools.com)

##### 8. Běhové prostředí JavaScriptu Node.js a správce balíčků NPM. 
Podobně jako prohlížeč, tak i Node.js rozumí JavaScriptovému kódu. Pomoci Nodejs můžete také rozběhnout JavaScriptový server neboli back-end. S instalací Nodejs se automaticky instaluje i npm. 

Pro začátek nejsou Node.js a NPM nebo Yarn absolutně vhodné a začátečník by měl ovládnout základy JS a zorientovat se v nepřeberném množství nástrojů, které nabízí prohlížeč a vývojové prostředí s jejich doplňky. Pokud se v nich již zorientoval a již začíná psát delší programy, tak se doporučuji naučit nejdříve git a tyto další věci.

* [PWA (Progresivní webové aplikace)](https://cs.wikipedia.org/wiki/Progresivn%C3%AD_webov%C3%A9_aplikace)
* [Lighthouse](https://developers.google.com/web/tools/lighthouse)

Jediný důvod pro instalování nodejs před naučením výše zmíněného je plná integrace [ESLint](https://eslint.org/) nebo [JSLint](https://jslint.com/) s [Prettier](https://prettier.io/) do vašeho vývojářského prostředí. Pokud se bez nich neobejdete, tak si pro jejich instalaci a konfiguraci vyhledejte bližší informace na webu. 

Vše ostatní je pro začínajícího JS programátora zbytečné, leda by potřeboval SASS nebo LESS namísto CSS3. Jiného balíčků bez řádné znalosti samotného JavaScriptu ale nevyužijete a navíc by vám to nepřeberné množství možností zamotalo natolik hlavu, že se nenaučíte nic. 

Skrze npm (Node Package Manager) nebo Yarn můžete instalovat nejen zmíněné pomůcky ([ESLint](https://eslint.org/), [JSLint](https://jslint.com/) [Prettier](https://prettier.io/)) ale také transpilátory ([Sass/Scss](https://sass-lang.com/), [Less](http://lesscss.org/), [Typescript](https://www.typescriptlang.org/), [Babel](https://babeljs.io/), [Svelte](https://svelte.dev/)), buildovací nástroje ([Gulp](https://gulpjs.com/), [Grunt](https://gruntjs.com/), [Webpack](https://webpack.js.org/)), headless CMS ([Ghost](https://ghost.org/), [Strapi](https://strapi.io/), [Netlify](https://www.netlify.com/), [Storyblok](https://www.storyblok.com/), [Meteor](https://www.meteor.com/)), knihovny ([bcrypt](https://www.npmjs.com/package/bcrypt), [JWT](https://jwt.io/), [markitup](https://markitup.jaysalvat.com/home/), [rxjs](https://www.learnrxjs.io/), [Underscore](https://underscorejs.org/), [Handlebars](https://handlebarsjs.com/)), dotazovací jazyky pro API a runtime ([GraphQL](https://graphql.org/), [Apollo](https://www.apollographql.com/), [Prisma](https://www.prisma.io/)), především ale celé frontend frameworky ([jQuery](https://jquery.com/), [Bootstrap](https://getbootstrap.com/), [Ember](https://emberjs.com/), [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/), [Ionic](https://ionicframework.com/)), backend frameworky, ([Express](https://expressjs.com/), Koa, Hapi, Next, Nuxt, Nest) a mnoho dalšího, jako třeba [Electron](https://www.electronjs.org/) a [Polyfill](https://polyfill.io/)...

* [nvm](https://github.com/nvm-sh/nvm) (verzování node.js)
* [Chocolatey](https://chocolatey.org/) (správce balíčků pro win)
* [Node.js](https://nodejs.org/) 
* [npm](https://www.npmjs.com/) (správce balíčků)
* [Yarn](https://yarnpkg.com/) (jiný správce balíčků)
* [N](https://github.com/tj/n) (další verzovácí nástroj)
##### 9. Nalezení programátorských a stylistických chyb
ESLint a JSLint jsou nástroje pro analýzu vašeho JavaScriptového kódu, které automaticky odhalují některé chyby.

* [ESLint](https://eslint.org/)
* [JSLint](https://jslint.com/)

##### 10. Nástoje pro formátování kódu
* [Prettier](https://prettier.io/)
* Podobný nástroj na formátování kódu je zabudovaný ve každém řádném vývojovém prostředí a není potřeba instalovat node.js.
* [Prettier pro VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 
* [Brackets Beutify](https://github.com/brackets-beautify/brackets-beautify)
* [vim-autoformat](https://vimawesome.com/plugin/vim-autoformat)

##### 11. Něco více o serverech, hlavně o Node.js
Od tohoto bodu je vhodné znát již veškeré možnosti jádra JS i klientského JS. 

Jestli se vám osobně zatím nechce nic konfigurovat, tak tu máme další dva online editory, které toho mají mnoho přednastaveného a ve kterých si můžete zkoušet node.js a mnoho dalších frameworků bez instalace - [CodeSandbox](https://codesandbox.io/) a [Stackblitz](https://stackblitz.com/). 

Pokud vás to nebere, tak neni nic špatného vytvářet dynamické stránky jen pomocí html, css a js. Ani [Wordpress](https://cs.wordpress.org/) v PHP neni špatná alternativa a lze v něm využít také znalosti JavaScriptu. Wordpress lze celkem lehce nainstalovat na každém hostingu a k vytváření šablon není třeba znát ani tolik PHP. Rozhodně je to myslím méně náročné než ovládnout zbytek následujících bodů průvodce.

V tomto bodu se také můžete začít rozhodovat jestli se chcete zaměřit více na front-end nebo back-end. Pokud se vaše zaměření orientuje více na front-end a klientskou část, tak body jedenáct až čtrnáct nemusíte ovládat tolik, jako když se chcete zaměřit na serverovský JS.

Pokud vám tedy jde hlavně o vzhled a zabezpečení vás nebere, tak se se znalostmi JavaScriptu můžete začít rovnou učit jeden z frontend frameworků v kterých lze vytvářet aplikace typu kalkulačka, kalendář, nákupní seznam nebo aplikace s otevřenými daty jako třeba přehrávač radio stanic nebo čtečku online dostupných knih.

To vše ale bez velkých možností zabezpečeného přihlášení a ukládání dat do databází. Frontend lze využít nejen pro webové aplikace ale také pro aplikace běžící v mobilu. 
Pwa aplikace a samozřejmě i celou klientskou část lze renderovat na stránky v backendu bez frontendových frameworků. Jelikož se ale backend soustředí hlavně na backend, tak neni vhodný tolik pro klientskou část jako frontendový framework. Platí pravidlo, že čím více chápeme backend node.js o to více budeme chápat i frontend frameworky, jedno s druhým jde totiž ruku v ruce.

Doporučuji mít tedy alespoň základní znalosti o fungování backendu, které lze využít bez dalších znalostí v kombinaci se znalostmi html, css a klientského JS k vytvoření zabezpečené plnohodnotné webové aplikace. Jedině s backendem lze totiž vytvářet zabezpečené stránky. Bez velkých obtíží si totiž na frontendu může každý váš js přečíst. I kdyby jste se rozhodli pro frontend framework, tak vám znalosti backendu usnadní pochopit vše, co se děje ve front-endu. 

* [Node.js dokumentace](https://nodejs.org/en/docs/) 
* [Express web framework (Node.js/JavaScript) na MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
* [Express.js server](https://expressjs.com/) (Nejpoužívanější framework pro node.js server)
* [Apache server](https://httpd.apache.org/) (důležité se s ním seznámit)
* [nginx](https://nginx.org/en/) (server méně náročný na paměť)
* Pug, EJS, Handlebars nebo Moustache (šablonovací stroje pro dynamické renderování html)
* JWT (JSON Web Tokens), bcrypt, cookie-parser (pro bezpečnost)
* [Postman aplikace](https://www.postman.com/downloads/) (testování a monitoring HTTP API)
* [Practical guide to JWT authentication with Node.js](https://livecodestream.dev/post/2020-08-11-a-practical-guide-to-jwt-authentication-with-nodejs/)
##### 12. Databáze a headless CMS

* [Mongoose](https://mongoosejs.com/docs/) (pro získávání dat z MongoDB, je důležité jako express)
* [MongoDB](https://www.mongodb.com/) (NoSQL - vhodná s node.js)
* [NeDB](https://dbdb.io/db/nedb) (menší NoSQL DB pro node.js)
* [Redis](https://redis.io/)
* [Firebase](https://firebase.google.com/)
* [MySQL databaze](https://www.mysql.com/) (SQL databaze - vhodná s Apache serverem)
* [SQLite](https://www.sqlite.org/index.html) (vhodná pro menší mobilní aplikace)
* [Vytvořte svou první SPA jednostránkovou appku pomoci vanila JS](https://blog.jeremylikness.com/blog/build-a-spa-site-with-vanillajs/)
* [Headless CMS](https://www.strafelda.cz/headless-cms)
* [Netlify CMS](https://www.netlifycms.org/)
* [Headless CMS Strapi](https://www.peckadesign.cz/blog/headless-cms-strapi-opravdu-potrebujete-programovat-api)
* [GraphQL](https://graphql.org/)
* [Prisma](https://www.prisma.io/)
##### 13. Všeobecně o používání SSH terminálu
* [Secure Shell na Wikipedii](https://cs.wikipedia.org/wiki/Secure_Shell)
* [Základy prace s SSH na intervalu](https://www.interval.cz/clanky/zaklady-prace-s-ssh/)
* [VS Code a SSH](https://code.visualstudio.com/docs/remote/ssh)
* [Github a SSH](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh)
* [Putty](https://www.putty.org/) (vhodné hlavně pro Windows)
* [SSH (Secure Shell)](https://www.ssh.com/ssh/) (netřeba všechno znát)
* [Texty k předmětu Bezpečnost informačních systémů](https://bis.vse.cz/texty/) (netřeba všechno vědět)
##### 14. Cloudy (hosting) a registrace domény

* [Heroku](https://www.heroku.com/) (velice vhodné na zkoušení zdarma node.js serveru online)
* [Glitch](https://glitch.com/) (snad dobrý pro node.js)
* [Amazon Web Services](https://aws.amazon.com/free/) (ozkoušeno, používám trvale)
* [Google Firebase](https://firebase.google.com/) (super)
* [Google cloud](https://cloud.google.com/) (palec nahoru)
* [Azure](https://azure.microsoft.com/cs-cz/) (určitě také dobrý)
* [SPA pomoci expressu a mongodb](https://www.airpair.com/javascript/complete-expressjs-nodejs-mongodb-crud-skeleton) 
* [SPA pomoci JS a Azure cloudu](https://docs.microsoft.com/cs-cz/azure/active-directory/develop/tutorial-v2-javascript-spa)
* [Jak registrovat doménu](https://www.nic.cz/page/313/jak-registrovat-domenu-.cz/) (pokud chcete vlastní cz doménu)
* [Užitečný článek o paměti swap](https://www.cyberciti.biz/faq/linux-check-swap-usage-command/) (pro ty, kdo nechtějí platit na cloudu za velkou paměť RAM)
* [Od Amazonu o paměti swap](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-memory-swap-file/)
* [Řešení cloud serverů a instancí s Bitnami - dokumentace](https://docs.bitnami.com/)
##### 15. Naučit se jeden z frameworků

K osvojení si frameworku je třeba čas a hodí se hlavně pro týmovou spolupráci a na větší projekty. Vybírejte tedy pečlivě pokud máte zájem se dále vzdělávat. Jesli si ještě nejste jistí, tak můžete vytvářet frontend aplikace pomoci čistého JavaScriptu a jako backend využívat předpřipravené řešení jako třeba [Strapi](https://strapi.io/) nebo [Google Firebase](https://firebase.google.com/). Můžete se také učit [jQuery](https://jquery.com/), [Sass](https://sass-lang.com/), [Bootstrap](https://getbootstrap.com/), [Typescript](https://www.typescriptlang.org/) nebo [Babel](https://babeljs.io/). Tyto vědomosti se vám budou myslím vždy hodit. 

Vytvořte si také portfolio s vašimi js aplikacemi na githubu nebo jinde a založte si vlastní knihovnu krátkých kousků kódu (snippets), které budete stále rozšiřovat.

Jestli už ovládáte node.js backend, tak pro vás nebudou frontend frameworky tohoto typu velkým oříškem. Mezi nejznámější frontend frameworky patří:

* [Angular](https://angular.io/) (od Google)
* [React](https://reactjs.org/) (od Facebook)
* [Vue](https://vuejs.org/) (Vytvořen Evanem You, který s týmem nadále na tomto frameworku pracuje)
* [Preact](https://preactjs.com/) (menší framework založený na React.js)
* [Aurelia](https://aurelia.io/) (menší framework)
* [Svelte](https://svelte.dev/) (transpilátor, který se chová jako framework)
* [Knockout](https://knockoutjs.com) (funkční knihovna, která v některých případech dokáže nahradit framework)
* [Ionic](https://ionicframework.com/) (lehký vývoj hybridních aplikací)
* [Jamstack](https://jamstack.org/) (vytváří statické stránky)

##### Další užitečné odkazy

* [MDN - Mozilla Developer Network](https://developer.mozilla.org/en-US/)) (dokumentace JS ES6, HTML5 a CSS3 v angličtině)
* [JavaScript: The Definitive Guide, 7th Edition](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/) (Kompletní knižní průvodce JS-ES6 v angličtině)
* [Can I use](https://caniuse.com/) (Zjištění kompatibility mezi vyhledávači)
* [css-tricks.com](https://css-tricks.com/)

##### Stránky které pomůžou se vzhledem aplikace

* [Google Fonts](https://fonts.google.com/) (Fonty od Googlu)
* [Font Awesome](https://fontawesome.com/) (Icony)
* [Pexels](https://www.pexels.com/) (Fotografie zdarma)
* [Unsplash](https://unsplash.com/) (Také fotografie)
* [Coolors](https://coolors.co/) (Výběr barev)

##### Programy pro tvorbu vzhledu aplikace

* Figma...
* InVision Studio...
* Adobe XD...
* Webflow...
* Axure RP 9...
* Origami Studio...
* Justinmind...
* Sketch...
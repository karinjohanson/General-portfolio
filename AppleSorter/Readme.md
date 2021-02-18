This Readme is written in estonian. For summary in english, check [Summary in english](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/Readme.md#summary-in-english)

# ÕUNASORTEERIJA
## LÄHTEÜLESANNE
Õunasorteerija OÜ  tegeleb õunte sorteerimisega ja selleks on neil automaatne sorteerimisrobot. Sorteerimisrobot sorteerib õunu kaalu järgi kolme kasti:
small (-50 g), medium (51-70 g) ja big (71+ g)

Programmi sisendiks:
Massiivis on numbriliselt kirjas kaalud.
var apples = [ 29, 70, 85, 77, 55, 44, 33, 98, 90, 47, 22, 44, 55, 37, 65];

Programmi väljundiks on multidimensionaalne massiiv või objekt õunte kaalugruppidega.
Samm 1:
Kirjuta plaan / lahenduskäik (algoritm) oma sõnadega lahti
Samm 2:
Loo programm

Kood kirjutada Javascript ja Java keeles.
Lahendusena esitada nii algoritm kui ka kood. Vajadusel tuleb olla valmis oma lahenduskäiku selgitama.
## 1. ALGORITM
Ülesande sisendina on ette antud juba kaalutud õunad, mistõttu võib eeldada, et kaalumisfunktsiooni meie kavandatav kood ei pea sisaldama ning programm algab kas kaalumise faasis või pärast kaalumist. <br>

Juhul kui sorteerimine ei toimu vahetult pärast kaalumist, on vaja õuntele külge panna id, mille järgi tuntakse ära, et tegu on just selle õunaga, mille mass oli nii- või naapalju, sest nagu tootmisprotsessides tihti juhtub, võib põhjusel või teisel liinilt vahel midagi kaduma minna või võib juhtuda, et eelmine õun jääb liinile kuskile toppama ja järgmine jõuab temast ette. Seejuures ei mängi olulist rolli, kas liin on horisontaalse või vertikaalse asetusega. Õunte individuaalset märgistamine oleks siinkohal märgatavalt ressursikulukam kui sorteerida nad kaalumisel, mistõttu lähtun programmi kirjutamisel liinist, mille puhul ei tule õunu identifitseerida.

Erineva ehitusega liinid mõjutavad nõudeid programmile:
![Different machines](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/Different_machines.png)

Üheks küsimuseks on samuti, mis käivitab programmi. Mõistlik oleks käivitajaks määrata õuna saabumine sorteerijasse. Mille järgi saabumist määratakse? Kui õuna saabumist sorteerijasse registreerib näiteks fotosilm, siis tuleb arvestada, et peame programmi sisse kirjutama ka vigade välistamise ehk siis kui fotosilm on näiteks puhastamata ja registreerib õuna saabumise, kuigi seda tegelikkuses ei juhtunud, siis võib meie väikeste õunte kasti sattuda olematuid õunu massiga 0g. Need peaksime programmis välistama.

Kui sorteerimise käivitab kaal, millele asetatakse mass (õun), siis me olematuid esemeid (0 g) välistama ei pea, aga see tekitab omakorda järgmise probleemi: kui programmi alustab kaalule langenud õun, siis iga järgnev õun alustab programmi uuesti ning õunte masside registreerimine kaalumise ja sorteerimise järgselt nõuaks pidevat andmevahetust andmebaasiga. Õunte massi oleks tarvis registreerida aga näiteks statistika koostamiseks: kui palju õunu sorteeriti?, mis on keskmine õuna mass?, kui palju on suuri õunu? jne. Kuna algnõudeks oli, et programmi väljundiks on multidimensionaalne massiiv või objekt õunte kaalugruppidega, siis see eeldab, et programm ei lõppe enne kui kõik õunad on sorteeritud või kui vallandatakse sündmus, mida pole lähteülesandes kirjeldatud (näiteks manuaalne käivitus).

Veel üks küsimus on, et kui suure massiga õunu üldse loetakse õunteks ja sorteeritakse? Kas 1g massiga õun on õun? Või 10 g massiga? Kas neid on mõistlik loendada? Näiteks keskmine ploom kaalub umbes 30 g, paradiisiõun umbes 10 g. Tavamõistes keskmine õun kaalubki umbes 70-100 g. Võttes arvesse etteantud õunte massiivi ja vahemikke, koostaksin mina programmi, mis alla 10 g objekte ei loe õunteks vaid anomaaliaks. See tekitab küll juurde nn praagikasti või anomaaliakasti, kuid on reaalelule lähedasem lahendus ning väldib 0,5 või 1 g massiga „õunte“ sattumist väikeste õunte kasti ning samas tagades selle, et õunaks loetakse ühiku mass, mitte näiteks mass teatud ajaühikus (näiteks õunana ei registreeritaks massi 0 g kaalumishetkel).

Tegelikult peaks välistama ka hiiglasuured „õunad“, mille mass ei ole realistlik, näiteks 1000 g ja rohkem. Mõned õunad võivad kaaluda kuni 400 g, kuid 500 g suuremate õunte puhul võiks kahtlustada anomaaliat. 

Reaalses tootmises peaks samuti mõtlema juhtudele, kui täpselt sama massiga õuna kaalutakse rohkem kui kaks korda järjest. Võiks ju kahtlust tekitada, kui järjest kaalutakse õunu 40 g, 52 g, 52 g, 52 g, 52 g jne. Praeguses lahenduses ma seda arvesse ei võta.

### 1.1. Vooskeem
Lihtsustatult võiks õunte sorteerimise protsessi kirjeldada järgmine vooskeem:
![Simple_flowchart](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/Simple%20_flowchart.png)

Õunte sorteerimise täpsustatud vooskeem:
![Program_flowchart](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/Program_flowchart.png)

## 2. KOOD
Koodi JavaScript ja Java faili versioonis ei pöörata praegu tähelepanu veahaldusele ega kasutajasisendi valideerimisele. See on plaanis teha edaspidistes arendusfaasides. Siiski, JavaScripti HTML rakenduses on kasutaja sisendi valideerimine lisatud.

### 2.1 JavaScript
Õunasorteerimise funktsiooni argumentidena kasutan „rest parameters“ võtet, sest see võimaldab sisestada kuitahes palju parameetreid ning kohtleb neid massiivina, mistõttu on see mugav koodi lihtsustav lahendus.

Koodis otsustasin ma kokku tõsta vooskeemis esimesel ja viimasel kohal näidatud tingimuste kaalumise (kui õun kaalub alla 10 g või üle 500 g).

Õunasorteerija JavaScript koodiga fail on leitav [siit](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/AppleSorter_JavaScript/applesorter.js).

#### Juhised koodi jooksutamiseks
1.	Sisesta kood brauseri konsooli ja vajuta `Enter`.
2.	Kutsu välja funktsioon soovitud parameetritega. <br>
Lähteülesande kirjelduses antud parameetrite puhul: <br>
`appleSorter(29, 70, 85, 77, 55, 44, 33, 98, 90, 47, 22, 44, 55, 37, 65);`
3.	Õunte lisamiseks samasse sorteerimistsüklisse tuleb funktsioon uuesti välja kutsuda ning lisada soovitud õunte massid. See tegevus täidab vooskeemides näidatud valiku `Jätka sorteerimist? -> Jah` või `Esc? -> No` aset. 
4.	Funktsiooni lähtestamiseks ja väljundite nullimiseks tuleb veebilehitsejale anda värskendamiskäsk (`Ctrl + F5`). See tegevus täidab vooskeemides näidatud `Jätka sorteerimist -> Ei` või `Esc? -> Yes` aset.

Alternatiivina defineerisin koodis ka muutuja `defInput`, et vajadusel saaks vaikimisi õunte väärtused lisada kopeerimata. Sellisel juhul tuleb aga konsooli sisestatud koodil enne `Enter` klahvi vajutamist funktsiooni argumentide eest eemaldada punktid: <br>
`function appleSorter(...apples)  -> function appleSorter(apples)` <br>
Pärast `Enter` klahvi vajutamist tuleb funktsioon välja kutsuda nii:
`appleSorter(defInput);` <br>
Kui on soov funktsiooni jooksutamisega jätkata ja lisada sorteerijasse veel õunu, tuleb edaspidi funktsioon välja kutsuda nii, et argumendid on kantsulgudes: <br>
`appleSorter([4, 51, 72, 500, 49]);`

#### Koodi rakendamine
Selleks, et illustreerida paremini koodi toimimist, lõin lihtsa HTML-lehe, mille kaudu kasutaja saab täita õunu kaaluva kaalu aset ning sisestada kaalutud õunte massid programmi sisestusvälja ja nupuvajutuse abil. Vaikimisi eeldatakse, et sorteerimistsükkel jätkub. Tsükli lõpetab vajutus nupule `Quit`. <br>
Erinevalt puhtast JavaScript koodist ([siin](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/AppleSorter_JavaScript/applesorter.js)), kontrollitakse [selles rakenduses](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/AppleSorter_JavaScript/AppleSorter_JS_in_HTML.html) kasutaja sisestatud väärtuste tüübi vastavust nõutule ning kogumassi arvutamiseks teisendatakse sisestatu numbriteks. Konsoolipõhises lahenduses pole see tarvilik.

### 2.2 Java
Õunasorteerija Java programm on tehtud sama programmi [JavaScripti versiooni](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/AppleSorter_JavaScript/applesorter.js) põhjal.
Programm võimaldab tühikuteta kasutajasisendit komadega eraldatud arvurea kujul. 

Õunasorteerija Java koodiga fail on leitav [siit](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/AppleSorter_Java/AppleSorter.java)

## SUMMARY IN ENGLISH
A simple program which sorts the items, in this particular case apples, accordingly to requirements.
Applesorter is written in two different languages: [JavaScript](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/AppleSorter_JavaScript/applesorter.js) and [Java](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/AppleSorter_Java/AppleSorter.java).

***No error handling is included at the moment.***

In order to illustrate the solution I also created a simple implementation - a [HTML page](https://github.com/karinjohanson/General-portfolio/blob/main/AppleSorter/AppleSorter_JavaScript/AppleSorter_JS_in_HTML.html), whereto on the input field the apple weights can be stated, and the program outputs the stats for them.
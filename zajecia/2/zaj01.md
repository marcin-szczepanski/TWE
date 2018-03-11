---
layout: default
---
<div class="inner">
    <h1 id="main1">Zajęcia 1</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
    <a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
  <a href="https://jsfiddle.net/" target="blank" class="button-v button-module">Tu będziemy testować kod&nbsp;źródłowy</a>
    <div style="clear: both;"></div>
</div>

## 1. Standard ECMAScript 6

W tej lekcji omówimy wybrane zagadnienia standardu ECMAScript 6. Otóż, jest to język skryptowy, którego&nbsp;jednym z&nbsp;dialektów jest znany nam
już z&nbsp;kursu dla&nbsp;średniozaawansowanych JavaScript. Wtedy poznawaliśmy JavaScript w&nbsp;standardzie ECMAScript 5, który był bardzo
popularny przez&nbsp;długi czas. Wraz&nbsp;z&nbsp;wejściem ES 6 w&nbsp;języku JavaScript pojawiły się&nbsp;nowe funkcjonalności. Część z&nbsp;nich omówimy dzisiaj. Poza tym omówimy kilka podstawowych zagadnień jeszcze z&nbsp;ES 5, o&nbsp;których nie&nbsp;było okazji powiedzieć wcześniej,
a&nbsp;często o&nbsp;nie&nbsp;się&nbsp;pyta na&nbsp;rozmowach rekrutacyjnych na&nbsp;stanowiska związane z&nbsp;front-endem.

### 1.1. Closure

Zasięg stworzony przez funkcję, który rozgranicza zgromadzone w nim funkcje i zmienne od pozostałych części kodu tworząc dla nich osobne "środowisko"
nazywamy **domknięciem** (z ang. _closure_).

### Przykład 1.1.1.

```js
var x = "Jestem globalny.";
function closure() {
    var x = "Jestem w domknięciu.";
}
console.log(x);
```

Wywołanie ostatniej linii w powyższym przykładzie wyświetli w konsoli deweloperskiej "Jestem globalny.". 
Funkcja <span class="preformat">closure()</span> służy tutaj jako domknięcie, tzn. zmienna w&nbsp;funkcji i&nbsp;ta na&nbsp;zewnątrz to
zupełnie dwie różne zmienne. 

Jeśli byśmy jednak chcieli zmodyfikować zmienną z&nbsp;naszego przykładu wystarczy usunąć słowo kluczowe <span class="preformat">var</span>
w&nbsp;ciele funkcji.

### Ćwiczenie 1.1.1.

Przeanalizuj działanie poniższego kodu źródłowego. Co zostanie wyświetlone w konsoli? Wyjaśnij działanie tego kodu.

```js
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}
```

### Ćwiczenie 1.1.2.

Zaproponuj sposób naprawy kodu z ćwiczenia 1.1. tak, aby pętla faktycznie działała tak jak większość mogłaby się spodziewać.
_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_01. Skrypt z&nbsp;rozwiązaniem nazwij **exercise_112.js**_.

**Podpowiedź** - wykorzystaj <a href="https://stormit.pl/pytania-rekrutacyjne-javascript/#co-to-jest-funkcja-natychmiastowa-iife-8211-immediately-invoked-function-expression" target="blank">funkcję natychmiastową</a>.

### 1.2. Zasięg zmiennych

Jedną z najbardziej podstawowych nowości, które pojawiły się w standardzie ECMAScript 6 są nowe słowa kluczowe dotyczące deklaracji zmiennych.

W ES 5 mieliśmy tylko jeden zasięg zmiennych - zasięg funkcyjny, gdzie zmienne deklarowaliśmy ze&nbsp;słowem kluczowym <span class="preformat">var</span>. Teraz pojawił się inny zasięg - **zasięg blokowy**, który będziemy deklarować słowem kluczowym <span class="preformat">let</span>.
Do tego dochodzi słowo kluczowe <span class="preformat">const</span>, które oznacza deklarację stałej.

**Co to znaczy zasięg blokowy zmiennych?**

Do tej pory, aby umieścić zmienną w zakresie lokalnym musieliśmy używać domknięcia. Dzięki ECMAScript 6 nie&nbsp;ma potrzeby takiego "kombinowania".
Teraz możemy po prostu użyć zakresu blokowego.

### Przykład 1.2.1.

```js
/* Zasięg funkcyjny */

var i = 100; // zmienna globalna
for (var i = 0; i < 5; i++) { // nadpisanie tej samej zmiennej globalnej
    // działanie pętli for
}
console.log(i); // wyświetli wartość 5

/* Domknięcie */

var j = 100;
(function () {
    for (var j = 0; j < 5; j++) { // zmiennna lokalna
        // działanie pętli for
    }
})();
console.log(j); // wyświetli wartość 100

/* Zasięg blokowy */

let k = 100; // zmienna globalna
for (let k = 0; k < 5; k++) { // zmiennna lokalna w zakresie pętli for
    // działanie pętli for
}

console.log(k); // wyświetli wartość 100

```

### Ćwiczenie 1.2.1.

Kod napisany w ćwiczeniu 1.1.2. zmodyfikuj tak, aby wykorzystywał zakres lokalny zmiennych w ES6.
_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_01. Skrypt z&nbsp;rozwiązaniem nazwij **exercise_121.js**_.

**No dobrze a co z tymi stałymi?**

Stałych używamy, kiedy przypisanie wartości musi się odbywać wraz z&nbsp;deklaracją
oraz&nbsp;gdy&nbsp;chcemy zabronić przypisywania nowej wartości do&nbsp;wcześniej utworzonej zmiennej.

Stałe nie przechowują obiektów ani tablic, a&nbsp;jedynie referencje do nich. I&nbsp;choć nie możemy przypisać stałym nowych referencji, to możemy zmienić same tablice czy&nbsp;obiekty bez&nbsp;wyrzucenia żadnego błędu. Dzieje się tak, gdyż referencje, a&nbsp;więc&nbsp;to, co&nbsp;przechowuje stała pozostają niezmienne.

### Przykład 1.2.2.

```js
const x = [1, 2, 3];
x = [2]; // wyświetli błąd
const y = {value: 7};
y = 6; // wyświetli błąd

/* Ale... */

const a = [1, 2, 3];
a[0] = 2; // to zadziała
const b = {value: 7};
b.value = 5; // to zadziała
b.newValue = 10; // to zadziała
```

### 1.3. Dziedziczenie - prototypy

Czasem w języku JavaScript będziemy chcieli rozwiązywać problemy tak jak robi się&nbsp;to w&nbsp;innych językach programowania.
Jednak dziedziczenie w JS różni się od tego z&nbsp;obiektowych języków.
Jak wiemy, język JavaScript nie&nbsp;posiada pojęcia klasy. Wszystko jest obiektem (a&nbsp;już na&nbsp;pewno funkcje).
Każdy obiekt jest związany tzw. obiektem **prototypu**, np.&nbsp;każda funkcja, którą utworzymy dostaje od&nbsp;razu
właściwość <span class="preformat">prototype</span>, która&nbsp;zawiera nowy pusty obiekt.
Właściwość ta zawiera w&nbsp;sobie właściwość <span class="preformat">constructor</span>, która to&nbsp;z&nbsp;kolei wskazuje na&nbsp;utworzoną funkcję.
Tak utworzony obiekt prototypu możemy wykorzystać do&nbsp;przypisywania do&nbsp;niego właściwości i&nbsp;funkcji -
będą one&nbsp;współdzielone przez&nbsp;obiekty dziedziczące.

To co upodabnia dziedziczenie w JavaScript do języków programowania posiadających klasy jest słowo kluczowe <span class="preformat">new</span>.
Użycie tego słowa do&nbsp;wywołania funkcji zmienia jej zachowanie. Zamiast wywołać ją bezpośrednio, tworzony jest nowy obiekt, którego właściwość <span class="preformat">prototype</span> jest wiązana z&nbsp;właściwością <span class="preformat">prototype</span> tej funkcji.
Ponadto słowo kluczowe <span class="preformat">this</span> jest wiązane z&nbsp;nowo powstałym obiektem, więc&nbsp;wszystkie odwołania do <span class="preformat">this</span> w&nbsp;tej funkcji odbywają się na&nbsp;rzecz nowo utworzonego obiektu (po&nbsp;wszystkich operacjach wszystkie instrukcje w&nbsp;funkcji również są wywoływane).

### Przykład 1.3.1.

```js
function Osoba(name){
  this.name = name;
}

Osoba.prototype.getName = function (){
  return this.name + ' Kowalski';
}

var test = new Osoba('Jan');
console.log(test.getName());
```

### Przykład 1.3.2.

Wejdź na stronę <a href="https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-finished.html" target="blank">Object-oriented JavaScript inheritance</a>.

### Ćwiczenie 1.3.1.

Napisz skrypt języka JavaScript, który tworzy "klasę" **Figura** z&nbsp;właściwością _nazwa_, a&nbsp;następnie "klasę" **Czworokat**, która
dziedziczy z **Figura**. Jej właściwości to _typ-czworokata_ oraz&nbsp;_dlugosci-bokow_. Dalej utwórz "klasę" **Prostokat**, która
dziedziczy z&nbsp;"klasy" **Czworokat**. Posiada ona metodę _podaj-pole_ i&nbsp;_podaj-obwod_.
Utwórz obiekt "klasy" **Prostokąt**, ustaw mu wymiary 5x8 i&nbsp;wypisz jego nazwę, typ, pole oraz&nbsp;obwód.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_01. Skrypt z&nbsp;rozwiązaniem nazwij **exercise_131.js**_.

**Jak to robić łatwiej i bardziej "obiektowo" w ES6?**

Używając słów <span class="preformat">class</span> oraz <span class="preformat">extends</span>.

### Przykład 1.3.3.

```js
class Animal { 
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log(this.name + ' talks.');
    }
}

class Dog extends Animal {
    talk() {
        super.talk();
        console.log(this.name + ' barks.');
    }
}

let animal = new Animal('Mruczek');
animal.talk();
let dog = new Dog('Puszek');
dog.talk();
console.log(typeof animal === typeof dog);
console.log(typeof dog);
```

Mimo, że używamy tutaj słów znanych z innych języków programowania to tak na&nbsp;prawdę "pod&nbsp;spodem" dalej mamy prototypy :)

### Ćwiczenie 1.3.2.

Zmodyfikuj rozwiązanie ćwiczenia 1.3.1. tak, aby używać słów <span class="preformat">class</span> oraz <span class="preformat">extends</span>.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_01. Skrypt z&nbsp;rozwiązaniem nazwij **exercise_132.js**_.

### 1.4. Arrow functions

Przeanalizujmy treści dostępne na stronie <a href="http://blog.nebula.us/23-ecmascript-6-top-10-nowosci-cz-1-arrow-functions" target="blank">blog.nebula.us/23-ecmascript-6-top-10-nowosci-cz-1-arrow-functions</a>.

### 1.5. Hoisting

Przeczytaj materiały dostępne na stronie <a href="http://poradnik.drogimex.pl/2017/05/20/hoisting-zmiennych-i-funkcji-w-javascript/" target="blank">http://poradnik.drogimex.pl/2017/05/20/hoisting-zmiennych-i-funkcji-w-javascript/</a>. Treści tam zawarte
zostaną poruszone w&nbsp;zadaniu domowym nr 4.

### 1.6. Callbacki i obiekt Promise

Przeczytaj materiały dostępne na stronie <a href="http://www.blog.nebula.us/27-ecmascript-6-top-10-nowosci-cz-5-promises" target="blank">blog.nebula.us/27-ecmascript-6-top-10-nowosci-cz-5-promises</a>.
Treści tam zawarte zostaną poruszone w&nbsp;zadaniu domowym nr 4.

### 1.7. Domyślne parametry funkcji

Przeczytaj materiały dostępne na stronie <a href="http://www.blog.nebula.us/29-ecmascript-6-top-10-nowosci-cz-7-domyslne-parametry-funkcji" target="blank">blog.nebula.us/29-ecmascript-6-top-10-nowosci-cz-7-domyslne-parametry-funkcji</a>
a&nbsp;następnie wykonaj poniższe ćwiczenie. Treści zawarte na&nbsp;tej stronie zostaną poruszone w&nbsp;zadaniu domowym nr 4.

### Ćwiczenie 1.7.1.

Napisz funkcję języka JavaScript, która dla podanego jako argument kąta (w&nbsp;stopniach), promienia oraz&nbsp;wartości liczby PI wyznaczy
pole wycinka koła. Następnie wywołaj tę funkcję z&nbsp;następującymi argumentami:

* (60, 5, 3.14);
* (30, 7, 22/7);
* (45, 2).

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_01. Skrypt z&nbsp;rozwiązaniem nazwij **exercise_171.js**_.

### 1.8. Skróty składniowe i destructuring

Przeczytaj materiały dostępne na stronie <a href="http://www.blog.nebula.us/31-ecmascript-6-top-10-nowosci-cz-9-skroty-skladniowe-i-destructuring" target="blank">blog.nebula.us/31-ecmascript-6-top-10-nowosci-cz-9-skroty-skladniowe-i-destructuring</a>. Treści tam zawarte
zostaną poruszone w&nbsp;zadaniu domowym nr 4.


### 1.9. Nowe możliwości stringów

Przeczytaj materiały dostępne na stronie <a href="http://www.blog.nebula.us/26-ecmascript-6-top-10-nowosci-cz-4-nowe-mozliwosci-stringow" target="blank">blog.nebula.us/26-ecmascript-6-top-10-nowosci-cz-4-nowe-mozliwosci-stringow</a>
a&nbsp;następnie wykonaj poniższe ćwiczenie. Treści zawarte na&nbsp;tej stronie zostaną poruszone w&nbsp;zadaniu domowym nr 4.

### Ćwiczenie 1.9.1.

Dany jest kod źródłowy języka JavaScript:

```js
var s = 'Podstawą szczęścia jest wolność, a podstawą wolności odwaga.';

var text = 'Operuję na zdaniu: "Podstawą szczęścia jest wolność, a podstawą wolności odwaga." <br /><br />' + 'Trzynastym znakiem w tym zdaniu jest: ' + s.charAt(13) + '. <br />' + 'Znaki pomiędzy 7. a 12. pozycją to: ' + s.substring(7, 12) + '. <br />' + "Pierwszy raz znak 'ą' pojawia się na miejscu: " + s.indexOf('ą') + '. <br />' + 'Ten ciąg ma ' + s.length + ' znaków. <br/>' + "Po zamianie 'podstawą' na 'fundamentem' mamy: " + s.replace('podstawą', 'fundamentem') + '. <br />' + 'Część zdania przed przecinkiem to: ' + s.split(',')[0] + '. <br />' + 'Druga część zdania po odwróceniu to: ' + s.split(',')[1].split('').reverse().join('') + '.'

console.log(text);
```

Popraw ten kod tak, aby w drugiej zmiennej nie były wykorzystywane znaki dodawania. Ciąg znaków do&nbsp;niej przypisany nie powinien
być wyświetlany w jednej linii tylko tak, aby&nbsp;całość była widoczna na&nbsp;szerokości ekranu Twojego edytora kodów źródłowych.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_01. Skrypt z&nbsp;rozwiązaniem nazwij **exercise_191.js**_.

### Zadania domowe

### Zadanie 0.

Rozwiąż quiz dostepny na&nbsp;<a href="https://www.classmarker.com/" target="blank">classmarker.com</a> o&nbsp;nazwie **ECMAScript 6 - cz. I**.

### Zadanie 1.

Napisz skrypt języka JavaScript, który utworzy "klasę" **Osoba** z&nbsp;właściwościami
_imie_, _nazwisko_, _rokUrodzenia_, _plec_ oraz&nbsp;metodą _podajWiek_, która korzystając
z&nbsp;obiektu **Date** oblicza wiek danej osoby.

Utwórz też "klasę" **Nauczyciel**, która również będzie dziedziczyć z&nbsp;klasy **Osoba**
i&nbsp;będzie zawierać pole _nauczanyPrzedmiot_ i&nbsp;_rokRozpoczeciaPracy_.
Do&nbsp;tego metoda _podajIloscLatPracy_, która działa analogicznie do&nbsp;metody _podajWiek_.

Utwórz "klasę" **Wychowawca**, która dziedziczy z&nbsp;klasy **Nauczyciel**
i&nbsp;będzie zawierać pole _przydzielonaKlasa_.

Utwórz obiekt klasy **Wychowawca** z&nbsp;danym imieniem, nazwiskiem, rokiem urodzenia, płcią, nauczanym przedmiotem
oraz&nbsp;rokiem rozpoczęcia pracy. Wywołaj na&nbsp;nim metody _podajWiek_ i&nbsp;_podajIloscLatPracy_.

Wyświetl w&nbsp;konsoli deweloperskiej cały obiekt i&nbsp;to, co&nbsp;zwróciły metody.

**Zadanie wykonaj na 2 sposoby, które poznaliśmy na zajęciach - bez użycia słów <span class="preformat">class</span>
(w&nbsp;nazwie pliku z&nbsp;rozwiązaniem dajemy literę _A_) oraz&nbsp;<span class="preformat">extends</span>
a&nbsp;następnie z&nbsp;użyciem tych słów (w&nbsp;nazwie pliku z&nbsp;rozwiązaniem dajemy literę _B_).**

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_01. Skrypt z&nbsp;rozwiązaniem nazwij **homework_task_01A.js**
i&nbsp;**homework_task_01B.js**_.

### Zadanie 2.

Przeczytaj zawartość punktów **1.6.-1.9.** w&nbsp;tej lekcji i&nbsp;zrób wszystkie ćwiczenia, które tam się znajdują. Rozwiązania ćwiczeń umieść
na&nbsp;repozytorium Githuba.

### Zadanie 3.

Rozwiąż quiz dostepny na&nbsp;<a href="https://www.classmarker.com/" target="blank">classmarker.com</a> o&nbsp;nazwie **ECMAScript 6 - cz. II**.

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.
* blog.nebula.us/13-javascript-closures-czyli-zrozumiec-i-wykorzystac-domkniecia
* blog.nebula.us/25-ecmascript-6-top-10-nowosci-cz-3-let-czyli-blokowy-zakres-zmiennych
* nafrontendzie.pl/dziedziczenie-javascript-wersja-klasyczna
* blog.nebula.us/23-ecmascript-6-top-10-nowosci-cz-1-arrow-functions
* blog.nebula.us/26-ecmascript-6-top-10-nowosci-cz-4-nowe-mozliwosci-stringow
* blog.nebula.us/29-ecmascript-6-top-10-nowosci-cz-7-domyslne-parametry-funkcji
* blog.nebula.us/31-ecmascript-6-top-10-nowosci-cz-9-skroty-skladniowe-i-destructuring
* blog.nebula.us/27-ecmascript-6-top-10-nowosci-cz-5-promises
* poradnik.drogimex.pl/2017/05/20/hoisting-zmiennych-i-funkcji-w-javascript

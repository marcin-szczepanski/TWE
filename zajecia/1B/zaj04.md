---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 4</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
	<div style="clear: both;"></div>
</div>

## 8. Informacje o języku JavaScript

### 8.1. Co to jest JavaScript?

JavaScript to język, który w dużej mierze ukształtował współczesne strony WWW.
Dzięki niemu możemy swobodnie korzystać z interaktywnych, wygodnych w użyciu oraz niezawodnych aplikacji internetowych.
Pojawienie się JavaScriptu pozwoliło zastapić tradycyjne aplikacje desktopowe nowymi, pracującymi w&nbsp;chmurze.

### 8.2. Na czym będziemy pracować?

Będziemy pracować na platformie **node.js**.

Najprościej rzecz ujmując, node.js jest platformą, która pozwala uruchomić kod JavaScript. Wszystko dzięki temu, że zbudowana jest na tym samym silniku JS, który używany jest choćby w Google Chrome – mowa o V8. Sama możliwość uruchomienia skryptów JavaScript w innym środowisku niż przeglądarka byłaby jednak mało atrakcyjna. Siła Node.js tkwi w jego modułach. Oferuje on ich kilkadziesiąt, dzięki którym możemy zbudować bardzo ciekawe aplikacje. Co za tym idzie, mamy np. do wyboru moduł HTTP, dzięki którym obsłużymy wszystkie zapytania HTTP, tworząc serwer www. Dostępny jest też moduł File System, dzięki któremu dostaniemy się do systemu plików. Dzięki Bufferowi obsłużymy dane binarne. I tak dalej. Jest tego naprawdę sporo i warto się temu przyjrzeć. Gwoli sprawiedliwości należy dodać, że dokumentacja node.js to pięta achillesowa tego projektu, choć pocieszać można się, że na początku było z tym jeszcze gorzej.

Co więcej, dzięki globalnej bibliotece modułów npm, każdy może łatwo zainstalować niestandardowe moduły np. poprzez <span class="preformat">npm install nazwaModulu</span>, jak i również dodać swoje produkcje do niej.

### Jak zacząć?

Przede wszystkim musimy zainstalować node na własnym komputerze. W tym celu należy wejść na <a href="http://nodejs.org/" target="blank">nodejs.org</a>. Wszystkie potrzebne źródła znajdziesz na podstronie <a href="http://nodejs.org/download/" target="blank">Download</a>.

Po zainstalowaniu z domyślnymi ustawieniami odpalamy **Node.js command prompt**. Jeżeli będziemy chcieli uruchomić skrypt języka JavaScript, wydajemy polecenie <span class="preformat">node nazwaSkryptu.js</span> i wciskamy ENTER.

## 9. Podstawy programowania w języku JavaScript

Poniżej znajdują się zagadnienia dotyczące podstaw programowania w języku JavaScript. Większość z nich będzie wymagała po prostu przeanalizowania kodu źródłowego.
Zakładam, że uczestnik warsztatów jest po&nbsp;przedmiocie "Podstawy programowania".

### 9.1. Witaj, Świecie!

### Przykład 9.1.

```js
console.log('Hello world!'); // nasz pierwszy skrypt js
```

### Przykład 9.2.

```js
var name = 'Adam';
var surname = "Kowalski";
/*
	wielowierszowy komentarz
*/
console.log("Witaj, " + name + " " + surname);
```

**Wnioski**:

* komentarze tworzymy tak jak w C/C++;
* aby zadeklarować zmienną używamy słowa kluczowego <span class="preformat">var</span>, po którym podajemy nazwę zmiennej;
* aby przypisać wartość do zmiennej używamy znaku równości;
* w definiowaniu zmiennej, której wartością jest ciąg znaków, możemy użyć apostrofów lub cudzysłowów;
* do wypisywania zawartości zmiennych oraz tekstu w konsoli służy metoda <span class="preformat">console.log()</span>.

### 9.2. Instrukcja warunkowa <span class="preformat">if</span>

### Przykład 9.3.

```js
var x = 1;
var y = 2;
var z = '3';

console.log(x == 1);
console.log(x != y);
console.log(x > y);
console.log(y <= z)
console.log(z == 3);
console.log(z === 3);
console.log(y !== '2');

y = y.toString();
console.log(y !== '2');
```

Operator <span class="preformat">===</span> jest operatorem **identycznościowym**, tzn. porównuje nie tylko wartości, ale także typy danych.
Podobnie jest z operatorem <span class="preformat">!==</span>.

### Przykład 9.4.

```js
var x = -5;
x++; // inkrementacja o 1
x = x + 3;
x--; // dekrementacja o 1

if (x == -2) {
	console.log("true");
} else {
	console.log("false");
}

x++;
var y = 0;

if ((x >= -2) && (y <= 0)) { // koniunkcja (and)
	console.log("true");
}

if ((x > -3) || (y > 0)) { // alternatywa (or)
	console.log("true");
}

if (!(x < -5)) { // negacja (not)
	console.log("true");
}
```

### 9.3. Tablice

### Przykład 9.5.

```js
var colors = [];
colors = ['white', 'red', 'blue', 'other']; // wypełnienie tablicy danymi

var el = colors[0]; // odniesienie do pierwszego elementu tablicy

console.log(el);

colors[1] = 'green';

console.log(colors);
```

### 9.4. Pętla <span class="preformat">for</span>

### Przykład 9.6.

```js
for (var i = 0; i < 5; i++) {
	console.log(i);
}
```

```js
var iterators = [1, 2, 3, 4, 5];
for (i in iterators) {
	console.log(i);
}
```

### Przykład 9.7.

```js
var tab = [1, 2, 3, 4, 5];
for (var i = 0; i < tab.length; i++) {
	console.log(tab[i]);
}
```

### Przykład 9.8.

```js
var n = 5; // deklaracja rozmiaru tablicy tab
var tab = []; // stworzenie jednowymiarowej tablicy

for (var i = 0; i < n; i++) {
	tab[i] = []; // każdy element tablicy jednowymiarowej staje się nową tablicą, dzięki czemu mamy tablicę dwuwymiarową
}
```

W pętlach działają słowa kluczowe <span class="preformat">break</span> i <span class="preformat">continue</span> (tak jak np. w C++).

### 9.5. Pętla <span class="preformat">while</span>

### Przykład 9.9.

```js
var i = 0;
while (i < 5) {
	console.log(i);
	i++;
}
```

### 9.6. Pętla <span class="preformat">do-while</span>

### Przykład 9.10.

```js
var i = 0;

do {
	console.log(i);
	i++;
} while (i < 5);
```

### Ćwiczenie 9.1.

Napisz skrypt języka JavaScript, który wyświetli macierz górnotrójkątną, której elementy powstają przez&nbsp;wymnożenie indeksu wiersza z indeksem kolumny.

### 9.7. Funkcje

### Przykład 9.11.

```js
function hello() {
	console.log('Hello world!');
}

hello();
```

### Przykład 9.12.

```js
function getArea(width, height) {
	return (width * height);
}

var wallWidth = 3;
var wallHeight = 5;
var area = getArea(wallWidth, wallHeight);

console.log(area);
```

### Przykład 9.13.

```js
function getSize(width, height, depth) {
	var area = width * height;
	var volume = area * depth;
	var sizes = [area, volume]
	return sizes; // funkcja zwraca tablicę elementów
}

var area = getSize(3, 2, 3)[0];
var volume = getSize(3, 2, 3)[1];

console.log(area, volume);

// lub:

var areaVolume = getSize(3, 2, 3); // tablica o dwóch elementach

console.log(areaVolume);
```

Znając już funkcje w języku JavaScript, możemy przedstawić jeszcze jeden sposób wykonywania pętli. Obrazuje to poniższy przykład.

### Przykład 9.14.

```js
var numbers = [11, 6, 12, 1, 3, 14, 10, 0, 13, 4, 15, 5, 9, 17, 7, 16, 2, 8];
var chars = ['O', 'H', 'W', 'N', 'I', ' ', 'E', 'B', 'E', 'W', 'L', 'T', 'C', 'G', 'O', 'E', 'O', 'E'];

numbers.forEach(function(element) {
	console.log(chars[element]);
});
```

### Ćwiczenie 9.2.

Napisz funkcję języka JavaScript, która zwraca tablicę elementów w odwrotnej kolejności niż zostały przekazane do niej jako tablica.


## Zadania domowe

### Zadanie 1.

Wykonaj trzecią fazę tworzenia projektu - **ostylowanie szkieletu aplikacji w CSS3**. Każda większa zmiana powinna być wysłana jako osobny commit na repozytorium utworzone w pierwszej fazie. Czas na wykonanie zadania to **dwa tygodnie**.

### Zadanie 2.

Napisz skrypt języka JavaScript, który wypisuje na ekranie tabliczkę mnożenia (dla czynników od 1 do 10).

### Zadanie 3.

Napisz funkcję języka JavaScript, która wyszukuje najmniejszy element w tabkicy, zwraca go oraz jego indeks (jeśli jest kilka takich elementów, zwracany jest indeks pierwszego z nich). Argumentem tej funkcji jest tablica.

### Zadanie 4.

Napisz funkcję języka JavaScript, która dla nieujemnego argumentu liczbowego zwróci jego reprezentację binarną.



Na kolejnych zajęciach odejdziemy od typowo szkolnych zadań z programowania i zaczniemy stosować JavaScript na stronach internetowych :) Dzisiejsze zajęcia i zadania miały na celu zapoznanie uczestników z&nbsp;podstawowymi instrukcjami języka JavaScript.

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.
* kursjs.pl
* ferrante.pl
* poradnik-webmastera.com

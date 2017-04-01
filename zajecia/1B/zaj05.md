---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 5</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
	<a href="https://jsfiddle.net/" target="blank" class="button-v button-module">Tu będziemy testować kod&nbsp;źródłowy</a>
	<div style="clear: both;"></div>
</div>

## 10. Użycie języka JavaScript w projektowaniu stron internetowych

### 10.1. Umieszczanie skryptów JS na stronie

### Przykład 10.1.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Przykład 10.1.</title>
	</head>
	<body>
		<h1>Przykład 10.1.</h1>
		<p>To jest przykład strony, która została zrobiona przy pomocy JS</p>
		<script src="app.js"></script>
	</body>
</html>
```

### 10.2. Modyfikowanie elementów HTML w języku JavaScript

Większość przykładów i ćwiczeń w tym punkcie będziemy wykonywać dla strony o następującym kodzie źródłowym:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Przykłady i ćwiczenia</title>
	</head>
	<body>
		<h1 id="heading-one">Przykładowy nagłówek 1</h1>
		<p id="paragraph-one">To jest przykład strony, która została zrobiona przy pomocy JS</p>
		<span id="span-one">Uczymy się języka JavaScript.</span>
		<br />
		<p id="paragraph-two">Język JavaScript nie jest taki trudny.</p>
		<span id="span-two">Czas trwania zajęć: 90 minut.</span>
		<p id="paragraph-three">Technologie webowe</p>
	</body>
</html>
```

### Przykład 10.2.

```js
var time = 90/60;

var el = document.getElementById('span-two'); // pobranie elementu o id = 'span-two'
el.innerHTML = 'Czas trwania zajęć: ' + time + 'h.'; // uaktualnienie tekstu (i kodu znaczników) pobranego elementu
```

### Metody uzyskania dostepu do elementów:

#### Metody zwracające jeden węzeł elementu:

* <span class="preformat">document.getElementById('id')</span> - pobiera element na&nbsp;podstawie wartości atrybutu <span class="preformat">id</span>;
* <span class="preformat">document.querySelector('selektor css')</span> - wykorzystuje składnię selektora CSS wybierającego jeden element lub więcej. Metoda ta zwraca tylko pierwszy z&nbsp;dopasowanych elementów.

#### Metody zwracające co najmniej jeden element (w postaci _nodelist_ - kolekcji węzłów):

* <span class="preformat">document.getElementsByClassName('klasa')</span> - wybiera element lub elementy na&nbsp;podstawie wartości atrybutu <span class="preformat">class</span>;
* <span class="preformat">document.getElementsByTagName('nazwaZnacznika')</span> - wybiera wszystkie elementy na&nbsp;stronie posiadające znacznik o zadanej nazwie;
* <span class="preformat">document.querySelectorAll('selektor css')</span> - używa składni selektora CSS w celu wybrania co najmniej jednego elementu, a następnie zwraca wszystkie elementy dopasowane.


### 10.3. Obiekty w języku JavaScript

### Utworzenie obiektu za pomocą notacji literału

**Notacja literału** to najłatwiejszy i jednocześnie najpopularniejszy sposób tworzenia obiektów.

### Przykład 10.3.

```js
var hotel = {
	name: 'Tipton',
	rooms: 40,
	booked: 25,
	
	checkAvailability: function() {
		return(this.rooms - this.booked);
	}
};

var hotelName = hotel.name; // inna składnia: var hotelName = hotel['name'];
var roomsFree = hotel.checkAvailability();
```

### Ćwiczenie 10.1.

Jak myślisz, kiedy używamy notacji podanej w komentarzu w przykładzie 10.3.?

### Ćwiczenie 10.2.

Do czego służy słowo kluczowe <span class="preformat">this</span>?

### Utworzenie obiektu za pomocą notacji z użyciem konstruktora

Słowo kluczowe <span class="preformat">new</span> i **konstruktor** obiektu powodują utworzenie pustego obiektu. Następnie można do niego dodać właściwości i&nbsp;metody.

### Przykład 10.4.

```js
var hotel = new Object();
hotel.name = 'Tipton';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
	return (this.rooms - this.booked);
}
```

**Uaktualnienia obiektu** dokonujemy przez podanie nazwy obiektu, kropki, nazwy właściwości, znaku równości i nowej wartości właściwości, np. <span class="preformat">hotel.name = 'Hilton';</span>.

### Tworzenie wielu obiektów za pomocą składni konstruktora

### Przykład 10.5.

```js
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() { 
    return this.rooms - this.booked; 
  };
}

var quayHotel = new Hotel('Tipton', 40, 25);
var parkHotel = new Hotel('Hilton', 120, 77);
```

### Dodawanie i usuwanie właściwości

### Przykład 10.6.

```js
var hotel = {
  name: 'Hilton',
  rooms: 120,
  booked: 77,
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;
```

### Ćwiczenie 10.3.

Dla strony o kodzie źródłowym HTML z ppkt. 10.2. zmień zawartość nagłówka na **Zmieniona zawartość**.
Następnie utwórz obiekt o nazwie **zadania** z właściwościami **iloscZadan**, **nazwaPrzedmiotu**, **ileZrobionych** i&nbsp;metodą **ileZostalo**, która oblicza różnicę "iloscZadan" minus "ileZrobionych".
Wypełnij ten obiekt danymi. Dalej&nbsp;wstaw zawartość właściwości "nazwaPrzedmiotu" na stronę, podmieniając treść elementu o&nbsp;identyfikatorze **span-one**.
Pokaż też na stronie wynik, który zwraca metoda naszego obiektu, podmieniając treść elementu o&nbsp;identyfikatorze **span-two**.

### 10.4. Obiekt <span class="preformat">String</span>

W przypadku wartości będącej ciągiem tekstowym można użyć własciwości i&nbsp;metody obiektu  <span class="preformat">String</span>:

* <span class="preformat">length</span> - właściwość, która przechowuje liczbę znaków znajdujących się w&nbsp;ciągu tekstowym;
* <span class="preformat">toUpperCase()</span> - metoda, która zmienia małe znaki na duże;
* <span class="preformat">toLowerCase()</span> - metoda, która zmienia duże znaki na małe;
* <span class="preformat">charAt()</span> - metoda, która pobiera numer indeksu jako parametr, a następnie zwraca znak znajdujący się&nbsp;we wskazanym położeniu;
* <span class="preformat">indexOf()</span> - metoda, która zwraca numer indeksu pierwszego znaku lub zbioru znaków;
* <span class="preformat">lastIndexOf()</span> - metoda, która zwraca numer indeksu ostatniego znaku lub zbioru znaków;
* <span class="preformat">substring()</span> - metoda, która zwraca znaki znalezione między dwoma indeksami, przy&nbsp;czym znak znajdujący się&nbsp;w&nbsp;położeniu wskazywanym przez&nbsp;pierwszy indeks jest dołączony, natomiast znak wskazywany przez&nbsp;drugi indeks nie jest dołączony;
* <span class="preformat">split()</span> - metoda, która po podaniu znaku powoduje podział ciągu tekstowego w&nbsp;każdym miejscu wystąpienia danego znaku, a&nbsp;następnie poszczególne elementy przechowuje w&nbsp;tablicy;
* <span class="preformat">trim()</span> - metoda, która usuwa znaki odstępu na początku i końcu ciągu tekstowego;
* <span class="preformat">replace()</span> - metoda, która działa podobnie jak funkcja typu "znajdź i zamień". Pobiera wartość do&nbsp;znalezienia oraz&nbsp;wartość zastępującą (domyślnie zastąpienie wartości następuje tylko dla&nbsp;pierwszego znalezionego dopasowania).

### Ćwiczenie 10.4.

Mamy do dyspozycji zmienną <span class="preformat">var sentence = ' Home sweet home ';</span>. Dla&nbsp;strony o&nbsp;kodzie źródłowym z podpunktu 10.2. zastąp treść elementu o&nbsp;identyfikatorze **paragraph-one** następującą treścią:

```
Nasz ciąg ma długość: ... .
Jeśli zmienimy wszystkie znaki na wielkie ciąg będzie wyglądać tak: ... .
Na 10. pozycji znajduje się znak: ... .
Ciąg 'ee' znajduje się na miejscu: ... .
Ostatni indeks znaku 'e' to: ... .
Znaki od 8 do 14 to: ... .
Po usunięciu niepotrzebnych spacji nasz ciąg wygląda tak: ... .
Po zmianie 'me' na 'w' nasz ciąg wygląda tak: ... .
```

W miejsce "..." należy wywołać odpowiednią metodę lub właściwość, która zwróci nam szukaną informację.

### 10.5. Obiekt <span class="preformat">Number</span>

Jeżeli mamy do czynienia z wartością będącą liczba, to możemy na niej używać metod i właściwości obiektu <span class="preformat">Number</span>:

* <span class="preformat">isNaN()</span> - sprawdza, czy wartość nie jest liczbą;
* <span class="preformat">toFixed()</span> - zaokrągla wartość do podanej liczby miejsc po&nbsp;przecinku (wartością zwrotną jest ciąg tekstowy);
* <span class="preformat">toPrecision()</span> - zaokrągla wartość do podanej liczby cyfr (wartością zwrotną jest ciąg tekstowy);
* <span class="preformat">toExponential()</span> - zwraca ciąg tekstowy przedstawiający liczbę wyrażoną w&nbsp;notacji wykładniczej.


### 10.6. Obiekt <span class="preformat">Math</span>

Obiekt <span class="preformat">Math</span> ma właściwości i metody przeznaczone do pracy z funkcjami i&nbsp;stałymi matematycznymi:

* <span class="preformat">Math.PI</span> - właściwość, która zwraca wartość liczby pi;
* <span class="preformat">Math.round()</span> - metoda zaokrąglająca liczbę do&nbsp;najbliższej liczby całkowitej;
* <span class="preformat">Math.sqrt(n)</span> - metoda, która zwraca pierwiastek kwadratowy liczby dodatniej;
* <span class="preformat">Math.ceil()</span> - metoda zaokrąglająca liczbę w&nbsp;górę;
* <span class="preformat">Math.floor()</span> - metoda zaokrąglająca liczbę w&nbsp;dół;
* <span class="preformat">Math.random()</span> - metoda, która generuje wybraną liczbę z&nbsp;zakresu [0; 1).

### Ćwiczenie 10.5.

Co należy wstawić w miejsce '.....', aby na stronie o kodzie źródłowym z ppkt. 10.2. treść elementu o&nbsp;identyfikatorze **paragraph-two** została zastąpiona przez&nbsp;komunikat: 'Losowo wygenerowana liczba to x', gdzie x to liczba naturalna z zakresu od 1 do 10?

```js
var randomNumber = .....;

var el. = document.getElementById('paragraph-two');
el.innerHTML = 'Losowo wygenerowana liczba to ' + randomNumber;
```

### 10.7. Obiekt <span class="preformat">Date</span>

Gdy mamy utworzony obiekt typu <span class="preformat">Date</span>, wymienione poniżej metody pozwalają na&nbsp;pobranie lub ustawienie daty i&nbsp;godziny przedstawianej przez&nbsp;dany obiekt:

* <span class="preformat">getDate()</span>, <span class="preformat">setDate()</span> - zwraca lub ustawia dzień miesiąca;
* <span class="preformat">getDay()</span> - zwraca dzień tygodnia (od&nbsp;0 do&nbsp;6);
* <span class="preformat">getFullYear()</span>, <span class="preformat">setFullYear()</span> - zwraca lub ustawia rok (4 cyfry);
* <span class="preformat">getHours()</span>, <span class="preformat">setHours()</span> - zwraca lub ustawia godzinę (od 0 do 23);
* <span class="preformat">getMilliseconds()</span>, <span class="preformat">setMilliseconds()</span> - zwraca lub ustawia milisekundy (od 0 do 999);
* <span class="preformat">getMinutes()</span>, <span class="preformat">setMinutes()</span> - zwraca lub ustawia minuty (od 0 do 59);
* <span class="preformat">getMonths()</span>, <span class="preformat">setMonths()</span> - zwraca lub ustawia miesiąc (od 0 do 11);
* <span class="preformat">getSeconds()</span>, <span class="preformat">setSeconds()</span> - zwraca lub ustawia sekundy (od 0 do 59);
* <span class="preformat">getTimezoneOffset()</span> - zwraca wyrażone w minutach przesunięcie strefy czasowej dla&nbsp;bieżącej lokalizacji;
* <span class="preformat">toDateString()</span> - zwraca datę w postaci ciągu tekstowego;
* <span class="preformat">toTimeString()</span> - zwraca godzinę w postaci ciągu tekstowego;
* <span class="preformat">toString()</span> - zwraca ciąg tekstowy przedstawiający wskazaną datę.

### Ćwiczenie 10.6.

Uzupełnij luki (tzn. co wstawić w miejsce '???') w poniższym skrypcie języka JavaScript tak, aby na stronie o&nbsp;kodzie źródłowym z ppkt. 10.2. treść elementu o&nbsp;identyfikatorze **paragraph-three** została zastąpiona przez&nbsp;komunikat znadujący się pod skryptem JS?

```js
var daysOfWeek = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

var d = new Date();

var day = daysOfWeek[d.???];
var month = ???;
var dateOfBirth = new Date(???, ???, ???, ???, ???, ???); // ustawiamy datę z przeszłości w formacie: YYYY, MM, DD, HH, MM, SS
var difference = d.??? - dateOfBirth.???; // wynik jest w milisekundach
var age = Math.???(difference / 31556900000); // dzielone całkowicie przez liczbę milisekund w roku (przy założeniu, że to nie jest rok przestępny)
var date = d.???;

var el = document.getElementById('paragraph-three');
el.innerHTML = 'Dzisiaj jest: ' + day + '.' + '<br />' + 'Aktualny miesiąc: ' + month + '.' + '<br />' + 'Mój wiek w latach to: ' + age + '.' + '<br />' + 'Data wyświetlona w momencie wywołania metody: ' + date + '.';
```


```
Dzisiaj jest: (tu skrypt zwraca dzień tygodnia).
Aktualny miesiąc: (tu skrypt zwraca miesiąc).
Mój wiek w latach to: (tu skrypt zwraca nasz wiek w pełnych latach).
Data wyświetlona w momencie wywołania metody: (tu skrypt zwraca godzinę postaci 00:00:00 strefa_czasowa).
```

### Zadania domowe

### Zadanie 1.

Dana jest strona o poniższym kodzie źródłowym:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Zadanie 1.</title>
	</head>
	<body>
		<h1 id="heading">xyz</h1>
		<p id="paragraph-one">xyz</p>
		<p id="paragraph-two">xyz</p>
		<p id="paragraph-three">xyz</p>
		<p id="paragraph-four">xyz</p>
	</body>
</html>
```

Napisz skrypt języka JavaScript, który zmodyfikuje treść tej strony następująco:

UWAGA: wartości w nawiasach należy podmienić poprzez skrypt JS! Moich komentarzy nie przepisujemy do&nbsp;kodu!

Nagłówek:

```
(Twoje imię i nazwisko)
```

Pierwszy akapit:

```
Data, która pojawi się przy otwarciu tej strony to: (dzień tygodnia - słownie), (numer dnia miesiąca), (nazwa miesiąca odmieniona przez odpowiedni przypadek), (rok)r.
Godzina w momencie otwarcia strony: (godzina):(minuty):(sekundy):(milisekundy).
```

Drugi akapit:

```
Operuję na zdaniu: "Podstawą szczęścia jest wolność, a podstawą wolności odwaga."

Trzynastym znakiem w tym zdaniu jest: (znak).
Znaki pomiędzy 7. a 12. pozycją to: (ciąg znaków).
Pierwszy raz znak 'ą' pojawia się na miejscu: (indeks).
Ten ciąg ma (ilość) znaków.
Po zamianie 'podstawą' na 'fundamentem' mamy: (ciąg znaków).
Część zdania przed przecinkiem to: (ciąg znaków przed przecinkiem).
Druga część zdania po odwróceniu to: (ciąg znaków). // UWAGA: przyda tu się metoda join(), proszę znaleźć potrzebne informacje na jej temat!
```

Trzeci akapit:

```
Korzystam z dodatkowych wiadomości o obiekcie Math ze strony: http://kursjs.pl/kurs/math.php

Zadanie 1. Mam funkcję kwadratową:
f(x) = x^2 + 5x + 6

Wyróżnik tego trójmianu to: (wartość).
Pierwiastek kwadratowy tego wyróżnika to: (wartość).
Miejscami zerowymi tej funkcji są: (wartość) i (wartość).

```

Czwarty akapit:

```
Kontynuuję pracę z obiektem Math i używam obiektu Number:

Zadanie 2. Obliczam wartość funkcji:
f(x) = sqrt(|sin(ln(2^(x))) + max(0, x) + |-e^(2x) + min(-1, x)||) // ln() to logarytm naturalny
dla x = pi/6.

Mój wynik to: (liczba).
Wynik w notacji wykładniczej to: (liczba w notacji wykładniczej).
Po zaokrąleniu wyniku w górę mam: (liczba).
```



### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.
* kursjs.pl

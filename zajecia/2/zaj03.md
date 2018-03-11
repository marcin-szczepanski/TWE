---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 2</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
  <a href="https://jsfiddle.net/" target="blank" class="button-v button-module">Tu będziemy testować kod&nbsp;źródłowy</a>
	<div style="clear: both;"></div>
</div>

## 2. Podstawy pracy z biblioteką jQuery

### 2.1. Podstawowe informacje

Biblioteka jQuery oferuje prosty sposób na wykonywanie najczęściej spotykanych zadań JavaScript.
Odbywa się to szybko i spójnie we wszystkich najważniejszych przeglądarkach internetowych,
bez konieczności jakichkolwiek rozwiązań awaryjnych w kodzie.

**Czym jest jQuery?**

jQuery to plik JavaScript dołączany na stronach internetowych.
Biblioteka ta pozwala na wyszukiwanie elementów za pomocą selektorów stylu CSS,
a następnie wykonywanie dowolnych zadań na tych elementach z&nbsp;wykorzystaniem metod jQuery.

**Jak umieścić jQuery na stronie?**

Wejdź na stronę <a href="http://jquery.com/download/" target="blank">http://jquery.com/download/</a>.

### 2.2. Prosty przykład użycia jQuery

Funkcja o nazwie <span class="preformat">jQuery('selektor css')</span> pozwala na&nbsp;wyszukanie
co najmniej jednego elementu na&nbsp;stronie. Tworzy obiekt o&nbsp;nazwie **jQuery**,
zawierający odniesienia do elementów. Częstym skrótem w zapisie tej funkcji
jest zapis <span class="preformat">$('selektor css')</span>.

### Przykład 2.2.1

```js
$('li.hot').addClass('complete');
```

### 2.3. Wyszukiwanie elementów

### Ćwiczenie 2.3.1.

Dany jest kod strony HTML:

```html
<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Tytuł strony...</title>
	</head>
	<body>
        <header>
            <h1 class="header header1">Nagłówek H1</h1>
            <h2 id="header2" class="header">Nagłówek H2</h2>
        </header>
		<nav>
			<ul>
				<li><a href="/">Strona główna</a></li>
				<li><a href="/newsy">Newsy</a></li>
				<li><a href="/artykuly">Artykuły</a></li>
				<li><a href="/opinie">Opinie</a></li>
				<li><a href="/kontakt">Kontakt</a></li>
			</ul>
		</nav>
		<section>
            <h2>Sekcja 1</h2>
			<article>
                <h2>Formularz</h2>
				<form action="http://www.jakaswitryna.com/review.php" method="get">
					<fieldset>
						<legend>
							Szczegóły konta:
						</legend>
						<label>
							Imię:
							<input type="text" name="name" size="30" maxlength="100">
						</label>
						<br /><br />
						<label>
							Email:
							<input type="email" name="email" size="30" maxlength="100">
						</label>
						<br />
					</fieldset>
					<br />
					<fieldset>
						<legend>
							Kilka informacji o Tobie:
						</legend>
						<p>
							Czy odwiedzisz nas ponownie?
						<br />
						<label>
							<input type="radio" name="rating" value="yes" />
							Tak
						</label>
						<label>
							<input type="radio" name="rating" value="no" />
							Nie
						</label>
						<label>
							<input type="radio" name="rating" value="maybe" />
							Może
						</label>
						</p>
						<p>
						<label for="comments">
							Komentarz:
						</label>
						<br />
						<textarea rows="4" cols="40" id="comments">
						</textarea>
						</p>
						<label>
						<input type="checkbox" name="subscribe" checked="checked" />
							Chcę być informowany o aktualizacjach.
						</label>
						<br />
						<input type="submit" value="Prześlij infomacje" />
					</fieldset>
					</form>
			</article>
		</section>
		<aside>
			<section class="popular-recipes">
				<h2>Popularne przepisy</h2>
				<a href="">Grillowany kurczak</a>
				<a href="">Mielone kotleciki z kurczaka</a>
				<a href="">Smażone naleśniki</a>
				<a href="">Gulasz z kurczaka</a>
			</section>
			<section class="contact-details">
				<h2>Kontakt</h2>
				<p>Dania świata <br />
					ul. Poznańska 27 <br />
					Poznań
				</p>
			</section>
		</aside>
		<footer>
			&copy; 2017 Dania świata
		</footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="ex231.js"></script>
	</body>
</html>
```

Korzystając z funkcji <span class="preformat">$()</span> wyszukaj i wyświetl w konsoli nastepujące elementy a także na dwa sposoby ich treść - pierwszy z&nbsp;metodą <span class="preformat">html()</span> a&nbsp;drugi z&nbsp;metodą <span class="preformat">text()</span>:

a) wszystkie nagłówki h1;

b) wszystkie nagłówki h2 z sekcji aside;

c) wszystkie elementy p z ostatniego elementu section w sekcji aside;

d) wszystkie elementy z drugiej części (fieldset) formularza;

e) co drugi element listy nienumerowanej licząc od ostatniego elementu;

f) wszystkie domyślnie zaznaczone przyciski opcji lub pola wyboru.

Do czego służą wspomniane w treści zadania metody?

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_02. Skrypt z&nbsp;rozwiązaniem nazwij **exercise_231.js**_.

### 2.4. Dopasowany zbiór

Kiedy wybierzesz co najmniej jeden element, wartością zwrotną będzie obiekt jQuery. Nosi on również nazwę
**dopasowanego zbioru**.

Jeżeli wybór jQuery zawiera więcej niż tylko jeden element,
a metoda jest używana w celu pobrania informacji z wybranych elementów,
to **informacje te zostaną pobrane tylko z pierwszego elementu** w dopasowanym zbiorze.

Aby pobrać zawartość wszystkich elementów należy zastosować metodę <span class="preformat">each()</span>.
Jednak, kiedy chcemy zmodyfikować wyszukane elementy, to przy pomocy metody <span class="preformat">html()</span>
zmodyfikujemy wszystkie te elementy!.

**Jak sprawdzić, czy strona jest gotowa by można było z nią pracować?**

Wystarczy tylko kod, który chcemy wykonać umieścić w metodzie zdarzenia <span class="preformat">ready()</span>,
której konstrukcję przedstawiono poniżej:

### Przykład 2.4.1.

```js
$(function() {
	// kod skryptu wykonany po załadowaniu strony
});
```
Przyjrzyjmy się dokładniej metodzie <span class="preformat">each()</span>. Metoda ta
pozwala na wykonanie poleceń na każdym elemencie w dopasowanym zbiorze zwróconym przez selektor.
Działanie tej moetody przypomina pętlę w JavaScript.
Metoda ta pobiera tylko jeden parametr: funkcję zawierającą polecenia, które mają być
wykonane na każdym elemencie.

Gdy metoda <span class="preformat">each()</span> przeprowadza iterację przez
wybrane elementy, dostęp do bieżącego elementu można uzyskać za pomocą
słowa kluczowego <span class="preformat">this</span>.

Bardzo często można spotkać się również z konstrukcją <span class="preformat">$(this)</span>.
Powoduje ona użycie słowa kluczowego <span class="preformat">this</span> w celu
utworzenia nowej kolekcji jQuery zawierającej bieżący element. Dzięki temu
metody jQuery mogą być wykorzystywane na elemencie bieżącym.

Przeanalizujmy poniższy przykład:

### Przykład 2.4.2.

```js
$(function() {
	$('li').each(function () {
		var idx = this.id;
		$(this).append('<span class="order"' + idx + '</span>');
	});
});
```
Przykład ten powoduje utworzenie obiektu jQuery zawierającego wszystkie elementy listy na stronie.
Następnie metoda <span class="preformat">each()</span> jest wykorzystywana do przeprowadzenia iteracji
przez elementy listy i wykonanie funkcji anonimowej dla każdego z nich.
Funkcja anonimowa pobiera wartość atrybutu <span class="preformat">id</span> elementu
<span class="preformat">&lt;li&gt;</span> i&nbsp;umieszcza ją obok tekstu elementu.

Obiekt jQuery przechowuje odniesienia do elementów. Buforowanie go powoduje przechowywanie w&nbsp;zmiennej odniesienia do tego elementu.
Utworzenie takiego obiektu może wymagać więcej czasu, zasobów procesora i&nbsp;pamięci. Interpreter musi wykonać poniższe zadania:

* wyszukiwanie w drzewie modelu DOM dopasowanych węzłów;
* utworzenie obiektu jQuery;
* przechowywanie w obiekcie jQuery odniesień do innych węzłów.

Dlatego też, jeżeli te same elementy kod musi wybrać co najmniej dwa razy,
to lepiej odniesienie do obiektu przechowywać w zmiennej.

### Przykład 2.4.3.

```js
$list = $('li');
```

### 2.5. Uaktualnianie elementów

Metody przeznaczone do uaktualniania zawartości wszystkich elementów wybranych w jQuery:

* <span class="preformat">html('tresc')</span> - metoda ta nadaje tę samą nową zawartość każdemu elementowi znajdującemu się w&nbsp;dopasowanym zbiorze; nowa zawartość może zawierać kod HTML;
* <span class="preformat">text('tresc')</span> - metoda ta nadaje tę samą nową zawartośc każdemu elementowi znajdującemu się w&nbsp;dopasowanym zbiorze; wszelki kod HTML zostanie wyświetlony jako tekst;
* <span class="preformat">replaceWidth('tresc')</span> - metoda ta zastępuje nową zawartością każdy element znajdujący się w&nbsp;dopasowanym zbiorze a ponadto zwraca zastąpione elementy;
* <span class="preformat">remove()</span> - metoda ta usuwa wszystkie elementy w dopasowanym zbiorze.

**Użycie funkcji do uaktualnienia zawartości**

Jeżeli chcemy wykorzystać oraz zmodyfikować zawartość aktualnie wybranych elementów, wymienione metody
mogą pobrać parametr w postaci funkcji. Funkcję można zastosować do utworzenia nowej zawartości.

### Przykład 2.5.1.

```js
$('li').html(function () {
	return '<b>' + $(this).text() + '</b>';
});
```
Przeanalizujmy jeszcze jeden przykład:

```js
$(function () {
	$('li:contains("Artykuły")').text('Articles');
	$('li:contains("Newsy")').html(function () {
		return '<b>' + $(this).text() + '</b>';
	});
	$('li:contains("Kontakt")').remove();
});
```

### 2.6. Dodawanie elementów

**Utworzenie nowych elementów w obiekcie jQuery:**

### Przykład 2.6.1.

```js
var $newItem = $('<li class="new">tresc elementu</li>');
```

**Metody przeznaczone do wstawiania zawartości na stronie:**

* <span class="preformat">before('tresc')</span> - powoduje wstawienie zawartości przed wybranymi elementami;
* <span class="preformat">after('tresc')</span> - powoduje wstawienie zawartości za wybranymi elementami;
* <span class="preformat">prepend('tresc')</span> - powoduje wstawienie zawartości wewnątrz wybranych elementów, po znaczniku otwierającym;
* <span class="preformat">append('tresc')</span> - powoduje wstawienie zawartości wewnątrz wybranych obiektów, przed&nbsp;znacznikiem zamykającym.

### Przykład 2.6.2.

```js
$(function() {
	$('ul').before('<p class="notice">Uaktualniono</p>');
	$('li').prepend('+ ');
	var $newListItem = $('<li><b>uaktualniona</b> treść</li>');
	$('li:last').after($newListItem);
});
```

### 2.7. Praca z atrybutami

Metody przeznaczone do pobierania i uaktualniania atrybutów wszystkich elementów wybranych w jQuery:

* <span class="preformat">attr('atrybut')</span> - metoda ta może pobierać lub ustawiać określony atrybut i&nbsp;jego wartość (aby&nbsp;ustawić wartość należy podać ją jako drugi argument);
* <span class="preformat">removeAttr('atrybut')</span> - metoda ta pozwala na usunięcie atrybutu;
* <span class="preformat">addClass('klasa')</span> - metoda ta dodaje nową klasę do elementów;
* <span class="preformat">removeClass('klasa')</span> - metoda ta usuwa wszystkie wybraną klasę elementów.

### Przykład 2.7.1.

```js
$(function() {
	$('li#three').removeClass('old');
	$('li').addClass('favourite');
	$('ul').attr('id', 'group');  
});
```

### 2.8. Ustawianie właściwości CSS

Podobnie jak pobieranie i ustawianie atrybutów działa pobieranie i ustawianie styli CSS.

### Przykład 2.8.1.

```js
$(function() {
	// Zmiana koloru tła ciała strony.
	$('body').css('background-color', '#00ff00');

	// Pobranie koloru tła pierwszego elementu listy.
	var backgroundColor = $('li').css('background-color');

	// Wyświetlenie pod listą nazwy tego koloru.
	$('ul').append('<p>Kolor to: ' + backgroundColor + '</p>');

	// Ustawienie kilku właściwości we wszystkich elementach listy.
	$('li').css({
		'background-color': '#c5a996',
		'border': '1px solid #fff',
		'color': '#000',
		'text-shadow': 'none',
		'font-family': 'Georgia',
		'padding-left': '+=75'
	});
});
```

### Zadania domowe

### Zadanie 1.

Napisz skrypt korzystający z biblioteki jQuery, który dla strony o kodzie źródłowym w&nbsp;**ćwiczeniu 2.3.1.**:

* doda do wszystkich nagłówków h2 z sekcji aside wykrzykniki (na końcu zawartości tekstowej);
* doda na koniec listy nienumerowanej jeszcze jeden element z identyfikatorem **new-id** i treścią **Nowy element**;
* usunie stopkę;
* zmieni klasę nagłówka H1 o klasie **header1** na **header-new**;
* elementowi dodanemu w drugim podpunkcie nada styl: czerwona czcionka szeryfowa z interlinią 15px;
* liście nienumerowanej ustawi tło na zielone;
* dodanym wykrzyknikom w pierwszym podpunkcie nada niebieski kolor czcionki.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_02. Skrypt z&nbsp;rozwiązaniem nazwij **homework_task_01.js**_.

### Zadanie 2.

Napisz kod HTML dla prostej aplikacji **ToDo** (bez CSS) i rozpocznij pracę nad **ożywieniem** jej w JavaScript i&nbsp;jQuery. Więcej informacji
w&nbsp;materiałach dla grupy Intermediate w <a href="../../zajecia/1B/informacje.html" target="blank">informacjach wstępnych</a>.
Nad&nbsp;aplikacją będziesz pracować jeszcze w&nbsp;ramach następnego zadania domowego przy&nbsp;omawianiu kolejnego tematu.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_02. Skrypt z&nbsp;rozwiązaniem nazwij **homework_task_02.html** i **homework_task_02.js**_.

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.

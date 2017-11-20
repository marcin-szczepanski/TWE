---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 3</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
  <a href="https://jsfiddle.net/" target="blank" class="button-v button-module">Tu będziemy testować kod&nbsp;źródłowy</a>
	<div style="clear: both;"></div>
</div>


## 3. Zdarzenia, efekty i filtry

### 3.1. Zdarzenia

#### 3.1.1. Metody zdarzeń

Metoda <span class="preformat">.on()</span> jest używana do&nbsp;obsługi wszystkich zdarzeń.

### Przykład 3.1.1.1.

```js
$('li').on('click', function() {
	$(this).addClass('complete');
});
```

#### 3.1.2. Obiekt event

Każda funkcja obsługi zdarzeń otrzymuje obiekt <span class="preformat">event</span>. Zawiera on
metody i&nbsp;właściwości powiązane ze&nbsp;zdarzeniem, które wystąpiło.

**Opis właściwości i metod:**

* <span class="preformat">type</span> - typ zdarzenia;
* <span class="preformat">which</span> - kliknięty przycisk lub naciśnięty klawisz;
* <span class="preformat">target</span> - element modelu DOM, który zainicjował zdarzenie;
* <span class="preformat">timeStamp</span> - liczba milisekund, które upłynęły od 1.01.1970r. (tzw. czas systemu Unix) do&nbsp;chwili wystąpienia zdarzenia - nie działa w&nbsp;Firefoxie;
* <span class="preformat">preventDefault()</span> - uniemożliwia zachowanie domyślne;
* <span class="preformat">stopPropagation()</span> - zatrzymuje propagowanie zdarzeń do elementów nadrzędnych.

### Przykład 3.1.2.1.

```js
$(function() {
  $('li').on('click', function(e) {
    $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });
});
```

### 3.2. Efekty

#### 3.2.1. Podstawowe efekty

Poprzez jQuery możemy rozbudować naszą stronę internetową o różne efekty:

* <span class="preformat">.show()</span> - wyświetla wybrane elementy;
* <span class="preformat">.hide()</span> - ukrywa wybrane elementy;
* <span class="preformat">.toggle()</span> - przełącza między wyświetlaniem i ukryciem wybranych elementów;
* <span class="preformat">.fadeIn()</span> - powoli rozjaśnia wybrane elementy, które na końcu stają się całkowicie widoczne;
* <span class="preformat">.fadeOut()</span> - powoli przyciemnia wybrane elementy, które na końcu stają się całkowicie przezroczyste;
* <span class="preformat">.fadeTo()</span> - zmienia przezroczystość wybranych elementów;
* <span class="preformat">.fadeToggle()</span> - ukrywa lub wyświetla wybrane elementy przez zmianę ich przezroczystości (przeciwieństwo ich aktualnego stanu);
* <span class="preformat">.slideUp()</span> - wyświetla wybrane elementy z efektem wślizgu;
* <span class="preformat">.slideDown()</span> - ukrywa wybrane elementy z efektem wślizgu;
* <span class="preformat">.slideToggle()</span> - wyświetla lub ukrywa wybrane elementy z efektem wślizgu (w kierunku przeciwnym do&nbsp;ich aktualnego stanu);
* <span class="preformat">.delay()</span> - opóźnia wykonanie kolejnych elementów w kolejce;
* <span class="preformat">.stop()</span> - zatrzymuje animację, jeśli jest aktualnie odtwarzana;
* <span class="preformat">.animate()</span> - tworzy własne animacje.

### Przykład 3.2.1.1.

Pobierz archiwum <a href="./assets/archives/Efekty_w_jQuery.zip">efekty w jQuery</a>.

#### 3.2.2. Animacje CSS

Metoda <span class="preformat">.animate()</span> pozwala na tworzenie własnych efektów i&nbsp;animacji przez&nbsp;zmianę właściwości CSS.

<span class="preformat" style="color: green;">.animate({
  <br />
    <i class="preformat" style="color: grey; margin-left: 1rem;"> // style przeznaczone do zmiany</i>
  <br />
}<i class="preformat" style="color: red;">[, speed] [, easing] [, complete]</i>);</span>

* parametr <span class="preformat">speed</span> wskazuje długość animacji wyrażoną w milisekundach (można również użyć słów kluczowych
<span class="preformat">slow</span> i <span class="preformat">fast</span>;
* parametr <span class="preformat">easing</span> może przyjąć dwie wartości: <span class="preformat">linear</span> (szybkość animacji jest stała)
i <span class="preformat">swing</span> (szybkość animacji zwiększa się w&nbsp;środku przejścia, natomiast na&nbsp;początku i&nbsp;końcu jest wolniejsza);
* parametr <span class="preformat">complete</span> jest używany w celu wywołania funkcji, która powinna być uruchomiona po&nbsp;zakończeniu animacji - jest to tak zwana **funkcja wywołania zwrotnego**.

Wejdź na stronę <a href="https://www.w3schools.com/jquery/eff_animate.asp" target="blank">jQuery animate() Method</a>. Jest tam dostępna lista
stosowanych w&nbsp;jQuery odpowiedników nazw właściwości CSS.

**A jak animować kolor?**

Wejdź na stronę <a href="https://github.com/jquery/jquery-color" target="blank">jQuery plugin for color manipulation and animation support</a>.

### Przykład 3.2.2.1.

Korzystając z archiwum pobranego wcześniej z efektami w jQuery, podmień plik z&nbsp;kodem JavaScript na&nbsp;poniższy:

```js
$(function() {
  $('li').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80'
    }, 500, function() {
      $(this).remove();
    });
  });
});
```

### Ćwiczenie 3.2.2.1.

Napisz kod tworzący poniższą animację:

<iframe src="exercise3221.html" width="100%" height="200" style="overflow: auto;" frameborder="0"></iframe>

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_03. Skrypt z&nbsp;rozwiązaniem nazwij **exercise_3221.html**_.

### 3.3. Nawigacja po modelu DOM

Gdy wybierzemy elementy w jQuery(), wymienione poniżej metody można wykorzystać w&nbsp;celu
uzyskania dostępu do&nbsp;węzłów innych elementów powiązanych z&nbsp;początkowo wybranymi.

* <span class="preformat">.find('selektor')</span> - wszystkie elementy w zbiorze aktualnie wybranych, w&nbsp;których dopasowano selektor;
* <span class="preformat">.closest('selektor')</span> - najbliższy element nadrzędny (niekoniecznie bezpośredni) dopasowany do&nbsp;selektora;
* <span class="preformat">.parent()</span> - bezpośredni element nadrzędny aktualnie wybranego;
* <span class="preformat">.parents()</span> - wszystkie elementy nadrzędne aktualnie wybranego;
* <span class="preformat">.children()</span> - wszystkie elementy potomne aktualnie wybranego;
* <span class="preformat">.siblings()</span> - wszystkie elementy równorzędne aktualnie wybranego;
* <span class="preformat">.next()</span> - nastepny element równorzędny aktualnie wybranego;
* <span class="preformat">.nextAll()</span> - wszystkie nastepne elementy równorzędne aktualnie wybranego;
* <span class="preformat">.prev()</span> - poprzedni element równorzędny aktualnie wybranego;
* <span class="preformat">.prevAll()</span> - wszystkie poprzednie elementy równorzędne aktualnie wybranego.

### Przykład 3.3.1.

```js
$(function() {
  var $h2 = $('h2');
  $('ul').hide();
  $h2.append('<a class="show">pokaż</a>');

  $h2.on('click', function() {
    $h2.next('ul')
      .fadeIn(500)
      .children('.hot')
      .addClass('complete');
    $h2.find('a').fadeOut();
  });
});
```

### Ćwiczenie 3.3.1.

Dany jest kod źródłowy HTML:

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

Dla podanych niżej elementów tej strony podaj bezpośredniego rodzica, najbliższy element nadrzędny <span class="preformat">&lt;a&gt;</span>, następny i&nbsp;poprzedni element równorzędny
oraz&nbsp;wszystkie elementy potomne:

a) sekcja klasy **popular-recipes**;

b) nawigacja strony <span class="preformat">&lt;nav&gt;</span>;

c) sekcja boczna <span class="preformat">&lt;aside&gt;</span>;

d) formularz.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_03. Skrypt z&nbsp;rozwiązaniem nazwij **exercise_331.js**_.

### 3.4. Filtry

#### 3.4.1. Użycie filtrów

Po wybraniu elementów w jQuery do zbioru można dodać kolejne elementy metodą <span class="preformat">.add()</span> lub
filtrować istniejące, aby&nbsp;tym samym pracować jedynie z podzbiorem elementów.
Możemy też sprawdzać, czy wybrane elementy są dopasowane do&nbsp;warunku (innego selektora) poprzez metodę
<span class="preformat">.is()</span>, która zwraca wartość boolowską.

**Filtrowanie za pomocą drugiego selektora:**

* <span class="preformat">.filter()</span> - wyszukuje w dopasowaniu elementy, które są dopasowane do drugiego selektora;
* <span class="preformat">.find()</span> - w dopasowanym zbiorze wyszukuje elementy potomne dopasowane do&nbsp;drugiego selektora;
* <span class="preformat">.not() / :not()</span> - wyszukuje elementy, które nie są dopasowane do&nbsp;selektora;
* <span class="preformat">.has() / :has()</span> - w dopasowanym zbiorze wyszukuje elementy, które mają elementy potomne dopasowane do&nbsp;selektora;
* <span class="preformat">:contains()</span> - wybiera wszystkie elementy zawierające określony tekst (wielkość liter parametru ma znaczenie).

Na przykład poniższe zapisy są sobie równoważne:

* <span class="preformat">$('li').not('.hot').addClass('cool');</span>
* <span class="preformat">$('li:not('.hot')').addClass('cool');</span> - to działanie jest szybsze.

### Przykład 3.4.2.1.

```js
$(function() {
  var $listItems = $('li');

  $listItems.filter('.hot:last').removeClass('hot');
  $('li:not(.hot)').addClass('cool');
  $listItems.has('em').addClass('complete');

  $listItems.each( function() {
    var $this = $(this);
    if ($this.is('.hot')) {
      $this.prepend('Priorytetowe: ');
    }
  });

  $('li:contains("miód")').append(' (lokalny)');
});
```

#### 3.4.2. Wyszukiwanie elementów wg kolejności

Każdy element zwracany przez selektor jQuery ma przypisany numer indeksu, który może być wykorzystany do&nbsp;filtrowania wybranych elementów:

* <span class="preformat">.eq()</span> - element dopasowany do numeru indeksu;
* <span class="preformat">:lt()</span> - element o numerze indeksu mniejszym niż podany;
* <span class="preformat">:gt()</span> - element o numerze indeksu większym niż podany.

### Przykład 3.4.2.1.

```js
$(function() {
  $('li:lt(2)').removeClass('hot');
  $('li').eq(0).addClass('complete');
  $('li:gt(2)').addClass('cool');
});
```

#### 3.4.3. Wybór z elementów

jQuery oferuje specjalne selektory zaprojektowane do&nbsp;pracy z&nbsp;formularzami sieciowymi.
Jednak nie zawsze zapewniają one najszybszy sposób wybierania elementów.
Jeżeli korzystamy z&nbsp;jednego z&nbsp;takich selektorów, jQuery przeanalizuje wszystkie elementy w&nbsp;dokumencie
w&nbsp;celu znalezienia dopasowania (używając kodu jQuery, który nie działa tak szybko jak selektory CSS).
Dlatego też zawęzić fragment dokumentu analizowanego przez&nbsp;skrypt. Odbywa się to przez&nbsp;umieszczenie nazwy
elementu lub&nbsp;użycie innego selektora jQuery przed&nbsp;zastosowaniem selektorów wymienionych niżej.

Dostęp do elementu w formularzu sieciowym może odbywać się także za&nbsp;pomocą tych samych selektorów,
które służą do&nbsp;wyboru dowolnego elementu w&nbsp;jQuery.

**Selektory dla elementów formularza sieciowego:**

* <span class="preformat">:button</span> - elementy <span class="preformat">&lt;button&gt;</span> i <span class="preformat">&lt;input&gt;</span>,
których atrybut <span class="preformat">type</span> ma wartość <span class="preformat">button</span>;
* <span class="preformat">:checkbox</span> - elementy <span class="preformat">&lt;input&gt;</span>, których atrybut <span class="preformat">type</span>
ma wartość <span class="preformat">checkbox</span> - lepszą wydajność można uzyskać poprzez <span class="preformat">$('[type="checkbox"]')</span>;
* <span class="preformat">:checked</span> - zaznaczone elementy w polach wyboru oraz&nbsp;przyciskach opcji;
* <span class="preformat">:disabled</span> - wszystkie elementy, które są wyłączone;
* <span class="preformat">:enabled</span> - wszystkie elementy, które są włączone;
* <span class="preformat">:focus</span> - element, który jest aktualnie aktywny - lepszą wydajność można uzyskać za pomocą <span class="preformat">$(document.activeElement)</span>;
* <span class="preformat">:file</span> - wszystkie elementy, które pozwalają na wybór pliku;
* <span class="preformat">:image</span> - elementy <span class="preformat">&lt;input&gt;</span>, których atrybut <span class="preformat">type</span>
ma wartość <span class="preformat">image</span> - lepszą wydajność można uzyskać poprzez <span class="preformat">$('[type="image"]')</span>;
* <span class="preformat">:input</span> - wszystkie elementy <span class="preformat">&lt;button&gt;</span>, <span class="preformat">&lt;input&gt;</span>, <span class="preformat">&lt;select&gt;</span> oraz <span class="preformat">&lt;textarea&gt;</span> - lepszą wydajność można uzyskać poprzez <span class="preformat">.filter(":input")</span>;
* <span class="preformat">:password</span> - elementy <span class="preformat">&lt;input&gt;</span>, których atrybut <span class="preformat">type</span>
ma wartość <span class="preformat">password</span> - lepszą wydajność można uzyskać poprzez <span class="preformat">$('input:password')</span>;
* <span class="preformat">:radio</span> - elementy <span class="preformat">&lt;input&gt;</span>, których atrybut <span class="preformat">type</span>
ma wartość <span class="preformat">radio</span> - aby wybrać grupę przycisków opcji, można użyć <span class="preformat">$('input[name="gender"]:radio')</span>;
* <span class="preformat">:selected</span> - wszystkie wybrane elementy - lepszą wydajność można uzyskać poprzez <span class="preformat">.filter(":selected")</span>;
* <span class="preformat">:submit</span> - elementy <span class="preformat">&lt;button&gt;</span> i <span class="preformat">&lt;input&gt;</span>,
których atrybut <span class="preformat">type</span> ma wartość <span class="preformat">submit</span> - lepszą wydajność można uzyskać poprzez <span class="preformat">[type="submit"]</span>;
* <span class="preformat">:text</span> - elementy <span class="preformat">&lt;input&gt;</span>, których atrybut <span class="preformat">type</span>
ma wartość <span class="preformat">text</span> - lepszą wydajność można uzyskać poprzez <span class="preformat">$('input:text')</span>.

### Zadania domowe

### Zadanie 1.

Rozwiąż quiz dostepny na&nbsp;<a href="https://www.classmarker.com/" target="blank">classmarker.com</a> o&nbsp;nazwie **Zajęcia 2,3 - jQuery**.

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.

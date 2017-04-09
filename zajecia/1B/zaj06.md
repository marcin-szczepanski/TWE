---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 6</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
	<a href="https://jsfiddle.net/" target="blank" class="button-v button-module">Tu będziemy testować kod&nbsp;źródłowy</a>
	<div style="clear: both;"></div>
</div>

## 11. Obiektowy model dokumentu

**Obiektowy model dokumentu** (ang. _Document Object Model_ - DOM) określa, jak przeglądarka powinna utworzyć model HTML strony internetowej, a&nbsp;także jak JavaScript może uzyskać dostęp do&nbsp;zawartości strony i&nbsp;modyfikować tę zawartość podczas wyświetlania strony w&nbsp;oknie przeglądarki.
Model DOM nie jest częścią HTML ani JavaScript - jest to oddzielny zbiór reguł, implementowany przez&nbsp;producentów wszystkich najważniejszych przeglądarek internetowych.

### 11.1. Drzewo modelu DOM

Kiedy przeglądarka wczytuje stronę internetową, tworzy jej model - tzw. **model drzewa DOM**, który&nbsp;jest przechowywany w&nbsp;pamięci zajmowanej przez&nbsp;przeglądarkę. Składa się z&nbsp;czterech podstawowych typów węzłów.

Węzeł **document** jest to węzeł, który znajduje się w korzeniu drzewa modelu DOM. Przedstawia on całą stronę (i jednocześnie odpowiada obiektowi _document_, który poznaliśmy już wcześniej. Kiedy uzyskujemy dostęp do&nbsp;dowolnego węzła elementu, atrybutu lub&nbsp;tekstu, przechodzimy do&nbsp;niego za&nbsp;pomocą węzła _document_. To&nbsp;punkt wyjścia dla&nbsp;wszystkich wizyt w&nbsp;drzewie modelu DOM.

Węzły **elementów** są to węzły, które odpowiadają poszczególnym elementom strony HTML. Aby uzyskać dostęp do&nbsp;drzewa modelu DOM, należy rozpocząć od&nbsp;wyszukiwania elementów. Po&nbsp;znalezieniu żądanego elementu mamy dostęp do&nbsp;węzłów jego tekstu i&nbsp;atrybutu, o&nbsp;ile zachodzi potrzeba.

Otwierający znacznik elementu HTML może zawierać atrybuty, które w&nbsp;drzewie modelu DOM są prezentowane przez&nbsp;węzły **atrybutów**. Węzły atrybutów nie są _elementami potomnymi_ zawierającego go elementu, ale&nbsp;stanowią część dokumentu. Gdy&nbsp;uzyskamy dostęp do&nbsp;elementu, dostępne będą określone metody i&nbsp;właściwości JavaScript pozwalające na&nbsp;odczyt lub&nbsp;zmianę atrybutów tego elementu.

Gdy uzyskamy dostęp do&nbsp;węzła elementu, możemy przejść do&nbsp;tekstu przechowywanego w&nbsp;tym elemencie. Tekst znajduje się we&nbsp;własnym węźle **tekstowym**. Węzły tekstowe nie&nbsp;mogą mieć elementów potomnych. Jeżeli element zawiera tekst oraz&nbsp;inny element potomny, to ten element potomny **nie** jest potomkiem węzła tekstowego, ale&nbsp;raczej _obejmującego_ go&nbsp;elementu. To&nbsp;pokazuje, że&nbsp;węzeł tekstowy zawsze jest nową gałęzią w&nbsp;drzewie modelu DOM, z&nbsp;której nie&nbsp;wywodzą się&nbsp;żadne dalsze gałęzie.

Każdy węzeł jest dokumentem wraz z&nbsp;metodami i&nbsp;właściwościami. Skrypty uzyskują dostęp do&nbsp;drzewa modelu DOM (nie&nbsp;pliku źródłowego HTML) i&nbsp;uaktualniają je. Wszelkie zmiany wprowadzone w&nbsp;drzewie modelu DOM są&nbsp;odzwierciedlane w&nbsp;przeglądarce.

### Ćwiczenie 11.1.

Narysuj drzewo modelu DOM dla strony o poniższym kodzie źródłowym:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<div class="wrapper">
			<h1>Zadanie 11.1.</h1>
			<p id="paragraph">Tu jest treść akapitu</p>
		</div>
	</body>
</html>
```

### 11.2. Buforowanie zapytań modelu DOM

Metody wyszukujące elementy w&nbsp;drzewie modelu DOM są nazywane **zapytaniami modelu DOM**. Jeżeli&nbsp;z&nbsp;danym elementem musimy pracować więcej niż jeden raz, rozsądnym rozwiązaniem jest użycie zmiennej do&nbsp;przechowywania wyniku danego zapytania.
Kiedy programiści mówią o&nbsp;przechowywaniu elementów w&nbsp;zmiennych, tak naprawdę mają na&nbsp;myśliprzechowywanie w&nbsp;zmiennej położenia elementu (lub&nbsp;elementów) w&nbsp;drzewie modelu DOM. Właściwości i&nbsp;metody tego węzła elementu działają na&nbsp;zmiennej.

Metody wyszukujące elementy poznaliśmy na&nbsp;poprzednich zajęciach. W związku z&nbsp;tym wykonajmy poniższe ćwiczenie:

### Ćwiczenie 11.2.

Dany jest kod źródłowy strony:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<div class="wrapper">
			<h1 class="example">Zadanie 11.2.</h1>
			<ul>
				<li id="li-1">Punkt 1.</li>
				<li id="li-2">Punkt 2.</li>
				<li id="li-3">Punkt 3.</li>
				<li id="li-4">Punkt 4.</li>
			</ul>
			<p class="example">Tu jest treść akapitu</p>
		</div>
	</body>
</html>
```

Napisz skrypt języka JavaScript, który wypisze (w konsoli) zawartość listy oraz zawartość elementów o klasie **example**.

### 11.3. Poruszanie się po modelu DOM

Kiedy mamy węzeł elementu, możemy wybrać inny, powiązany z&nbsp;nim element, wykorzystując w&nbsp;tym celu pięć właściwości. Nazywa się&nbsp;to **poruszaniem się po&nbsp;modelu DOM**.

Omówimy teraz wspomniane pięć właściwości:

- <span class="preformat">parentNode</span> - ta właściwość wyszukuje węzeł elementu dla&nbsp;elementu nadrzędnego w&nbsp;kodzie HTML. Np.&nbsp;dla kodu z&nbsp;ćw. 11.2. dla pierwszego elementu <span class="preformat"><li></span> właściwość ta zwróci nam <span class="preformat"><ul></span>;
- <span class="preformat">previousSibling</span> oraz&nbsp;<span class="preformat">nextSibling</span> - te właściwości powodują wyszukanie odpowiednio poprzedniego i&nbsp;następnego węzła równorzędnego. Jeśli taki węzeł nie zostanie znaleziony dostaniemy <span class="preformat">null</span>;
- <span class="preformat">firstChild</span> oraz&nbsp;<span class="preformat">lastChild</span> - te właściwości powodują wyszukanie odpowiednio pierwszego i&nbsp;ostatniego elementu potomnego dla&nbsp;elementu bieżącego. Podobnie jak wyżej, jeśli taki element nie&nbsp;zostanie znaleziony dostaniemy <span class="preformat">null</span>.

Poza Internet Explorerem większość przeglądarek traktuje znaki odstępu między elementami jako węzły tekstowe. Dlatego też omówione wyżej właściwości (oprócz <span class="preformat">parentNode</span>) zwracają różne elementy w&nbsp;zależności od&nbsp;przeglądarki.

Więcej informacji o hierarchii węzłów w modelu DOM znajdziesz na&nbsp;stronie <a href="http://kursjs.pl/kurs/hierarchia/hierarchia_nody.php" target="blank">http://kursjs.pl/kurs/hierarchia/hierarchia_nody.php</a>

### Ćwiczenie 11.3.

Działamy na kodzie z ćwiczenia 11.2. Napisz skrypt języka JavaScript, który pobierze do zmiennej element <span class="preformat"><li id="li-2"></span>. Wypisz (w konsoli) zawartość jego poprzednika i&nbsp;następnika.

### 11.4. Węzły atrybutów

Przanalizujmy przykład:

### Przykład 11.1.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<div class="wrapper">
			<h1 id="header">Przykład <i>11.1.</i></h1>
			<p id="paragraph">Tu jest <u>treść</u> akapitu</p>
		</div>
		<script src="app.js"></script>
	</body>
</html>
```

Plik **app.js**:

```js
var el = document.getElementById('header');

if (el.hasAttribute('id')) { // sprawdzamy, czy element ma atrybut 'id'
	var attr = el.getAttribute('id'); // pobieramy wartość atrybutu 'id'
	console.log(attr);
	el.id = "nowy-id"; // zmieniamy wartość atrybutu 'id';
}

if (el.hasAttribute('class')) { // sprawdzamy, czy element ma atrybut 'class'
	var attr = el.getAttribute('class'); // pobieramy wartość atrybutu 'class'
	console.log(attr);
}
else {
	el.setAttribute('class', 'nowa-klasa'); // dodajemy do elementu atrybut 'class' o wartości 'nowa-klasa'
	var attr2 = el.className; // przypisujemy do zmiennej nazwę klasy
	console.log(attr2);
	el.removeAttribute('id'); // usuwamy atrybut 'id'
	console.log(el.getAttribute('id'));
}
```

### Ćwiczenie 11.4.

Dla strony o kodzie źródłowym HTML z przykładu 11.1. napisz skrypt, który akapitowi nada klasę **akapit** i&nbsp;zmieni identyfikator na **zmieniony**.


### 11.5. Pobieranie i uaktualnianie zawartości elementu

Aby pracować z&nbsp;zawartością elementów można:

- **przejść do węzłów tekstowych** - sprawdza się to najlepiej, gdy&nbsp;element zawiera jedynie tekst bez&nbsp;żadnych innych elementów;
- **pracować z&nbsp;elementem nadrzędnym** - w&nbsp;ten sposób można uzyskać dostęp do&nbsp;jego węzłów tekstowych i&nbsp;elementów potomnych. Sprawdza się to najlepiej, gdy&nbsp;element posiada węzły tekstowe i&nbsp;równorzedne elementy potomne.

Przeanalizujmy poniższy przykład:

### Przykład 11.2.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<div class="wrapper">
			<h1 id="header">Przykład <i>11.2.</i></h1>
			<p id="paragraph">Tu jest <u>treść</u> akapitu</p>
		</div>
		<script src="app.js"></script>
	</body>
</html>
```

Plik **app.js**:

```js
var element = document.getElementById('header');
console.log(element.firstChild.nodeValue); // wynikiem będzie "Przykład "
console.log(element.lastChild.firstChild.nodeValue) // wynikiem będzie "11.2."
console.log(element.nodeValue); // wynikiem będzie "null"
console.log(element.firstChild.nextSibling.nodeValue); // wynikiem będzie "null"
element.firstChild.nodeValue = "Zmieniony przykład ";
```

### Ćwiczenie 11.5.

Do czego służy właściwość <span class="preformat">nodeValue</span>? Dlaczego w przykładzie powyżej dwa ostatnie polecenia <span class="preforma">console.log()</span> skryptu zwracają wartość <span class="preformat">null</span>?

### Przykład 11.3.

Inny skrypt do strony o kodzie źródłowym z przykładu 11.2.:

```js
var element = document.getElementById('header');
console.log(element.textContent); // wynikiem będzie "Przykład 11.2."
console.log(element.innerHTML); // wynikiem będzie "Przykład <i>11.2.</i>"
element.textContent = "Zmieniony przykład 11.2.";
var element2 = document.getElementById('paragraph');
element2.innerHTML = '<u>Zmieniony</u> akapit';
console.log(element2.innerHTML); // wynikiem będzie "<u>Zmieniony</u> akapit"
```

### Ćwiczenie 11.6.

Jak zachowują się właściwości <span class="preformat">textContent</span> i <span class="preformat">innerHTML</span>?

### 11.6. Dodawanie elementów w drzewie modelu DOM

Przeanalizujmy poniższy przykład:

### Przykład 11.4.

Dalej działamy na kodzie HTML z przykładu 11.1.:

```js
// Utworzenie nowego elementu i przechowywanie go w zmiennej.
var newElement = document.createElement('span');

// Utworzenie węzła tekstowego i przechowywanie go w zmiennej.
var newText = document.createTextNode('To jest nowy element.');

// Dołączenie nowego węzła tekstowego do nowego elementu.
newElement.appendChild(newText);

// Wyszukanie miejsca, w którym powinien być dodany nowy element.
var position = document.getElementsByClassName('wrapper')[0];

// Wstawienie nowego elementu we wskazanym miejscu.
position.appendChild(newElement);
```

### Ćwiczenie 11.7.

Dany jest kod źródłowy strony:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<div class="wrapper">
			<h1 class="example">Zadanie 11.2.</h1>
			<ul>
				<li id="li-1">Punkt 1.</li>
				<li id="li-2">Punkt 2.</li>
				<li id="li-3">Punkt 3.</li>
				<li id="li-4">Punkt 4.</li>
			</ul>
			<p class="example">Tu jest treść akapitu</p>
		</div>
	</body>
</html>
```

Dla powyższej strony napisz skrypt języka JavaScript, który do listy doda nowy elementu o treści **Punkt 5.** z&nbsp;identyfikatorem **li-5**.

### 11.8. Usuwanie elementów z drzewa modelu DOM

Przeanalizujmy poniższy przykład:

### Przykład 11.5.

Dalej działamy na kodzie HTML z przykładu 11.1.:

```js
// Element przeznaczony do usunięcia.
var removeElement = document.getElementById('header');

// Jego element nadrzędny.
var containerElement = removeElement.parentNode;

// Usunięcie elementu.
containerElement.removeChild(removeElement);
```

### Ćwiczenie 11.8.

Dla strony o kodzie źródłowym HTML z ćwiczenia 11.7. napisz skrypt języka JavaScript, który usunie wszystkie elementy listy, a nastepnie sam element <span class="preformat"><ul></span>.

### Zadania domowe

### Zadanie 1.

Dany jest kod źródłowy strony:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Praca domowa nr 6</title>
		<meta charset="utf-8">
	</head>
	<body>
		<div class="wrapper">
			<h1 class="example">Praca domowa nr 6</h1>
			<ul>
				<li id="li-1">Punkt 1.</li>
				<li id="li-2">Punkt 2.</li>
				<li id="li-3">Punkt 3.</li>
				<li id="li-4">Punkt 4.</li>
				<li id="li-5">Punkt 5.</li>
				<li id="li-6">Punkt 6.</li>
				<li id="li-7">Punkt 7.</li>
				<li id="li-8">Punkt 8.</li>
			</ul>
			<p class="example">Tu jest treść akapitu</p>
		</div>
	</body>
</html>
```

Napisz skrypt języka JavaScript, który:

- usunie klasę elementu <span class="preformat"><h1></span>;
- doda identyfikator do elementu <span class="preformat"><h1></span> o wartości równej odwróconemu ciągowi znaków **rotakifytnedi-ywon**;
- doda link w elemencie o klasie <span class="preformat">wrapper</span>, który będzie miał klasę <span class="preformat">new-class</span> i&nbsp;który&nbsp;będzie przenosił do&nbsp;strony **sealcode.org**; link ten powinien mieć atrybut <span class="preformat">target="blank"</span>;
- usunie całą zawartość listy a w jej miejsce stworzy nową zawartość, na&nbsp;którą&nbsp;będzie się&nbsp;składać 30&nbsp;elementów <span class="preformat"><li></span> o&nbsp; identyfikatorach o&nbsp;nazwach odpowiednio **new1** do&nbsp;**new30**, z&nbsp;treścią odpowiednio **Nowa treść 1** do&nbsp;**Nowa treść 30**;
- w akapicie pod listą zmieni treść na **Zmieniona treść akapitu**.

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.
* kursjs.pl

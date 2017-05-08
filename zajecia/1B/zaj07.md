---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 7</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
	<a href="https://jsfiddle.net/" target="blank" class="button-v button-module">Tu będziemy testować kod&nbsp;źródłowy</a>
	<div style="clear: both;"></div>
</div>

## 12. Zdarzenia

### 12.1. Typy zdarzeń

Na tych zajęciach omówimy nastepujące typy zdarzeń:

- **zdarzenia UI** - występują, gdy&nbsp;użytkownik prowadzi interakcje z&nbsp;graficznym interfejsem użytkownika (ang.&nbsp;__user interface__ - UI) przeglądarki, a&nbsp;nie&nbsp;ze&nbsp;samą stroną;
- **zdarzenia klawiatury** - występują, gdy&nbsp;użytkownik prowadzi interakcje z&nbsp;klawiaturą;
- **zdarzenia myszy** - występują, gdy&nbsp;użytkownik prowadzi interakcje z&nbsp;myszą lub ekranem dotykowym;
- **zdarzenia aktywności** - występują, gdy&nbsp;dany element (np. łącze) staje się&nbsp;aktywny bądź&nbsp;nieaktywny;
- **zdarzenia dotyczące zmian** - występują, gdy&nbsp;nastąpi zmiana struktury modelu DOM na&nbsp;skutek działania skryptu.

### Terminologia:

- o zdarzeniu możemy powiedzieć, że&nbsp;zostało **zgłoszone** lub **wywołane**;
- mówi się, że&nbsp;zdarzenia **wywołują** funkcję lub&nbsp;skrypt.

### 12.2. Wywoływanie kodu JavaScript przez zdarzenia

Kiedy użytkownik prowadzi interakcje z&nbsp;kodem HTML na&nbsp;stronie internetowej, mamy trzy kroki prowadzące do&nbsp;wywołania pewnego kodu JavaScript. Razem te kroki są&nbsp;określane mianem **procedury obsługi zdarzeń**:

- **wybór elementu** - wybieramy węzeł **elementu**, do&nbsp;którego skrypt ma&nbsp;przesłać odpowiedź;
- **wskazanie zdarzenia** - wskazujemy **zdarzenie**, które w&nbsp;wybranym elemencie spowoduje udzielenie odpowiedzi;
- **wywołanie kodu** - definiujemy **kod** uruchamiany po&nbsp;wystąpieniu zdarzenia.

### 12.3. Dołączenie zdarzenia do elementu

### Tradydycjna procedura obsługi zdarzeń w&nbsp;modelu DOM

<center><span class="preformat"><i style="color: red;">element</i>.<span style="color: green;">on<i>zdarzenie</i></span> = <i style="color: purple;">nazwaFunkcji</i>;</span></center>

### Przykład 12.1.

```js
function myFunction() {
	// treść funkcji
}

var el = document.getElementById('id-elementu');
el.onclick = myFunction;
```

### Obserwatory zdarzeń

Obserwatory zdarzeń to najnowsze podejście w&nbsp;zakresie procedur obsługi zdarzeń. Dzięki nim można przypisać zdarzeniu wiele funkcji, ale&nbsp;jednocześnie obserwatory zdarzeń nie&nbsp;są&nbsp;obsługiwane w&nbsp;starszych wersjach przeglądarek internetowych.

<center><span class="preformat"><i style="color: red;">element</i>.<span style="color: green;">addEventListener(<i style="color: purple;">'zdarzenie'</i>, <i style="color: purple;">nazwaFunkcji</i>, <i style="color: purple;">wartośćBoolowska</i>);</span></span></center>

### Przykład 12.2.

```js
function myFunction() {
	// treść funkcji
}

var el = document.getElementById('id-elementu');
el.addEventListener('click', myFunction, false);
```

### Ćwiczenie 12.1.

Jak myślisz, dlaczego nie&nbsp;można używać nawiasów po&nbsp;nazwie funkcji, kiedy do elementu dołączamy jakieś zdarzenie?

### Jak używać parametrów w procedurach obsługi zdarzeń i&nbsp;obserwatorach zdarzeń?

Ponieważ w&nbsp;procedurze obsługi zdarzeń oraz&nbsp;w&nbsp;obserwatorach zdarzeń nie&nbsp;można używać nawiasu po&nbsp;nazwie funkcji, możliwość przekazania argumentów funkcji wymaga zastosowania pewnej sztuczki.

Zwykle kiedy funkcja wymaga pewnych informacji, aby mogła wykonać swoje zadanie, odpowiednie argumenty są&nbsp;podawane w&nbsp;nawiasie znajdującym się&nbsp;po&nbsp;nazwie funkcji.
Kiedy interpreter napotka nawias po&nbsp;nazwie funkcji natychmiast wykonuje jej kod. Jednak w&nbsp;przypadku procedury obsługi zdarzeń wykonanie kodu chcemy wstrzymać aż&nbsp;do&nbsp;chwili wystąpienia odpowiedniego zdarzenia.
Dlatego też, jeżeli zachodzi konieczność przekazania argumentów funkcji wywoływanej przez&nbsp;procedurę obsługi zdarzeń lub&nbsp;obserwatora zdarzeń, to&nbsp;trzeba ją opakować wywołaniem **funkcji anonimowej**.

<center><span class="preformat"><i style="color: red;">element</i>.<span style="color: green;">addEventListener(<i style="color: purple;">'zdarzenie'</i>, <i style="color: purple;">function() {nazwaFunkcji(argumenty);}</i>, <i style="color: purple;">wartośćBoolowska</i>);</span></span></center>

### Przykład 12.3.

```js
function myFunction(arg) {
	// treść funkcji
}

var el = document.getElementById('id-elementu');
el.addEventListener('click', function() {myFunction(5);}, false);
```

### 12.4. Przepływ zdarzeń

Elementy HTML są zagnieżdżane w&nbsp;innych elementach. Jeżeli na przykład klikniemy łącze, to klikniemy także elementy nadrzędne tego łącza. JavaScript wywoła zdarzenia w&nbsp;danym elemencie oraz&nbsp;we&nbsp;wszystkich elementach wewnątrz których znajduje się ten element. Kolejność wywoływania zdarzeń nosi nazwę **przepływu zdarzeń**, a&nbsp;zdarzenia poruszają się w&nbsp;obu&nbsp;kierunkach:

- **propagacja zdarzeń** - na&nbsp;początku zdarzenie znajduje się w&nbsp;najbardziej szczegółowym węźle, a&nbsp;następnie **przepływa na zewnątrz** do&nbsp;najbardziej szczegółowego - jest to&nbsp;domyślny typ przepływu zdarzeń powszechnie obsługiwany przez&nbsp;przeglądarki internetowe (w&nbsp;metodzie <span class="preformat">addEventListener()</span> ostatni argument ustawiamy na <span class="preformat">false</span>);
- **przechwytywanie zdarzeń** - na&nbsp;początku zdarzenie znajduje się&nbsp;w&nbsp;najmniej szczegółowym węźle, a&nbsp;następnie **przepływa do&nbsp;wewnątrz** do&nbsp;najbardziej szczegółowego - ten&nbsp;typ przepływu zdarzeń nie jest obsługiwany przez&nbsp;IE&nbsp;8&nbsp;oraz jej wcześniejsze wersje (w&nbsp;metodzie <span class="preformat">addEventListener()</span> ostatni argument ustawiamy na <span class="preformat">true</span>).

### Przykład 12.4.

HTML:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Przykład</title>
		<style>
			#page {
				background-color: lightpink;
				margin: 30px;
				float: left;
				width: 400px;
			}
			a {
				cursor: pointer;
			}
		</style>
	</head>
	<body>
		<div id="page">
			<h1>Lista</h1>
			<h2>Propagacja</h2>
			<ul id="list">
				<li id="item"><a id="link">Przykład</a></li>
			</ul>
		</div>
		<div id="page">
			<h1>Lista</h1>
			<h2>Przechwytywanie</h2>
			<ul id="list2">
				<li id="item2"><a id="link2">Przykład</a></li>
			</ul>
		</div>
	</body>
</html>
```

JavaScript:

```js
function showElement() {
  alert(this.innerHTML);
}

var el = document.getElementById("list");  
el.addEventListener('click', showElement, false);

el = document.getElementById("item");
el.addEventListener('click', showElement, false);

el = document.getElementById("link");
el.addEventListener('click', showElement, false);

el = document.getElementById("list2");
el.addEventListener('click', showElement, true);

el = document.getElementById("item2");
el.addEventListener('click', showElement, true);

el = document.getElementById("link2");
el.addEventListener('click', showElement, true);
```

### 12.5. Obiekt zdarzenia

Kiedy zdarzenie występuje, obiekt <span class="preformat">event</span> przekazuje informacje o&nbsp;danym zdarzeniu i&nbsp;elemencie, w&nbsp;którym zostało ono&nbsp;wywołane.
Obiekt zdarzenia jest przekazywany do&nbsp;każdej funkcji zdefiniowanej w&nbsp;procedurze obsługi lub&nbsp;obserwatorze zdarzenia.
Jeżeli zachodzi potrzeba przekazania argumentów do&nbsp;nazwanej funkcji&nbsp;,&nbsp;to obiekt <span class="preformat">event</span> będzie w&nbsp;pierwszej kolejności przekazywany do&nbsp;anonimowej funkcji opakowania (odbywa to&nbsp;się&nbsp;automatycznie). Następnie trzeba ją&nbsp;podać jako parametr funkcji nazwanej.
Kiedy obiekt <span class="preformat">event</span> jest przekazywany funkcji, to&nbsp;często otrzymuje parametr o&nbsp;nazwie <span class="preformat">e</span>; to&nbsp;powszechnie stosowany skrót.

### Właściwości i metody obiektu <span class="preformat">event</span>

Właściwości:

- <span class="preformat">target</span> - wskazuje element docelowy dla zdarzenia;
- <span class="preformat">type</span> - typ wywołanego zdarzenia;
- <span class="preformat">cancelable</span> - wskazuje, czy można anulować domyślne zachowanie elementu.

Metody:

- <span class="preformat">preventDefault()</span> - anuluje domyślne zachowanie zdarzenia (o&nbsp;ile istnieje taka możliwość);
- <span class="preformat">stopPropagation()</span> - uniemożliwia zdarzeniu dalszą propagację lub&nbsp;przechwytywanie.

### Przykład 12.5.

Obserwator zdarzeń bez parametrów:

```js
function myFunction(e) {
	var target = e.target;
}

var el = document.getElementById('id-elementu');
el.addEventListener('click', myFunction, false);
```

Obserwator zdarzeń z parametrami:

```js
function myFunction(e, arg) {
	var target = e.target;
}

var el = document.getElementById('id-elementu');
el.addEventListener('click', function(e) {myFunction(e, 5);}, false);
```

### 12.6. Słowo kluczowe <span class="preformat">this</span>

Podczas wywoływania funkcji, użycie właściwości <span class="preformat">target</span> obiektu <span class="preformat">event</span> to&nbsp;najlepszy sposób ustalenia, w&nbsp;którym elemencie wystąpiło zdarzenie.
Takie podejście zostało omówione poniżej i&nbsp;opiera się&nbsp;na&nbsp;słowie kluczowym <span class="preformat">this</span>.

### Przykład 12.6.

Słowo kluczowe <span class="preformat">this</span> odwołuje się&nbsp;do&nbsp;właściciela funkcji. W&nbsp;kodzie poniżej <span class="preformat">this</span> odwołuje się&nbsp;do&nbsp; elementu, w&nbsp;którym wystąpiło zdarzenie:

```js
function checkUsername() {
	var elMsg = document.getElementById('feedback');
	if (this.value.length < 5) {
		elMsg.innerHTML = 'Nazwa użytkownika jest zbyt krótka.';
	}
	else {
		elMsg.innerHTML = '';
	}
}

var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);
```

Takie rozwiązanie działa, kiedy funkcji nie&nbsp;są&nbsp;przekazywane żadne parametry (i&nbsp;dlatego nie&nbsp;jest wywoływana z&nbsp;poziomu funkcji anonimowej).

### Przykład 12.7.

```js
function checkUsername(el, minLength) {
	var elMsg = document.getElementById('feedback');
	if (el.value.length < minLength) {
		elMsg.innerHTML = 'Nazwa użytkownika jest zbyt krótka.';
	}
	else {
		elMsg.innerHTML = '';
	}
}

var el = document.getElementById('username');
el.addEventListener('blur', function() {checkUsername(el, 5);}, false);
```

W&nbsp;obu powyższych przykładach preferowanym podejściem jest użycie obiektu <span class="preformat">event</span>.

### 12.7. Zdarzenia interfejsu użytkownika

Zdarzenia interfejsu użytkownika są skutkiem interakcji z&nbsp;oknem przeglądarki, a&nbsp;nie&nbsp;wyświetlaną przez&nbsp;nią stroną HTML - może to&nbsp;być na&nbsp;przykład wczytanie stronu lub&nbsp;zmiana wymiarów okna przeglądarki.

- Zdarzenie <span class="preformat">load</span> - wywoływane po pełnym wczytaniu strony internetowej. Zdarzenie to jest wywoływane także w&nbsp;węzłach innych elementów przeznaczonych do&nbsp;wczytania, takich jak&nbsp;obrazy, skrypty i&nbsp;obiekty. Według specyfikacji DOM&nbsp;Level&nbsp;2 (listopad 2000) omawiane zdarzenie jest wywoływane w&nbsp;obiekcie <span class="preformat">document</span>, choć&nbsp;wcześniej było wywoływane w&nbsp;obiekcie <span class="preformat">window</span>. W&nbsp;celu zapewnienia wstecznej zgodności przeglądarki obsługują oba&nbsp;podejścia; programiści często dołączają procedury obsługi zdarzeń <span class="preformat">load</span> do&nbsp;obiektu <span class="preformat">window</span> (zamiast <span class="preformat">document</span>).   
- Zdarzenie <span class="preformat">unload</span> - wywoływane podczas usuwania strony internetowej (najczęściej po&nbsp;wystąpieniu żądania pobrania nowej strony). Według specyfikacji DOM&nbsp;Model&nbsp;2 omawiane zdarzenie jest wywoływane w&nbsp;węźle dla&nbsp;elementu <span class="preformat">body</span>, ale&nbsp;w&nbsp;starszych przeglądarkach internetowych jest wywoływane w&nbsp;obiekcie <span class="preformat">window</span>.
- Zdarzenie <span class="preformat">error</span> - wywoływane, kiedy przeglądarka internetowa napotka błąd JavaScript lub&nbsp;gdy&nbsp;zasób nie&nbsp;istnieje. Obsługa tego zdarzenia jest niespójna w&nbsp;różnych przeglądarkach internetowych i&nbsp;dlatego nie&nbsp;stanowi ono&nbsp;niezawodnego sposobu obsługi błędów.
- Zdarzenie <span class="preformat">resize</span> - wywoływane po&nbsp;zmianie wielkości okna przeglądarki internetowej. Podczas zmiany wielkości okna przeglądarka stale wywołuje to zdarzenie. Dlatego lepiej unikać używania tego zdarzenia do&nbsp;wykonywania skomplikowanego kodu, ponieważ strona może być wówczas odebrana jako wolno reagująca na&nbsp;działania użytkownika.
- Zdarzenie <span class="preformat">scroll</span> - wywoływane po&nbsp;przewinięciu zawartości strony w&nbsp;górę lub&nbsp;w&nbsp;dół. Może odnosić się&nbsp;do&nbsp;całej strony lub&nbsp;określonego elementu na&nbsp;stronie. Podczas przewijania zawartości okna przeglądarka nieustannie wywołuje to&nbsp;zdarzenie. Dlatego lepiej unikać tego zdarzenia do&nbsp;wykonywania skomplikowanego kodu, gdy&nbsp;użytkownik przewija zawartość strony.

### 12.8. Zdarzenia aktywności

Elementy HTML, z&nbsp;którymi użytkownik prowadzi interakcję, na&nbsp;przykład łącza, mogą stawać się&nbsp;aktywne. Istnieją zdarzenia wywoływane aktywacją lub&nbsp;dezaktywacją elementów.

- Zdarzenie <span class="preformat">focus</span> - wywoływane, kiedy element staje się&nbsp;aktywny.
- Zdarzenie <span class="preformat">blur</span> - wywoływane, kiedy element staje się&nbsp;nieaktywny.

### 12.9. Zdarzenia myszy

Zdarzenia myszy są wywoływane podczas poruszania myszą oraz&nbsp;klikania jej przyciskami.

- Zdarzenie <span class="preformat">click</span> - wywoływane, kiedy użytkownik kliknie podstawowym przyciskiem myszy. Zdarzenie <span class="preformat">click</span> będzie wywoływane dla&nbsp;elementu, nad&nbsp;którym aktualnie znajduje się&nbsp;kursor myszy. Zostanie wywołane także wtedy,&nbsp;gdy użytkownik naciśnie klawisz __Esc__ na&nbsp;klawiaturze, kiedy element jest aktywny.
- Zdarzenie <span class="preformat">dblclick</span> - wywoływane, kiedy użytkownik w&nbsp;krótkim odstępie czasu dwukrotnie kliknie podstawowym przyciskiem myszy.
- Zdarzenie <span class="preformat">mousedown</span> - wywoływane, kiedy użytkownik wciśnie dowolny przycisk myszy.
- Zdarzenie <span class="preformat">mouseup</span> - wywoływane, kiedy użytkownik zwolni przycisk myszy.
- Zdarzenie <span class="preformat">mouseover</span> - wywoływane, kiedy kursor znajdował się&nbsp;na&nbsp;zewnątrz elementu i&nbsp;został umieszczony nad&nbsp;elementem.
- Zdarzenie <span class="preformat">mouseout</span> - wywoływane, kiedy kursor jest nad&nbsp;elementem, a&nbsp;następnie zostaje przeniesiony na&nbsp;inny - na&nbsp;zewnątrz elementu bieżącego lub&nbsp;jego elementów potomnych.
- Zdarzenie <span class="preformat">mousemove</span> - wywoływane, podczas poruszania kursorem nad&nbsp;elementem. To&nbsp;zdarzenie jest wywoływane nieustannie.

### 12.10. Zdarzenia klawiatury

Zdarzenia klawiatury są wywoływane, gdy&nbsp;użytkownik korzysta z&nbsp;klawiatury.

- Zdarzenie <span class="preformat">input</span> - wywoływane podczas zmiany wartości elementu <span class="preformat">input</span> lub&nbsp;<span class="preformat">textarea</span>. Obsługiwane po&nbsp;raz pierwszy w&nbsp;IE&nbsp;9.
- Zdarzenie <span class="preformat">keydown</span> - wywoływane gdy użytkownik naciśnie dowolny klawisz na&nbsp;klawiaturze. Jeżeli klawisz będzie przetrzymany, zdarzenie będzie wywoływane nieustannie. To&nbsp;jest bardzo ważne, ponieważ&nbsp;dokładnie powiela zachowanie w&nbsp;polu tekstowym, kiedy&nbsp;użytkownik przetrzyma naciśnięty klawisz (ten sam znak będzie nieustannie wstawiany w&nbsp;polu tekstowym).
- Zdarzenie <span class="preformat">keypress</span> - wywoływane gdy użytkownik naciśnie klawisz, co&nbsp; spowoduje wyświetlenie na&nbsp;ekranie odpowiedniego znaku. Zdarzenie to&nbsp;nie&nbsp;będzie wywoływane na&nbsp;przykład po&nbsp;naciśnięciu klawisza kursora choć wspomniany znak powoduje wywołanie zdarzenia <span class="preformat">keydown</span>. Jeżeli użytkownik przytrzyma naciśnięty klawisz, zdarzenie będzie wywoływane nieustannie.
- Zdarzenie <span class="preformat">keyup</span> - wywoływane gdy użytkownik zwalnia klawisz na&nbsp;klawiaturze. Zdarzenia <span class="preformat">keydown</span> i&nbsp;<span class="preformat">keypress</span> są wywoływane przed&nbsp;wyświetleniem znaku na&nbsp;ekranie, podczas&nbsp;gdy&nbsp;<span class="preformat">keyup</span> już&nbsp;po&nbsp;jego wyświetleniu.

### Który klawisz został naciśniety?

Kiedy używamy zdarzeń <span class="preformat">keydown</span> lub&nbsp;<span class="preformat">keypress</span>, obiekt <span class="preformat">event</span> posiada właściwość o&nbsp;nazwie <span class="preformat">keyCode</span>. Można ją&nbsp;wykorzystać do&nbsp;ustalenia, który klawisz został naciśnięty. Jednak wartością zwrotną nie&nbsp;będzie litera przyporządkowana danemu klawiszowi, lecz **kod ASCII** przedstawiający małą literę odpowiadającą temu klawiszowi.
Jeżeli chcemy pobrać rzeczywistą literę lub&nbsp;cyfrę (zamiast kodu ASCII), obiekt <span class="preformat">String</span> zawiera odpowiednią metodę o&nbsp;nazwie <span class="preformat">fromCharCode()</span>, która przeprowadza odpowiednią konwersję:
<span class="preformat">String.fromCharCode(event.keycode);</span>


### 12.11. Zdarzenia dotyczące zmian i obserwatory

Dodanie lub usunięcie elementu z&nbsp;modelu DOM powoduje zmianę jego struktury. Zmiana ta&nbsp;wywołuje zdarzenie dotyczące zmian.

- Zdarzenie <span class="preformat">DOMNodeInserted</span> - wywoływane po wstawieniu węzła w&nbsp;drzewie modelu DOM.
- Zdarzenie <span class="preformat">DOMNodeRemoved</span> - wywoływane po usunięciu węzła z&nbsp;drzewa modelu DOM.
- Zdarzenie <span class="preformat">DOMSubtreeModified</span> - wywoływane po zmianie struktury modelu DOM - po&nbsp;dwóch wyżej wymienionych zdarzeniach.
- Zdarzenie <span class="preformat">DOMNodeInsertedIntoDocument</span> - wywoływane po wstawieniu węzła w&nbsp;drzewie modelu DOM jako&nbsp;węzła potomnego innego węzła, znajdującego się&nbsp;w&nbsp;dokumencie.
- Zdarzenie <span class="preformat">DOMNodeRemovedFromDocument</span> - wywoływane po usunięciu węzła w&nbsp;drzewie modelu DOM jako&nbsp;węzła potomnego innego węzła, znajdującego się&nbsp;w&nbsp;dokumencie.

### Przykład 12.8.

```js
var elList, addLink, newEl, newText, counter, listItems; // Deklaracja zmiennych.

elList  = document.getElementById('list');               // Pobranie listy.
addLink = document.querySelector('a');                   // Pobranie przycisku dodawania elementu.
counter = document.getElementById('counter');            // Pobranie elementu licznika.

function addItem(e) {                                    // Deklaracja funkcji.
	e.preventDefault();                                    // Uniemożliwienie akcji łącza.
	newEl = document.createElement('li');                  // Nowy element <li>.
	newText = document.createTextNode('Nowy element listy'); // Nowy węzeł tekstowy.
	newEl.appendChild(newText);                            // Dodanie tekstu do elementu <li>.
	elList.appendChild(newEl);                             // Dodanie elementu <li> do listy.
}

function updateCount() {                                 // Deklaracja funkcji.
	listitems = list.getElementsByTagName('li').length;    // Ustalenie całkowitej liczby elementów <li>.
	counter.innerHTML = listitems;                         // Uaktualnienie licznika.
}

addLink.addEventListener('click', addItem, false);       // Kliknięcie przycisku.
elList.addEventListener('DOMNodeInserted', updateCount, false); // Model DOM uaktualniony.
```

### Zadania domowe

Na kolejne zajęcia musi być wykonana czwarta faza projektu - **"ożywienie" aplikacji przy pomocy języka JavaScript**.

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.
* kursjs.pl

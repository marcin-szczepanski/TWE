---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 9</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
	<a href="https://jsfiddle.net/" target="blank" class="button-v button-module">Tu będziemy testować kod&nbsp;źródłowy</a>
	<div style="clear: both;"></div>
</div>

## 13. Interfejs programowania aplikacji

### 13.1. Czym jest API?

**API** to interfejs programowania aplikacji (z ang. _Application Programming Interface_). Umożliwia on&nbsp;wzajemną komunikację programom, na&nbsp;przykład skryptom.

Przeglądarki internetowe, skrypty, witryny internetowe oraz&nbsp;inne aplikacje bardzo często udostępniają swoją funkcjonalność, aby&nbsp;programiści mogli z&nbsp;niej korzystać. Na&nbsp;przykład:

- **Przeglądarki internetowe** - model DOM to API. Pozwala skryptom na&nbsp;uzyskanie dostępu i&nbsp;uaktualnienie zawartości strony internetowej po&nbsp;jej wczytaniu w&nbsp;przeglądarce.
- **Skrypty** - np. biblioteka jQuery to plik JavaScript wraz z&nbsp;API. Pozwala na&nbsp;wybór elementów, a&nbsp;następnie użycie metod jQuery do&nbsp;pracy z&nbsp;wybranymi elementami.

Nie musimy wiedzieć, jak inny skrypt lub program wykonuje dane zadanie. Powinniśmy wiedzieć, co&nbsp;robi, jak&nbsp;zlecić mu wykonanie zadania, a&nbsp;także jak przetworzyć dane otrzymane w&nbsp;odpowiedzi.

API pozwala na&nbsp;tworzenie kodu wykonującego **żądanie**, w&nbsp;którym inny program lub&nbsp;skrypt jest proszony o&nbsp;wykonanie pewnego zadania.
API określa także format, w&nbsp;jakim oczekuje **odpowiedzi** (aby&nbsp;mogła być ona zrozumiana).

### 13.2. SOAP

**SOAP** to akronim od _Simple Object Access Protocol_. Jest on&nbsp;najbardziej zbliżony do&nbsp;tego, co&nbsp;nazywamy serwisami w&nbsp;zwykłej aplikacji – zakłada, że&nbsp;mamy pewien zbiór operacji, które&nbsp;przyjmują określone argumenty. SOAP z&nbsp;definicji jest bardzo formalny – tzn.&nbsp;każdy serwis powinien udostępniać plik WSDL, który opisuje jak&nbsp;się&nbsp;nazywa każda operacja, jakie dane przyjmuje, jakiego typu są&nbsp;to&nbsp;dane itp.&nbsp;Dzięki temu mamy dostęp do&nbsp;narzędzi takich jak&nbsp;generowanie kodu na&nbsp;podstawie pliku WSDL (bardzo ułatwia korzystanie z&nbsp;zewnętrznego API). Z&nbsp;drugiej strony nawet proste zapytania wymagają dużo "kodu" dookoła w&nbsp;przesyłanej wiadomości (tzw.&nbsp;_Envelope_), przez&nbsp;co&nbsp;ciężko testować takie serwisy ręcznie, analizować przesyłane zapytania czy&nbsp;korzystać z&nbsp;nich za&nbsp;pomocą bardzo prostych klientów (np.&nbsp;mikrokontrolery, języki programowania bez&nbsp;bibliotek&nbsp;itp.).

### 13.3. REST

**REST** to akronim od _REpresentational State Transfer_ i&nbsp;jest zbudowany wokół całkowicie innych założeń. W&nbsp;przypadku REST mamy adresy URL które są&nbsp;pewnego rodzaju identyfikatorami. Wysyłamy na&nbsp;te adresy zapytanie, które&nbsp;może być zarówno JSONem, XMLem, ale&nbsp;też zwykłym tekstem czy&nbsp;danymi binarnymi. To,&nbsp;co&nbsp;powinno się&nbsp;wydarzyć jest określone przez&nbsp;użytą metodę protokołu HTTP (mamy ich 7) – np.&nbsp;GET pobiera element, DELETE usuwa go&nbsp;itd. Pola klas możemy wysyłać w&nbsp;komplecie, a&nbsp;część możemy pominąć (czasami). Odpowiedź może być w&nbsp;formacie JSON, XML, lub&nbsp;też zależnie od&nbsp;tego, jakiego typu odpowiedzi zażyczy sobie klient.

Słowem: mamy dość dużą dowolność w zakresie implementacji, ale&nbsp;jest ona&nbsp;obarczona dość dużą niepewnością. Tego typu API sprawdza się wyśmienicie w przypadku systemów, które powinny być dostępne dla&nbsp;możliwie dużej ilości klientów (także np.&nbsp;bezpośrednio przeglądarek internetowych i&nbsp;stron WWW), lub&nbsp;w&nbsp;których format zapytań nie&nbsp;jest tak&nbsp;ważny.

Przede wszystkim w REST-owym API ważny jest adres URL – wszystkie działania na&nbsp;konkretnym obiekcie (np.&nbsp;kocie) wykonujemy na&nbsp;jego unikalnym adresie URL, np /api/koty/1, gdzie&nbsp;1&nbsp;to&nbsp;unikalny identyfikator konkretnego kota (np.&nbsp;z&nbsp;bazy danych).

Wyróżniamy dwa rodzaje adresów: _konkretnego_ elementu (np. /koty/1) oraz&nbsp;całej kolekcji (wszystkich elementów, np.&nbsp;/koty).

Konkretne metody protokołu HTTP odpowiadają za&nbsp;odpowiednie operacje:

- **GET** – _pobieranie_ (zarówno kolekcji, jak i pojedynczego elementu);
- **POST** – _tworzenie_ (tylko kolekcji);
- **PUT** – _aktualizacja_ (tylko pojedynczego elementu);
- **PATCH** – _częściowa aktualizacja_ (tylko pojedynczego elementu);
- **DELETE** – _usuwanie_ (tylko pojedynczego elementu).

Więcej o REST-owym API znajdziesz na stronie <a href="http://www.moseleians.co.uk/wp-content/uploads/cmdm/9632/1422444257_api-restowe-whitepaper.pdf" target="blank">Wprowadzenie do&nbsp;architektury REST</a>.

### 13.4. SOAP vs REST

SOAP jest ustandaryzowany. To&nbsp;oznacza, że&nbsp;będziemy musieli się&nbsp;dopasować do&nbsp;tych standardów, ale&nbsp;w&nbsp;zamian dostajemy masę narzędzi, które&nbsp;automatycznie zrobią część pracy za&nbsp;nas. Jest jednak bardziej problematyczny w&nbsp;manualnym testowaniu i&nbsp;analizie zapytań/usług.

REST na pewno jest bardzo logiczny jesli chodzi o&nbsp;operacje na&nbsp;danych – dodawanie, odczyt, aktualizacja itp. W&nbsp;przypadku operacji czysto proceduralnych (np.&nbsp;"oblicz jakąś wartość na&nbsp;podstawie danych wejściowych") jest on&nbsp;dużo mniej jasny, a&nbsp;brak okreslonych standardów i&nbsp;norm powoduje, że&nbsp;implementacje często nie&nbsp;są&nbsp;zgodne z&nbsp;intencją RESTa i&nbsp;korzystanie z&nbsp;nich może przyprawić o&nbsp;bół głowy. Jest jednak dużo mniej wrażliwy na&nbsp;zmiany w&nbsp;API (np.&nbsp;dodanie lub&nbsp;usunięcie pól, nowe operacje&nbsp;itp.).

### 13.5. Biblioteka **qwest**

Przy pracy nad ostatnią fazą projektu będziemy korzystać z&nbsp;biblioteki **qwest**.
Na&nbsp;początku dołączamy plik skryptu z biblioteką na koniec sekcji **body** (przed naszym skyptem JS): 

<center><span class="preformat">https://cdnjs.cloudflare.com/ajax/libs/qwest/4.4.6/qwest.min.js</span></center>

### Jak używa się biblioteki qwest?

```js
qwest.method(url, data, options, before)
	.then(function(xhr, response) {
		// Run when the request is successful
	})
	.catch(function(e, xhr, response) {
		// Process the error
	})
	.complete(function() {
	 	// Always run
	});
```

gdzie:

- **method** to wywoływana metoda REST lub inna metoda biblioteki;
- **url** to adres, z którym się łączymy;
- **data** to dane, jakie wysyłamy (np. w tablicy);
- **options** to opcje, z jakimi chcemy wywołać metodę (lista opcji znajduje się <a href="https://github.com/pyrsmk/qwest" target="blank">tutaj</a>;
- **before** - własne opcje dla obiektu XHR (XMLHttpRequest).

### Przykłady użycia biblioteki qwest dla API sealcode-owego:

```js
var url='http://sealcode.org:8082/api/v1/resources/task';
```

Załóżmy, że chcemy przechowywać nasze dane lokalnie w&nbsp;tablicy o&nbsp;nazwie **tasks**.

#### Pobieranie danych

```js
function getTasks() { // pobieramy listę zadań po wystąpieniu odpowiedniego zdarzenia
	qwest.get(url, {}, {cache: true}).then(
		function(xhr, response) {
			response.forEach(function(element) { // wywołujemy dla każdego pobranego zasobu
				tasks.push(element); // dodajemy pobrany element zasobu do tablicy "tasks"
				refresh(); // odświeżamy stan strony
	})});
}
```

#### Wysłanie nowego zasobu

```js
function addTaskServer(task) { // wysyłamy nowe zadanie po wciśnięciu klawisza ENTER lub kliknięciu przycisku
	qwest.post(url, {title: task.title, is_done: task.is_done}, {cache: true}); // wysłanie nowego zadania w postaci obiektu o właściwościach "title" i "is_done"
}
```

#### Częściowa aktualizacja zasobu

```js
function checkboxClick(event) { // stan kliknięcia checkboxa przy danym zadaniu (załóżmy, że funkcja wywołuje się po wystąpieniu pewnego zdarzenia
	tasks[this.id].body.is_done = this.checked; // zmiana stanu kliknięcia danego zadania w tablicy (zakładamy, że każde zadanie ma swój identyfikator, dla uproszczenia przyjąłem, że identyfikatorem jest pozycja w tablicy
	qwest.map('PATCH', url+'/'+tasks[this.id].id, tasks[this.id].body, {cache: true}).then(function(xhr, response) { // szukamy odpowiedniego zasobu na serwerze i modyfikujemy jego ciało
		getTasks(); // pobieramy na nowo listę zadań (ta linijka jest opcjonalna w zależności od implementacji (ja założyłem, że usuwamy wszystkie zadania lokalnie i potem pobieramy je ponownie
		refresh(); // odświeżamy stan strony
	});
}
```

#### Usuwanie zasobu

```js
function deleteTask() { // usuwanie wybranego zadania pod wpływem wystąpienia pewnego zdarzenia
	qwest.delete(url+'/'+tasks[this.id].id, null, {cache: true}).then(function(xhr, response) { // usuwamy zadanie o danym identyfikatorze (tym razem nie musimy przesyłać ciała takiego zadania)
		getTasks(); // pobieramy na nowo listę zadań (ta linijka jest opcjonalna w zależności od implementacji (ja założyłem, że usuwamy wszystkie zadania lokalnie i potem pobieramy je ponownie
		refresh(); // odświeżamy stan strony
	});
}
```

### Zadania domowe

Na kolejne zajęcia musi być wykonana piąta (ostatnia) faza projektu - **łączenie się z API**.

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.
* kobietydokodu.pl
* github.com/pyrsmk/qwest
* mickl.net

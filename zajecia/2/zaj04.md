---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 4</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
  <a href="https://jsfiddle.net/" target="blank" class="button-v button-module">Tu będziemy testować kod&nbsp;źródłowy</a>
	<div style="clear: both;"></div>
</div>

## 4. Technologia AJAX

### 4.1. Podstawowe informacje

**AJAX** to technika wczytywania wczytywania danych we fragmencie strony bez potrzeby odświeżania jej całości.
Dane są najczęściej dostarczane w&nbsp;formacie o&nbsp;nazwie JSON.

AJAX wykorzystuje model przetwarzania asynchronicznego. Oznacza to, że&nbsp;użytkownik może wykonywać inne zadania,
gdy&nbsp;przeglądarka internetowa oczekuje na&nbsp;wczytanie danych.

**Jak to działa?**

- **Żądanie** - przeglądarka wysyła do serwera WWW żądanie pewnych danych.
Żądanie może zawierać informacje wymagane przez&nbsp;serwer; podobnie formularz sieciowy wysyła dane do&nbsp;serwera.
W&nbsp;przeglądarkach implementowany jest obiekt o&nbsp;nazwie **XMLHttpRequest** przeznaczony do&nbsp;obsługi
żądań AJAX. Po&nbsp;wysłaniu żądania przeglądarka nie musi czekać na&nbsp;udzielenie odpowiedzi
przez&nbsp;serwer.

- **Serwer WWW** - udziela odpowiedzi, dostarczając żądane dane (najczęściej w&nbsp;formacie HTML, XML lub&nbsp;JSON).
Operacje przeprowadzane na&nbsp;serwerze **nie** są częścią tego, co&nbsp;określamy mianem AJAX.

- **Odpowiedź** - kiedy serwer zakończy udzielanie odpowiedzi na&nbsp;żądanie, przeglądarka wywołuje zdarzenie.
Zdarzenie to można wykorzystać do&nbsp;uruchomienia funkcji JS przetwarzającej dane i&nbsp;umieszczającej je na&nbsp;stronie.

### Przykład 4.1.1.

```js
/* Żądanie */
let xhr = new XMLHttpRequest(); // utworzenie obiektu XHR
xhr.open('GET', 'data/test.json', true); // przygotowanie żądania
/* W powyższej metodzie pierwszy argument to nazwa metody HTTP, drugi to adres URL strony, która będzie obsługiwać żądanie, trzeci to wartość boolowska, wskazująca, czy żądanie powinno być asynchroniczne*/
xhr.send(null); // wysłanie żądania bez dodatkowych informacji dodatkowych

/* Odpowiedź */
xhr.onload = function() { // wykonanie funkcji anonimowej dla zdarzenia ONLOAD
	if (xhr.status === 200) { // jeśli status wynosi 200 to OK
		// przetworzenie odpowiedzi
	}
}
```

### 4.2. Formaty danych

#### 4.2.1. XML

### Przykład 4.2.1.1.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<events>
  <event>
    <location>San Francisco, CA</location>
    <date>1 maja</date>
    <map>img/map-ca.png</map>
  </event>
  <event>
    <location>Austin, TX</location>
    <date>15 maja</date>
    <map>img/map-tx.png</map>
  </event>
  <event>
    <location>Nowy Jork, NY</location>
    <date>30 maja</date>
    <map>img/map-ny.png</map>
  </event>
</events>
```

#### 4.2.2. JSON

### Przykład 4.2.2.1.

```js
{
  "events": [
    {
      "location": "San Francisco, CA",
      "date": "1 maja",
      "map": "img/map-ca.png"
    },
    {
      "location": "Austin, TX",
      "date": "15 maja",
      "map": "img/map-tx.png"
    },
    {
      "location": "Nowy Jork, NY",
      "date": "30 maja",
      "map": "img/map-ny.png"
    }
  ]
}
```

**Jak przekonwertować obiekt JavaScript na JSON?**

<span class="preformat">JSON.stringify(obiekt);</span>

**Jak przetworzyć JSON na obiekt JavaScript?**

<span class="preformat">JSON.parse(daneJSON);</span>

### Ćwiczenie 4.2.1.

Przygotuj pliki XML oraz JSON, w których będą znajdowały się informacje o Twoich 5 ulubionych piosenkach.
Dla pojedynczej piosenki powinny się tam znaleźć dane takie jak:
tytuł, wykonawca, gatunek, album, rok wydania.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_04. Pliki z&nbsp;rozwiązaniem nazwij **exercise_421.xml** i **exercise_421.json**_.

#### 4.2.3. Wczytywanie HTML

Pobierz archiwum <a href="./assets/archives/AJAX.zip">AJAX</a>.

### Przykład 4.2.3.1.

```js
var xhr = new XMLHttpRequest();                 // Utworzenie obiektu XMLHttpRequest.

xhr.onload = function() {                       // Po wczytaniu odpowiedzi.
  if(xhr.status === 200) {                       // Jeżeli stan serwera wskazuje, że wszystko jest w porządku.
    document.getElementById('content').innerHTML = xhr.responseText; // Uaktualnienie.
  }
};

xhr.open('GET', 'data/data.html', true);        // Przygotowanie żądania.
xhr.send(null);                                 // Wykonanie żądania.
```

#### 4.2.4. Wczytywanie XML

### Przykład 4.2.4.1.

```js
var xhr = new XMLHttpRequest();        // Utworzenie obiektu XMLHttpRequest.

xhr.onload = function() {              // Po wczytaniu odpowiedzi.
 if (xhr.status === 200) {             // Jeżeli stan serwera wskazuje, że wszystko jest w porządku.

// Ten fragment jest inny, ponieważ przetwarzane są dane XML, a nie HTML.
var response = xhr.responseXML;                      // Pobranie danych XML z serwera.
var events = response.getElementsByTagName('event'); // Wyszukanie elementów <event>.

for (var i = 0; i < events.length; i++) {            // Iteracja przez znalezione elementy.
 var container, image, location, city, newline;      // Deklaracja zmiennych.
 container = document.createElement('div');          // Utworzenie pojemnika <div>.
 container.className = 'event';                      // Dodanie atrybutu class.

 image = document.createElement('img');              // Dodanie obrazu mapy.
 image.setAttribute('src', getNodeValue(events[i], 'map'));
 image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
 container.appendChild(image);

 location = document.createElement('p');             // Dodanie danych dotyczących lokalizacji.
 city = document.createElement('b');
 newline = document.createElement('br');
 city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
 location.appendChild(newline);
 location.insertBefore(city, newline);
 location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
 container.appendChild(location);

 document.getElementById('content').appendChild(container);
}
function getNodeValue(obj, tag) {                   // Pobranie zawartości z danych XML.
 return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

 // Ostatni fragment jest taki sam jak w przypadku danych HTML, ale żądanie dotyczy pliku XML.
 }
};

xhr.open('GET', 'data/data.xml', true);             // Przygotowanie żądania.
xhr.send(null);                                     // Wykonanie żądania.
```

#### 4.2.5. Wczytywanie danych JSON

```js
var xhr = new XMLHttpRequest();                 // Utworzenie obiektu XMLHttpRequest.

xhr.onload = function() {                       // Po zmianie stanu.
  if(xhr.status === 200) {                      // Jeżeli stan serwera wskazuje, że wszystko jest w porządku.
    responseObject = JSON.parse(xhr.responseText);

    // Utworzenie ciągu tekstowego wraz z nową zawartością (można użyć także operacji opartych na modelu DOM).
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // Iteracja przez obiekt.
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    // Uaktualnienie strony nową zawartością.
    document.getElementById('content').innerHTML = newContent;

  }
};

xhr.open('GET', 'data/data.json', true);        // Przygotowanie żądania.
xhr.send(null);                                 // Wykonanie żądania.
```

### Ćwiczenie 4.2.2.

Przygotuj stronę, na&nbsp;której zostaną wyświetlone informacje o&nbsp;Twoich 5 ulubionych piosenkach.
Na&nbsp;stronie powinno być 5 przycisków - każdy z&nbsp;tytułem piosenki.
Po&nbsp;kliknięciu na przycisk ten staje się nieaktywny a&nbsp;na&nbsp;stronie pojawiają się szczegóły pobrane z pliku (XML lub&nbsp;JSON).
Po&nbsp;kliknięciu innego przycisku ten stary jest aktywny a&nbsp;obecnie kliknięty nieaktywny.
W&nbsp;tym momencie dane są aktualizowane na&nbsp;stronie bez&nbsp;odświeżania całości.
Napisz dwa skrypty języka JavaScript, które będą wczytywać dane, które przygotowałeś(łaś) w&nbsp;poprzednim zadaniu.
Pierwszy wczytuje dane XML a&nbsp;drugi dane JSON.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_04. Skrypty z&nbsp;rozwiązaniem nazwij **exercise_422XML.js** oraz **exercise_422JSON.js**_.


### 4.3. Praca z danymi pochodzącymi z innych serwerów

AJAX działa doskonale w przypadku danych pochodzących z&nbsp;Twojego serwera, ale&nbsp;ze&nbsp;względów bezpieczeństwa przeglądarki
internetowe nie&nbsp;wczytują odpowiedzi AJAX z&nbsp;innych domen (odpowiedzi będących wynikiem tzw. **żądań typu cross-domain**).
Dostępne są trzy najczęściej stosowane rozwiązania tego problemu:

- plik proxy w serwerze WWW - utworzenie we&nbsp;własnym serwerze pliku przeznaczonego na&nbsp;dane pochodzące
ze&nbsp;zdalnego serwera. Strony w Twojej witrynie będą żądały danych ze&nbsp;wspomnianego pliku w&nbsp;serwerze, który
z&nbsp;kolei pobierze odpowiednie dane z&nbsp;serwera zdalnego. Takie rozwiązanie nosi nazwę **proxy**, ponieważ
działa w&nbsp;imieniu innej strony;
- Cross-Origin-Resource-Sharing - w trakcie komunikacji przeglądarki internetowej i&nbsp;serwera WWW informacje między
nimi są przekazywane za&nbsp;pomocą nagłówków HTTP. **CORS** (ang. _Cross-Origin Resource Sharing_) oznacza umieszczanie
w&nbsp;nagłówkach HTTP dodatkowych informacji, które wskazują przeglądarce i&nbsp;serwerowi WWW sposób prowadzenia komunikacji;
- JSONP - obejmuje dodanie na stronie elementu <span class="preformat">&lt;script&gt;</span> odpowiedzialnego za&nbsp;wczytanie danych JSON
z&nbsp;innego serwera. Takie rozwiązanie działa, ponieważ nie istnieją ograniczenia dotyczące źródła pochodzenia skryptu
w&nbsp;elemencie <span class="preformat">&lt;script&gt;</span>.
Skrypt zawiera wywołanie funkcji, a&nbsp;dane w&nbsp;formacie JSON dostarczane są jako argument funkcji.
Wywołana funkcja jest zdefiniowana na&nbsp;stronie żądającej danych i&nbsp;używana jest do ich przetworzenia oraz&nbsp;wyświetlenia.


### Zadania domowe

### Zadanie 1.

Przygotuj plik o&nbsp;nazwie **data.json** i&nbsp;wypełnij go danymi na temat swoich ulubionych filmów.
W&nbsp;pliku powinno być 5 obiektów, każdy powinien zawierać informacje takie jak: tytuł filmu, gatunek, reżyser, rok nakręcenia, krótki opis fabuły.

Przygotuj kod HTML oraz JavaScript, który wyświetli te dane na stronie w&nbsp;następujący sposób:

- jest 5 przycisków, każdy ma jako treść tytuł filmu (pobrany z&nbsp;pliku JSON);
- po kliknięciu danego przycisku pojawiają się wszystkie szczegóły wybranego pliku (te, które są w&nbsp;data.json) - kliknięty przycisk powinien stać się nieaktywny;
- po kliknięciu innego przycisku dane na temat filmu są aktualizowane bez odświeżania całej strony a&nbsp;poprzedni przycisk staje się znów aktywny - nieaktywny za&nbsp;to staje się aktualnie kliknięty.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_04. Skrypt z&nbsp;rozwiązaniem nazwij **homework_task_01.js**, kod strony **homework_task_01.html** oraz&nbsp;dane - **data.json**_.

### Zadanie 2.

Wymień w&nbsp;punktach (jako stronę HTML), jakie Twoim zdaniem są wady i&nbsp;zalety korzystania z&nbsp;formatów danych (HTML, XML, JSON), w&nbsp;których otrzymujemy odpowiedź na&nbsp;żądanie przeglądarki.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_04. Plik z&nbsp;rozwiązaniem nazwij **homework_task_02.html**_.

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.


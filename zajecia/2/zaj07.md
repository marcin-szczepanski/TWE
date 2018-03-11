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

## 6. API HTML5

Interfejs użytkownika pozwala na&nbsp;interakcję człowieka z&nbsp;programem.
Natomiast **interfejs programowania aplikacji** (ang. _Application Programming Interface_ - **API**)
umożliwia wzajemną komunikację programom, na&nbsp;przykład skryptom.

W tej lekcji poznamy pewne API JavaScript w&nbsp;HTML5 zapewniające dostęp do&nbsp;innych
funkcji przeglądarki.

### 6.1. Wykrywanie funkcji

Kiedy tworzymy kod wykorzystujący API HTML5, może wystąpić konieczność sprawdzenia,
czy&nbsp;przeglądarka użytkownika obsługuje daną funkcję, zanim kod będzie próbował jej użyć.

Istnieje biblioteka o nazwie **Modernizr**, która zajmuje się niwelowaniem różnic
między przeglądarkami i&nbsp;pozwala na&nbsp; sprawdzenie, czy przeglądarka obsługuje daną funkcję.

Do pobrania na stronie <a href="http://modernizr.com/" target="blank">modernizr.com</a>.

Pobierz archiwum <a href="./assets/archives/API.zip">API</a>.

### Przykład 6.1.1.

```js
if (Modernizr.geolocation) {
	// geolokalizacja jest obsługiwana
} else {
	// geolokalizacja nie jest obsługiwana
}
```

### 6.2. Geolokalizacja

Obsługa geolokalizacji na stronie internetowej wymaga użycia trzech obiektów.
W&nbsp;poniższych tabelach widzimy, jak dokumentacja API zwykle opisuje
dostępne obiekty, metody i&nbsp;właściwości.

**Obiekt geolocation:**

Obiekt ten jest wykorzystywany w&nbsp;celu żądania danych dotyczących położenia użytkownika.
Jest to&nbsp;obiekt potomny obiektu <span class="preformat">navigator</span>.

Metoda <span class="preformat">getCurrentPosition(success, fail)</span> żąda informacji
o&nbsp;położeniu geograficznym użytkownika. Jeżeli użytkownik zgodzi się na&nbsp;ich
udostępnienie, to wartością zwrotną będą współrzędne geograficzne oraz&nbsp;inne informacje.
Parametr <span class="preformat">success</span> to nazwa funkcji wywoływanej po&nbsp;otrzymaniu
współrzędnych geograficznych, natomiast <span class="preformat">fail</span> to nazwa
funkcji wywoływanej, jeśli współrzędne geograficzne nie zostaną otrzymane.

**Obiekt Position:**

Jeżeli użytkownik zgodzi się na&nbsp;udostępnienie informacji o&nbsp;swoim położeniu geograficznym,
obiekt ten będzie przekazany funkcji wywołania zwrotnego. Zawiera on też obiekt potomny
<span class="preformat">coords</span>, którego właściwości przechowują o&nbsp;położeniu użytkownika:

- <span class="preformat">Position.coords.latitude</span> - szerokość geograficzna wyrażona w&nbsp;stopniach;
- <span class="preformat">Position.coords.longitude</span> - długość geograficzna wyrażona w&nbsp;stopniach;
- <span class="preformat">Position.coords.accuracy</span> - wyrażona w&nbsp;metrach dokładność współrzędnych geograficznych;
- <span class="preformat">Position.coords.altitude</span> - metry nad&nbsp;poziomem morza;
- <span class="preformat">Position.coords.altitudeAccuracy</span> - wyrażona w&nbsp;metrach dokładność podczas podawania wysokości;
- <span class="preformat">Position.coords.heading</span> - liczba stopni odchylenia od&nbsp;kierunku północnego;
- <span class="preformat">Position.coords.speed</span> - wyrażona w&nbsp;metrach na&nbsp;sekundę szybkość poruszania się;
- <span class="preformat">Position.coords.timestamp</span> - czas, który upłynął od&nbsp;chwili utworzenia obiektu
(sformatowany jako obiekt <span class="preformat">Date</span>).

**Obiekt PositionError:**

Jeżeli nie uda się uzyskać informacji o położeniu geograficznym użytkownika, funkcja
wywołania zwrotnego otrzyma ten obiekt. Przyjmuje on właściwości:

- <span class="preformat">PositionError.code</span> - numer błędu (1 - brak uprawnień;
 2 - dane niedostępne; 3 - przekroczenie czasu oczekiwania);
- <span class="preformat">PositionError.message</span> - komunikat (nieprzeznaczony dla&nbsp;użytkownika końcowego).

### Przykład 6.2.1.

```js
var elMap = document.getElementById('loc');                 // Element HTML.
var msg = 'Przepraszamy, nie udało się ustalić Twojego położenia.';    // Komunikat o braku danych dotyczących położenia.

if (Modernizr.geolocation) {                                // Czy geolokalizacja jest obsługiwana?
  navigator.geolocation.getCurrentPosition(success, fail);  // Pytanie o zgodę na użycie informacji.
  elMap.textContent = 'Sprawdzanie położenia...';           // Komunikat informujący o sprawdzeniu położenia....
} else {                                                    // Brak obsługi geolokalizacji.
  elMap.textContent = msg;                                  // Wyświetlenie komunikatu.
}

function success(location) {                                // Otrzymano dane o położeniu użytkownika.
  msg = '<h3>Długość geograficzna:<br>';                    // Utworzenie komunikatu.
  msg += location.coords.longitude + '</h3>';               // Dodanie długości geograficznej.
  msg += '<h3>Szerokość geograficzna:<br>';                 // Utworzenie komunikatu.
  msg += location.coords.latitude + '</h3>';                // Dodanie szerokości geograficznej.
  elMap.innerHTML = msg;                                    // Wyświetlenie współrzędnych geograficznych.
}

function fail(msg) {                                        // Nie otrzymano danych o położeniu.
  elMap.textContent = msg;                                  // Wyświetlenie komunikatu.
  console.log(msg.code);                                    // Wyświetlenie kodu komunikatu.
}
```

### 6.3. Magazyn lokalny przeglądarki

Mechanizm **Web Storage** pozwala na&nbsp;przechowywanie danych w&nbsp;przeglądarce internetowej.
Istnieją dwa rodzaje tego mechanizmu: **lokalny** i&nbsp;**sesji**.

Dane są przechowywane w postaci właściwości obiektów pamięci masowej (par klucz-wartość).
Wartość w&nbsp;parze jest zawsze ciągiem tekstowym.
Aby&nbsp;chronić informacje przechowywane przez&nbsp;witryny we&nbsp;wspomnianych obiektach
przeglądarki stosują **politykę tego samego źródła**. Oznacza to, że&nbsp;dostęp do&nbsp;danych mają
jedynie strony znajdujące się w&nbsp;tej samej domenie.

Weźmy następującą stronę: **http://www.google.pl:80**:

- **http://** - protokół - WebStorage dostępne tylko w&nbsp;obrębie danego protokołu;
- **www** - subdomena - też musi być dopasowana;
- **google.pl** - domena;
- **:80** - port - jego numer najczęściej nie jest podawany w&nbsp;adresie URL,
a&nbsp;witryna internetowa używa portu 80 dla&nbsp;stron (numer portu może się zmieniać).

Magazyn lokalny pozwala na przechowywanie informacji nawet po&nbsp;zamknięciu karty czy&nbsp;okna.

Dla obu rodzajów magazynów mamy te same metody i&nbsp;właściwości:

- <span class="preformat">setItem(klucz, wartość)</span> - utworzenie nowej pary klucz-wartość;
- <span class="preformat">getItem(klucz)</span> - pobranie wartości wskazanego klucza;
- <span class="preformat">removeItem(klucz)</span> - usunięcie pary klucz-wartość dla&nbsp;wskazanego klucza;
- <span class="preformat">clear()</span> - usunięcie wszystkich informacji z&nbsp;magazynu;
- <span class="preformat">length</span> - liczba kluczy.

### Przykład 6.3.1.

```js
if (Modernizr.localstorage) {

  var txtUsername = document.getElementById('username'); // Pobranie elementów formularza.
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');  // Wartości elementów są
  txtAnswer.value = localStorage.getItem('answer');      // pobrane z obiektu localStorage.

  txtUsername.addEventListener('input', function () {    // Dane zostały zapisane.
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {      // Dane zostały zapisane.
    localStorage.setItem('answer', txtAnswer.value);
  }, false);
}
```

### 6.4. Magazyn sesji przeglądarki

Dane przechowywane w tym magazynie są dostępne w&nbsp;danej sesji strony.

### Przykład 6.3.2.

```js
if (Modernizr.sessionstorage) {

  var txtUsername = document.getElementById('username'),  // Pobranie elementów formularza.
      txtAnswer = document.getElementById('answer');

  txtUsername.value = sessionStorage.getItem('username'); // Wartości elementów są
  txtAnswer.value = sessionStorage.getItem('answer');     // pobrane z obiektu sessionStorage.

  txtUsername.addEventListener('input', function () {     // Dane zostały zapisane.
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {       // Dane zostały zapisane.
    sessionStorage.setItem('answer', txtAnswer.value);
  }, false);
}
```

### Ćwiczenie 6.

Przygotuj stronę internetową, która będzie:

- pobierać informację o położeniu geograficznym użytkownika;
- wyświetlać informację o współrzędnych geograficznych położenia użytkownika oraz&nbsp;dokładność tych pomiarów;
- pobraną informację o&nbsp;długości geograficznej zapisywać w&nbsp; localStorage;
- pobraną informację o&nbsp;szerokości geograficznej zapisywać w&nbsp;sessionStorage;
- miała przycisk "Usuń dane z&nbsp;WebStorage";
- na kliknięcie powyżej wspomnianego przycisku usunie dane z&nbsp;localStorage i&nbsp;sessionStorage;
- odporna na sytuację, kiedy użytkownik nie wyrazi zgody na&nbsp;pobranie informacji o położeniu geograficznym.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_06. Skrypt z&nbsp;rozwiązaniem nazwij **exercise_6.js**, kod strony **exercise_6.html**._

### Zadania domowe

### Zadanie 1.

Przygotuj stronę, która pobierze od użytkownika jego położenie geograficzne.
Na&nbsp;stronie powinna zostać wyświetlona informacja o&nbsp;strefie czasowej
(dla&nbsp;Poznania powinniśmy mieć - UTC +01:00 - nie rozróżniamy czasu letniego i&nbsp;zimowego - pomocna może się okazać <a target="blank" href="./assets/images/strefy.jpg">mapa</a>).

Następnie informacja o&nbsp;strefie czasowej powinna być zapisana w&nbsp;localStorage.

Na podstawie wyznaczonej strefy czasowej należy też podać godzinę, która jest
w&nbsp;strefie czasowej UTC 00:00 w&nbsp;momencie wyznaczenia strefy.

Na&nbsp;stronie powinien znaleźć się też formularz pobierający informacje
o&nbsp;użytkowniku takie jak: imię, nazwisko, płeć, rok urodzenia, miasto zamieszkania
i&nbsp;na&nbsp;wciśnięciu przycisku do&nbsp;zapisania informacji, informacje te&nbsp;powinny być zapisane w&nbsp;sessionStorage.

Użytkownik może zmodyfikować dane w&nbsp;formularzu,
więc dane te powinny być też uaktualniane w&nbsp;sessionStorage.

Strona powinna być odporna na sytuację, kiedy użytkownik nie wyrazi zgody na&nbsp;pobranie informacji o&nbsp;położeniu geograficznym.

_Rozwiązanie wyślij na repozytorium Githuba do katalogu Lesson_06. Skrypt z&nbsp;rozwiązaniem nazwij **homework_task_01.js**, kod strony **homework_task_01.html**._

### Zadanie 2.

Rozwiąż quiz dostepny na&nbsp;<a href="https://www.classmarker.com/" target="blank">classmarker.com</a> o&nbsp;nazwie **Zajęcia 6 - API HTML5**.

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.

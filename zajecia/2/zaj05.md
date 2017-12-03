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

## 5. jQuery i AJAX

### 5.1. Żądania

jQuery oferuje kilka metod przeznaczonych do&nbsp;obsługi żądań AJAX.
W&nbsp;tabeli poniżej wymieniono sześć metod jQuery pozwalających
na&nbsp;wykonywanie żądań AJAX. Pierwsze pięć to skróty metody
<span class="preformat">$.ajax()</span>, która została wymieniona jako ostatnia.

- <span class="preformat">.load()</span> - wczytuje fragmenty HTML w&nbsp;elemencie - jest to
najprostsza metoda przeznaczona do&nbsp;pobierania danych;
- <span class="preformat">$.get()</span> - wczytuje dane za&nbsp;pomocą metody HTTP GET - jest używana
do&nbsp;żądania danych z&nbsp;serwera;
- <span class="preformat">$.post()</span> - wczytuje dane za&nbsp;pomocą metody HTTP POST - jest używana
w&nbsp;celu wysyłania danych, które uaktualniają dane w&nbsp;serwerze;
- <span class="preformat">$.getJSON()</span> - wczytuje dane JSON za&nbsp;pomocą żądania GET;
- <span class="preformat">$.getScript()</span> - wczytuje i&nbsp;wykonuje dane JavaScript
za&nbsp;pomocą żądania GET - metoda ta jest używana dla&nbsp;danych JavaScript (na&nbsp;przykład JSONP);
- <span class="preformat">$.ajax()</span> - metoda wykorzystywana do&nbsp;wykonywania wszystkich żądań - wymienione
wcześniej metody w&nbsp;tle używają <span class="preformat">$.ajax()</span>.

Metoda <span class="preformat">.load()</span> operuje na&nbsp;dopasowanym zbiorze.
Nową zawartość HTML umieszcza we&nbsp;wskazanych elementach.

Pozostałe metody są metodami obiektu globalnego <span class="preformat">jQuery</span>,
stąd ich nazwy zaczynają się od&nbsp;znaku <span class="preformat">$</span>.
Metody te jedynie żądają danych z&nbsp;serwera; nie używają automatycznie tych danych w&nbsp;celu
uaktualnienia elementów znajdujących się w&nbsp;dopasowanym zbiorze.
Dlatego też po&nbsp;znaku <span class="preformat">$</span> nie&nbsp;znajduje się selektor.

### 5.2. Wczytywanie zawartości

### Przykład 5.2.1.

```js
$('nav a').on('click', function(e) {                 // Użytkownik kliknął łącze.
  e.preventDefault();                                // Zatrzymanie wczytywania nowego łącza.
  var url = this.href;                               // Pobranie wartości atrybutu href.

  $('nav a.current').removeClass('current');         // Usunięcie klasy current.
  $(this).addClass('current');                       // Określenie nowego elementu jako bieżącego.

  $('#container').remove();                          // Usunięcie starej zawartości.
  $('#content').load(url + ' #content').hide().fadeIn('slow'); // Nowa zawartość.
});
```

### 5.3. Skróty metod

Wymienione poniżej metody są metodami skrótów. Wszystkie w&nbsp;tle używają
metody <span class="preformat">$.ajax()</span>:

- <span class="preformat">$.get(url[, dane][, wywołanie zwrotne][, typ])</span> - żądanie HTTP GET mające
na&nbsp;celu pobranie danych;
- <span class="preformat">$.post(url[, dane][, wywołanie zwrotne][, typ])</span> - żądanie HTTP POST uaktualniające
dane w&nbsp;serwerze;
- <span class="preformat">$.getJSON(url[, dane][, wywołanie zwrotne][, typ])</span> - wczytuje dane JSON za&nbsp;pomocą żądania GET;
- <span class="preformat">$.getScript(url[, dane][, wywołanie zwrotne])</span> - wczytuje i&nbsp;wykonuje kod JavaScript
za&nbsp;pomocą żądania GET.

Parametry wymienione w&nbsp;nawiasach kwadratowych są opcjonalne.

Kilka informacji:

- <span class="preformat">$</span> - wskazuje, że jest to metoda obiektu jQuery;
- <span class="preformat">url</span> - określa miejsce, skąd mają być pobrane dane;
- <span class="preformat">dane</span> - dostarcza wszelkie informacje dodatkowe przekazywane serwerowi;
- <span class="preformat">wywołanie zwrotne</span> - wskazuje, że&nbsp;funkcja powinna być
wywołana, gdy&nbsp;zostaną zwrócone dane (może to być funkcja anonimowa lub&nbsp;nazwana);
- <span class="preformat">typ</span> - wskazuje typ danych oczekiwanych z&nbsp;serwera.

### Przykład 5.3.1.

Jako przykład proszę uruchomić z&nbsp;archiwum pobranego na&nbsp;poprzednich zajęciach plik
o&nbsp;nazwie **jq-get.html**.
Uwaga! Aby kod mógł działać poprawnie potrzebny jest serwer WWW, na&nbsp;przykład XAMPP.

```js
$('#selector a').on('click', function(e) {
  e.preventDefault();
  var queryString = 'vote=' + $(e.target).attr('id');
  $.get('votes.php', queryString, function(data) {
    $('#selector').html(data);
  });
});
```

### 5.4. Wysyłanie formularzy sieciowych

W celu wysłania danych do&nbsp;serwera prawdopodobnie użyjesz metody <span class="preformat">$.post()</span>.
Biblioteka jQuery oferuje także metodę <span class="preformat">.serialize()</span> przeznaczoną
do&nbsp;zbierania danych z&nbsp;formularza sieciowego.

**Pobieranie danych formularza sieciowego**

Działanie metody jQuery <span class="preformat">.serialize()</span> przedstawia się następująco:

- pobranie wszystkich informacji z&nbsp;formularza sieciowego;
- umieszczenie tych informacji w&nbsp;ciągu tekstowym, który jest gotowy do&nbsp;wysłania do&nbsp;serwera;
- zakodowanie znaków, które nie mogą być używane w&nbsp;ciągu tekstowym zapytania.

Metoda ta wysyła jedynie dane z&nbsp;kontrolek formularza sieciowego oznaczonych
jako&nbsp;prawidłowo wypełnione, co&nbsp;oznacza, że&nbsp;nie zostaną wysłane informacje:

- z kontrolek wyłączonych;
- z kontrolek, w których nie wybrano żadnej opcji;
- z przycisku wysyłającego formularz.

### Przykład 5.4.1.

Jako przykład proszę uruchomić z&nbsp;archiwum pobranego na&nbsp;poprzednich zajęciach plik
o&nbsp;nazwie **jq-post.html**.
Uwaga! Aby kod mógł działać poprawnie potrzebny jest serwer WWW, na&nbsp;przykład XAMPP.

```js
$('#register').on('submit', function(e) {           // Po wysłaniu formularza sieciowego.
  e.preventDefault();                               // Uniemożliwienie wysłania formularza.
  var details = $('#register').serialize();         // Serializacja danych formularza.
  $.post('register.php', details, function(data) {  // Użycie metody $.post() do wysłania danych.
    $('#register').html(data);                      // Miejsce wyświetlenia wyniku.
  });
});
```

### 5.5. Obsługa błędów

Dane JSON można wczytać za pomocą metody <span class="preformat">$.getJSON()</span>.
Istnieją także metody pomagające w&nbsp;przetworzeniu odpowiedzi,
gdy&nbsp;wykonanie metody zakończy się niepowodzeniem.

**Sukces i niepowodzenie**

Są trzy metody, które można łączyć po <span class="preformat">$.get()</span>, <span class="preformat">$.post()</span>,
<span class="preformat">$.getJSON()</span> oraz <span class="preformat">$.ajax()</span> w&nbsp;celu
obsłużenia sukcesu lub&nbsp;niepowodzenia żądania:

- <span class="preformat">.done</span> - metoda zdarzenia, która jest wywoływana,
gdy&nbsp;wykonanie żądania zakończy się powodzeniem;
- <span class="preformat">.fail</span> - metoda zdarzenia, która jest wywoływana,
gdy&nbsp;wykonanie żądania zakończy się niepowodzeniem;
- <span class="preformat">.always</span> - metoda zdarzenia, która jest wywoływana
po&nbsp;wykonaniu żądania niezależnie od&nbsp;jego wyniku.

### Przykład 5.5.1.

Jako przykład proszę uruchomić z&nbsp;archiwum pobranego na&nbsp;poprzednich zajęciach plik
o&nbsp;nazwie **jq-getJSON.html**.

```js
$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
  $.getJSON('data/rates.json')
  .done( function(data){                                 // Serwer zwraca dane.
    var d = new Date();                                  // Utworzenie obiektu daty.
    var hrs = d.getHours();                              // Określenie godziny.
    var mins = d.getMinutes();                           // Określenie minuty.
    var msg = '<h2>Kursy wymiany walut</h2>';            // Początek komunikatu.
    $.each(data, function(key, val) {                    // Dodanie poszczególnych kursów wymiany.
      msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
    });
    msg += '<br>Ostatnia aktualizacja: ' + hrs + ':' + mins + '<br>'; // Wyświetlenie uaktualnionej godziny.
    $('#rates').html(msg);                               // Umieszczenie na stronie kursów wymiany.
  }).fail( function() {                                  // Wystąpił błąd.
    $('aside').append('Przepraszamy, nie można pobrać danych.');   // Wyświetlenie komunikatu o błędzie.  
  }).always( function() {                                // Ta metoda zawsze jest wywoływana.
     var reload = '<a id="refresh" href="#">';           // Dodanie łącza odświeżającego zawartość.
     reload += '<img src="img/refresh.png" alt="odśwież" /></a>';
     $('#reload').html(reload);                          // Dodanie łącza odświeżającego zawartość.
     $('#refresh').on('click', function(e) {             // Dodanie procedury obsługi zdarzeń click.
       e.preventDefault();                               // Uniemożliwienie przejścia na nową stronę.
       loadRates();                                      // Wywołanie funkcji loadRates().
     });
  }); 
}

loadRates();                                             // Wywołanie funkcji loadRates().
```

### 5.6. Kontrola technologii AJAX

Metoda <span class="preformat">$.ajax()</span> daje większą kontrolę na&nbsp;żądaniami AJAX.
W&nbsp;tle jest ona wykorzystywana w&nbsp;jQuery przez&nbsp;wszystkie
metody skrótu dotyczące żądań AJAX.

### Przykład 5.6.1.

Jako przykład proszę uruchomić z&nbsp;archiwum pobranego na&nbsp;poprzednich zajęciach plik
o&nbsp;nazwie **jq-ajax.html**.
Uwaga! Aby kod mógł działać poprawnie potrzebny jest serwer WWW, na&nbsp;przykład XAMPP.

```js
$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                                      // Adres URL strony do wczytania.
  var $content = $('#content');                             // Buforowanie wyboru.

  $('nav a.current').removeClass('current');                // Uaktualnienie łączy.
  $(this).addClass('current');
  $('#container').remove();                                 // Usunięcie zawartości.

  $.ajax({
    type: "POST",                                           // Wybór metody: GET lub POST.
    url: url,                                               // Ścieżka dostępu do pliku.
    timeout: 2000,                                          // Czas oczekiwania.
    beforeSend: function() {                                // Przed wykonaniem żądania Ajax.
      $content.append('<div id="load">Wczytywanie</div>');  // Wczytanie komunikatu.
    },
    complete: function() {                                  // Po wykonaniu żądania Ajax.
      $('#loading').remove();                               // Usunięcie komunikatu.
    },
    success: function(data) {                               // Wyświetlenie zawartości.
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    fail: function() {                                      // Wyświetlenie komunikatu o błędzie. 
      $('#panel').html('<div class="loading">Proszę spróbować wkrótce.</div>');
    }
  });

});
```

### Zadania domowe

### Zadanie 1.

Aplikację ToDo przygotowaną po&nbsp;zajęciach z&nbsp;jQuery zmodyfikuj tak,
aby wczytywała dane z&nbsp;serwera: <span class="preformat">http://sealcode.org:8082/api/v1/resources/task</span>
oraz zapisywała do&nbsp;niego nowe zadania. Wykorzystaj metody AJAX dostępne w&nbsp;jQuery.
Budowa obiektu "wysyłanego" powinna być następująca:

```js
{
	title: "some title",
	is_done: true // or false ofc.
}
```

Przykładowy obiekt z&nbsp;pobranym zadaniem wygląda następująco:

```js
{
	created_context: {
		timestamp: 1497265930338,
		ip: "150.254.76.84",
		user_id: null
	}

	last_modified_context: {
		id: "m5qpwxuxq5",
		type_name: "task"
	}	

	body: {
		title: "Some task",
		is_done: false
	}
}
```

Dla chętnych (na&nbsp;wynik ponad 100%) - proszę usprawnić aplikację tak, by była możliwa edycja stanu wykonania danego zadania na&nbsp;serwerze oraz&nbsp;aby można było usuwać zadania.

### Zadanie 2.

Rozwiąż quiz dostepny na&nbsp;<a href="https://www.classmarker.com/" target="blank">classmarker.com</a> o&nbsp;nazwie **Zajęcia 4,5 - AJAX**.

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.


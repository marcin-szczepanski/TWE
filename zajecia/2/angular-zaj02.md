---
layout: default
---
<div class="inner">
	<h1 id="main1">Angular - zajęcia 2</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
	<div style="clear: both;"></div>
</div>

<object data="./assets/archives/Angular-zaj02.pdf" type="application/pdf" width="750px" height="750px">
    <embed src="./assets/archives/Angular-zaj02.pdf" type="application/pdf">
        <p>Ta przeglądarka nie obsługuje wyświetlania plików PDF. <a href="./assets/archives/Angular-zaj02.pdf">Pobierz PDF na dysk</a>.</p>
    </embed>
</object>

<br />

## 1. WebStorage API HTML5

### 1.1. Magazyn lokalny przeglądarki

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

### Przykład 1.1.1.

<script async src="//jsfiddle.net/marcin00412/e56b05gk/embed/js,html,result/dark/"></script>

### 1.2. Magazyn sesji przeglądarki

Dane przechowywane w tym magazynie są dostępne w&nbsp;danej sesji strony.

### Przykład 1.2.1.

<script async src="//jsfiddle.net/marcin00412/zuy19t2c/embed/js,html,result/dark/"></script>

### Źródła

* Duckett Jon, _JavaScript and JQuery: Interactive Front-End Web Development_, przeł. Robert Górczyński, Helion, 2015, ISBN 978-83-283-0126-9.

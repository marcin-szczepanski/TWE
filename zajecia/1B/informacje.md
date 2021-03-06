---
layout: default
---
<div class="inner">
	<h1 id="main1">Informacje wstępne dla poziomu Intermediate</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
	<div style="clear: both;"></div>
</div>

## Zadanie wstępne

Załóż konto na <a href="https://hub.sealcode.org/" target="blank">Sealhub</a>. Nazwę użytkownika stwórz wg wzoru:
imie-nazwisko (lub imie.nazwisko lub imie_nazwisko lub ImieNazwisko). Np. dla Jana Kowalskiego - jan-kowalski (lub jan.kowalski lub jan_kowalski lub JanKowalski).

Następnie na swoim koncie w wyszukiwarce wpisz **Grupa średniozaawansowana**, wybierz ją, potem w&nbsp;panelu bocznym kliknij **Members**,
a&nbsp;na&nbsp;kolejnej stronie w&nbsp;panelu po&nbsp;drugiej stronie kliknij **Join project**.

## Sprawy organizacyjne

### Terminy zajęć:
Zajęcia dla grupy średniozaawansowanej w semestrze zimowym 2017/2018 odbywają się w&nbsp;każdy **poniedziałek o&nbsp;15:30** w&nbsp;sali **D2**. 

### Prowadzący:
Zajęcia prowadzi **Marcin Szczepański**.

Kontakt: <a href="maito:marcin.szczepanski@sealcode.org">marcin.szczepanski@sealcode.org</a>

Dyżur: **wtorek o 10:00** (w laboratoriach komputerowych WMI, prawdopodobnie **A1-16,17**)

### Zagadnienia poruszane w trakcie warsztatów:

*   podstawy Git-a;
*	znaczniki charakterystyczne dla języka HTML5;
*	formularze;
*   animacje w CSS3;
*   pozycjonowanie elementów na stronie;
*   rytm pionowy;
*	wprowadzenie do Flexboxa;
*	podstawy programowania w języku JavaScript;
*	obiektowy model dokumentu;
*	zdarzenia w JS;
*	REST API.

### Projekt:

W tym semestrze będziemy tworzyć aplikację **"to-do"**, czyli aplikację do zarządzania zadaniami.
Projekt ten będziemy wykonywać w **pięciu** etapach:

- **stworzenie repozytorium, w którym będą się znajdować pliki projektu**;
- **zbudowanie szkieletu aplikacji w HTML5** - dokument powinien zawierać:
	- tytuł aplikacji;
	- aktualną datę (na razie wpisujemy na sztywno - np. "6. lutego 2017r.");
	- pole do wpisania treści nowego zadania;
	- przycisk do dodawania nowego zadania;
	- miejsce na listę zadań (na początku na sztywno wpisujemy kilka zadań);
	- pole typu checkbox do zaznaczenia czy dane zadanie zostało wykonane (domyślnie zadanie jest niewykonane);
	- przycisk do usuwania zadania przy każdym z nich;
	- stopkę;
- **ostylowanie szkieletu aplikacji w CSS3**;
- **"ożywienie" aplikacji przy pomocy języka JavaScript**:
	- po wpisaniu zadania i wciśnięciu klawisza ENTER lub kliknięciu przycisku do dodawania zadanie powinno zostać dodane do listy zadań;
	- pilnujemy aby nie było możliwości dodania pustego zadania;
	- możemy zmieniać status zadania z niewykonanego na wykonane i odwrotnie;
	- po kliknięciu przycisku do usuwania, dane zadanie powinno zniknąć z listy zadań;
	- data powinna być aktualizowana;
- **łączenie się z API**:
	- aplikacja powinna łączyć się z API sealcode-owym;
	- dodanie, usunięcie i modyfikacja stanu wykonania zadań powinny być wykonywane poprzez API sealcode-owe;
	- przy odświeżaniu strony oraz dokonaniu zmian(y), lista zadań widoczna na stronie powinna zostać zaktualizowana.

Terminy wykonania poszczególnych części projektu będą podawane na bieżąco w czasie trwania zajęć.

Każdy uczestnik, który będzie **aktywnie uczestniczyć** w warsztatach otrzyma na końcu imienny **certyfikat** :)

### Co to znaczy "aktywnie uczestniczyć" w warsztatach?

Aktywnie uczestniczyć w warsztatach oznacza, że uczestnik:

*	był na co najmniej połowie warsztatów;
*	wykonał większość zadań domowych;
*	przystąpił do wykonania projektu i pomyślnie przeszedł przez co najmniej 4 z 5 etapów tego projektu.

### Przykładowy wygląd aplikacji:
![](assets/images/przykladowa-aplikacja.png)

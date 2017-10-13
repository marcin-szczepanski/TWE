---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 0</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
	<div style="clear: both;"></div>
</div>

## 0. Git i Github

### 0.1. Github

GitHub to serwis internetowy, przeznaczony dla&nbsp;projektów programistycznych
wykorzystujących system kontroli wersji Git.
Stworzony został przy wykorzystaniu frameworka Ruby on&nbsp;Rails i&nbsp;języka Erlang. Serwis działa od&nbsp;kwietnia 2008 roku. 

### Ćwiczenie 0.1.

Załóż konto na <a href="https://github.com" target="blank">github.com</a>.

### 0.2. Git

### Ćwiczenie 0.2.

Przeczytaj materiały dotyczące Git-a na stronie <a href="http://antyweb.pl/git-dla-poczatkujacych/" target="blank">Git dla początkujących</a>.
Następnie wyjaśnij pojęcia: **Git**, **repozytorium**, **commit**.

### Ćwiczenie 0.3.

Wejdź na stronę <a href="http://rogerdudler.github.io/git-guide/index.pl.html" target="blank">Git - prosty przewodnik</a>.
To, co należy zapamiętać z&nbsp;tej strony to:

* jak tworzyć repozytorium;
* jak klonować repozytorium;
* jak robić commita i jak wysłać go na serwer;
* jak aktualizować lokalne repozytorium.

Po przeczytaniu materiałów zainstaluj (jeśli nie masz na komputerze) Git-a.

#### Przydatne polecenia powłoki bash:

```
cd directory - przejście do katalogu directory;
mkdir name-of-new-directory - utworzenie katalogu;
touch name-of-new-file - utworzenie pliku;
ls -l - wylistowanie zawartości bieżącego katalogu;
man name-of-command - instrukcja do różnych poleceń;
git clone repository.address.github.com - sklonowanie repozytorium;
git status - stan lokalnego repozytorium;
git add . - dodanie wszystkich zmian do commita;
git commit -m "title" - przygotowanie commita z tytułem;
git push - wysłanie commita na serwer;
git pull - aktualizacja lokalnego repozytorium;
git config --global user.name "your-username" - konfiguracja nazwy użytkownika;
git config --global user.email your@mail.com - konfiguracja adresu mailowego.
```

### Ćwiczenie 0.4.

Na stronie Github-a utwórz repozytorium o nazwie **Test**.
Następnie kolejno wykonaj polecenia:

* sklonuj repozytorium na dysk twardy Twojego komputera;
* wejdź do katalogu z Twoim repozytorium;
* dodaj swoją nazwę użytkownika na Githubie do ustawień Git-a;
* analogicznie do powyższego dodaj swój adres mailowy;
* utwórz plik o nazwie **plik**;
* stwórz commita, nazywając go **Add plik**;
* wyślij commita na serwer;
* sprawdź na Github-ie czy commit jest na serwerze;
* zedytuj na Github-ie plik o nazwie **plik**;
* zaktualizuj swoje lokalne repozytorium;
* usuń repozytorium na Github-ie.

### Zadanie domowe

Wykonaj pierwszą fazę tworzenia projektu - **stworzenie repozytorium, w którym będą się znajdować pliki projektu**.

Stwórz na Githubie nowe repozytorium o&nbsp;nazwie **Sealcode_workshops**,
a&nbsp;następnie utwórz w&nbsp;nim katalog **Prace_domowe** i&nbsp;katalog **Zadania_na_zajeciach**. W&nbsp;katalogu **Zadania_na_zajeciach**
utwórz również katalogi z&nbsp;pustymi plikami. Katalogi te nazwij odpowiednio **Zajecia_1**, **Zajecia_2**, ..., **Zajecia_8**.
Na&nbsp;początku katalogi wypełnij pustymi plikami o&nbsp;nazwie **initial_file**, ponieważ&nbsp;puste katalogi nie&nbsp;są wysyłane na&nbsp;Githuba!

Utwórz także katalog o&nbsp;nazwie **Projekt** (również umieść w&nbsp;nim pusty plik), w&nbsp;którym będziesz umieszczać pliki projektu, który&nbsp;będziemy wykonywać w&nbsp;tym semestrze.

Od&nbsp;następnych zajęć rozwiązania wszystkich zadań wykonywanych na&nbsp;zajęciach umieszczaj
w&nbsp;odpowiednim katalogu, np. rozwiązania zadań z&nbsp;zajęć nr 1 umieszczaj w&nbsp;katalogu **Zajecia_1**.

Link do repozytorium wyślij prowadzącemu na&nbsp;adres mailowy <a href="mailto:marcin.szczepanski@sealcode.org">marcin.szczepanski@sealcode.org<a/>.

### Źródła

* github.com;
* wikipedia.pl;
* antyweb.pl;
* rogerdudler.github.io/git-guide.

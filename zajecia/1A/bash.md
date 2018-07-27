---
layout: default
---
<div class="inner">
	<h1 id="main1">Polecenia powłoki bash</h1>
    <div id="main2" class="h2">Materiały dodatkowe do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
	<div style="clear: both;"></div>
</div>

## 1. Polecenia powłoki bash

Na tej stronie znajdują się ćwiczenia wraz z przykładowymi (ale nie **jedynymi**) rozwiązaniami z&nbsp;praktycznej wiedzy o&nbsp;powłoce <span class="preformat">bash</span>.

## Przydatne strony:

- <a href="http://www.astrouw.edu.pl/~jskowron/pracownia/komendy/"
target="blank">astrouw.edu.pl/~jskowron/pracownia/komendy/</a>

- <a href="http://bprzybylski.github.io/DSOP/m02.html"
target="blank">bprzybylski.github.io/DSOP/m02.html</a> 

## 1.1. Poruszanie się po katalogach

### Ćwiczenie 1.1.1.

Wywołaj w swoim katalogu domowym polecenia:

```bash
mkdir test
cd test
touch plik
mkdir test01
mkdir test02
mkdir test03
cd test02
mkdir test0201
mkdir test0202
cd test0201
```

Następnie wykonaj poniższe zadania:

- przejdź jednym poleceniem do katalogu **test**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">cd ../..</span>
</div>
<div style="clear: both;"></div>
</div>

- wyświetl informacje o zawartości katalogu **test** oraz jego podkatalogach (czyli rekursywnie);
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">ls -R</span>
</div>
<div style="clear: both;"></div>
</div>

- podaj, jakie uprawnienia posiada grupa, w której znajduje się właściciel katalogu **test02**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	Wywołujemy polecenie: 
	<span class="preformat">ls -l</span>.
	<br />
	Sprawdzamy w pierszej kolumnie:
	<span class="preformat">drwxrwxrwx</span>.
	<br />
	Druga trójka 
	<span class="preformat">rwx</span>
	oznacza prawo odczytu, zapisu i wykonania dla&nbsp;grupy.
</div>
<div style="clear: both;"></div>
</div>

- użyj odpowiedniego polecenia, aby wywołać pomoc do programu/polecenia **ln**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">man ln</span>
</div>
<div style="clear: both;"></div>
</div>

- powiedz, do czego służy polecenie **ln**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	Polecenie <span class="preformat">ln</span> służy do tworzenia dowiązań/linków pomiędzy plikami.
</div>
<div style="clear: both;"></div>
</div>

- korzystając z polecenia **ln** z&nbsp;odpowiednią opcją, utwórz **dowiązanie symboliczne** o&nbsp;nazwie **skrot**
do&nbsp;pliku o&nbsp;nazwie **plik**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">ln -s plik skrot</span>
</div>
<div style="clear: both;"></div>
</div>

- wyświetl szczegółowe informacje o zawartości katalogu **test**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">ls -l</span>
</div>
<div style="clear: both;"></div>
</div>

- podaj, jak oznaczane są **dowiązania symboliczne** w&nbsp;powłoce bash;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<p>Dowiązania symboliczne oznaczane są literą <span class="preformat">l</span> w&nbsp;szczegółowym raporcie programu <span class="preformat">ls</span>
	w&nbsp;pierwszej&nbsp;kolumnie przed&nbsp;oznaczeniem poziomów dostępu do&nbsp;pliku.</p>
</div>
<div style="clear: both;"></div>
</div>

- wyczyść ekran konsoli.
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">clear</span>
</div>
<div style="clear: both;"></div>
</div>

## 1.2. Operacje na katalogach i plikach

### Ćwiczenie 1.2.1.

Wykonaj poniższe polecenia:

- utwórz 2 katalogi: **nowy** i **nowy1**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">mkdir nowy nowy1</span>
</div>
<div style="clear: both;"></div>
</div>

- przejdź do katalogu **nowy**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">cd nowy</span>
</div>
<div style="clear: both;"></div>
</div>

- utwórz w nim jednym poleceniem 2 pliki: **plik** i **plik2**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">touch plik plik2</span>
</div>
<div style="clear: both;"></div>
</div>

- sprawdź uprawnienia pliku **plik2** i podaj te uprawnienia jako trójkę liczb zapisanych w&nbsp;systemie ósemkowym;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	Wywołujemy polecenie:
	<span class="preformat">ls -l</span>.
	<br />
	Odczytujemy, uprawnienia <span class="preformat">rw-rw-rw-</span>.
	<br />
	W systemie ósemkowym: <b>666</b>.
</div>
<div style="clear: both;"></div>
</div>

- zmień uprawnienia pliku **plik2** tak, aby właściciel pliku miał wszystkie prawa, grupa - prawo do&nbsp;odczytu
a&nbsp;pozostali bez&nbsp;żadnych praw;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">chmod u=rwx,g=r--,o=--- plik2</span>
</div>
<div style="clear: both;"></div>
</div>

- sprawdź, że prawa dostępu dla pliku **plik2** zostały zmodyfikowane;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">ls -l</span>
</div>
<div style="clear: both;"></div>
</div>

- usuń plik **plik**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">rm plik</span>
</div>
<div style="clear: both;"></div>
</div>

- zmień nazwę pliku **plik2** na **zmieniony**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">mv plik2 zmieniony</span>
</div>
<div style="clear: both;"></div>
</div>

- utwórz dowiązanie symboliczne do pliku **zmieniony** o&nbsp;nazwie **skrot_do_zmienionego** tak,
aby&nbsp;dowiązanie to znalazło się w&nbsp;Twoim katalogu domowym (użyj polecenia <span class="preformat">ln</span>);
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">ln -s zmieniony ~/skrot_do_zmienionego</span>
</div>
<div style="clear: both;"></div>
</div>

- skopiuj plik **zmieniony** do katalogu-rodzica (jeden poziom wyżej);
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">cp zmieniony ..</span>
</div>
<div style="clear: both;"></div>
</div>

- przejdź do katalogu-rodzica;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">cd ..</span>
</div>
<div style="clear: both;"></div>
</div>

- usuń katalog **nowy1**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">rmdir nowy1</span>
</div>
<div style="clear: both;"></div>
</div>

- usuń katalog **nowy**.
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">rm -r nowy</span>
</div>
<div style="clear: both;"></div>
</div>

## 1.3. Przekierowania i potoki

### Ćwiczenie 1.3.1.

Wykonaj poniższe polecenia:

- utwórz plik **pisanie**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">touch pisanie</span>
</div>
<div style="clear: both;"></div>
</div>

- zapisz do pliku **pisanie** zdanie "Ala ma kota**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">echo "Ala ma kota" > pisanie</span>
</div>
<div style="clear: both;"></div>
</div>

- wypisz zawartość pliku **pisanie**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">cat pisanie</span>
</div>
<div style="clear: both;"></div>
</div>

- dopisz do pliku **pisanie** wartość zmiennej środowiskowej, która przechowuje adres katalogu domowego;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">echo $HOME >> pisanie</span>
</div>
<div style="clear: both;"></div>
</div>

- dopisz do pliku **pisanie** wartość zmiennej środowiskowej, która przechowuje nazwę aktualnie zalogowanego użytkownika;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">echo $USER >> pisanie</span>
</div>
<div style="clear: both;"></div>
</div>

- dopisz do pliku **pisanie** zawartość polecenia <span class="preformat">ls -l</span> wywołanego w&nbsp;katalogu,
w&nbsp;którym aktualnie się znajdujesz;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">ls -l >> pisanie</span>
</div>
<div style="clear: both;"></div>
</div>

- wypisz zawartość pliku **pisanie** w kolejności od&nbsp;ostatniej linii;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">tac pisanie</span>
</div>
<div style="clear: both;"></div>
</div>

- wypisz pierwszą linię pliku **pisanie**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">head -n 1 pisanie</span>
</div>
<div style="clear: both;"></div>
</div>

- wypisz, ile słów zawiera plik **pisanie**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">wc -w pisanie</span>
</div>
<div style="clear: both;"></div>
</div>

- wypisz ostatnią linię pliku **pisanie**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">tail -n 1 pisanie</span>
</div>
<div style="clear: both;"></div>
</div>

- wypisz trzecią linię pliku **pisanie**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">head -n 3 pisanie | tail -n 1</span>
</div>
<div style="clear: both;"></div>
</div>

- wypisz kolejno czwartą, trzecią i drugą linię pliku **pisanie**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">head -n 4 pisanie | tac | head -n 3</span>
</div>
<div style="clear: both;"></div>
</div>

- utwórz plik **zapis**;
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">touch zapis</span>
</div>
<div style="clear: both;"></div>
</div>

- zapisz do pliku **zapis** przedostatnią linię pliku **pisanie**.
<div style="margin-left: 1.25rem; margin-top: -1rem;">
<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<br />
	<span class="preformat">tac pisanie | head -n 2 | tac | head -n 1 > zapis</span>
</div>
<div style="clear: both;"></div>
</div>

<br /> <br />

<script>
    const n = 36;

	let solution = document.getElementsByClassName('solution');
	let solutionBtn = document.getElementsByClassName('button-solution');
	let taskBtn = document.getElementsByClassName('button-task');

	function show(i) {
		taskBtn[i].style.display = 'none';
		solutionBtn[i].style.display = 'block';
		solution[i].style.display = 'block';
	}

	function hide(i) {
		taskBtn[i].style.display = 'block';
		solutionBtn[i].style.display = 'none';
		solution[i].style.display = 'none';
	}

    function start() {
        for (let i = 0; i < n; i++) {
            hide(i);
        }
    }

    window.onload = start;
    for (let i = 0; i < n; i++) {
        solutionBtn[i].addEventListener('click', function() {hide(i);}, false);
        taskBtn[i].addEventListener('click', function() {show(i);}, false);
    }
</script>

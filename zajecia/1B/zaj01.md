---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 1</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróc do&nbsp;spisu materiałów</a>
	<a href="https://jsfiddle.net/" target="blank" class="button-v button-module">Tu będziemy testować kod&nbsp;źródłowy</a>
	<div style="clear: both;"></div>
</div>

## 1. Nowości w HTML5
W języku HTML5 został wprowadzony zbiór nowych elementów służących do oznaczania fragmentów tworzonych stron. Nazwy tych elementów określają rodzaj zawartości, jaką należy w nich umieszczać.

### 1.1. Nagłówki i stopki
Elementy <span class="preformat">&lt;header&gt;</span> i <span class="preformat">&lt;footer&gt;</span> mogą być używane do tworzenia:

* głównego nagłówka i stopki prezentowanych odpowiednio na górze i na dole każdej strony witryny;
* nagłówka i stopki umieszczonych w poszczególnych elementach <span class="preformat">&lt;article&gt;</span> oraz <span class="preformat">&lt;section&gt;</span>.

### 1.2. Nawigacja
Element <span class="preformat">&lt;nav&gt;</span> jest przeznaczony do umieszczania głównych bloków nawigacyjnych witryny, takich jak lista łączy do jej głównych działów.

### Przykład 1

```html
<header>
    <h1>Dania świata</h1>
    <nav>
        <ul>
            <li><a href="">Strona Główna</a></li>
            <li><a href="">Zajęcia</a></li>
            <li><a href="">Catering</a></li>
            <li><a href="">O nas</a></li>
            <li><a href="">Kontakt</a></li>
        </ul>
    </nav>
</header>

<footer>
    &copy; 2017 Dania świata
</footer>
```

### 1.3. Sekcje
Element <span class="preformat">&lt;section&gt;</span> służy do grupowania innych powiązanych ze sobą elementów. Zazwyczaj każda taka sekcja ma własny nagłówek.
Na przykład na stronie głównej naszej witryny możemy umieścić kilka elementów <span class="preformat">&lt;section&gt;</span> zawierających różne sekcje strony, takie jak najnowsze publikacje, najpopularniejsze produkty czy formularze do subskrypcji biuletynu informacyjnego.

### Przykład 2

```html
<section class="popular-recipes">
	<h2>Popularne przepisy</h2>
	<a href="">Grillowany kurczak</a>
	<a href="">Mielone kotleciki z kurczaka</a>
	<a href="">Smażone naleśniki</a>
	<a href="">Gulasz z kurczaka</a>
</section>
```

### 1.4. Grupy nagłówków
Element <span class="preformat">&lt;hgroup&gt;</span> służy do grupowania od jednego do kilku elementów <span class="preformat">&lt;h1&gt; - &lt;h6&gt;</span>, tak by były one traktowane jako jeden nagłówek.

### Przykład 3

```html
<hgroup>
	<h2>Nauka HTML5</h2>
	<h3>Kurs tygodniowy</h3>
</hgroup>
```

### 1.5. Ilustracje
Element <span class="preformat">&lt;figure&gt;</span> może zawierać dowolne treści, do których odwołuje się główna treść artykułu (nie tylko obrazy).
Należy też zauważyć, że artykuł nie powinien tracić znaczenia w przypadku przesunięcia zawartości elementu <span class="preformat">&lt;figure&gt;</span>. Dlatego nalezy go używać tylko w sytuacjach, kiedy w treści artykułu znajduje się jedynie odwołanie do elementu.
Poniżej przedstawiono kilka zastosowań elementu <span class="preformat">&lt;figure&gt;</span>:

* obrazy,
* klipy wideo,
* wykresy,
* diagramy,
* listingi kodu,
* teksty uzupełniające główną część kodu.

W elemencie <span class="preformat">&lt;figure&gt;</span> należy umieszczać także element <span class="preformat">&lt;figcaption&gt;</span> służący do podania opisu zawartości elementu <span class="preformat">&lt;figure&gt;</span>.

### Przykład 4.

```html
<figure>
    <img src="images/git.jpg" alt="Git" />
    <figcaption>Git</figcaption>
</figure>
```

### 1.6. Artykuły
Element <span class="preformat">&lt;article&gt;</span> pełni funkcję pojemnika, w którym są umieszczane dowolne sekcje strony, przy czym powinny one być stosunkowo autonomiczne i nadawać się do zebrania w większą grupę.

### Przykład 5

```html
<article>
    <figure>
        <img src="images/html5.jpg" alt="HTML5" />
        <figcaption>HTML5</figcaption>
    </figure>
    <hgroup>
        <h2>Nauka HTML5</h2>
        <h3>Kurs tygodniowy</h3>
    </hgroup>
    <p>Tygodniowe zajęcia wprowadzające, przedstawiające znaczniki języka HTML5.</p>
</article>    
<article>
    <figure>
        <img src="images/git.jpg" alt="Git" />
        <figcaption>Git</figcaption>
    </figure>
    <hgroup>
        <h2>Kurs Git-a</h2>
        <h3>Zajęcia jednodniowe</h3>
    </hgroup>
    <p>Intensywny, jednodniowy kurs uczący pracy z Git-em.</p>
</article>    
```

### 1.7. Sekcje boczne
Element <span class="preformat">&lt;aside&gt;</span> ma kilka zastosowań, zależnych od tego, czy znajduje się wewnątrz elementu <span class="preformat">&lt;article&gt;</span>, czy poza nim.
W pierwszym przypadku element <span class="preformat">&lt;aside&gt;</span> powinien zawierać informacje powiązane z artykułem, lecz niekoniecznie z jego znaczeniem (np. wyróżniony cudzysłów).
Natomiast w drugiej sytuacji element <span class="preformat">&lt;aside&gt;</span> służy nam jako pojemnik dla treści związanych z całą stroną (np. łącza do innych sekcji witryny).

### Przykład 6

```html
<aside>
	<section class="popular-recipes">
		<h2>Popularne przepisy</h2>
		<a href="">Grillowany kurczak</a>
		<a href="">Mielone kotleciki z kurczaka</a>
		<a href="">Smażone naleśniki</a>
		<a href="">Gulasz z kurczaka</a>
	</section>
	<section class="contact-details">
		<h2>Kontakt</h2>
		<p>Dania świata <br />
			ul. Poznańska 27 <br />
			Poznań
		</p>
	</section>
</aside>
```

### 1.8. Grupowanie elementów w sekcje

### Ćwiczenie 1.
Przeanalizuj poniśzy kod źródłowy:

```html
<div class="wrapper">
	<header>
		<h1>Dania świata</h1>
		<nav>
			<!-- zawartość paska nawigacyjnego -->
		</nav>
	</header>
	<section class="courses">
		<!-- zawartość sekcji -->
	</section>
	<aside>
		<!-- zawartość paska bocznego -->
	</aside>
	<footer>
		<!-- zawartość stopki -->
	</footer>
</div>
```

Jakie znaczenie w powyższym kodzie ma element <span class="preformat">&lt;div&gt;</span> ?

## 2. Formularze

### 2.1. Jak działają formularze?

### 2.2. Struktura formularzy

### 2.3. Pola formularzy

#### 2.3.1. Pola tekstowe

#### 2.3.2. Pole hasła

#### 2.3.3. Wielowierszowe pola tekstowe

#### 2.3.4. Przyciski opcji

#### 2.3.5. Pola wyboru

#### 2.3.6. Przycisk przesyłający

#### 2.3.7. Przycisk graficzny

#### 2.3.8. Element button oraz pola ukryte

### 2.4. Grupowanie elementów formularzy

## Zadania domowe

### Zadanie nr 1
Wykonaj pierwszą fazę tworzenia projektu - **stworzenie repozytorium, w którym będą się znajdować pliki projektu**. Po stworzeniu repozytorium umieść adres do niego na forum w temacie z obecnością na pierwszych zajęciach w tym semestrze.

### Zadanie nr 2
Przygotuj formularz jak na poniższym obrazku:

![](assets/images/prdom01.png)

Rozwiązanie tego zadania umieść w stworzonym w poprzednim zadaniu repozytorium w katalogu o nazwie "Prace_domowe". Plik z rozwiązaniem nazwij "prdom01.html".
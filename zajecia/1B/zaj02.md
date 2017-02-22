---
layout: default
---
<div class="inner">
	<h1 id="main1">Zajęcia 2</h1>
    <div id="main2" class="h2">Materiały do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróc do&nbsp;spisu materiałów</a>
	<a href="https://jsfiddle.net/" target="blank" class="button-v button-module">Tu będziemy testować kod&nbsp;źródłowy</a>
	<div style="clear: both;"></div>
</div>

## 3. Gradienty w CSS
Gradient tworzą przynajmniej dwa różne od siebie kolory, które w określony sposób, na danym obszarze, stopniowo łączą się ze sobą i w ten sposób wypełniają dany obszar.

### 3.1. Gradient liniowy
Funkcja <span class="preformat">linear-gradient()</span> służy do wypełnienia tła elementu HTML gradientem liniowym. Najprostszą formę zapisu tej funkcji przedstawia poniższy przykład:

### Przykład 3.1.

```css
div {
	text-align: center;
	width: 80%;
	margin: 0 auto;
	padding: 50px;
	border: 5px solid black;
	background-image: linear-gradient(white, blue);
}
```

Właściwość <span class="preformat">background-image</span> w połączeniu z funkcją <span class="preformat">linear-gradient()</span> utworzy nam **gradient liniowy**, składający się z koloru białego i niebieskiego.
Domyślnie pozycja każdego koloru, jaki podamy wraz&nbsp;z&nbsp;funkcją <span class="preformat">linear-gradient()</span> jest określana automatycznie przez przeglądarkę internetową, dlatego&nbsp;wspomniane pozycje kolorów rozkładają się równomiernie, w równych odstępach między sobą.

Zapis <span class="preformat">linear-gradient(white, blue)</span> jest równoznaczny z zapisem <span class="preformat">linear-gradient(white 0%, blue 100%)</span>.

Gradient liniowy może składać się z większej liczby kolorów, dzięki czemu możemy uzyskać rozmaite efekty.

### Ćwiczenie 3.1.
W kodzie źródłowym z przykładu 3.1. podmień wartość właściwości <span class="preformat">background-image</span> na podane poniżej i zaobserwuj jak będzie wyglądał gradient liniowy:

a) <span class="preformat">linear-gradient(blue, white)</span>

b) <span class="preformat">linear-gradient(white 0%, blue 30%, blue 70%, white 100%)</span>

c) <span class="preformat">linear-gradient(white, blue, yellow)</span>

Ostatnim parametrem, jaki możemy określić w funkcji <span class="preformat">linear-gradient()</span>, jest parametr, który określa kierunek wypełnienia tła elementu HTML gradientem liniowym. Domyślnie gradient liniowy jest tworzony od&nbsp;góry do&nbsp;dołu, dlatego domyślną wartością wspomnianego parametru funkcji <span class="preformat">linear-gradient()</span> jest&nbsp;wartość <span class="preformat">to bottom</span>.
Zapis <span class="preformat">linear-gradient(white, blue, white)</span> jest równoznaczny z&nbsp;zapisem <span class="preformat">linear-gradient(to bottom, white, blue, white)</span> oraz jest równoznaczny z&nbsp;zapisem <span class="preformat">linear-gradient(to bottom, white 0%, blue 50%, white 100%)</span>.

Kierunkiem gradientu liniowego możemy manipulować za pomocą wartości typu: <span class="preformat">to bottom</span>, <span class="preformat">to left</span>, <span class="preformat">to&nbsp;bottom left</span>, <span class="preformat">to top right</span> itp., jak również za pomocą wartości wyrażonych w jednostkach <span class="preformat">deg</span>, które określają stopień obrotu.

Podobną funkcją do funkcji linear-gradient() jest funkcja <span class="preformat">repeating-linear-gradient()</span>. Działa ona identycznie jak funkcja <span class="preformat">linear-gradient()</span> z tą różnicą, że gdy kolory, które wskazaliśmy do utworzenia gradientu liniowego, nie wypełnią całego obszaru tła elementu, to gradient zostanie powtórzony tak,&nbsp;aby&nbsp;wypełnił on cały obszar tła danego elementu.

### Ćwiczenie 3.2.
Porównaj ze sobą zapisy: <span class="preformat">repeating-linear-gradient(white 0%, blue 25%)</span> oraz <span class="preformat">linear-gradient(white 0%, blue 25%, white 25%, blue 50%, white 50%, blue 75%, white 75%, blue 100%)</span>.


### 3.2. Gradient promienisty

Innym rodzajem gradientu jest gradient promienisty. Jest on tworzony od jednego punktu i&nbsp;rozciąga się&nbsp;we&nbsp;wszystkie strony. Do&nbsp;utworzenia gradientu promienistego możemy wykorzystać właściwość <span class="preformat">background-image</span> oraz funkcję <span class="preformat">radial-gradient()</span>.

### Ćwiczenie 3.3.
Przeanalizuj poniższy kod źródłowy:

```css
div {
	text-align: center;
	width: 80%;
	margin: 0 auto;
	padding: 50px;
	border: 5px solid black;
}

#div-1 {
	background-image: radial-gradient(white, blue);
}

#div-2 {
	background-image: radial-gradient(white 0%, blue 0%);
}

#div-3 {
	background-image: radial-gradient(white, blue);
}

#div-4 {
	background-image: radial-gradient(blue -20%, gold 150%);
}

#div-5 {
	background-image: radial-gradient(blue, gold, green);
}

#div-6 {
	background-image: radial-gradient(circle, blue, gold, green);
}

#div-7 {
	background-image: radial-gradient(ellipse, blue, gold, green);
}

#div-8 {
	background-image: radial-gradient(circle at top, blue, gold, green);
}

#div-9 {
	background-image: radial-gradient(circle at bottom right, blue, gold, green);
}

#div-10 {
	background-image: radial-gradient(circle at 50px 0, blue, gold, green);
}
```

Domyślnie gradient promienisty jest tworzony od centralnego punktu elementu, dlatego parametr, który odpowiada za miejsce wspomnianego punktu, ma wartość <span class="preformat">at center</span>. 
Do manipulowania wspomnianym parametrem możemy wykorzystywać następujące wartości oraz ich kombinacje: <span class="preformat">top</span>, <span class="preformat">right</span>, <span class="preformat">bottom</span>, <span class="preformat">left</span>, <span class="preformat">center</span>, <span class="preformat">bottom right</span>, <span class="preformat">center left</span>, które podajemy po słowie <span class="preformat">at</span>.

### Ćwiczenie 3.4.
Przeanalizuj poniższy kod źródłowy:

```css
div {
	text-align: center;
	width: 80%;
	margin: 0 auto;
	padding: 50px;
	border: 5px solid black;
}

#div-1 {
	background-image: radial-gradient(blue, gold, green);
}

#div-2 {
	background-image: radial-gradient(farthest-corner, blue, gold, green);
}

#div-3 {
	background-image: radial-gradient(farthest-corner ellipse at center, blue 0%, gold 50%, green 100%);
}

#div-4 {
	background-image: radial-gradient(closest-side, blue, gold, green);
}

#div-5 {
	background-image: radial-gradient(closest-corner, blue, gold, green);
}

#div-6 {
	background-image: radial-gradient(farthest-side, blue, gold, green);
}
```

Podobną funkcją do funkcji <span class="preformat">radial-gradient()</span> jest funkcja <span class="preformat">repeating-radial-gradient()</span>. Działa ona identycznie jak funkcja <span class="preformat">radial-gradient()</span> z tą różnicą, że gdy kolory, które wskazaliśmy do&nbsp;utworzenia gradientu promienistego, nie wypełnią całego obszaru tła elementu, to gradient zostanie powtórzony tak, aby wypełnił cały obszar tła danego elementu.

## 4. Animacje w CSS

### 4.1. Efekt przejścia
Właściwość <span class="preformat">transition</span> pozwala nam utworzyć pewien efekt animacji. Wspomniana animacja będzie prezentować zmianę wartości określonych właściwości CSS dla danego elementu. W efekcie tym zobaczymy przejście jednych wartości właściwości CSS w drugie, dlatego efekt <span class="preformat">transition</span> możemy nazywać również **efektem przejścia**. 

### Ćwiczenie 4.1.
Porównaj kody źródłowe:

* Pierwszy kod:

```css
div {
  width: 50%;
  height: 100px;
  background-color: #fff;
  border: 5px solid #000;
}

div:hover {
  width: 80%;
  background-color: blue;
}
```

* Drugi kod:

```css
div {
  width: 50%;
  height: 100px;
  background-color: #fff;
  border: 5px solid #000;
  transition-duration: 5s;
}

div:hover {
  width: 80%;
  background-color: blue;
}
```

### Ćwiczenie 4.2.
Przeanalizuj poniższe kody źródłowe i powiedz, do czego służą użyte w nich właściwości związane z efektem przejścia.

```css
div {
  width: 50%;
  height: 100px;
  background-color: #fff;
  border: 5px solid #000;
  transition-duration: 5s;
  transition-property: background-color;
}

div:hover {
  width: 80%;
  background-color: blue;
}
```

```css
div {
  width: 50%;
  height: 100px;
  background-color: #fff;
  border: 5px solid #000;
  transition-duration: 5s;
  transition-timing-function: linear;
}

div:hover {
  width: 80%;
  background-color: blue;
}
```

```css
div {
  width: 50%;
  height: 100px;
  background-color: #fff;
  border: 5px solid #000;
  transition-duration: 5s;
  transition-delay: 500ms;
}

div:hover {
  width: 80%;
  background-color: blue;
}
```

```css
div {
  width: 50%;
  height: 100px;
  background-color: #fff;
  border: 5px solid #000;
  transition-property: width, background-color;
  transition-duration: 1s, 3s;
  transition-timing-function: linear, ease-in;
  transition-delay: 3s, 0s;
}

div:hover {
  width: 80%;
  background-color: blue;
}
```

```css
div {
  width: 50%;
  height: 100px;
  background-color: #fff;
  border: 5px solid #000;
  transition: width 1s linear 3s, background-color 3s ease-in 0s;
}

div:hover {
  width: 80%;
  background-color: blue;
}
```


### 4.2. Reguła <span class="preformat">@keyframes</span> i selektory czasu animacji.

W regule <span class="preformat">@keyframes</span> określamy nazwę i zachowanie animacji.

### Przykład 4.1.

```css
div {
	height: 200px;
	width: 200px;
	animation: test 8s infinite;
}

@keyframes test {
    0% {
		background-color: white;
		height: 200px;
		width: 200px;
	}
	
    25% {
		background-color: pink;
		height: 250px;
		width: 250px;
	}
	
    50% {
		background-color: red;
		height: 300px;
		width: 300px;
	}
	
    75% {
		background-color: pink;
		height: 250px;
		width: 250px;
	}
	
    100% {
		background-color: white;
		height: 200px;
		width: 200px;
	}
}
```

### 4.3. Właściwości animacji

Poniżej zostały omówione właściwości grupy <span class="preformat">animation</span>:

- aby określić nazwę animacji, którą chcemy dodać do elementu używamy właściwości <span class="preformat">animation-name</span>;
- aby określić długość trwania animacji używamy właściwości <span class="preformat">animation-duration</span>;
- aby określić tempo animacji używamy właściwości <span class="preformat">animation-timing-function</span>; przyjmowane wartości:
	- <span class="preformat">linear</span> - stała szybkość;
    - <span class="preformat">ease</span> - szybciej na początku, wolniej pod koniec (domyślne ustawienie);
    - <span class="preformat">ease-in</span> - wolniej na początku;
    - <span class="preformat">ease-out</span> - wolniej pod koniec;
    - <span class="preformat">ease-in-out</span> - wolniej na początku i pod koniec;
    - <span class="preformat">cubic-bezier()</span> - własne ustawienie szybkości (wartości od 0 do 1);
	- <span class="preformat">steps(frames, avoid)</span> - tempem wykonywania się animacji interesującego nas elementu HTML będzie tempo stałe składające się z konkretnej ilości klatek;
- aby określić opóźnienie/przyspieszenie pierwszego startu animacji używamy właściwości <span class="preformat">animation-delay</span>;
- aby określić ilość powtórzeń animacji używamy właściwości <span class="preformat">animation-iteration-count</span>; przyjmowane wartości:
    - <span class="preformat">infinite</span> - ciągłe powtarzanie;
    - <span class="preformat">wartość liczbowa</span> - liczba powtórzeń;
- aby określić kierunek powtarzania się oraz rozpoczęcia animacji używamy właściwości <span class="preformat">animation-direction</span>; przyjmowane wartości:
    - <span class="preformat">normal</span> - animacja będzie przebiegać od początku do końca;
    - <span class="preformat">reverse</span> - animacja będzie przebiegać od końca do początku;
    - <span class="preformat">alternate</span> - rozpoczęcie animacji od początku, powtarzanie w przeciwnym kierunku;
    - <span class="preformat">alternate-reverse</span> - rozpoczęcie animacji od końca, powtarzanie w przeciwnym kierunku;
- aby określić dodatkowy wygląd elementu przed lub po wykonaniu się animacji używamy właściwości <span class="preformat">animation-fill-mode</span>; przyjmowane wartości:
    - <span class="preformat">none</span> - brak efektu (domyślne ustawienie);
    - <span class="preformat">forwards</span> - styl elementu po zakończeniu animacji zgodny z deklaracją w ostatnim selektorze animacji;
    - <span class="preformat">backwards</span> - styl elementu przed rozpoczęciem animacji zgodny z deklaracją w pierwszym selektorze animacji;
    - <span class="preformat">both</span> - styl elementu po rozpoczęciu i zakończeniu animacji zgodny z deklaracjami odpowiednio w pierwszym i ostatnim selektorze animacji;
- aby wstrzymać lub wznowić wykonywanie się animacji używamy właściwości <span class="preformat">animation-play-state</span>; przyjmowane wartości:
    - <span class="preformat">paused</span> - wstrzymanie animacji;
    - <span class="preformat">running</span> - wznowienie animacji;

Aby wyżej wymienione właściwości CSS w jakikolwiek sposób oddziaływały na dany element musimy najpierw utworzyć jakąś przykładową animację, za pomocą reguły <span class="preformat">@keyframes</span>.

### Więcej informacji o funkcji <span class="preformat">steps()</span>
Za pomocą funkcji <span class="preformat">steps()</span> możemy określić stałe tempo składające się z określonej ilości klatek. 

Parametr <span class="preformat">frames</span> jest wymaganym parametrem funkcji <span class="preformat">steps()</span>. Parametr <span class="preformat">frames</span> określa z ilu klatek powinno składać się nowo tworzone stałe tempo. 

Parametr <span class="preformat">avoid</span> nie jest wymaganym parametrem funkcji <span class="preformat">steps()</span>. Parametr <span class="preformat">avoid</span> określa, która klatka budująca nowo tworzone stałe tempo powinna zostać pominięta. Dostępne wartości: <span class="preformat">start</span> i <span class="preformat">end</span>.
Wartość <span class="preformat">start</span> parametru <span class="preformat">avoid</span> sprawia, że pierwsza klatka budująca nowo tworzone stałe tempo będzie pomijana. 
Wartość <span class="preformat">end</span> parametru <span class="preformat">avoid</span> sprawia, że ostatnia klatka budująca nowo tworzone stałe tempo będzie pomijana. 

### Więcej informacji o funkcji <span class="preformat">cubic-bezier()</span>
Jeśli jesteś zainteresowany szczegółami na temat funkcji <span class="preformat">cubic-bezier()</span> zapraszam do lektury - <a href="http://webkod.pl/kurs-css/wartosci/funkcje/cubic-bezier" target="blank">Krzywa Béziera</a>.

### Przykład 4.2.

```css
@keyframes change-width {
    0% {
		width: 150px;
	}
	
    100% {
		width: 350px;
	}
}

@keyframes change-background {
    0% {
		background-color: pink;
	}
	
    100% {
		background-color: red;
	}
}

div {
	border: 5px solid blue;
	height: 300px;
	animation-name: change-width, change-background;
	animation-duration: 5s, 1s;
	animation-timing-function: ease-in-out, linear;
	animation-delay: 0s, 3s;
	animation-iteration-count: infinite, infinite;
	animation-direction: alternate, normal;
	animation-fill-mode: backwards, forwards;
}

div:hover {
	animation-play-state: paused;
	cursor: pointer;
}
```

## Zadania domowe

### Zadanie 1.
Wykonaj drugą fazę tworzenia projektu - **zbudowanie szkieletu aplikacji w HTML5**. Każda większa zmiana powinna być wysłana jako osobny commit na repozytorium utworzone w pierwszej fazie. Czas na wykonanie zadania to **dwa tygodnie**.

### Zadanie 2.
Poszukaj informacji na temat właściwości <span class="preformat">transform</span> i używając jej stwórz prosty preloader.
Rozwiązanie tego zadania umieść w repozytorium utworzonym tydzień temu w katalogu o nazwie "Prace_domowe". Plik z&nbsp;rozwiązaniem nazwij "prdom02.html".

Przykładowy wygląd:

![](assets/images/prdom02.gif)

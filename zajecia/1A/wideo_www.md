---
layout: default
---
<div class="inner">
	<h1 id="main1">[ZALICZENIE ZADANIA - MULTIMEDIA]</h1>
	<br />
	<h1 id="main1">Wideo na WWW</h1>
    <div id="main2" class="h2">Materiały dodatkowe do&nbsp;warsztatów technologii webowych prowadzonych na Wydziale Matematyki i&nbsp;Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu.</div>
	<a href="../../index.html" class="button-v button-module">Wróć do&nbsp;spisu materiałów</a>
	<div style="clear: both;"></div>
</div>

## 1. Wprowadzenie

W tej lekcji będziemy omawiać jak osadza się pliki wideo na stronach internetowych dla HTML5.
Przypomnijmy zatem podstawową budowę takiego dokumentu:

### Przykład 1.1.

<script async src="//jsfiddle.net/marcin00412/kevy5bs6/embed/html,result/dark/"></script>

<br /> 
Pełną dokumentację języka HTML5, omówienie wszystkich znaczników znajdziesz na&nbsp;stronie <a href="https://www.w3schools.com/html/" target="blank">HTML5 Tutorial</a>.

### 1.1. Przedstawienie formatów i odtwarzaczy klipów wideo

Aby umieścić klip wideo na własnej stronie internetowej, trzeba zrozumieć zagadnienia związane z&nbsp;formatami plików
oraz&nbsp;odtwarzaczami (wtyczkami) wideo.

#### 1.1.1. Formaty

Filmy są dostępne w&nbsp;wielu formatach (np. Blu-ray czy DVD).
W&nbsp;świecie komputerów i&nbsp;internetu formatów wideo jest jeszcze więcej
(np. AVI, MPEG, WebM, Windows Media, FLV, H264).
Odtwarzacz DVD nie odtworzy kasety VHS - analogicznie poszczególne
przeglądarki różnią się pod&nbsp;względem obsługiwanych formatów wideo.
Aby&nbsp;użytkownicy strony byli w&nbsp;stanie obejrzeć na&nbsp;niej
klip wideo, być może będziemy musieli go zapisać w&nbsp;innym formacie.
Taki proces konwertowania klipu wideo z&nbsp;jednego formatu na&nbsp;drugi
jest czasami nazywany **kodowaniem**.
W&nbsp;Internecie dostępnych jest kilka aplikacji służących do&nbsp;kodowania
wideo (np. Micro Video Converter).

#### 1.1.2. Odtwarzacze i wtyczki

Pierwsze przeglądarki były projektowane tak, by&nbsp;wyświetlać wyłącznie
teksty i&nbsp;obrazy. Z&nbsp;tego powodu przeglądarki tworzone przed&nbsp;2010
rokiem, by odtwarzać klipy wideo, zazwyczaj wymagały użycia dodatkowych
programów nazywanych **odtwarzaczami** lub&nbsp;**wtyczkami**.
Te dodatkowe programy odtwarzały jedynie wybrane formaty wideo.
Nowsze przeglądarki zostały rozbudowane i&nbsp;obsługują element
<span class="preformat">&lt;video&gt;</span> wprowadzony w&nbsp;HTML5
(który sprawia, że&nbsp;dodatkowe odtwarzacze i&nbsp;wtyczki są zbyteczne).
Niestety (jeszcze) czasami niektórzy użytkownicy nie dysponują przeglądarkami, które
obsługują ten element. Przeglądarki, które to potrafią, wymagają, by&nbsp;materiał
wideo był kodowany w&nbsp;innych formatach.

#### 1.1.3. Rozwiązanie

Najprostszym sposobem umieszczenia materiału wideo na&nbsp;własnej stronie
jest skorzystanie z&nbsp;usługi udostępniającej klipy
takiej jak **YouTube** czy **Vimeo**.
Zdarzają się jednak sytuacje, w&nbsp;których takie rozwiązanie jest
nieodpowiednie (o&nbsp;czym mowa będzie później) i&nbsp;trzeba umieścić klipy wideo
we&nbsp;własnej witrynie.

## 2. Jak to się robiło kiedyś? - czyli słów kilka o&nbsp;filmach Flash Video

Aktualnie już nie używa się tej technologii i&nbsp;poniżej przedstawiony sposób osadzania
plików FLV na&nbsp;stronie na&nbsp;najnowszych przeglądarkach już nie jest wspierany.

### 2.1. Czym jest Flash Video?

W dużym skrócie **Flash** to wtyczka do&nbsp;przeglądarek internetowych od&nbsp;Adobe, która&nbsp;umożliwia wyświetlanie określonych typów zawartości.
Jej instalacja jest niezbędna, by&nbsp;odtwarzać reklamy i&nbsp;treści multimedialne wykonane przy&nbsp;wykonaniu tej technologii.
Wtyczka Flash przez wiele lat była uważana za&nbsp;niezbędne wyposażenie każdej przeglądarki internetowej.
Na&nbsp;przestrzeni lat jej znaczenie zaczęło maleć i&nbsp;rośnie liczba stron porzucających Flasha na&nbsp;rzecz innych technologii, takich jak HTML5.

Natomiast **Flash Video** jest kontenerem multimedialnym używanym do&nbsp;dystrybucji plików wideo w&nbsp;Internecie.
Pliki Flash Video mają rozszerzenie **.flv**.

### 2.2. Przygotowanie materiałów i&nbsp;odtwarzaczy przy&nbsp;użyciu Flash Video

Aby prezentować materiały wideo na&nbsp;własnej stronie przy&nbsp;użyciu Flash Video, należy wykonać **trzy** operacje.

#### 2.2.1. Konwersja materiału wideo do&nbsp;formatu FLV

Aby skorzystać z&nbsp;Flash Video, trzeba skonwertować posiadany materiał do&nbsp;formatu FLV.
Począwszy od&nbsp;wersji 6, środowisko Flash zawiera narzędzie **Flash Video Converter** umożliwiające
konwersję materiału wideo do&nbsp;formatu FLV.
Niektóre odtwarzacze Flash obsługują także format H264 (a&nbsp;niektóre programy do&nbsp;edycji
wideo umożliwiają zapisywanie materiału w&nbsp;tym formacie).
Inne programy umożliwiające konwersję materiału do&nbsp;tych dwóch formatów można znaleźć
po&nbsp;wpisaniu w&nbsp;wyszukiwarce hasła "FLV or H264 converters".

#### 2.2.2. Wybór odtwarzacza plików FLV

Do odtwarzania filmów FLV potrzebny będzie odtwarzacz napisany w&nbsp;technologii Flash.
Służy on do&nbsp;odtwarzania filmu oraz&nbsp;udostępnia elementy sterujące, takie jak
przyciski do&nbsp;odtwarzania i&nbsp;zatrzymywania filmu. 
Takie odtwarzacze można znaleźć na&nbsp;stronach takich jak jwplayer.com.
Korzystanie z&nbsp;takich odtwarzaczy nie&nbsp;wymaga kupowania środowiska Flash.

#### 2.2.3. Umieszczenie odtwarzacza i&nbsp;materiału wideo na&nbsp;stronie

Odtwarzacz można umieścić na&nbsp;stronie przy użyciu technik wykorzystujących skrypty JavaScript,
takich jak&nbsp;SWFObject.

Do odtwarzacza należy przekazać informację o lokalizacji klipu wideo, który ma być prezentowany.

**Czym jest SWFObject?**

SWFObject jest to skrypt, który można pobrać bezpłatnie z&nbsp;witryny Google.
Skrypt ten sprawdza, czy&nbsp;przeglądarka użytkownika może wyświetlać filmy Flash.

Poniżej znajduje się krótki przykład umieszczania filmu flash na&nbsp;stronie WWW:

### Przykład 2.1.

<script async src="//jsfiddle.net/marcin00412/mgx3fxfo/1/embed/html,result/dark/"></script>

## 3. Osadzanie plików wideo na stronie w HTML5

Aktualnie na&nbsp;stronach internetowych coraz częściej są umieszczane filmy. 
Wcześniej często używano technologii Flash, obecnie wykorzystywane są częściej inne wtyczki umożliwiające wyświetlanie odtwarzacza na&nbsp;WWW. 
Niestety większość wtyczek jest płatna, natomiast inne są&nbsp;zbyt ciężkie w&nbsp;obsłudze. 
Bardzo często na&nbsp;WWW można spotkać również odtwarzacz z&nbsp;serwisu YouTube. 
Twórcy specyfikacji HTML5 dostrzegli lukę i&nbsp;dodali do&nbsp;standardu elementy umożliwiające wyświetlenie 
Takie rozwiązanie pozwala wyświetlać filmy w&nbsp;jednym z&nbsp;obsługiwanych formatów, 
nie&nbsp;obciążając sprzętu wtyczkami, które "pożerają" zasoby naszego komputera.

### 3.1. Znacznik <span class="preformat">&lt;video&gt;</span>

Aby&nbsp;umieścić klip wideo na&nbsp;stronie WWW można posłużyć się elementem <span class="preformat">&lt;video&gt;</span>. 
Między znacznikami tego elementu można umieścić elementy określające lokalizację pliku wideo, 
plik tekstowy oraz&nbsp;alternatywny tekst, który&nbsp;zostanie wyświetlony, jeśli przeglądarka użytkownika nie&nbsp;będzie obsługiwać wideo.

Otwierający znacznik elementu <span class="preformat">&lt;video&gt;</span> może zawierać różne atrybuty, które&nbsp;pozwolą na&nbsp;określenie, 
jak ma się zachować oraz&nbsp;wyglądać nasz odtwarzacz. 

W&nbsp;poniższym przykładzie użyto atrybutów <span class="preformat">width</span> oraz&nbsp;<span class="preformat">height</span>, 
które pozwalają nam określić (w&nbsp;pikselach) odpowiednio szerokość i&nbsp;wysokość odtwarzacza.
Dzięki temu podczas ładowania strony przeglądarka od&nbsp;razu przygotowuje przestrzeń dla&nbsp;naszego odtwarzacza.

Dzięki atrybutowi <span class="preformat">controls</span> w&nbsp;odtwarzaczu zostanie dodany pasek,
który&nbsp;pozwala użytkownikowi wznowić oraz zatrzymać odtwarzanie klipu, daje opcję
tzw.&nbsp;__fullscreen-a__, czyli wyświetlenia filmu na&nbsp;całym ekranie oraz&nbsp;regulację głośności.

### Przykład 3.1.

<script async src="//jsfiddle.net/marcin00412/o84dj2bm/embed/html,result/dark/"></script>

### 3.2. Atrybuty odtwarzacza

Atrybuty elementu <span class="preformat">&lt;video&gt;</span> umożliwiają nam precyzyjnie określić parametry odtwarzacza oraz&nbsp;jego funkcjonalności.

Spis atrybutów jest dostępny poniżej:

- <span class="preformat">src</span> - określa lokalizację pliku wideo (wartością jest adres URL);
- <span class="preformat">width</span> - ustala szerokość odtwarzacza w&nbsp;pikselach;
- <span class="preformat">height</span> - ustala wysokość odtwarzacza w&nbsp;pikselach;
- <span class="preformat">controls</span> - wyświetla pasek sterowania odtwarzaniem wideo;
- <span class="preformat">loop</span> - pozwala na&nbsp;odtwarzanie w&nbsp;pętli;
- <span class="preformat">muted</span> - wycisza audio na&nbsp;początku;
- <span class="preformat">poster</span> - określa lokalizację grafiki, która jest wyświetlana przed&nbsp;rozpoczęciem odtwarzania (wartością jest adres URL);
- <span class="preformat">preload</span> - ustala jak przeglądarka powinna ładować film (wartości: 
<a target="blank" href="http://webkod.pl/kurs-html/tagi/zawartosc-osadzona/element-video#preload-none">none</a>, 
<a target="blank" href="http://webkod.pl/kurs-html/tagi/zawartosc-osadzona/element-video#preload-auto">auto</a>, 
<a target="blank" href="http://webkod.pl/kurs-html/tagi/zawartosc-osadzona/element-video#preload-metadata">metadata</a>);
- <span class="preformat">autoplay</span> - automatycznie odtwarza film po&nbsp;załadowaniu.

### Ćwiczenie 3.1.

Zmodyfikuj kod źródłowy z przykładu 3.1. tak, aby wideo odtwarzało się w pętli zaraz po&nbsp;załadowaniu.
Całe wideo powinno zostać wczytywane od&nbsp;razu.

<script async src="//jsfiddle.net/marcin00412/n3cvf2hb/embed/html,result/dark/"></script>

<a class="button-v button-module button-task" style="cursor: pointer;">Pokaż rozwiązanie</a>
<div style="clear: both;"></div>
<div class="solution">
	<a class="button-v button-module button-solution" style="cursor: pointer;">Ukryj rozwiązanie</a>
	<script async src="//jsfiddle.net/marcin00412/f3xyg3Lz/embed/html,result/dark/"></script>
</div>
<div style="clear: both;"></div>

<script>
	const solution = document.getElementsByClassName('solution')[0];
	const solutionBtn = document.getElementsByClassName('button-solution')[0];
	const taskBtn = document.getElementsByClassName('button-task')[0];

	function show() {
		taskBtn.style.display = 'none';
		solutionBtn.style.display = 'block';
		solution.style.display = 'block';
	}

	function hide() {
		taskBtn.style.display = 'block';
		solutionBtn.style.display = 'none';
		solution.style.display = 'none';
	}

	window.onload = hide;
	solutionBtn.onclick = hide;
	taskBtn.onclick = show;
</script>

### 3.3. Wybór pliku źródłowego

Źródło pliku wideo możemy podać w&nbsp;inny sposób - umożliwia on podanie informacji o alternatywnym pliku,
który zostanie wyświetlony w&nbsp;przypadku problemów z&nbsp;pierwszym podanym.

Element <span class="preformat">source</span> określa lokalizację pliku wideo do&nbsp;wyświetlenia.
Aby&nbsp;określić ścieżkę dostępu do&nbsp;filmu służy atrybut <span class="preformat">src</span> tego elementu.
Natomiast w&nbsp;atrybucie <span class="preformat">type</span> elementu <span class="preformat">source</span> określa się **identyfikator** formatu klipu wideo.

W&nbsp;elemencie <span class="preformat">video</span> możemy umieszczać więcej elementów <span class="preformat">source</span>.
Jeśli przeglądarka użytkownika nie&nbsp;będzie mogła rozpoznać i&nbsp;odtworzyć wideo z&nbsp;pierwszej podanej lokalizacji,
będzie sprawdzać kolejne, które&nbsp;są&nbsp;zakodowane w&nbsp;innych formatach.

Element <span class="preformat">source</span> ma także atrybut <span class="preformat">type</span>.
W tym atrybucie, określamy identyfikator formatu wideo pliku wskazanego w&nbsp;atrybucie <span class="preformat">src</span> tego elementu.
Aktualnie można wyświetlić w&nbsp;przeglądarce trzy formaty wideo: MP4, Ogg i&nbsp;WebM.
Wartością atrybutu <span class="preformat">type</span> jest jeden z&nbsp;typów MIME:

- <span class="preformat">video/mp4</span> - format MP4 z&nbsp;kodekiem wideo H.264 i&nbsp;kodekiem audio AAC;
- <span class="preformat">video/ogg</span> - format Ogg z&nbsp;kodekiem wideo Theora i&nbsp;kodekiem audio Vorbis;
- <span class="preformat">video/webm</span> - format WebM z&nbsp;kodekiem wideo VP8 i&nbsp;kodekiem audio Vorbis.

### Przykład 3.2.

<script async src="//jsfiddle.net/marcin00412/0dtxodzd/embed/html,result/dark/"></script>

## 4. Wybrane serwisy poświęcone udostępnianiu plików wideo

Najprostszym sposobem prezentowania klipów wideo na&nbsp;własnych stronach
jest przesłanie ich do&nbsp;takiej witryny jak YouTube, Dailymotion lub&nbsp;Vimeo
i&nbsp;skorzystanie z&nbsp;udostępnianych przez&nbsp;nie&nbsp;mechanizmów
przy&nbsp;osadzaniu wideo na&nbsp;własnej stronie.

### 4.1. YouTube

YouTube jest powszechnie znanym i&nbsp;popularnym serwisem, w&nbsp;którym możemy **bezpłatnie** przechowywać klipy wideo i&nbsp;udostępniać je.
Pozwala również na&nbsp;osadzanie filmów na&nbsp;własnych stronach WWW z&nbsp;serwerów serwisu.
Minusem jest to, że&nbsp;serwis nakłada reklamy na&nbsp;nasz klip.
Jednak możliwości tego serwisu są większe - możemy między innymi tworzyć własne kanały (i&nbsp;zarabiać na&nbsp;nich).
YouTube jest dostępny w&nbsp;wielu wersjach językowych - w&nbsp;tym po polsku.

### Ćwiczenie 4.1.1.

Wejdź na stronę serwisu <a href="https://www.youtube.com/?gl=PL&hl=pl" target="blank">YouTube</a> i&nbsp;zapoznaj się z&nbsp;interfejsem tego serwisu.

### Ćwiczenie 4.1.2.

Zaloguj się w&nbsp;serwisie <a href="https://www.youtube.com/?gl=PL&hl=pl" target="blank">YouTube</a> poprzez&nbsp;konto Google.
Jeśli nie masz takiego konta - załóż je wcześniej.

#### Jak umieścić klip wideo w&nbsp;serwisie YouTube?

Aby&nbsp;umieścić klip wideo w&nbsp; serwisie YouTube należy wykonać poniższe kroki:

#### 1. Klikamy na przycisk "Prześlij":

<a href="./assets/images/hq/yt/yt1.png" target="blank"><img src="./assets/images/yt/yt1.jpg" /></a>

#### 2. Wybieramy odpowiedni poziom prywatności filmu:

<a href="./assets/images/hq/yt/yt2.png" target="blank"><img src="./assets/images/yt/yt2.jpg" /></a>

#### 3. Wybierz plik do przesłania:

<a href="./assets/images/hq/yt/yt3.png" target="blank"><img src="./assets/images/yt/yt3.jpg" /></a>

<a href="./assets/images/hq/yt/yt4.png" target="blank"><img src="./assets/images/yt/yt4.jpg" /></a>

#### 4. Pojawia się widok przesyłu pliku - tutaj można podać różne informacje o filmie:

<a href="./assets/images/hq/yt/yt5.png" target="blank"><img src="./assets/images/yt/yt5.jpg" /></a>

#### 5. Kiedy uzupełnimy odpowiednie informacje i&nbsp;plik zostanie przesłany należy opublikować wideo:

<a href="./assets/images/hq/yt/yt6.png" target="blank"><img src="./assets/images/yt/yt6.jpg" /></a>

#### 6.1. Po publikacji otrzymujemy bezpośredni link do&nbsp;naszego klipu wideo:

<a href="./assets/images/hq/yt/yt7.png" target="blank"><img src="./assets/images/yt/yt7.jpg" /></a>

#### 6.2. Po wejściu na wskazany adres widzimy nasz film:

<a href="./assets/images/hq/yt/yt10.png" target="blank"><img src="./assets/images/yt/yt10.jpg" /></a>

#### 7.1. Możemy też uzyskać kod HTML, który po&nbsp;umieszczeniu w&nbsp;kodzie strony osadzi nam nasz klip wideo:

<a href="./assets/images/hq/yt/yt8.png" target="blank"><img src="./assets/images/yt/yt8.jpg" /></a>

#### 7.2. Klikając "Pokaż więcej" uzyskamy możliwość manipulowania naszą ramką z&nbsp;filmem, który chcemy osadzić na&nbsp;naszej stronie WWW:

<a href="./assets/images/hq/yt/yt9.png" target="blank"><img src="./assets/images/yt/yt9.jpg" /></a>

#### 8. Aby edytować przesłany plik należy wejść do studia twórców:

<a href="./assets/images/hq/yt/yt11.png" target="blank"><img src="./assets/images/yt/yt11.jpg" /></a>

#### 9.1. Aby usunąć plik wideo (w studiu twórców) zaznaczamy nasz film, klikamy przycisk "Działania" a&nbsp;następnie "Usuń".

<a href="./assets/images/hq/yt/yt12.png" target="blank"><img src="./assets/images/yt/yt12.jpg" /></a>

#### 9.2. Potwierdzamy usunięcie pliku:

<a href="./assets/images/hq/yt/yt13.png" target="blank"><img src="./assets/images/yt/yt13.jpg" /></a>

#### 9.3. Otrzymujemy informację o&nbsp;usunięciu filmu:

<a href="./assets/images/hq/yt/yt14.png" target="blank"><img src="./assets/images/yt/yt14.jpg" /></a>

### 4.2. Dailymotion

Wg&nbsp;Wikipedii Dailymotion to serwis internetowy umożliwiający prezentację filmów,
wideoklipów lub&nbsp;własnych mini-produkcji w&nbsp;Internecie, reklamujący się&nbsp;hasłem 
Regarder, publier, partager, założony w&nbsp;Paryżu we&nbsp;Francji, jako odpowiedź na&nbsp;serwis YouTube.
Serwis ten jest w języku angielskim.

### Ćwiczenie 4.2.1.

Wejdź na stronę serwisu <a href="https://www.dailymotion.com/us" target="blank">Dailymotion</a> i&nbsp;zapoznaj się z&nbsp;interfejsem tego serwisu.

### Ćwiczenie 4.2.2.

Zaloguj się w&nbsp;serwisie <a href="https://www.dailymotion.com/us" target="blank">Dailymotion</a>.

#### Jak umieścić klip wideo w&nbsp;serwisie Dailymotion?

Aby&nbsp;umieścić klip wideo w&nbsp; serwisie Dailymotion należy wykonać poniższe kroki:

#### 1. Klikamy na "Settings":

<a href="./assets/images/hq/dm/dm1.png" target="blank"><img src="./assets/images/dm/dm1.jpg" /></a>

#### 2. W panelu użytkownika wybieramy opcję "Upload":

<a href="./assets/images/hq/dm/dm2.png" target="blank"><img src="./assets/images/dm/dm2.jpg" /></a>

#### 3. Klikamy "Upload":

<a href="./assets/images/hq/dm/dm3.png" target="blank"><img src="./assets/images/dm/dm3.jpg" /></a>

#### 4. Wybieramy "Select video files":

<a href="./assets/images/hq/dm/dm4.png" target="blank"><img src="./assets/images/dm/dm4.jpg" /></a>

#### 5. Wybieramy plik wideo:

<a href="./assets/images/hq/dm/dm5.png" target="blank"><img src="./assets/images/dm/dm5.jpg" /></a>

#### 6. Czekamy aż plik się załaduje do&nbsp;końca:

<a href="./assets/images/hq/dm/dm6.png" target="blank"><img src="./assets/images/dm/dm6.jpg" /></a>

#### 7. Klikamy na "Edit and publish":

<a href="./assets/images/hq/dm/dm7.png" target="blank"><img src="./assets/images/dm/dm7.jpg" /></a>

#### 8. Nasz klip wideo będzie dostępny na&nbsp;naszym profilu:

<a href="./assets/images/hq/dm/dm8.png" target="blank"><img src="./assets/images/dm/dm8.jpg" /></a>

#### 9. Po kliknięciu w wideo pokaże się nam nasz klip z&nbsp;możliwością edycji:

<a href="./assets/images/hq/dm/dm9.png" target="blank"><img src="./assets/images/dm/dm9.jpg" /></a>

#### 10. Kiedy wybierzemy opcję "Edit video" zostaniemy przekierowani do&nbsp;panelu edycji:

<a href="./assets/images/hq/dm/dm10.png" target="blank"><img src="./assets/images/dm/dm10.jpg" /></a>

#### 11.1. Jeśli zejdziemy trochę w&nbsp;dół ukaże nam się opcja pozwalająca na&nbsp;usunięcie klipu - "Delete":

<a href="./assets/images/hq/dm/dm11.png" target="blank"><img src="./assets/images/dm/dm11.jpg" /></a>

#### 11.2. Potwierdzamy usunięcie poprzez kliknięcie przycisku "Confirm":

<a href="./assets/images/hq/dm/dm12.png" target="blank"><img src="./assets/images/dm/dm12.jpg" /></a>

#### 11.3. Na stronie naszego kanału nie ma już klipu wideo:

<a href="./assets/images/hq/dm/dm13.png" target="blank"><img src="./assets/images/dm/dm13.jpg" /></a>

### 4.3. Vimeo

Wikipedia podaje, że&nbsp;Vimeo to serwis internetowy umożliwiający oglądanie 
i&nbsp;udostępnianie plików filmowych przez użytkowników. Strona została założona 
w&nbsp;listopadzie 2004 przez Zacha Kleina oraz&nbsp;Jakoba Lodwicka, który&nbsp;również wymyślił nazwę, 
jest ona grą na słowie video poprzez wplecenie w&nbsp;nazwę słowa me (z&nbsp;ang.&nbsp;ja), 
jako odniesienie do&nbsp;udostępniania plików stworzonych wyłącznie przez&nbsp;użytkowników. 
Serwis został kupiony przez&nbsp;InterActiveCorp w&nbsp;sierpniu 2006 roku.

Regulamin serwisu **zabrania przesyłania plików komercyjnych** (dopuszczalne z&nbsp;płatnego konta PRO), 
wideo z&nbsp;gier, pornografii lub&nbsp;jakiegokolwiek pliku nieutworzonego przez&nbsp;użytkownika. 
Serwis wyróżnia się&nbsp;praktycznym brakiem filmów amatorskich, nieprzygotowanych. 
Spowodowane jest to głównie ograniczeniami wprowadzonymi na&nbsp;użytkowników.

### Ćwiczenie 4.3.1.

Wejdź na stronę serwisu <a href="https://vimeo.com/" target="blank">Vimeo</a> i&nbsp;zapoznaj się z&nbsp;interfejsem tego serwisu.

### Ćwiczenie 4.3.2.

Zaloguj się w&nbsp;serwisie <a href="https://vimeo.com/" target="blank">Vimeo</a>.

#### Jak umieścić klip wideo w&nbsp;serwisie Vimeo?

Aby&nbsp;umieścić klip wideo w&nbsp; serwisie Vimeo należy wykonać poniższe kroki:

#### 1. Klikamy na przycisk "Upload":

<a href="./assets/images/hq/vm/vm1.png" target="blank"><img src="./assets/images/vm/vm1.jpg" /></a>

#### 2. Ustawiamy poziom prywatności filmu:

<a href="./assets/images/hq/vm/vm2.png" target="blank"><img src="./assets/images/vm/vm2.jpg" /></a>

#### 3. Następnie klikamy na&nbsp;przycisk "Choose files to upload":

<a href="./assets/images/hq/vm/vm3.png" target="blank"><img src="./assets/images/vm/vm3.jpg" /></a>

#### 4. Wybieramy plik wideo:

<a href="./assets/images/hq/vm/vm4.png" target="blank"><img src="./assets/images/vm/vm4.jpg" /></a>

#### 5. Czekamy aż plik się załaduje - w&nbsp;tym czasie ustawiamy podstawowe informacje o&nbsp;filmie:

<a href="./assets/images/hq/vm/vm5.png" target="blank"><img src="./assets/images/vm/vm5.jpg" /></a>

#### 6. Następnie klikamy przycisk "Save":

<a href="./assets/images/hq/vm/vm6.png" target="blank"><img src="./assets/images/vm/vm6.jpg" /></a>

#### 7. Na naszym koncie od teraz jest dostępny nasz klip:

<a href="./assets/images/hq/vm/vm7.png" target="blank"><img src="./assets/images/vm/vm7.jpg" /></a>

#### 8.1. Aby edytować wideo klikamy na "Videos":

<a href="./assets/images/hq/vm/vm8.png" target="blank"><img src="./assets/images/vm/vm8.jpg" /></a>

#### 8.2. Następnie wybieramy "Settings":

<a href="./assets/images/hq/vm/vm9.png" target="blank"><img src="./assets/images/vm/vm9.jpg" /></a>

#### 8.3. W zakładce "Basics" możemy ustawić podstawowe informacje takie jak np.&nbsp;tytuł czy&nbsp;opis:

<a href="./assets/images/hq/vm/vm10.png" target="blank"><img src="./assets/images/vm/vm10.jpg" /></a>

#### 9.1. Po wybraniu zakładki "Embed" mamy dostęp do&nbsp;kodu HTML, który&nbsp;który możemy umieścić w&nbsp;kodzie naszej strony, aby&nbsp;osadzić na&nbsp;niej wideo:

<a href="./assets/images/hq/vm/vm11.png" target="blank"><img src="./assets/images/vm/vm11.jpg" /></a>

#### 9.2. Po kliknięciu na "Embed code" klikamy przycisk "Copy" - w&nbsp;tym momencie w&nbsp;schowku mamy kod HTML do&nbsp;osadzenia:

<a href="./assets/images/hq/vm/vm12.png" target="blank"><img src="./assets/images/vm/vm12.jpg" /></a>

#### 10.1. W zakładce "Basics" po zjechaniu na&nbsp;sam dół mamy opcję usunięcia pliku wideo:

<a href="./assets/images/hq/vm/vm13.png" target="blank"><img src="./assets/images/vm/vm13.jpg" /></a>

#### 10.2. Klikamy na&nbsp;przycisk "Delete this video":

<a href="./assets/images/hq/vm/vm14.png" target="blank"><img src="./assets/images/vm/vm14.jpg" /></a>

#### 10.3. Wpisujemy hasło do&nbsp;naszego konta a&nbsp;następnie przycisk "Confirm":

<a href="./assets/images/hq/vm/vm15.png" target="blank"><img src="./assets/images/vm/vm15.jpg" /></a>

#### 10.4. Od teraz naszego filmu nie ma w&nbsp;Vimeo:

<a href="./assets/images/hq/vm/vm16.png" target="blank"><img src="./assets/images/vm/vm16.jpg" /></a>

## 5. Podsumowanie

Witryny umożliwiające prezentowanie klipów wideo udostępniają odtwarzacze działające w&nbsp;większości przeglądarek.
Korzystając z nich, nie trzeba się przejmować kodowaniem materiału wideo, gdyż&nbsp;pozwalają one na&nbsp;przesyłanie
filmów zapisanych w&nbsp;wielu różnych formatach. 
Po&nbsp;przesłaniu materiału wideo usługi te automatycznie go konwerują do&nbsp;różnych formatów
wymaganych przez&nbsp;poszczególne przeglądarki.

Firmy prowadzące serwery WWW często pobierają dodatkowe opłaty, jeśli witryna zużywa dużą szerokość pasma,
a&nbsp;pliki zawierające filmy są duże. Dlatego przechowywanie i&nbsp;udostępnianie klipów wideo na&nbsp;własnej
stronie może generować dodatkowe koszty. Jeśli natomiast umieścimy klipy np.&nbsp;na&nbsp;YouTube, unikniemy
dodatkowych kosztów związanych z&nbsp;używaną szerokością pasma.

Nasze klipy wideo będą umieszczone w&nbsp;witrynie z&nbsp;usługą udostępniającą, a&nbsp;zatem jeśli chcemy, by&nbsp;były
one dostępne wyłącznie na&nbsp;naszej stronie, konieczne będzie umieszczenie materiału wideo na&nbsp;własnym serwerze i&nbsp;dodanie
do&nbsp;niej odpowiedniego odtwarzacza.

Niektóre witryny nakładają ograniczenia na&nbsp;dopuszczalną treść klipów wideo.
Większość zabrania umieszczania w&nbsp;klipach materiałów reklamowych (co&nbsp;uniemożliwia czerpanie z&nbsp;nich korzyści finansowych).
Część witryn z&nbsp;usługami udostępniania wideo będzie odtwarzać własne reklamy przed&nbsp;rozpoczęciem naszego klipu,
a&nbsp;nawet nakładać je na&nbsp;film podczas jego odtwarzania.
Oprócz tego jakość klipów wideo oferowana przez&nbsp;takie usługi może być niska.

Jeśli chcemy przechowywać materiały wideo na&nbsp;własnym serwerze - a&nbsp;nie&nbsp;korzystać z&nbsp;usługi udostępniającej - to&nbsp;odpowiednie
przygotowanie witryny, takie aby&nbsp;mogła je&nbsp;odtwarzać, będzie od&nbsp;nas wymagało znacznie więcej pracy.

## Źródła
* webkod.pl;
* w3schools.com;
* kurshtml.edu.pl;
* e-zoner.pl;
* youtube.com;
* dailymotion.com;
* vimeo.com;
* wikipedia.com

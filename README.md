# WirtualnaKamera
Projekt wirtualnej kamery na zajęcia Grafiki Komputerowej na Politechnice Warszawskiej.

### Opis projektu  
Celem projektu jest storzenie "wirtualnego świata 3d" po którym możemy się poruszać za pomocą przycisków. 
Kamera powinna mieć 6 stopni swobody:
* ruch do przodu/tyłu  
* ruch na prawo/lewo  
* ruch do góry/dołu  
* obroty względem 3 osi  
* zoom  

### Technologie
Projekt został napisany w języku JavaScript(Vanilla.js).  
Projekt został skonfigurowany za pomocą module bundlera Webpack4.  
Do wyświetlania elementów graficznych został użyty element języka HTML5 - canvas.  
W celu ułatwienia obliczeń macierzowych skorzystałem z biblioteki math.js . 

### Uruchomienie projektu


https://mystifying-fermat-9ee384.netlify.com

#### Lokalnie
###### Instalacja
```
yarn instal  
```
###### Uruchomienie 
```
yarn run dev
```

### Sterowanie

* ruch do przodu/tyłu &uarr; / &darr;
* ruch na prawo/lewo  &rarr; / &larr;
* ruch do góry/dołu  <kbd>PageUp</kbd> / <kbd>PageUp</kbd>
* obroty względem osi   <kbd>z</kbd> / <kbd>x</kbd> || <kbd>w</kbd> / <kbd>s</kbd> || <kbd>a</kbd> / <kbd>d</kbd> 
* zoom +/-  <kbd>n</kbd> / <kbd>m</kbd>



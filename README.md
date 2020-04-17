1. Napisz funkcję, która liczy średnią arytmetyczną przekazanych do niej liczb jako tablicy.
2. Napisz funkcję, która liczy medianę przekazanych do niej liczb jako tablicy.
3. Napisz funkcję, która zwraca najmniejszą z przekazanych do niej liczb jako tablicy.
4. Napisz funkcję, która zwraca największą z przekazanych do niej liczb jako tablicy.
5. Zmień poprzednie funkcje tak aby przyjmowały dowolną ilość argumentów, a nie tablice.
6. Napisz funkcję, która zwraca w postaci obiektu średnią, medianę, najmniejszą, największą z przekazanych do niej liczb jako tablicy.
7. Napisz w HTMLu sam interfejs użytkownika (UI) dla aplikacji obliczającej średnią, medianę, najmniejszą, największą z podanych liczb w inpucie. Interfejs powinien się składać z inputa, buttona i paragrafu na wyświetlenie wyniku. Nie są wymagane style CSS.
8. Napisz funkcję pobierającą value z inputa oraz tworzącą tablicę liczb rozdzielając je po spacji (wpisane '1 2 3', ma zamienić się w [1, 2, 3]).
9. Do powyższej funkcji dodaj walidację czy wartość inputa (tablica), składa się z liczb. W razie niepowodzenia wyświetlaj alert() i zaprzestań dalszych obliczeń.
10. Podepnij pod buttona wywołanie funkcji z zadania 6. która otrzyma liczby wpisane w inpucie poprzez wywołanie funkcji z zadania 8 i 9. Wynik działania funkcji z zadania 6 wyświetl w paragrafie.
11. Zamień powyższą aplikację na zenkapsulowany kod JS-owy wykorzystując ES5 (costructor function i prototypy). W globalnym scope powinien pozostać wyłącznie identyfikator konstruktora. W HTML-u nie powinno zostać nic oprócz containera (dowolny tag HTML) do wyrenderowania apki. Wszystkie inne elementy powinien tworzyć JS. Konstruktor powinien przyjmować slektor CSS pozwalający wybrać container, w którym stworzy elementy.
12. Zamień apkę z zadania 11. na class ES6 (Chrome bez problemu uruchomi ten kod bez transpilera).
13. Zmień dzianie aplikacji w ten sposób aby:
  - w inpucie dało się wprowadzać same liczby
  - przycisk zapisywał wpisaną liczbę i czyścił input
  - aplikacja wyświetlała na liście wpisane już liczby i umożliwiała ich usunięcie
  - za każdą zmianą (dodaniem lub usunięciem) aplikacja przeliczałaby statystyki
14. Tablice liczb z zadania 13 zapisuj w localStorage, by wpisane liczy nie znikały po odświerzeniu strony.
15. Tablice liczb z zadania 13 zapisuj w Firebase.
16. Za każdą zmianą (dodanie, usunięcie) tablicy liczb zapisuj jej aktualny stan w Firebase wraz z aktualnym czasem (w postaci timestamp). Następnie wyświetlaj historię poprzednich wartości tablicy w liście poniżej dotychczasowej aplikacji z możliwością kliknięcia poprzednie wartości i przywrócenia poprzedniego stanu.
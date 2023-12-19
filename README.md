# Application for creating posts with categories
This is a full-stack web application built with React.js on the frontend and PHP on the backend. The application allows users to create, read, update, and delete posts.

The project is structured as follows:

src/: This directory contains all the React.js components and pages.
php/: This directory contains all the PHP scripts for handling server-side logic.

# Built With
React.js - The web framework used
PHP - Server-side scripting language
Vite - Build tool and development server


#PL

addPost.php to skrypt PHP dodający nowy post do bazy danych. Wczytuje ustawienia, rozpoczyna sesję, łączy się z bazą danych, pobiera ID użytkownika i ID kategorii na podstawie danych z formularza POST, a następnie dodaje nowy post. Odpowiada JSON-em, informując o sukcesie operacji.

checkSession.php to skrypt PHP, który sprawdza status sesji użytkownika. Po wczytaniu ustawień i rozpoczęciu sesji, łączy się z bazą danych. Następnie sprawdza obecność użytkownika o nazwie zapisanej w sesji. W zależności od wyniku zapytania, zwraca JSON z informacjami o sukcesie, nazwie użytkownika i roli (jeśli użytkownik istnieje), lub informacją o niepowodzeniu sesji. Skrypt przydatny do weryfikacji i uzyskiwania danych o sesji użytkownika.

deletePost.php to skrypt PHP umożliwiający usuwanie postów z bazy danych. Po wczytaniu ustawień i rozpoczęciu sesji, nawiązuje połączenie z bazą danych. Skrypt sprawdza, czy zalogowany użytkownik to "Admin"; jeśli nie, zwraca JSON z informacją o niepowodzeniu i kończy działanie. Następnie otrzymuje identyfikator posta do usunięcia z formularza POST, usuwa odpowiednie polubienia z tabeli "likes", a następnie usuwa sam post z tabeli "posts". Na koniec zwraca JSON z informacją o sukcesie. Skrypt ten jest przystosowany do uprawnień administratora, umożliwiając tylko administratorowi usuwanie postów.

fetchPosts.php to skrypt PHP do pobierania postów z bazy danych. Po wczytaniu ustawień i rozpoczęciu sesji, łączy się z bazą danych i wykonuje zapytanie SQL, które łączy informacje o postach, autorach, kategoriach i liczbie polubień. Wyniki są przetwarzane i zwracane w formie JSON. Skrypt ten może być używany do dynamicznego ładowania postów na stronie internetowej lub w innych aplikacjach.

like.php to skrypt PHP obsługujący operacje dodawania i usuwania polubień dla postów w bazie danych. Początkowo nawiązuje połączenie z bazą danych, sprawdza aktywną sesję użytkownika, a następnie w zależności od przesłanych danych POST, dodaje lub usuwa polubienie. Ostatecznie zwraca odpowiedni komunikat JSON informujący o wyniku operacji.

login.php to skrypt PHP odpowiedzialny za proces logowania użytkownika. Po ustawieniu nagłówków do obsługi żądań CORS, skrypt nawiązuje połączenie z bazą danych i sprawdza, czy przesłane dane POST (nazwa użytkownika i hasło) są zgodne z danymi przechowywanymi w bazie. W przypadku powodzenia, tworzy sesję użytkownika i zwraca komunikat JSON z informacjami o sukcesie oraz nazwie użytkownika i jego roli. W przypadku niepowodzenia, zwraca komunikat JSON o błędzie logowania.

logout.php to skrypt PHP odpowiedzialny za zakończenie sesji użytkownika i poprawne wylogowanie go z serwisu

register.php to skrypt PHP odpowiedzialny za proces rejestracji użytkownika. Po nawiązaniu połączenia z bazą danych, sprawdza, czy podana nazwa użytkownika już istnieje. W przypadku konfliktu zwraca komunikat JSON informujący o niepowodzeniu rejestracji. W przeciwnym razie, hasło jest zaszyfrowane, a następnie dodawane razem z nazwą użytkownika do bazy danych. Po operacji rejestracji, zwraca komunikat JSON potwierdzający sukces procesu rejestracji.

settings.php to plik w którym definiowane jest połączenie z bazą danych

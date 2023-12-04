# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



WIP: 

- addPost.php - Powyższy plik PHP odpowiada za dodawanie nowego posta do bazy danych na podstawie danych przesłanych w zapytaniu POST. Pobiera identyfikator użytkownika z sesji, identyfikator kategorii z zapytania POST, a następnie dodaje nowy post do tabeli "posts" w bazie danych. Ostatecznie zwraca odpowiedź w formie JSON informującą o sukcesie operacji.

- checkSession.php - Powyższy plik PHP sprawdza, czy użytkownik jest zalogowany. Jeśli tak, zwraca informacje o sukcesie w formie JSON, zawierające nazwę użytkownika i rolę. W przeciwnym razie zwraca informację o niepowodzeniu operacji.

- checkUsername.php - Ten kod jest przykładem prostego mechanizmu sprawdzającego, czy użytkownik o podanym pseudonimie istnieje w bazie danych. Zwraca informację w formie JSON, co może być przydatne w przypadku formularzy rejestracyjnych lub innych sytuacji, gdzie konieczne jest unikalne przypisanie pseudonimu do użytkownika.

- deletePost.php - Powyższy krótki kod PHP usuwa post wraz z polubieniami z bazy danych.

- fetchPosts.php - Powyższy kod PHP pobiera informacje o postach z bazy danych, włączając liczbę polubień dla każdego posta. Następnie przekształca te dane na format JSON i zwraca je. W kodzie użyte są zapytania SQL z joinami do uzyskania kompleksowych informacji o postach, użytkownikach i kategoriach. Ostatecznie, dane są przetwarzane do postaci tablicy i przekształcane na format JSON przed wysłaniem do klienta.

- like.php - Powyższy kod PHP obsługuje dodawanie i usuwanie polubień dla postów w zależności od żądania przesłanego przez formularz.

- logout.php - plik służący do wylogowania uzytkownika 

- register.php - ten kod PHP zajmuje się rejestracją nowego użytkownika w bazie danych
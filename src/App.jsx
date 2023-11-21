import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./components/Post";
import { useEffect, useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
      <Navbar />
      <main className="mt-8 space-y-8 mb-4">
        {isLogged ? (
          <>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </>
        ) : (
          <>Nie jestes zalogowany</>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;

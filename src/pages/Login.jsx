import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/login.php', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log(data.success);

      if (data.success) {
        // Tutaj możesz obsłużyć sukces logowania w React, np. ustawiając stan komponentu
        console.log('Zalogowano pomyślnie');
      } else {
        // Obsłuż błędy logowania, np. wyświetl komunikat dla użytkownika
        console.error(data.message);
      }
    } catch (error) {
      console.error('Wystąpił błąd podczas logowania', error);
    }
  };

  return (
    <>
      <div className="border p-5 w-full max-w-xs rounded-xl mt-auto mx-auto">
        <h1 className="text-center text-2xl font-bold mb-8">Log in</h1>
        <form action="" method="POST" className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={username}
              name="name"
              id="name"
              onChange={(e) => setUsername(e.target.value)}
              className="border border-white h-9 bg-blue-950 rounded-lg focus:bg-blue-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className=" h-9 border-white border bg-blue-950 rounded-lg focus:bg-blue-900"
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="border w-max mx-auto py-2 px-3 rounded-lg hover:bg-blue-900"
          >
            Log in
          </button>
        </form>
        <div className="mt-4">
          <Link to="/register">
            <p className="text-center text-gray-400 hover:underline">
              Don't have an account? Register now!
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;

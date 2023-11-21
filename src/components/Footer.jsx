import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="mt-auto mx-auto flex flex-col items-center">
      <p>Kamil Wójtowicz & Oskar Michta</p>
      <p>&copy; Copyright {year}</p>
    </footer>
  );
};

export default Footer;

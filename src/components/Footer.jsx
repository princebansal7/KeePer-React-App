import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © {year}</p>
      <p>princebansal_</p>
    </footer>
  );
}

export default Footer;

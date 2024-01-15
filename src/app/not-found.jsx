import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div>
      <h2>Notfound</h2>
      <p>Sorry, the page does not exist!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default Notfound;

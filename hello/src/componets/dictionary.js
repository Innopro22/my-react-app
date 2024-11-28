/** @format */

import { useState, useEffect } from "react";

export default function Dictionary() {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log("state updated ", word);
  });

  return (
    <>
      <input
        type='text'
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Lets get the difinition of {word}</h1>
    </>
  );
}

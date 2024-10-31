import TextArea from "./TextArea";
import Stats from "./Stats";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const words = text.split(' ').filter(word => word !== '').length;
  const instagramCharacters = Math.max(280 - numberOfCharacters, 0);
  const facebookCharacters = Math.max(2200 - numberOfCharacters, 0);

  return (
    <main className="container">
      <TextArea text={text} setText={setText}/>
      <Stats numberOfCharacters={numberOfCharacters} words={words} instagramCharacters={instagramCharacters} facebookCharacters={facebookCharacters} />
    </main>
  );
}

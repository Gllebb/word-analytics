import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("🍕")) {
      alert("Pizza detected! 🍕");
    }

    if (newText.includes("<script>")) {
      setWarningText("Scripts are not allowed!");
      newText = newText.replace("<script>", "");
    }

    if (newText.includes('@')) {
      setWarningText('Emails are not allowed!');
      newText = newText.replace('@', '');
    }

    if (newText.length > 280) {
      setWarningText("Text is too long for Instagram!");
    }

    if (newText.length > 2200) {
      setWarningText("Text is too long for Instagram and Facebook!");
    }

    setText(newText);
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleChange}
        className="textarea"
        placeholder="Enter your text"
        spellCheck="false"
      ></textarea>

      {warningText && <Warning warningText={warningText} />}
    </>
  );
}
 
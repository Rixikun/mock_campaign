import React, { useState } from "react";
import axios from "axios";

const InputText = () => {
  const [answer, setAnswer] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://my-json-server.typicode.com/typicode/demo/posts",
      {
        answer,
        prompt,
      }
    );
    setAnswer("");
    setPrompt("");
  };

  return (
    <div>
      <label>Prompt: </label>
      <input
        className="inputText__prompt"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="type here.."
      ></input>

      <label>Answer: </label>
      <input
        className="inputText__answer"
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="type here.."
      ></input>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputText;

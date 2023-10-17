import { useState } from "react";
import { Blog } from "./Blog";

export function Home() {

  console.log("HOME renderizou...");
  
  //let title = "Bem-vindo!";
  
  //hook - use... useState
  const [title, setTitle] = useState("Bem-vindo!");

  function handleClick() {
    setTitle("Tchau!");
    //alert('Você clicou no botão!');
    //alert(title);
  }

  return (
    <div className="home">
      <h2 onClick={ handleClick }>{ title }</h2>
      <Blog />
    </div>
  )

}
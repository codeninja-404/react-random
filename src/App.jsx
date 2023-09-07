import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["sakib", "raz", "jolil", "rubel", "nahin"];
  const singers = [
    { id: 1, name: "DR. mahfuzur rahman", age: 60 },
    { id: 2, name: "HEro alom", age: 30 },
    { id: 3, name: "Nobell", age: 250 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name={"rafi"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="explore core concepts" isDone={false}></Todo>
      <Todo task="try jsx"></Todo> */}
      {/* <Person></Person>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = {
    name: "sunny",
    age: 26,
  };
  return (
    <>
      <h3>
        i am a {person.name} {person.age}
      </h3>
    </>
  );
}

function Student() {
  return (
    <div className="student">
      <h3>this is a student</h3>
      <p>name:</p>
      <p>age:</p>
    </div>
  );
}
function Developer() {
  const devestyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid white",
    borderRadius: "100px",
  };

  return (
    <div style={devestyle}>
      <h5>devo devo</h5>
      <p>coding</p>
    </div>
  );
}

export default App;

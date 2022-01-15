import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import App from "./App";

var x = "Chamara";
let sum = 0;
let length = 5;

function add() {
  let x = 10;
  let y = 12;
  let sum = x + y;
  return sum;
}

function display() {
  let x = new Array(100);
  for (let i = 0; i < x.length; i++) {
    x[i] = i;
  }
  for (let j = 0; j < x.length; j++) {
    sum = sum + x[j];
  }
  return sum;
}

function volume() {
  return length * length * length;
}

const element = (
  <h2 className="text-success">
    One side length = {length} <br /> Cube Volume = {volume()}
  </h2>
);

const rootElement = document.getElementById("root");
ReactDOM.render(element, rootElement);

//const element = document.getElementById("root");
//ReactDOM.render(element,element);

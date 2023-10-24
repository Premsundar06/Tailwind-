import React from "react";
import "./App.css";
import "./output.css";
import Appbar from "./components/Appbar";
import Filter from "./components/Filter";
import Items from "./components/Items";

export default function App() {
  return (
    <>
      <Appbar />
      <Filter />
      <Items />
    </>
  );
}

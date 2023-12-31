import React from "react";
import Card from "./components/Card";

const loadPage = async () => {
  const a = await fetch(
    "https://gateway.marvel.com:443/v1/public/characters?apikey=b12c040d3bb7bb6598e726ba3f339d8c&hash=9d5ed76618bc44ca47afcaa486d7f6d7&ts=1"
  );
  const b = await a.json();
  return b.data.results;
};

const Home = async () => {
  const data = await loadPage();
  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-10 mx-10 font-light">
      {data.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </div>
  );
};

export default Home;

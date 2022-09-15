/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import CardItem from "../CardItem";
import "./index.css";
import Data from "../../data.json";
import { Input } from "antd";
export default function Card() {
  const [data, setData] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    setData(Data.data.advisorProfileCollection.items);
  }, []);
  const handleKeyWordChange = (e) => {
    setKey(e.target.value);
  };
  return (
    <>
      <Input.Search
        placeholder="Search Name, Categories..."
        onChange={handleKeyWordChange}
        className=""
      />
      <div className="cards">
        {data
          .filter((val) => {
            if (key === "") {
              return val;
            } else if (
              val.displayName.toLowerCase().includes(key.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, index) => {
            return <CardItem data={item} key={index} />;
          })}
      </div>
    </>
  );
}

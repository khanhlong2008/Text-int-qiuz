/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./index.css";
import { Radio } from "antd";
import { useParams } from "react-router-dom";
import Data from "../../data.json";
export default function CardDetail() {
  const [data, setData] = useState("Profile");
  const [inf, setInfo] = useState([]);

  let { id } = useParams();
  let tmp = Data.data.advisorProfileCollection.items;

  useEffect(() => {
    const idx = tmp.findIndex((tmps) => tmps.sys.id === id);
    if (idx !== -1) {
      const temp = tmp.splice(idx, 1);
      setInfo(temp[0]);
    }
  }, []);
  console.log(inf);
  const handleImg = () => {
    const imgDefault =
      "https://lotusgroup.com.vn/wp-content/themes/ltg-lotusgroup/assets/images/items/thumbnail-default.jpg";
    if (inf.avatarUrl != null) {
      return inf.avatarUrl.url;
    } else {
      return imgDefault;
    }
  };
  const img = handleImg();
  const onChange = (e) => {
    setData(e.target.value);
  };
  const handleRadioGroup = () => {
    let result = [];
    switch (data) {
      case "Profile": {
        result.push(
          <div className="text-bg">
            <h1>Email: {inf.email}</h1>
            <h1>PhoneNumber: {inf.phone}</h1>
          </div>
        );
        break;
      }
      case "Categories": {
        result.push(
          <div className="text-bg">
            {inf.categoriesCollection.items.map((item, index) => {
              return (
                <div key={index}>
                  <h1>{item.title}</h1>
                  <h1>{item.displayName}</h1>
                </div>
              );
            })}
          </div>
        );
        break;
      }
      case "Skill": {
        result.push(
          <div className="text-bg">
            {inf.skillsCollection.items.map((item, index) => {
              return (
                <div key={index}>
                  <h1>{item.displayName}</h1>
                </div>
              );
            })}
          </div>
        );
        break;
      }
      case "Service": {
        result.push(
          <div className="text-bg">
            {inf.servicesCollection.items.map((item, index) => {
              return <h1 key={index}>{item.name}</h1>;
            })}
          </div>
        );
        break;
      }
      default:
        break;
    }
    return result;
  };
  return (
    <>
      <div className="avt-bg"></div>
      <img className="avt" src={img} />
      <h2 className="name">{inf.displayName}</h2>

      <Radio.Group
        className="radios"
        value={data}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      >
        <Radio.Button value="Profile">Profile</Radio.Button>
        <Radio.Button value="Categories">Categories</Radio.Button>
        <Radio.Button value="Skill">Skill</Radio.Button>
        <Radio.Button value="Service">Service</Radio.Button>
      </Radio.Group>
      {handleRadioGroup()}
    </>
  );
}

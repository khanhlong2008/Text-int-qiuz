/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { useNavigate } from "react-router-dom";
export default function CardItem({ data }) {
  const handleImg = () => {
    const imgDefault =
      "https://lotusgroup.com.vn/wp-content/themes/ltg-lotusgroup/assets/images/items/thumbnail-default.jpg";
    if (data.avatarUrl != null) {
      return data.avatarUrl.url;
    } else {
      return imgDefault;
    }
  };
  const img = handleImg();
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${data.sys.id}`);
  };

  return (
    <div className="card">
      <div className="card-overlay">
        <img className="card__image" src={img} alt="" />
        <div className="overlay"></div>
      </div>
      <div className="card__content">
        <h2 className="h2">{data.displayName}</h2>
        <p>PhoneNumber: {data.phone ? data.phone : "..."}</p>
      </div>
      <div className="card__info">
        <div className="status">
          <i className="material-icons">
            {data.status === "Online" ? "Online" : "Offline"}
          </i>
          {data.status === "online" ? (
            <div className="pointGreen"></div>
          ) : (
            <div className="pointBlack"></div>
          )}
        </div>
        <div>
          <div onClick={handleClick} className="card__link">
            {" "}
            QUICK VIEW
          </div>

          {/* <div  className="card__link">
            QUICK VIEW
            ,"status":"online"
          </div> */}
          {/* <div className="card__link">QUICK VIEW</div> */}
        </div>
      </div>
    </div>
  );
}
// data: {
//     advisorProfileCollection: {
//       items

import React from "react";
import ReactStars from "react-rating-stars-component";
export default function Comment(props) {
  const { text, vote } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>
        <ReactStars
          classNames="centeringStar"
          edit={false}
          count={5}
          size={24}
          activeColor="#ffd700"
          value={vote}
        />
      </td>
    </tr>
  );
}

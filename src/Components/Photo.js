import React, {useState} from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Photo({ info }) {
  const [like, setLike] = useState(false)

  const onClick = () => {
    setLike(!like)
    console.log(like)
  }

  return (
    <div>
      <h1>{info.title} ({info.date})</h1>
      <div>
        <img src={info.hdurl} width="800px" alt="nasa pic"></img>
      </div>
      <div id="like">{like ? <FaHeart onClick={onClick} size={25} style={{color: "red"}}/> : <FaRegHeart onClick={onClick} size={25}/>}</div>
      <div>
        <p >{info.explanation}</p>
      </div>
    </div>
  );
}

export default Photo;

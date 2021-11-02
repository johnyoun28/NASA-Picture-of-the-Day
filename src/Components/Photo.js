import React, {useState} from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";


function Photo({ info }) {
  const [like, setLike] = useState(false)

  const onClick = () => {
    setLike(!like)
  }

  return (
    <div>
      <h1>{info.title} ({info.date})</h1>
      <div>
        {
          info.media_type === 'video' ? <iframe
          src={info.url}
          width='800px'
          height='400px'
          allow='fullscreen'
          title='nasa video'
          ></iframe>
          :
          <img
          src={info.hdurl}
          width='800px'
          alt='nasa pic'
          ></img>
        }
      </div>
      <div id="like">{like ? <FaHeart onClick={onClick} size={25} style={{color: "red"}}/> : <FaRegHeart onClick={onClick} size={25}/>}</div>
      <div>
        <p >{info.explanation}</p>
      </div>
    </div>
  );
}

export default Photo;

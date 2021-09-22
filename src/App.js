import React, {useState, useEffect} from "react";
import "./App.css";
import Photo from "./Components/Photo"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'


function App() {
  const [calDate,setCalDate] = useState(new Date())
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=WSbN3WXh6545nyX2MDMyjugPE6VOv3HZwK4jnK6J"
      )
      .then((res) => {
        // console.log(res.data);
        setPhoto(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);


  const changeHandler = date => {
    setCalDate(date)
    let day = date.getDate()
    let year = date.getFullYear()
    let month = date.getMonth()+1
    if (day < 10) day =  "0" + day
    if (month < 10) month = "0" + month
    
    const formatDate = `${year}-${month}-${day}`


      axios.get(`https://api.nasa.gov/planetary/apod?date=${formatDate}&api_key=WSbN3WXh6545nyX2MDMyjugPE6VOv3HZwK4jnK6J`)
      .then(res => {
        setPhoto(res.data)
      })
      .catch(err => console.log(err))
  }



  return (
    <div className="App">
      <h2>Choose a date</h2>
      <Calendar className="cal" onChange={changeHandler} value={calDate}/>
      < Photo info={photo}/>
    </div>
  );
}

export default App;

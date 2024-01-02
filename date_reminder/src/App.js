import React, {useState} from "react";
import './app.css';
import data from './datas';


function App() {
  const [holidays, setHolidays] = useState(data);
  function deleteAll() {
    let cont = document.querySelector(".holidays_cont");
    cont.innerHTML = "";
  };
  function deleteThis(event){
    let element = event.target.parentElement.parentElement;
    element.remove();
  };
  return (
      <div className="container">
        <h1>Milli Bayramlarımız</h1>
        <div className="holidays_cont">
        {
          holidays.map(holiday => {
            // console.log(holiday)
            return (
              <div className="date_cont" key={holiday.id}>
                <div className="img_cont">
                  <img src={holiday.img}/>
                </div>
                <div className="texts">
                  <p className="title">{holiday.title}</p>
                  <p className="date">{holiday.date}</p>
                  <button onClick={(e) => deleteThis(e)}>Sil</button>
                </div>
              </div>
            )
          })
        }
        </div>
        <button onClick={deleteAll}>Hepsini Sil</button>
      </div>
  );
}

export default App;
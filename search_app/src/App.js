import {useState} from 'react';
import './app.css';
import Data from './Data';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <h2>Kurtlar Vadisi Konsey Üyeleri</h2>
      <input placeholder="Write a name..." onChange={(e) => (setSearch(e.target.value))} />
      <div className='members_container'>
        {
          Data.filter((obj) => {
            if(search == ""){
              return obj;
            } else if (obj.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
              return obj;
            }
          }).map((obj)=> {
            return (
              <div className='member' key={obj.id}>
                <div className='image_div'>
                  <img src={obj.image}/>
                </div>
                  <h4>{obj.title}</h4>
                  <p>{obj.Description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

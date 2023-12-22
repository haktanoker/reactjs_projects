import { useEffect, useState } from 'react';
import './style.css';

function App() {

  const [images, setImages] = useState([
  "https://farm9.staticflickr.com/8410/30193245810_7b7ff74cd5.jpg",
  "https://farm6.staticflickr.com/5343/30212993894_85351f21ba.jpg",
  "https://farm5.staticflickr.com/4466/36906009863_625ce02e9f.jpg",
  "https://farm1.staticflickr.com/836/39709319980_7b2159e8b5.jpg",
  "https://live.staticflickr.com/65535/49389103952_ff4b2cf256.jpg"
]);

  const [selected, setSelected] = useState(images[0])

  return (
    <div className='container'>
      <img src={selected} alt='random picture' className='bigPhoto'/>
      <div className='subContainer'>
        {images.map((img,index) => (
            <img key={index} src={img} onClick={() => setSelected(img)} />
          ))}
      </div>
    </div>
    );
}

export default App;
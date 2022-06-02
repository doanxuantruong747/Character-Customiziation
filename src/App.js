import React, { useState, useEffect } from 'react';
import Avatar from './components/Avatar';
import PartList from './components/PartList';
import './components/Character.css'

const total = {
  body: 17,
  eyes: 17,
  eyebrows: 15,
  hair: 73,
  mouth: 24,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [eyebrows, setEyebrows] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouths, setMouths] = useState(0);
  const [hat, setHat] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);

  useEffect(() => {
    handleButtonRanDom()
  }, [])

  const handleButtonRanDom = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setMouths(Math.floor(Math.random() * total.mouth));
    setHat(Math.floor(Math.random() * total.hat));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  }

  return (

    <div className='container'>
      <div className='title'>CHARACTER</div>
      <div className='subtitle'>🛠️CUSTOMIZATION🛠️</div>
      <div className='line'></div>
      <div className='avatar-group'>
        <div>
          <div className="avatar-wrapper">
            <Avatar body={body} eyes={eyes} eyebrows={eyebrows} hair={hair}
              mouths={mouths} hat={hat} glasses={glasses} clothing1={clothing1}
              clothing2={clothing2} clothing3={clothing3}
            />
            <div className='button-center'>
              <button className="button" onClick={() => handleButtonRanDom()}>
                RANDOMIZE
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="list-section">
            <h2>Body</h2>
            <PartList total={total.body} set={setBody} selected={body} path="body" />
          </div>

          <div className="list-section">
            <h2>Eyes</h2>
            <PartList total={total.eyes} set={setEyes} selected={eyes} path="eyes" zoom={2.5} top="35px" />
          </div>

          <div className="list-section">
            <h2>Eyebrows</h2>
            <PartList total={total.eyebrows} set={setEyebrows} selected={eyebrows} path="eyebrows" zoom={2} top="35px" />
          </div>

          <div className="list-section">
            <h2>Hair</h2>
            <PartList total={total.hair} set={setHair} selected={hair} path="hair" />
          </div>

          <div className="list-section">
            <h2>Mouths</h2>
            <PartList total={total.mouth} set={setMouths} selected={mouths} path="mouths" zoom={2.5} top="35px" />
          </div>

          <div className="list-section">
            <h2>Hats</h2>
            <PartList total={total.hat} set={setHat} selected={hat} path="hat" />
          </div>

          <div className="list-section">
            <h2>Glasses</h2>
            <PartList total={total.glasses} set={setGlasses} selected={glasses} path="glasses" />
          </div>

          <div className="list-section">
            <h2>Clothing1</h2>
            <PartList total={total.clothing1} set={setClothing1} selected={clothing1} path="clothing1" />
          </div>

          <div className="list-section">
            <h2>Clothing2</h2>
            <PartList total={total.clothing2} set={setClothing2} selected={clothing2} path="clothing2" />
          </div>

          <div className="list-section">
            <h2>Clothing3</h2>
            <PartList total={total.clothing3} set={setClothing3} selected={clothing3} path="clothing3" />
          </div>

        </div>
      </div>

    </div>

  )
}
export default App

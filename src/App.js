import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5
} from './components/tone.fn';
import playNote from './components/tone.fn'
import {
  eighthNote,
  quarterNote,
  halfNote,
  wholeNote,
  rhythmString
} from './components/rhythm.fn'


window.addEventListener('keydown', playNote);

function play(note) {
  const piano = new Tone.Sampler({
    urls: {
      C4: 'C4.mp3',
      'D#4': 'Ds4.mp3',
      'F#4': 'Fs4.mp3',
      A4: 'A4.mp3',
    },
    release: 1,
    baseUrl: 'https://tone.js.github.io/audio/salamander',
  }).toDestination();
  Tone.loaded().then(() => {
    piano.triggerAttackRelease(`{note}`, 4);
  }); 
}

function App() {
  return (
    <div className="pianoPage">
      <h1>Piano and Rhythms</h1>
      <div className='piano'>
        <div className='white-key' onClick={playC4}>A</div>
        <div className='black-key' onClick={playDb4}>W</div>
        <div className='white-key' onClick={playD4}>S</div>
        <div className='black-key' onClick={playEb4}>E</div>
        <div className='white-key' onClick={playE4}>D</div>
        <div className='white-key' onClick={playF4}>F</div>
        <div className='black-key' onClick={playGb4}>T</div>
        <div className='white-key' onClick={playG4}>G</div>
        <div className='black-key' onClick={playAb4}>Y</div>
        <div className='white-key' onClick={playA4}>H</div>
        <div className='black-key' onClick={playBb4}>U</div>
        <div className='white-key' onClick={playB4}>J</div>
        <div className='white-key' onClick={playC5}>K</div>
      </div>
      <div className='rhythms'>
        <button className='rhythm-button' onClick={eighthNote}><img src='https://imgur.com/IHOVoOR' alt='Eighth Note'></img></button>
        <button className='rhythm-button' onClick={quarterNote}><img src='https://imgur.com/AOCeRrj' alt='Quarter Note'></img></button>
        <button className='rhythm-button' onClick={halfNote}><img src='https://imgur.com/ts9pR4H' alt='Half Note'></img></button>
        <button className='rhythm-button' onClick={wholeNote}><img src='https://imgur.com/eoiRnOg' alt='Whole Note'></img></button>
      </div>
      <div className='play'>
        <button className='play-button' onClick={rhythmString}>Play rhythm</button>
      </div>
    </div>
  );
}

export default App;

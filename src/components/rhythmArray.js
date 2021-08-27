import * as Tone from 'tone';
import { Loop, Player } from 'tone';

let rhythmArray = []
let x = 0;

const sine = new Tone.Oscillator(220, 'sine').toMaster();
const now = Tone.now()
	
export function pushWholeNote() {
	rhythmArray.push(sine.start(now + x), sine.stop(now + (x + 3.9)));
	console.log('x stop value', x);
	console.log(rhythmArray);
	x += 4;
	console.log('x next note', x);
};

export function pushHalfNote() {
	rhythmArray.push(sine.start(now + x), sine.stop(now + (x + 1.9)));
	console.log('x stop value', x);
	console.log(rhythmArray);
	x += 2;
	console.log('x next note', x);
};

export function pushQuarterNote() {
	rhythmArray.push(sine.start(now + x), sine.stop(now + (x + 0.9)));
	console.log('x stop value', x);
	console.log(rhythmArray);
	x += 1;
	console.log('x next note', x);
};

export function push8thNote() {	
	rhythmArray.push(sine.start(now + x), sine.stop(now + (x + 0.4)));
	console.log('x stop value', x);
	console.log(rhythmArray);
	x += 0.5;
	console.log('x next note', x)
};

export function push16thNote() {
	rhythmArray.push(sine.start(now + x), sine.stop(now + (x + 0.15)));
	console.log('x stop value', x);
	console.log(rhythmArray);
	x += 0.25;
	console.log('x next note', x);
};

export function triggerSounds() {
	console.log(...rhythmArray);
	Player.start(...rhythmArray);
}
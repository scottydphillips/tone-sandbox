import * as Tone from 'tone';

export function eighthNote() {
	const synth = new Tone.Synth().toDestination();
	synth.triggerAttackRelease('C4', '8n');
}

export function quarterNote() {
	const synth = new Tone.Synth().toDestination();
	synth.triggerAttackRelease('C4', '4n');
}

export function halfNote() {
	const synth = new Tone.Synth().toDestination();
	synth.triggerAttackRelease('C4', '2n');
}

export function wholeNote() {
	const synth = new Tone.Synth().toDestination();
	synth.triggerAttackRelease('C4', '1n');
}

export function rhythmString() {
	var sine = new Tone.Oscillator(440, 'sine').toMaster();
	sine.start(0);
	sine.stop(2);

	var now = Tone.now();
	sine.start(now);
	sine.stop(now + 2);
	sine.start(now + 3);
	sine.stop(now + 4);
	sine.start(now + 5);
	sine.stop(now + 5.4);
	sine.start(now + 5.5);
	sine.stop(now + 5.9);
}
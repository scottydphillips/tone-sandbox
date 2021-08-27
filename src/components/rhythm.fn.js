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

	var now = Tone.now();
	// sine.start(now);
	// sine.stop(now + 2);
	// sine.start(now + 3);
	// sine.stop(now + 4);
	// sine.start(now + 5);
	// sine.stop(now + 5.4);
	// sine.start(now + 5.5);
	// sine.stop(now + 5.9);
	// sine.start(now + 6);
	// sine.stop(now + 6.15);
	// sine.start(now + 6.25);
	// sine.stop(now + 6.4);
	// sine.start(now + 6.5);
	// sine.stop(now + 6.65);
	// sine.start(now + 6.75);
	// sine.stop(now + 6.9);
	// sine.start(now + 7);
	// sine.stop(now + 7.9);

	var banana = [
		sine.start(now),
		sine.stop(now+0.9),
		sine.start(now+1),
		sine.stop(now+2.9),
		sine.start(now+3),
		sine.stop(now+3.9)
	]
}

export function toneLoop() {
	const synthA = new Tone.Synth().toDestination();
	const synthB = new Tone.Synth().toDestination();
	const loopA = new Tone.Loop(time => {
		synthA.triggerAttackRelease('A3', '8n', time);
		synthA.triggerAttackRelease('B3', '4n', time);
		synthA.triggerAttackRelease('A3', '16n', time);
		synthA.triggerAttackRelease('B3', '16n', time);
		synthA.triggerAttackRelease('A3', '8n', time);
	}, '1m').start(0);
	// const loopB = new Tone.Loop(time => {
	// 	synthB.triggerAttackRelease('Db4', '2n', time);
	// }, '1m').start('2n');
	Tone.Transport.start();
}
const scribble = require('scribbletune');

const theChords = scribble.getChordsByProgression('C3 minor', 'i');
const bassChords = scribble.getChordsByProgression('C2 minor', 'i');

  const chordClips = 
    scribble.clip({
      pattern: 'x_x-'.repeat(4),
      notes: scribble.arp({
        chords: theChords,
        count: 4,
      }),
      accent: 'x-xx--xx'
    });

  const padClip = 
    scribble.clip({
      pattern: 'x___________'.repeat(1),
      notes: scribble.arp({
        chords: theChords,
        count: 4,
      }),
      accent: 'x-xx--xx'
    });

const bd = scribble.clip({
	notes: 'c2',
	pattern: '[xx][x[xx]]x[x[-x]]'.repeat(4)
});

const snare = scribble.clip({
	notes: 'd2', 
	pattern: '-x-x'.repeat(4)
});

const chh = scribble.clip({
	notes: 'a#2', 
	pattern: '[[xx]-][-x][[xx]-][-x]'.repeat(4)
});


var clips = [
	bd,
	snare,
	chh,
	[].concat(...chordClips)
	,[].concat(...padClip)
];
scribble.midi(clips, 'test.mid');


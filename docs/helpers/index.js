export const getId = (mode, array, value) => {
  let i = array.length;
  let id;
  mode ? id = "idSecond" : id = "idFirst";
  while (i--) {
    if (array[i].symbol === value) {
      return array[i][id];
    }
  }
};

export const getSymbol = (mode, array, value) => {
  let i = array.length;
  let id;
  mode ? id = "idSecond" : id = "idFirst";
  while (i--) {
    if (array[i][id] === value || array[i].symbol === value) {
      return array[i].symbol;
    }
  }
};

export const bank = [
  {
    keyCode: 81,
    symbol: 'q',
    idFirst: 'Heater-1',
    idSecond: 'Chord-1',
    urlFirst: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    urlSecond: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  }, {
    keyCode: 87,
    symbol: 'w',
    idFirst: 'Heater-2',
    idSecond: 'Chord-2',
    urlFirst: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    urlSecond: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  }, {
    keyCode: 69,
    symbol: 'e',
    idFirst: 'Heater-3',
    idSecond: 'Chord-3',
    urlFirst: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    urlSecond: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  }, {
    keyCode: 65,
    symbol: 'a',
    idFirst: 'Heater-4',
    idSecond: 'Shaker',
    urlFirst: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    urlSecond: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  }, {
    keyCode: 83,
    symbol: 's',
    idFirst: 'Clap',
    idSecond: 'Open-HH',
    urlFirst: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    urlSecond: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  }, {
    keyCode: 68,
    symbol: 'd',
    idFirst: 'Open-HH',
    idSecond: 'Closed-HH',
    urlFirst: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    urlSecond: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  }, {
    keyCode: 90,
    symbol: 'z',
    idFirst: "Kick-n'-Hat",
    idSecond: 'Punchy-Kick',
    urlFirst: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    urlSecond: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }, {
    keyCode: 88,
    symbol: 'x',
    idFirst: 'Kick',
    idSecond: 'Side-Stick',
    urlFirst: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    urlSecond: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  }, {
    keyCode: 67,
    symbol: 'c',
    idFirst: 'Closed-HH',
    idSecond: 'Snare',
    urlFirst: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    urlSecond: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }];

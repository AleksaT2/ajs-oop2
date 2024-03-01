import Character from '../Character.js';
import Bowman from '../Bowman.js';

test('Too short name', () => {
  expect(
      () => new Character('O', 'Bowman'),
  ).toThrow('Invalid name length');
});

test('Too long name', () => {
  expect(
      () => new Character('LooooooongName', 'Daemon'),
  ).toThrow('Invalid name length');
});


test('Inflict damage to character', () => {
  const testChar = new Bowman('Bowy');
  testChar.damage(50);
  expect(testChar).toEqual({
      name: 'Bowy',
      type: 'Bowman',
      health: 62.5,
      level: 1,
      attack: 25,
      defence: 25,
  });
});

test('The value of health cannot be negative', () => {
  const testChar = new Bowman('Bowy');
  testChar.health = 0;
  testChar.damage(50);
  expect(testChar.health).toEqual(0);
});

test('Go to the next level', () => {
  const testChar = new Bowman('Bowy');
  testChar.levelUp();
  expect(testChar).toEqual({
      name: 'Bowy',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
  });
});

test('Go to the next level with zero health', () => {
  const testChar = new Bowman('Bowy');
  testChar.health = 0;
  expect(() => testChar.levelUp()).toThrow(
      'You cannot raise the level with zero health',
  );
});

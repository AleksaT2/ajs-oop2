import Bowman from '../Bowman.js';

test('Bowman', () => {
  const bowman = new Bowman('Bowy');
  expect(bowman).toEqual({
      name: 'Bowy',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
  });
});

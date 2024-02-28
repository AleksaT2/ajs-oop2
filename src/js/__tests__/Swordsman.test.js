import Swordsman from '../Swordsman.js';

test('Swordsman', () => {
  const swordsman = new Swordsman('Swordy');
  expect(swordsman).toEqual({
      name: 'Swordy',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  });
});

import Magician from '../Magician.js';

test('Magician', () => {
  const magician = new Magician('Magy');
  expect(magician).toEqual({
      name: 'Magy',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  });
});

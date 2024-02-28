import Daemon from '../Daemon.js';

test('Daemon', () => {
  const daemon = new Daemon('Daemy');
  expect(daemon).toEqual({
      name: 'Daemy',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  });
});

import orderByProps from '../orderByProps.js';

test('Тест функции orderByProps - сортировка нужна', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const sortKey = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }];
  expect(orderByProps(obj, sortKey)).toEqual(expected);
  console.log(orderByProps(obj, sortKey));
  console.log(expected);
});

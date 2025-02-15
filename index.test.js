const sayHello = require('./index');

test('Debe retornar "Hola, mundo!"', () => {
    expect(sayHello()).toBe("Hola, mundo!");
});
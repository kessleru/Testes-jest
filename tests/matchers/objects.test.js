// toEqual nao possui verificação de tipos
test('object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// toStrictEqual vai possuir verificacao de tipos
test('pizzaria', () => {
  // objeto literal
  class Pizza {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  // ❌ FAIL -> class pizza (objeto literal) e diferente da intancia pizza
  expect(new Pizza('Flaming Sizzler', 899)).toStrictEqual({
    name: 'Flaming Sizzler',
    price: 899,
  });

  // ❌ FAIL -> class pizza (objeto literal) e diferente da intancia pizza
  expect(new Pizza('Flaming Sizzler', 899)).not.toStrictEqual({
    name: 'Flaming Sizzler',
    price: 899,
  });
});

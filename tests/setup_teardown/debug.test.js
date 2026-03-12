// Use test.only para estar executando apenas aquele teste
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});

test('this test will not run', () => {
  expect('A').toBe('A');
});

// Se você tiver um teste que muitas vezes falha quando ele é executado como parte de um conjunto maior, mas não falha quando você o repete sozinho, é uma boa aposta que algo de um teste diferente está interferindo com ele. Muitas vezes você pode corrigir isso limpando algum estado compartilhado com beforeEach. Se não tiver certeza se algum estado compartilhado está sendo modificado, você também pode tentar um beforeEach que registra dados.
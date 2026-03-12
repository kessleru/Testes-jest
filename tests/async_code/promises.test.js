// Ao retornar uma promisse do meu teste, o jest vai esperar ser resolvida. Se falhar o teste tambem vai.

// Esse exemplo o fetch e para retornar uma string 'peanut butter'
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

// Utilizando o Async/Await com try catch
// Nesse teste ele passa se o fetch falhar e entra no catch
test('the fetch fails with an error', async () => {
  expect.assertions(1); // Garante que o catch vai ser executado

  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch('error');
  }
});

// Forma mais usada, o .resolves e o .rejects
test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData()).rejects.toMatch('error');
});
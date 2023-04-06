import test from 'node:test';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

await test('multi level test', { concurrency: 4 }, async (t) => {
  await Promise.all([
    t.test('subtest 1', async () => {
    console.log('1');
    await sleep(1000);
    console.log('11');
  }),

  t.test('subtest 2', async () => {
    console.log('2');
    await sleep(1000);
    console.log('22');
  }),
  t.test('subtest 1', async () => {
    console.log('1');
    await sleep(1000);
    console.log('11');
  }),

  t.test('subtest 2', async () => {
    console.log('2');
    await sleep(1000);
    console.log('22');
  })
  ])
});
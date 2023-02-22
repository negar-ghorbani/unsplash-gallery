import { describe, expect, test } from '@jest/globals';
// import * as fetcher from './fetcher';

// // const mockData = 'cats';
// const url = `https://google.com/`;

// describe('fetcher module', () => {
//   test.only('should call fetchApi', async () => {
//     jest.spyOn(fetcher.useSuggestion, 'fetchAPI')
//     expect(fetcher.fetchAPI).toHaveBeenCalled()
//   })
//   test('should respond with 200', async () => {
//     const returnedValue = await fetcher.fetchAPI(url)
//     expect(returnedValue.status).toBe(200)
//   })
//   test('fetchUser should get data from the fetcher and return it', (done) => {
//    fetcher.fetchAPI(url).then(data => {
//      expect(data).toEqual({
//        user: 'Ahsan'
//       });
//       done();
//     })
//   });
// });

describe('true be, or not true be', () => {
  test('that is the question', async () => {
    expect(true).toBe(true);
  });
});

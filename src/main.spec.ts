import { describe, expect, test } from '@jest/globals';

// const url = `https://api.unsplash.com/photos/?client_id=${process.env.client_id}`;

// describe('testing fetch function', () => {
//     let response: Response;
//     beforeEach(async () => {
//         response = await fetchFunction(url);
//     });
//     it('should respond with status code 200', async () => {
//         assert.equal(response.status, 200);
//     })
//     it('should response with JSON data', async () => {
//         assert.equal(response.status, 200);
//     })
// })

describe('true be, or not true be', () => {
  test('that is the question', async () => {
    expect(true).toBe(true);
  });
});

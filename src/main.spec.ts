import { describe, expect, test } from '@jest/globals';

describe('only testing if jest is working', () => {
    test('true to be true', async () => {
        expect(true).toBe(true);
    });
});

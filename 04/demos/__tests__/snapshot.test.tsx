test('snapshot a date', () => {
    const favoriteDate = new Date(Date.UTC(2000,0,1));
    expect(favoriteDate.toISOString()).
    toMatchInlineSnapshot(`"2000-01-01T00:00:00.000Z"`);
});

export {};
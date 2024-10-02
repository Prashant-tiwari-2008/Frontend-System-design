const sortdata = require('./app.js');

test('sort the data as per age', () => {
    const sortedData = sortdata();
    expect(sortedData[0].user).toBe('chiki');
    expect(sortedData[sortedData.length - 1].user).toBe('prakash')
})

test('testing if the sorted data has length of 7', () => {
    const sortedData = sortdata();
    expect(sortedData).toHaveLength(7);
})
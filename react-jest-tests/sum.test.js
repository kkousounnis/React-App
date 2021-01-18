const sum = require('./sum.js')

test("Adds 5+11 to equal 16", ()=>{
    expect(sum(5,11)).toBe(16);
});
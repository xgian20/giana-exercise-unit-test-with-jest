test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar} = require('./app.js');
    // Test case for fromEuroToDollar
    const dollars = fromEuroToDollar(3.5);
    const expectedEuroToDollar = 3.5 * 1.07; 
    expect(dollars).toBe(expectedEuroToDollar);
});

test("One dollar should be 546.7 Yen", function() {
    const { fromDollarToYen} = require('./app.js');
    // Test case for fromDollarToYen
    const yen = fromDollarToYen(5);
    const expectedDollarToYen = 5 * 109.34;
    expect(yen).toBe(expectedDollarToYen);
});

test("One Yen should be 0.67 dollars", function() {
    const {fromYenToPound } = require('./app.js');
    // Test case for fromYenToPound
    const pound = fromYenToPound(100);
    const expectedYenToPound = 100 * 0.0067;
    expect(pound).toBe(expectedYenToPound);
});

const isCredentialCorrect = require('./auth')

test('should be not null', ()=>{
    expect(isCredentialCorrect).toBeDefined();
});

test('credentials should be correct', ()=>{
    expect(isCredentialCorrect('kodego@test.com', '12345678')).toBe(true);
});



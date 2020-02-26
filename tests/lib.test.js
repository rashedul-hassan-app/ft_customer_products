const lib = require('../lib');

describe('Basic checks', ()=>{
    it(' should check hello world - test', function()
    {
        const result = lib.hello();
        expect(result).toBe(42);
    });
});

describe('Main Tests', ()=>{
    const url = ['https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json'];
    
    it('should test it can accept urls', ()=>{
        lib.requestMultipleUrls(url).then(a=>console.log(a));

        // expect(()=>{lib.requestMultipleUrls(null)}).toThrow(new Error('Error: Null or undefined'));
    });
});

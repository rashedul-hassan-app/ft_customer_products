const lib = require('../lib');
const nock = require('nock');

describe('Basic checks', ()=>{
    it(' should check hello world - test', function()
    {
        const result = lib.hello();
        expect(result).toBe(42);
    });
});


describe('Http Status Invalid Status code Tests', ()=>{
    const url = ['https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json'];
    
    it('should break when status code is 100 ', () => {
        nock(/http/).get(/ft/).reply(100);

        lib.requestMultipleUrls(url).catch(res => expect(res.toString()).toMatch('Error: Failed to get data. Status code 100'));
    });

    it('should break when status code is 300 ', () => {
        nock(/http/).get(/ft/).reply(300);

    lib.requestMultipleUrls(url).catch(res => expect(res.toString()).toMatch('Error: Failed to get data. Status code 300'));
    });

    it('should break when status code is 199 ', () => {
        nock(/http/).get(/ft/).reply(199);
    
    lib.requestMultipleUrls(url).catch(res => expect(res.toString()).toMatch('Error: Failed to get data. Status code 199'));
    });

    it('should break when status code is 300 ', () => {
        nock(/http/).get(/ft/).reply(400);
    
    lib.requestMultipleUrls(url).catch(res => expect(res.toString()).toMatch('Error: Failed to get data. Status code 400'));
    });

    it('should break when status code is 500 ', () => {
        nock(/http/).get(/ft/).reply(500);
    
    lib.requestMultipleUrls(url).catch(res => expect(res.toString()).toMatch('Error: Failed to get data. Status code 500'));
    });
});


describe('Valid code, but generic error', ()=>{
    const url = ['https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json'];
    
    it('should break when a generic error occurs', () => {
      nock(/http/).get(/ft/).replyWithError('Something happened');

     lib.requestMultipleUrls(url).catch(res => expect(res.toString()).toMatch('Error: Something happened'));

    });
});


describe('Successful Run', ()=>{
    const url = ['https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json'];
    
    it('should be successful on a good url', () => {
      nock(/http/).get(/ft/).reply(200, 'Cool JSON');

     lib.requestMultipleUrls(url).then(res => expect(res.toString()).toMatch('Cool JSON'));

    });
});

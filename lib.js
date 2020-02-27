
function hello()
{
    console.log('hello world');
    return 42;
}


function requestMultipleUrls(urls)
{
    //  Check for null params
    if (!urls)
        throw new Error('A set of Url/s is required');

    const all_my_promises = [];

    //  Loop through all the urls given to the function
    for (var i = 0; i < urls.length; i++)
    {
        const one_promise = new Promise(function(resolve, reject)
        {
            //  Pick https if url consists of https, or http if url consist of http
            const library_to_use = urls[i].startsWith('https') ? require('https') : require('http');

            const request = library_to_use.get(urls[i], function(response)
            {
                //  Only accept requests that has 200 =< status code < 300 
                if (!(response.statusCode >= 200 && response.statusCode < 300))
                {
                    reject(new Error('Failed to get data. Status code ' + response.statusCode));
                }

                const datablock = [];

                response.on('data', (anydata) => datablock.push(anydata));
                response.on('end', () => resolve(datablock.join('')));
            });

            request.on('error', (error)=>reject(error));

        });

        //  Keep adding promises to a result array
        all_my_promises.push(one_promise);
    }   

    return Promise.all(all_my_promises);
}

module.exports = {hello, requestMultipleUrls};
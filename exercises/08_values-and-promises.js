function attachTitle(promiseResult){
    return 'DR. ' + promiseResult;
}

Promise.resolve('MANHATTAN')
.then(attachTitle)
.then(console.log)
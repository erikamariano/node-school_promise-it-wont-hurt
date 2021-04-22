new Promise((resolve, reject) => {
    resolve('I FIRED');
    reject(Error('I DID NOT FIRE'));
}).then((resultPromise) => { console.log(resultPromise) } , onRejected);

//'resolve' method is defined first, so 'reject' is never called (it stays as undefined).

function onRejected(error){
    console.log(error.message);
}
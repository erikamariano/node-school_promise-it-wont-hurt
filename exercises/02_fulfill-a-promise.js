let promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 300);
}).then((fulfill) => {
    console.log(fulfill);
})
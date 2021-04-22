let promise = new Promise((fulfilled, reject) => {
    setTimeout(() => {
        reject(Error('REJECTED!'));
    }, 300);
})

promise.then(undefined, onReject);
//First argument is undefined because the fulfill method was never called.
//There in no need to put parenthesis on "onReject" because it is already considered a function to call.

function onReject(error){
    console.log(error.message);
}
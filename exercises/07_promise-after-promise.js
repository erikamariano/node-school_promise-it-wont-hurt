first()
.then((secretValue) => {
    return second(secretValue)
})
.then((secretValue) => {
    onFulfilled(secretValue)
})

function onFulfilled(value){
    console.log(value)
}


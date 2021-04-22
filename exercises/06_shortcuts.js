let prom1 = Promise.resolve('GOT');
prom1.then((result) => console.log(result + ' IT'));
// GOT IT

let prom2 = Promise.reject(new Error('Houstoun'))
prom2.catch((err) => { 
    console.log(err.message + ", we have a problem") 
});
// Houstoun, we have a problem
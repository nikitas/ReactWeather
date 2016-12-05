function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('London', function (err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('succes', temp);
    }

});

function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            resolve(11);
            reject('not found');
        },1000);
        // resolve(88);
        // reject('city not found from promise');
    });
}

getTempPromise('London').then(
    (temp) => {
        console.log('promise success', temp);
    },
    (err) => {
        console.log('error from promise', err);
    }
);

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('A & B need to be numbers');
        }
    });
}

addPromise(2, 4).then(
    sum => console.log('succes', sum),
    err => console.log('error', err)
);
addPromise(2, 'ff').then(
    sum => console.log('succes', sum),
    err => console.log('error', err)
);

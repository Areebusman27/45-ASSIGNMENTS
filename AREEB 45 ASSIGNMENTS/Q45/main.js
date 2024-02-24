function car_info(manufacturer, model, key) {
    return {
        manufacturer: manufacturer,
        model: model,
        key: key,
    };
}
var mycar = car_info('honda', '2004', 'hybrid');
console.log(mycar);

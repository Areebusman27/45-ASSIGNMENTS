type car ={
    manufacturer: string
    model: string
    key: string
}

function car_info (manufacturer: string ,model: string , key: string):car{
    return{ 
        manufacturer,
        model,
        key,
    }
}

const mycar: car = car_info ('honda','2004','hybrid')
console.log(mycar)

function sandwich (...items: string[]):void{
    console.log('sandwich order:')

    for (let i =0; i< items.length; i++){
        console.log(`${items[i]}`)
    }
}
sandwich('chicken','mayo','egg')
sandwich('chicken','butter','beef')
sandwich('chicken','mayo','cheese')

let users : string [] = ['admin','Eric','Ali','Areeb']
for (let user of users){
    if (user === 'admin'){
        console.log(' Hello admin, would you like to see a status report?')
    } else {
        console.log( 'Hello thank you for logging again')
    }

}
// Q14
let guestList : string [] = ['Phuppo','Khala','Mamu']
console.log('I would like to invite my ' +guestList[0]+ ' for dinner.')
console.log('I would like to invite my ' +guestList[1]+ ' for dinner.')
console.log('I would like to invite my ' +guestList[2]+ ' for dinner.')
// Q15
guestList.splice(2,1,'Taya')
console.log(guestList)
console.log('I would like to invite my ' +guestList[0]+ ' for dinner.')
console.log('I would like to invite my ' +guestList[1]+ ' for dinner.')
console.log('I would like to invite my ' +guestList[2]+ ' for dinner.')
//Q16
guestList.unshift('Mamu')
guestList.push('Friends')
guestList.splice(1,0,'Sister')
console.log(guestList)
console.log('I have found a bigger table.')
//17
console.log("Sorry I can't invite you to dinner")
guestList.splice(0,1)
guestList.splice(1,1)
guestList.splice(-1,1)
guestList.splice(-2,1)
console.log(guestList)
console.log('I have invited only '+guestList[0]+ ' and '+ guestList[1])
// Removing the last two guests
guestList.splice(0,1)
guestList.splice(-1,1)
console.log(guestList)

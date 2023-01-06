function houseOne() {
    console.log("House1, Your paper has been delivered!")
}
function houseTwo() {
    setTimeout(() => console.log('House two,your paper has been delivered!'), 0) 
}
function houseThree() {
    console.log('House three,your paper has been delivered!')
}
houseOne()
houseTwo()
houseThree()
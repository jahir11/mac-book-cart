// handle event memory cost
document.getElementById('8gb-memory').addEventListener('click', function(){
    extraMemory.innerText = '0' ;
    updateTotal()
})
document.getElementById('16gb-memory').addEventListener('click', function(){
    extraMemory.innerText = '180';
    updateTotal()
})
// handle storage cost event
document.getElementById('256gb-storage').addEventListener('click', function(){
    extraStorage.innerText = '0'
    updateTotal()
})
document.getElementById('512gb-storage').addEventListener('click', function(){
    extraStorage.innerText = '100'
    updateTotal()
})
document.getElementById('1tb-storage').addEventListener('click', function(){
    extraStorage.innerText = '180'
    updateTotal()
})
// handle delivery cost event
document.getElementById('free-delivery').addEventListener('click', function(){
    delivery.innerText = '0'
    updateTotal()
})
document.getElementById('charge-delivery').addEventListener('click', function(){
    delivery.innerText = '20'
    updateTotal()
})
// extra memory cost
const extraMemory = document.getElementById('extra-memory-cost')
// extra storage cost
const extraStorage = document.getElementById('extra-storage-cost')
// delivery cost
const delivery = document.getElementById('delivery-cost') 
// best price
const bestPrice = document.getElementById('best-price')
// handle event total price
 function updateTotal(){
    const extraMemoryCost = parseInt(extraMemory.innerText)
    const extraStorageCost = parseInt(extraStorage.innerText)
    const deliveryCost = parseInt(delivery.innerText)
    const bestPriceNum = parseInt(bestPrice.innerText)
    const totalCost = bestPriceNum + deliveryCost + extraStorageCost + extraMemoryCost;
    // total price
const totals = document.getElementsByClassName('total-price')
for(const total of totals){
    total.innerText = totalCost;
    }
return totalCost; 
}

//handle pomo code event
document.getElementById('apply').addEventListener('click', function(){
const input = document.getElementById('input').value
const total = document.getElementById('total')
const totalText = total.innerText
const totalAmount = parseInt(totalText)
if(input.includes('stevekaku')){
    document.getElementById('apply').disabled = true;
    const perTotal = totalAmount /100 * 20 ;
    const grandTotal = totalAmount - perTotal;
    total.innerText = grandTotal;
    return grandTotal;
 }
})


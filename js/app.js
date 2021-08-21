// Total Price function start 
function totalPrice() {
    const bestPriceAmount = parseInt(document.getElementById('main-price').innerText);
    const memoryCostAmount = parseInt(document.getElementById('memory-cost').innerText);
    const storageCostAmount = parseInt(document.getElementById('storage-cost').innerText);
    const delivaryChargeAmount = parseInt(document.getElementById("delivary-charge").innerText);

    const totalPrice = document.getElementById('total-price');
    const discountPrice = document.getElementById('discount');
    const totalPriceNumber = bestPriceAmount + memoryCostAmount + storageCostAmount + delivaryChargeAmount;
    totalPrice.innerText = totalPriceNumber;
    discountPrice.innerText = totalPriceNumber;
}
// Total Price function end

// Extra memory cost start
document.getElementById('extra-memory').addEventListener('click', function () {
    const extraCost = document.getElementById('memory-cost');
    extraCost.innerText = parseInt(180);
    totalPrice();
});

document.getElementById('no-memory-cost').addEventListener('click', function () {
    const extraCost = document.getElementById('memory-cost');
    extraCost.innerText = parseInt(0);
    totalPrice();
});
// Extra memory cost end

// Extra storae cost start
document.getElementById('no-storae-cost').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = parseInt(0);
    totalPrice();
});
document.getElementById('extra-storage').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = parseInt(100);
    totalPrice();
});
document.getElementById('extra-storage-1TB').addEventListener('click', function extraCost() {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = parseInt(180);
    totalPrice();
});
// Extra storae cost end

// Extra storae cost start
document.getElementById('noDelivaryCharge').addEventListener('click', function storageCost() {
    const DelivaryCost = document.getElementById('delivary-charge');
    DelivaryCost.innerText = parseInt(0);
    totalPrice();
});
document.getElementById('DelivaryCharge').addEventListener('click', function DelivaryCost() {
    const DelivaryCost = document.getElementById('delivary-charge');
    DelivaryCost.innerText = parseInt(20);
    totalPrice();
});
// Extra storae cost end
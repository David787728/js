let menu = prompt('1.Coffee - 100AMD \n 2.tea - 150AMD \n 3.jur - 50AMD \n 4.cat - 200AMD \n');
let prices = {
    coffee: 100,
    tea: 150,
    jur: 50,
    cat: 200,
};
if(Number(menu) === 1) {
    const enteredPrice = prompt('you have choosed coffee, please insert 100AMD');
    if (Number(enteredPrice)< prices.coffee){
        alert('your entered amount is less than coffee price');
    } else if(Number(enteredPrice) > prices.coffee) {
         alert(`Please take your change: ${Number(enteredPrice) - prices.coffee}`);
         alert('Your coffee is ready !!!');
    } else {
        alert('Your coffee is ready !!!');
    }
}else if(Number(menu) === 2){
    const enteredPrice = prompt('you have choosed tea, please insert 150');
    if (Number(enteredPrice)< prices.tea){
        alert('your entered amount is less than tea price');
    } else if(Number(enteredPrice) > prices.tea) {
         alert(`Please take your change: ${Number(enteredPrice) - prices.tea}`);
         alert('Your tea is ready !!!');
    } else {
        alert('Your tea is ready !!!');
    }
    
}else if(Number(menu) === 3){
    const enteredPrice = prompt('you have choosed jur, please insert 50AMD');
    if (Number(enteredPrice)< prices.jur){
        alert('your entered amount is less than jur price');
    } else if(Number(enteredPrice) > prices.jur) {
         alert(`Please take your change: ${Number(enteredPrice) - prices.jur}`);
         alert('Your jur is ready !!!');
    } else {
        alert('Your jur is ready !!!');
    }
}else if(Number(menu) === 4){
    const enteredPrice = prompt('you have choosed cat, please insert 200AMD');
    if (Number(enteredPrice)< prices.jur){
        alert('your entered amount is less than cat price');
    } else if(Number(enteredPrice) > prices.cat) {
         alert(`Please take your change: ${Number(enteredPrice) - prices.cat}`);
         alert('Your cat is ready !!!');
    } else {
        alert('Your cat is ready !!!');
    }


}else {
    alert('No such item, please try again')
}
function selectDrink(drink) {
    const ame_list = ["iceamericano", "americanoice", "hotamericano", "americanohot", "americano", "anything"]
    const latte_list = ["icecafelatte", "cafelatteice","hotcafelatte", "cafelattehot","cafelatte" ]
    
    if (ame_list.includes(drink)) return 4500;
    if (latte_list.includes(drink)) return 5000;
}

function solution(order) {
    return order.reduce((sum, drink) => sum += selectDrink(drink), 0)
}
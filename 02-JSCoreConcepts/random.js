let fun = () => {
    var array = new Array(10);

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 15) + 5;   
    }

    return array;
}

fun().forEach(el => console.log(el))
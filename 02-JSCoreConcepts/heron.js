// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let fun = () => {
    let p = Math.sqrt(
        (a + b + c) *
        (a + b - c) *
        (a - b + c) *
        (-a + b + c)
    );

    return p / 4;
};

console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${fun ()}`);
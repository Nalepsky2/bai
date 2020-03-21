names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.students = names;
    }

    startWith(letter){
        // names (array) which starts with the letter
        return new Students(this.students.filter(el => el.startsWith(letter)));
    }

    sort() {        
        return new Students(this.students.sort());
    }

    get() {
        return new Students(this.students);
    }

    getFirst(n) {
        return new Students(this.students.slice(0, n));
    }
}

students = new Students(names);
console.log("get");
console.log(students.get());
console.log("\n");

console.log("sort");
console.log(students.sort());
console.log("\n");

console.log("startWith");
console.log(students.startWith('P'));
console.log("\n");

console.log("startWith + sort");
console.log(students.startWith('M').sort());
console.log("\n");

console.log("sort + getFirst");
console.log(students.sort().getFirst(4));
console.log("\n");

console.log("startWith + sort + getFirst");
console.log(students.startWith('M').sort().getFirst(2));
console.log("\n");

console.log("get");
console.log("get" + students.get());




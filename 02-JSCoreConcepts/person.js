class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    getFullName(){
        return this.name + " " + this.surname.toUpperCase();
    }

    getInitials(){
        return this.getInitial(this.name) + this.getInitial(this.surname);
    }

    getInitial(s){
        return s.toUpperCase().charAt(0) + ".";
    }
}

janNowak = new Person("Jan", "Nowak");
marekNalepka = new Person("Marek", "Nalepka");

console.log(janNowak.getFullName());
console.log(janNowak.getInitials());

console.log(marekNalepka.getFullName());
console.log(marekNalepka.getInitials());
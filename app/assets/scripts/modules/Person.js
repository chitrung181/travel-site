class Person {
    constructor(fullName,favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log("hi there general " + this.name +
            ", this color is " + this.favoriteColor);
    }
}

export default Person;
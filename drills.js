function createGreeting(name, age) {
    const yearOfBirth = 2019 - age;
    return "Hi, my name is " + name + " and I am " + age + " years old. I was born in " + yearOfBirth + ".";
}

function getYearOfBirth(age) {
    return 2019 - age;
}

const greeting1 = createGreeting();
console.log(greeting1);
//Write a program that takes a string and prints out the number of vowels in the string.
function vow(str) {
    const s = ["a", "e", "i", "o", "u"];
    let c = 0;
    for (let i = 0; i < str.length; i++) {
        if (s.includes(str[i].toLowerCase())) {
            c++;
        }
    }
    return c;
}

console.log(vow("Arnob"));


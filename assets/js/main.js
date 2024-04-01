// B1: include(): Check if the string includes in the sentence
// let string = "Apple in the pie";
// let check = string.includes("pie");
// console.log(check);


checkString = (a,b) => {
    let result = a.includes(b);
    return result;
}

console.log(checkString("Apple in my eyes", "Yo"));

// B2: 
// slice(): String cut (starting position, ending position)
// .length: Check the length of the string
// let string = "Hello12345"
// let check = string.slice(0, 8);

// console.log(check);

// let string = "Hello12345"
// let check = string.length;

// console.log(check);

shortenString = (a) => {
    let checkLength = a.length;
    if (checkLength <= 8) {
        return a;
    } else {
        let result = a.slice(0, 8);
        return (result + "...");
    }
}

console.log(shortenString("Hello1234"))


// BT3:
checkPalidrome = (a) => {
    let checkLength_2 = a.length;
    for (let i = 0; i < checkLength_2; i++) {
        if(a[i] !== (a[checkLength_2 - 1 - i])) {
            return false;
        }
    }
    return true;
}

console.log(checkPalidrome("aA11Aa"));

// BT4: Bai nay e xem chatGPT e k hieu lam, co gi a chua bai nay truc tiep duoc k a :))

// BT5: \s = space
convertSnakeCase = (a) => {
    let convert_1 = a.toLowerCase();
    let convert_2 = convert_1.replace(/[\s]/g, "_") // Turn space into _
    if (convert_2[0] == "_") {
        return convert_2.slice(1);
    }
    return convert_2;
}

console.log((convertSnakeCase("Xin Chao Cac BAN")));


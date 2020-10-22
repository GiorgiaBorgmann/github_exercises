arr = ["Hi", "you", "have", "kids"];
sentence = ""
for (let i = 0; i < arr.length; i++) {

    if (i === 3) {
        sentence += "four" + " "
    }
    sentence += arr[i] + " "
}
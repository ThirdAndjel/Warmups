var bob = function(input) {
    if(input.charAt(input.length - 1) === "?") {
    console.log("Sure.");
    } else if(input.charAt(input.length - 1) === ".") {
    console.log("Whatever.");
    } else if(input === input.toUpperCase()) {
    console.log("Woah, chill out!");
    } else if(input === "") {
    console.log("Fine. Be that way!");
    }
};

bob("YELL!");
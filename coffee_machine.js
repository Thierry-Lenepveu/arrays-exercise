function askItem (question, firstChoice, altChoice) {
    let item = ""
    do {
        item = prompt(question);
        if (item == null) {
            break;
        }
        item.toLowerCase();
        if (item === "abort") {
            break;
        } 
    } while(item !== firstChoice && item !== altChoice);

    if (item == null || item === "abort") {
        throw new Error("Process aborted.");
    }
    
    return item;
}

let drink = askItem("thé ou café?", "thé", "café");

let withOrWithoutSugar = askItem("avec ou sans sucre?", "avec", "sans");

let milk = askItem("avec ou sans lait?", "avec", "sans") === "avec";

let vegeMilk = "";
if (milk) {
    vegeMilk = askItem("lait vegetal?", "oui", "non") === "oui";
}

let commandArray = [drink, withOrWithoutSugar + " sucre"];

if (milk) {
        commandArray.push(vegeMilk ? "lait végétal" : "lait de vache");
    }

document.getElementsByTagName("body")[0].innerHTML += "<h1>"+commandArray.join(", ")+"</h1>";
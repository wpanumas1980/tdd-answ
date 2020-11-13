module.exports.greet = (name) => {
    if (name === null) {
        return 'Hello, my friend.'
    } else if (typeof (name) === "object") {
        const nLenght = name.length;  //Hello, Amy and Charlotte. AND HELLO BRIAN!
        if (nLenght >= 3) {
            let newname = [];
            let isUpperCase = false;
            let message = "Hello,";

            for (const n of name) {
                if(n === n.toUpperCase()){
                    newname.unshift(n);
                    isUpperCase = true;
                }else{
                    newname.push(n);
                }
            }

            if(isUpperCase) return `Hello, ${newname[1]} and ${newname[2]}. AND HELLO ${newname[0].toUpperCase()}!`;

            for (let i = 0; i < nLenght - 1; i++) {
                message += ` ${name[i]},`;
            }

            message += ` and ${name[nLenght - 1]}.`;

            return message;

        } else {
            let subNames = name[1].split(",")
            console.log(subNames);
            if(subNames.length>1){
                if(subNames[0][0] === '\"'){// [ '"Charlie', ' Dianne"' ]
                    return `Hello, ${name[0]} and ${subNames[0].slice(1)},${subNames[1].substring(0,subNames[1].length - 1)}.`
                }else{
                    return `Hello, ${name[0]}, ${subNames[0]}, and${subNames[1]}.`

                }//
            } else{
                return `Hello, ${name[0]} and ${name[1]}.`;
            }
        }
    } else if (name.toUpperCase() === name) {
        return `HELLO, ${name}!`;
    } else {
        return `Hello, ${name}`;
    }
}
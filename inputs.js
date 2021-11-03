// node input
let args = process.argv

const getArgs = () => {
    let command = args[2]
    let num1 = args[3]
    let num2 = args[4]

    let argExport = [command, num1, num2]

    return argExport
}

exports.getArgs = getArgs;

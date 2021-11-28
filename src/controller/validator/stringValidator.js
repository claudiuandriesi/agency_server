const isValidString = (input) => {
    return input
        && input !== 'undefined'
        && input !== 'null'
}

module.exports = isValidString;
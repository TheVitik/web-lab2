function isName(value) {
    const pattern = new RegExp("^[А-ЯҐЄІЇ][а-яґєії]+\\s[А-ЯҐЄІЇ]\\.[А-ЯҐЄІЇ]\\.$")
    return pattern.test(value);
}

function isGroup(value) {
    const pattern = new RegExp("^[А-ЯҐЄІЇ]{2}\-\\d{2}$")
    return pattern.test(value);
}

function isPhone(value) {
    const pattern = new RegExp("^\\(0\\d{2}\\)-\\d{3}-\\d{2}-\\d{2}$")
    return pattern.test(value);
}

function isAddress(value) {
    const pattern = new RegExp("^м. [А-ЯҐЄІЇ][а-яґєії]+$")
    return pattern.test(value);
}

function isEmail(value) {
    const pattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    return pattern.test(value);
}

function setDefault(inputs) {
    inputs.forEach(function (input) {
        input.style = "border: 1px solid green";
    })
}

function setError(input) {
    input.style = "border: 1px solid red";
}
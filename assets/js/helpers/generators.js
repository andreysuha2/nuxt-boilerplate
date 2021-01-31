/* eslint-disable no-use-before-define */
let keysGen = { key: 0 };

export function randomStr(str = "", len = 8) {
    let isNum = Math.random() < 0.5,
        min = isNum ? 48 : 97,
        max = isNum ? 57 : 122,
        symb = String.fromCharCode(randomNumber(min, max));
    return len <= str.length ? str : randomStr(`${str}${symb}`, len);
}

export function genKey(str = "key", len = 8) {
    if(!keysGen.hasOwnProperty(str)) keysGen[str] = 0;
    keysGen[str]++;
    const increment = keysGen[str];
    let randStr = randomStr("", len);
    return `${str.toUpperCase()}-${increment}-${new Date().getTime() + increment}-${randStr.toUpperCase()}`;
}

export function genUid() {
    return ([ 1e7 ]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));
}

export function randomNumber(min, max, isInteger = true) {
    let num = Math.random() * (max + 1 - min);
    return isInteger ? Math.floor(num) + min : num + min;
}

export function genPass(len = 8) {
    let pass = "";
    for(let i = 0; i < len; i++) {
        let symb = String.fromCharCode(randomNumber(33, 127));
        pass = `${pass}${symb}`;
    }
    return pass;
}
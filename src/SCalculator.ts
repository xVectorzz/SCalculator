export function SCalculator(a: string):  number{
    if(a == null || a== ''){
        return 0;
    }

    let sum = 0;
    let delimiter = ""
    a = a.replace(/\\n/g, '\n');

    if(a.startsWith('//')){
        const part = a.split('\n');
        delimiter = part[0].slice(2);
        a = part.slice(1).join('\n');
    }


    const escapedDelimiter = delimiter.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    const regex = new RegExp(escapedDelimiter, 'g');
    let i = 0;
    while (i < a.length) {
        let valid = false;
        if (a.substr(i, delimiter.length) === delimiter) {
            i += delimiter.length;
            valid = true;
        }

        if (!valid && a[i] !== '\n' && a[i] !== ' ' && a[i] !== '' && !Number.isInteger(Number(a[i]))) {
            throw new Error(`'${delimiter}' expected but '${a[i]}' found at position ${i}.`);
        }

        i++;
    }

    if(regex.test(a[a.length-1])){
        throw new Error('Invalid string');
    }

    const b : number[] = a.split(regex).map(value => parseInt(value.trim(),10)).filter(Number.isInteger);
    for (let i =0; i < b.length; i++) {
        sum+= b[i];
    }

    return sum;

}
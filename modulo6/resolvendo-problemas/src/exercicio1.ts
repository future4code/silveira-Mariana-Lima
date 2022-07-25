function isOneEdit(strA: string, strB: string): boolean{
    if (Math.abs(strB.length - strA.length) > 1) return false

    if (strA.length > strB.length) return strA.includes(strB)
    if (strB.length > strA.length) return strB.includes(strA)

    let charsDiffcount = 0
    for (let i = 0; i < strA.length; i++) {
        if (strA[i] !== strB[i]) charsDiffcount++
    }

    return charsDiffcount === 1
}
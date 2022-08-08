// function longestCommon(strs:any) {
//     if (strs.length === 0) return ""

//     let commonPrefix = ""
//     for (let i = 0; i < strs[0].length; i++) {
//         let currentChar = strs[0][i]
//         let areAllCharsSame = true

//         for (let j = 0; j < strs.length; j++) {
//             if (strs[j][i] !== currentChar) {
//                 return commonPrefix
//             }
//         }

//         if (currentChar) {
//             commonPrefix += currentChar
//         }
//     }

//     return commonPrefix
// };

// console.log(longestCommon(["flower","flow","flight"]))
// console.log(longestCommon(["dog","racecar","car"]))
// console.log(longestCommon(["coracao","cor","corona","coreia"]))
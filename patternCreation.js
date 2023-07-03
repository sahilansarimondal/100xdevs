// 1 Square pattern in js

// let n = 5;

// for (let index = 0; index < n; index++) {
//   let k = "";
//   for (let i = 0; i < n; i++) {
//     k = k + "*";
//   }
//   console.log(k);
// }

// 2 Hollow square pattern

// for (let index = 0; index < n; index++) {
//   let k = "";
//   for (let i = 0; i < n; i++) {
//     if (index == 0 || index == n - 1) {
//       k = k + "*";
//     } else {
//       if (i == 0 || i == n - 1) {
//         k = k + "*";
//       } else {
//         k = k + " ";
//       }
//     }
//   }
//   console.log(k);
// }

// 3 right tringle pattern in js

// for (let i = 1; i <= 5; i++) {
//   let l = "";
//   for (let j = 0; j < 5 - i; j++) {
//     l += " ";
//   }
//   for (let m = 0; m < i; m++) {
//     l += "*";
//   }
//   console.log(l);
// }

// 4 left tringle pattern in js

// let k = "";
// for (let index = 0; index < 5; index++) {
//   k += "*";
//   console.log(k);
// }

// 5 downword tringle pattern in js

// for (let i = 0; i <= 5; i++) {
//   let k = "";
//   for (let j = 0; j < 5 - i; j++) {
//     k += "*";
//   }
//   console.log(k);
// }

// 6 Hollow Tringle Star Pattern

// let n = 6;

// for (let i = 1; i <= n; i++) {
//   let an = "";
//   for (let j = 0; j < i; j++) {
//     if (i == 1 || i == 2 || i == n) {
//       an += "*";
//     } else {
//       if (j == 0) {
//         an += "*";
//       } else if (j == i - 1) {
//         an += "*";
//       } else {
//         an += " ";
//       }
//     }
//   }
//   console.log(an);
// }

// 7 JavaScript Pyramid Pattern

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let an = "";
//   for (let j = 0; j < n - i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     an += "*";
//   }
//   console.log(an);
// }

// 8 Reversed Pyramid Star Pattern

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let an = "";
//   for (let j = 0; j <= i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) {
//     an += "*";
//   }
//   console.log(an);
// }

// 9 Hollow Pyramid Star Pattern

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let an = "";
//   for (let j = 0; j < n - i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if (i == 0 || i == n) {
//       an += "*";
//     } else if (k == 0 || k == 2 * i - 2) {
//       an += "*";
//     } else {
//       an += " ";
//     }
//   }
//   console.log(an);
// }

//10 Diamind Pattern In JavaScript

// let n = 5;
// let an = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     an += "*";
//   }
//   an += "\n";
// }

// for (let i = 1; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) {
//     an += "*";
//   }
//   an += "\n";
// }
// console.log(an);

//11 Hallow Diamond Pattern

// let n = 5;
// let an = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if (k == 0 || k == 2 * i - 2) {
//       an += "*";
//     } else {
//       an += " ";
//     }
//   }
//   an += "\n";
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) {
//     if (k == 0 || k == 2 * (n - i) - 2) {
//       an += "*";
//     } else {
//       an += " ";
//     }
//   }
//   an += "\n";
// }

// console.log(an);

// 12 Hourglass Star Pattern

// let n = 5;
// let an = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 1; j <= i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) {
//     an += "*";
//   }
//   an += "\n";
// }

// for (let i = 2; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     an += "*";
//   }
//   an += "\n";
// }

// console.log(an);

// 13 Right Pascal Star Pattern

// let n = 5;
// let an = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     an += "*";
//   }
//   an += "\n";
// }

// for (let i = n; i > 0; i--) {
//   for (let j = 1; j < i; j++) {
//     an += "*";
//   }
//   an += "\n";
// }

// console.log(an);

// 14 Left Pascal Star Pattern

// let n = 5;

// let an = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     an += "*";
//   }
//   an += "\n";
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     an += "*";
//   }
//   an += "\n";
// }

// console.log(an);

// 15 Heart Star Pattern In JavaScript

// let n = 6;
// let an = "";

// for (let i = n / 2; i < n; i += 2) {
//   //first space
//   for (let j = 1; j < n - i; j += 2) {
//     an += " ";
//   }
//   //frist star
//   for (let j = 1; j < i + 1; j++) {
//     an += "*";
//   }
//   // Second Space
//   for (let j = 0; j < n - i; j++) {
//     an += " ";
//   }
//   //  Second Star
//   for (let j = 1; j < i + 1; j++) {
//     an += "*";
//   }
//   an += "\n";
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     an += " ";
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) {
//     an += "*";
//   }
//   an += "\n";
// }

// console.log(an);

let s = "   fly me   to   the moon  ";

let arr = s.split(" ");

let last = arr.length - 1;

let n = arr[last];

console.log(arr
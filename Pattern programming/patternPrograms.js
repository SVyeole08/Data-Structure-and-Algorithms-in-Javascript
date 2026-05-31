let prompt = require("prompt-sync")();

const star_square = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// star_square();

const star_tri1 = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let j = n + 1 - i; j >= 1; j--) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// star_tri1();

const star_tri2 = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) {
      process.stdout.write("  ");
    }
    for (let j = n - i; j > 0; j--) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// star_tri2();

const star_tri3 = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// star_tri3();

const mirror_tri = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let k = n - i; k > 0; k--) {
      process.stdout.write("  ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// mirror_tri();

const tri = () => {
  let n = Number(prompt("Enter the number: "));
  for (let i = 1; i <= n; i++) {
    for (let j = n - i; j > 0; j--) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// tri();

const num_tri3 = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
};
// num_tri3();

const alpha_tri3 = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    let temp = 97; //65 for capital chars
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(temp) + " ");
      temp++;
    }
    console.log();
  }
};
// alpha_tri3();

const cross = () => {
  let n = Number(prompt("Enter a number:"));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i + j == n + 1 || i == j) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
};
// cross();

const v_shape = () => {
  let n = Number(prompt("Enter a number:"));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i + j == 2 * n || i == j) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
};
// v_shape();

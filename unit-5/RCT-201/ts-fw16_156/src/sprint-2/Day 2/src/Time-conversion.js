function timeConversion(n) {
  let x, y;
  if (n < 60000) {
    y = Math.floor(n / 1000);
    if (y === 1) {
      x = `${y} second`;
    } else {
      x = `${y} seconds`;
    }
  } else if (n >= 60000 && n < 3600000) {
    y = Math.floor(n / 1000);
    if (y === 60) {
      y = y / 60;
      x = `${y} minute`;
    } else if (y > 60 && y % 60 === 0) {
      y = y / 60;
      x = `${y} minutes`;
    } else if (y > 60 && y % 60 !== 0) {
      let i = Math.floor(y / 60);
      let j = y % 60;
      if (i === 1) {
        x = `${i} minute ${j} seconds`;
      } else if (j > 1) {
        x = `${i} minutes ${j} seconds`;
      }
    }
  } else if (n >= 3600000) {
    y = n / 1000;
    let a, b, c;

    if (y === 3600) {
      y = y / 3600;
      x = `${y} hour`;
    } else if (y > 3600 && y % 3600 == 0) {
      a = y / 3600;
      x = `${a} hours`;
    } else if (y > 3600 && y % 3600 !== 0) {
      a = Math.floor(y / 3600);
      b = Math.floor((y % 3600) / 60);
      c = Math.floor((y % 3600) % 60);

      let min, sec;
      if (b == 1) {
        min = "minute";
      } else {
        min = "minutes";
      }
      if (c == 1) {
        sec = "second";
      } else {
        sec = "seconds";
      }
      x = `${a} hours ${b} ${min} ${c} ${sec}`;
    }
  }
  return x;
}

console.log(timeConversion(5200));
console.log(timeConversion(60000));
console.log(timeConversion(180000));
console.log(timeConversion(200000));
console.log(timeConversion(5200000));

module.exports = timeConversion;

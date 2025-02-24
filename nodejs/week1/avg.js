function getAverage(a=0,b=0,c=0) {
    const array = [a,b,c]
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    const avg = Math.floor(sum/array.length)
    console.log(`Average of a: ${a} and b: ${b} and c: ${c} = ${avg}`)
    return Number(avg);
  }
  const args = process.argv.slice(2).map(Number); // Convert arguments to numbers

  getAverage(...args);

const formatDate = (str) => {
  const split = str.split(',');
  console.log(split);
  const number = parseInt(split[0].split(' ')[1]);
  const day =
    number === 1
      ? `${split[0]}st,`
      : number === 2
      ? `${split[0]}nd,`
      : number === 3
      ? `${split[0]}rd,`
      : `${split[0]}th,`;
  const year = split[1].trim();
  const time = `at ${split[2].toLowerCase().trim()}`;
  console.log(day, year, time);
  return `${day} ${year} ${time}`;
};

module.exports = formatDate;

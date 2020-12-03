const rest = (path) => {
  var result = fetch("https://api.open5e.com/" + path)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
};

export default rest;

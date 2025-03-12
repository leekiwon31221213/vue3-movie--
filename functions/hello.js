exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "LEE KI WON",
      age: 30,
      email: "cute02364@gmail.com",
    }),
  };
};

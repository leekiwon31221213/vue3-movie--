const axios = require("axios");
const { OMDB_API_KEY } = process.env;

exports.handler = async (event) => {
  console.log(event);
  const payload = JSON.parse(event.body);
  const { title, type, year, page, id } = payload;
  const url = id ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

  /* 에러발생 시키기 위한 코드 */
  // const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

  try {
    // 수정: 'axiox.get(url)'에서 'await axios.get(url)'로 변경 - 오타 수정 및 비동기 처리 추가
    const { data } = await axios.get(url);
    if (data.Error) {
      return {
        statusCode: 400,
        body: data.Error,
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.message,
    };
  }
  // return new Promise(function (resolve, reject) {
  //   axios
  //     .get(url)
  //     .then(function (result) {
  //       // console.log(result);
  //       if (result.data.Error) {
  //         reject(result.data.Error);
  //       }
  //       resolve(result);
  //     })
  //     .catch(function (error) {
  //       reject(error.msg);
  //     });
  // });
};

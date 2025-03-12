import axios from "axios";
import _uniqBy from "lodash/uniqBy";

const _defaultMsg = "검색 결과가 없습니다 제목을 입력해주세요!";
export default {
  namespaced: true,
  state: function () {
    return {
      movies: [],
      msg: _defaultMsg,
      loading: false,
      theMovie: {},
    };
  },
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetMovies(state) {
      (state.movies = []), (state.msg = _defaultMsg), (state.loading = false);
    },
  },
  actions: {
    async searchMovies({ state, commit }, payload) {
      if (state.loading) {
        return;
      }
      commit("updateState", {
        msg: "",
        loading: true,
      });
      try {
        // console.log(result);
        const result = await _fetchMovie({
          ...payload,
          page: 1,
        });
        const { Search, totalResults } = result.data;
        commit("updateState", {
          movies: _uniqBy(Search, "imdbID"),
        });
        console.log(totalResults); //342
        console.log(typeof totalResults); //string

        const total = parseInt(totalResults, 10);
        // console.log(typeof total);

        const pageLength = Math.ceil(total / 10);

        //추가 요청
        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page += 1) {
            if (page > payload.number / 10) break;

            const result = await _fetchMovie({
              ...payload,
              page,
            });
            const { Search } = result.data;
            commit("updateState", {
              movies: [...state.movies, ..._uniqBy(Search, "imdbID")],
            });
          }
        }
      } catch (msg) {
        commit("updateState", {
          movies: [],
          msg,
        });
      } finally {
        commit("updateState", {
          loading: false,
        });
      }
    },
    async searchMovieWithId({ state, commit }, payload) {
      if (state.loading) return;
      commit("updateState", {
        theMovie: {},
        loading: true,
      });
      try {
        const result = await _fetchMovie(payload);
        commit("updateState", {
          theMovie: result.data,
        });
      } catch (error) {
        commit("updateState", {
          theMovie: {},
        });
      } finally {
        commit("updateState", {
          loading: false,
        });
      }
    },
  },
};

function _fetchMovie(payload) {
  const { title, type, year, page, id } = payload;
  const OMDB_API_KEY = "7035c60c";
  const url = id ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

  /* 에러발생 시키기 위한 코드 */
  // const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;
  return new Promise(function (resolve, reject) {
    axios
      .get(url)
      .then(function (result) {
        // console.log(result);
        if (result.data.Error) {
          reject(result.data.Error);
        }
        resolve(result);
      })
      .catch(function (error) {
        reject(error.msg);
      });
  });
}

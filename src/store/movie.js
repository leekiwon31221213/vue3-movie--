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
      } catch ({ message }) {
        commit("updateState", {
          movies: [],
          message,
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

async function _fetchMovie(payload) {
  //functions/movie.js 이동 후 아래코드 적용

  return await axios.post("/.netlify/movie", payload);
}

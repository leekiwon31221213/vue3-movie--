import axios from "axios";
import _upperFirst from "lodash/upperFirst";
import _toLower from "lodash/toLower";

export async function fetchMovieTitle() {
  const response = await axios.get("https://omdbapi.com?apikey=7035c60c&i=tt4520988");

  return _upperFirst(_toLower(response.data.Title)); //Frozen II -> Frozen ii
}

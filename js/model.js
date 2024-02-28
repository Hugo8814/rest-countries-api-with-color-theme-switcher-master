export const state = {
  countries: {},
};
console.log(state);
export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error("API IS NOT OKAY");
    return data;
  } catch (err) {
    throw err;
  }
};

export const loadCountries = async function (id) {
  try {
    const data = await getJSON("https://restcountries.com/v3.1/all");
    console.log(data);
    state.countries = data.data;
    return {
      modfel: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    console.error(err);
  }
};
loadCountries();

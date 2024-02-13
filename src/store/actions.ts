import httpClient from "@/httpClient";

export async function searchedMeal({commit}: any, keyword: string) {
    const response: any = await httpClient.get(`search.php?s=${keyword}`);
    commit('setSearchedMealResponse', response?.data?.meals);
}

export async function searchMealsByLetter({commit}: any, letter: string) {
    const response: any = await httpClient.get(`search.php?f=${letter}`);
    commit('setMealsByLetterResponse', response?.data?.meals);
}

export async function searchMealsByIngredients({commit}: any, ingredient: string) {
    const response: any = await httpClient.get(`filter.php?i=${ingredient}`);
    commit('setMealsByIngredientsResponse', response?.data?.meals);
}

export async function getIngredientsList({commit}: any) {
    const response: any = await httpClient.get(`list.php?i=list`);
    commit('setIngredientsListResponse', response?.data?.meals);
}
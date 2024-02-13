export function setSearchedMealResponse(state: any, meals: any) {
    state.searchedMeals  = meals !== null ? [...meals]: [];
}

export function setMealsByLetterResponse(state: any, meals: any) {
    state.mealsByLetter  = meals !== null ? [...meals]: [];
}

export function setMealsByIngredientsResponse(state: any, meals: any) {
    state.mealsByIngredients  = meals !== null ? [...meals]: [];
}

export function setIngredientsListResponse(state: any, meals: any) {
    state.ingredientsList  = meals !== null ? [...meals]: [];
}
import { defineStore } from "pinia";
import { recipe } from "../types";

export const useRecipeStore = defineStore("recipeStore", {
    state: () => {
        return{ recipes: [] as recipe[] }
    },
    actions: {
        addRecipe(newRecipe: recipe) : void{
            this.recipes.push(newRecipe)
        }
    }
})  
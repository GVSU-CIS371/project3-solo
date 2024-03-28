<template>
  <div>
    <Beverage 
      :isIced="currentTemp === 'Cold'"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
      :beverage="currentBeverage"
      />
    <ul id="buttons">
      <div>Selection</div>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in creamers" :key="creamer">
          <label>
            <input
              type="radio"
              name="Creamer"
              :id="`r${creamer}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="Syrup"
              :id="`r${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="baseBeverage in baseBeverages" :key="baseBeverage">
          <label>
            <input
              type="radio"
              name="Base Beverage"
              :id="`r${baseBeverage}`"
              :value="baseBeverage"
              v-model="currentBeverage"
            />
            {{ baseBeverage }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div id="input">
    <label>     
      <input
        type="text" 
        v-model="textBoxString"
        placeholder="Enter Recipe Name"
        />
    </label>
    <button @click="recipeStore.addRecipe(
        {name: textBoxString,
          temp: currentTemp,
          creamer: currentCreamer,
          syrup:currentSyrup,
          base: currentBeverage           
      }
    )">Make Beverage</button>
  </div>
  <div>
  <ul id="recipeDisplay">
    <li
      v-for="(recipe, index) in recipeStore.recipes" :id="`recipe`+index">
      <label @click="
        textBoxString = recipe.name,    
        currentTemp = recipe.temp,
        currentCreamer = recipe.creamer,
        currentSyrup = recipe.syrup,
        currentBeverage = recipe.base
      ">
        {{ recipe.name }}
      </label>
      <button class="close" type="button" @click="deleteRecipe(index)">&#x2715;</button>
    </li>
  </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import { useRecipeStore } from "./Stores/recipeStore"

// Define reactive data
const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const currentCreamer = ref("None");
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const currentSyrup = ref("None");
const baseBeverages = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentBeverage = ref("Coffee");

const textBoxString = ref("");
const recipeStore = useRecipeStore();

function deleteRecipe(num:number) {
    const element = document.getElementById("recipe"+num);
    element?.remove();
}


</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
#app {
  flex: 1 0 0;
  position: relative;
  top: 20%;
}
ul {
  position: relative;
  list-style: none;
  width:100%;
  padding: 0;
}

ul > div {
  text-align: center;
  font-size: large;
}
#buttons > li {
  border-radius: 5px;
  background-color: #FAF0DC;
  margin: 2px;
  display: flex;
  justify-content: center;
}
#input {
  position: relative;
  display: flex;
  justify-content: space-between;
}
#recipeDisplay {  
  position: relative;
  background-color: #FAF0DC;
  width:100%;
  outline: outset white;
}
#recipeDisplay:empty {
  outline: none;
}
#recipeDisplay > li {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
}
.close{
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: transparent;
  //right: 100%;
}
</style>

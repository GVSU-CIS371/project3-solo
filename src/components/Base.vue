<template>
  <div class="baseBeverage" :style="customStyle"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
type Prop = {
  name: string;
};
// type BaseBeverage = {
//   name: string;
//   color: string;
// };
// const Bases: BaseBeverage[] = [
//   {
//     name: "Black Tea",
//     color: "#8B4513",
//   },
//   {
//     name: "Green Tea",
//     color: "#C8E6C9",
//   },
//   {
//     name: "Coffee",
//     color: "#6F4E37",
//   },
// ];

const props = withDefaults(defineProps<Prop>(), {
  name: "Black Tea",
});


const customStyle = computed(() => {
    let color = ""
    if (props.name == "Black Tea"){
      color = "#8B4513"
    }
    if (props.name == "Green Tea"){
      color = "#C8E6C9"
    }
    if (props.name == "Coffee"){
      color = "#6F4E37"
    }
    return {
      
        backgroundColor: color,
    };
});
</script>

<style scoped>
.baseBeverage {
  
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>

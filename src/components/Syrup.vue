<template>
  <div class="syrup" :style="customStyle"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
type Prop = {
  name: string;
};
// type Syrup = {
//   name: string;
//   color: string;
// };
// const Syrups: Syrup[] = [
//   {
//     name: "Vanilla",
//     color: "#FFEFD5",
//   },
//   {
//     name: "Caramel",
//     color: "#DAA520",
//   },
//   {
//     name: "Hazelnut",
//     color: "#6B4423",
//   },
// ];

const props = withDefaults(defineProps<Prop>(), {
  name: "Vanilla",
});

const customStyle = computed(() => {
    let color = ""
    let height = ""
    if (props.name == "Vanilla"){
      color = "#FFEFD5"
    }
    if (props.name == "Caramel"){
      color = "#DAA520"
    }
    if (props.name == "Hazelnut"){
      color = "#6B4423"
    }
    if (props.name == "None"){
       height = "0%"
    }
    return {
        //backgroundColor: color,
        height: height,
        background: "repeating-linear-gradient(45deg," + color + ", " + color + " 10px,rgba(225, 207, 149, 1) 10px,rgba(225, 207, 149, 1) 20px)"
    }
});
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 0;
}
</style>

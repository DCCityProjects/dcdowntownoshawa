<template>
    <div class="map">
        <BlueGold></BlueGold>
    </div>
</template>

<script>
import BlueGold from "./blue_gold3.vue";

export default {
    name: "Map",
    components: {
        BlueGold,
    },
    data: () => ({ svgpanzoom: null }),
};
</script>

<style scoped>
.map_min {
    width: 100vw;
    height: 95vh;
}

.map {
    z-index: 1;
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #647eb5;
}
</style>

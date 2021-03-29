<template>
    <div id="route">
        <RouteNav
            :routeNumber="this.$parent.currentRoute.id"
            :displayState="this.$parent.currentRoute.categoryDisplayName"
            :state="this.$parent.currentRoute.routeCategory"
            @setNextData="this.$parent.pushRoute"
        >
        </RouteNav>
        <RouteInfo></RouteInfo>
    </div>
</template>

<script>
import RouteNav from "@/components/RouteNav.vue";
import RouteInfo from "@/components/RouteInfo.vue";
export default {
    name: "Route",
    components: {
        RouteNav,
        RouteInfo,
    },
    mounted() {
        let object = {
            state: this.$route.params.routeCategory,
            route_id: this.$route.params.id,
        };
        console.log("MOUNTED ", object);
        this.$parent.pushRoute(object);
    },
};
</script>

<style scoped>
.stop {
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    z-index: 10;
    top: 250px;
    left: 30px;
}

.stop p {
    color: #fff;
    line-height: 50px;
    text-align: center;
}

.stop:hover {
    cursor: pointer;
}

#routeInfo {
    display: none;
}
</style>

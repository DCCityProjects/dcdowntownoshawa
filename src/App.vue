<template>
    <div id="app">
        <router-view />
        <Splash v-show="isFirstTimeUser"></Splash>
        <button type="button" class="button" @click="openMenu">
            <i class="fas fa-bars"></i>
        </button>

        <Hamburger @changeRoute="pushRoute" />
        <Map />
        <Footer />
    </div>
</template>

<script>
import Map from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";
import Hamburger from "./components/Hamburger.vue";
import Splash from "./components/Splash.vue";
import routeData from "@/assets/routers.json";

export default {
    name: "App",
    components: {
        Map,
        Footer,
        Hamburger,
        Splash,
    },
    data: function() {
        return {
            isHambugerMenuOpen: false,
            isFirstTimeUser: true,
            id: null,
            state: "",
            routeData: routeData,
            currentRoute: {
                address: "",
                email: "",
                phone: 0,
                routeCategory: "",
                categoryDisplayName: "",
                locationName: "",
                locationYear: 0,
                locationPainter: "",
                locationInformation: "",
            },
        };
    },
    methods: {
        openMenu() {
            this.isHambugerMenuOpen = true;
            console.log("isHambugerMenuOpen ", this.isHambugerMenuOpen);
        },
        pushRoute({ state, route_id }) {
            console.log(state);
            console.log(route_id);
            this.isHambugerMenuOpen = false;
            if (route_id > this.routeData[state].length) return;
            this.currentRoute = this.routeData[state][route_id - 1];
            this.$router.push(`/route/${state}/${route_id}`);
        },
    },
    // mounted() {
    //     if (localStorage.isFirstTimeUser) {
    //         console.log("LOCAL STORAGE ", localStorage.isFirstTimeUser);
    //         this.isFirstTimeUser = false;
    //     } else {
    //         console.log("No Local Storage");
    //     }
    // },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #647eb5;
    height: 100%;
    width: 100%;
    overflow: hidden;
}
* {
    box-sizing: border-box;
}
#hamburger_menu {
    height: 100vh;
    /* background-color: #000; */
}

.button {
    position: absolute;
    top: 20px;
    left: 15px;
    z-index: 200;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
    background-color: #f8f8f8;
    color: #14679e;
    border: none;
    box-shadow: 1px 2px 5px #888;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.button:focus,
.button:hover {
    background-color: #f8f8f8;
    color: #3360a9;
    /* box-shadow: 1px 2px 5px #888; */
}

.tinytabs .tabs {
    margin-top: 40px;
    margin-left: 15px;
    display: flex;
    flex-flow: row wrap;
}
.tinytabs .tabs .tab .close {
    padding-left: 5px;
}
.tinytabs .tabs .tab {
    margin: 0 3px 0 0;
    background: #e1e1e1;
    display: block;
    padding: 6px 15px;
    text-decoration: none;
    color: #666;
    font-weight: bold;
    border-radius: 3px 3px 0 0;
}
.tinytabs .section {
    background: #f1f1f1;
    overflow: hidden;
    padding: 15px;
    clear: both;
    border-radius: 3px;
}
.tinytabs .tab.sel {
    background: #f1f1f1;
    color: #333;
    text-shadow: none;
}
</style>

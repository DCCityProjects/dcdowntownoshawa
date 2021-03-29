<template>
    <div id="info"></div>
</template>

<script>
// import { Splide, SplideSlide } from "@splidejs/vue-splide";
// import { createSlides } from "../assets/js/slide.js";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
    name: "TinyTabs",
    components: {
        // Splide,
        // SplideSlide,
    },
    data() {
        return {
            options: {
                rewind: true,
                gap: "1rem",
                perPage: 1,
            },
            // slides: createSlides(10),
            count: 0,
        };
    },
    methods: {
        add() {
            // this.slides = this.slides.concat(
            //     createSlides(1, ++this.count + 100)
            // );
        },
        onClose(id) {
            console.log(
                "Callback function that gets evaluated while closing the tab",
                id
            );
        },
        onBefore(id, tab) {
            console.log(
                "Callback function that gets evaluated before a tab is activated",
                id,
                tab
            );
        },
        onAfter(id, tab) {
            console.log(
                "Callback function that gets evaluated after a tab is activated",
                id,
                tab
            );
        },
    },
};
</script>

<style scoped>
#info {
    position: absolute;
    height: 100vh;
    overflow: scroll;
    width: 100vw;
    z-index: 200;
    bottom: 0;
    /* background: white; */
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
.goBack {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
}
#infoContainer {
    position: fixed;
    bottom: 0;
    height: 75%;
    width: 100vw;
    background: white;
    overflow: scroll;
    z-index: 250;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.slider-container {
    margin-top: 40px;
}

.slider-controls {
    text-align: center;
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

#myMap,
.controls {
    display: none;
}

header {
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    background: white;
    border: 2px solid lightblue;
    text-align: center;
    display: flex;
    place-items: center;
    place-content: center;
}

.heading {
    margin-top: 1.5rem;
    background-color: rgb(12, 68, 128);
    border-radius: 10px;
}

.heading h1 {
    font-size: 3rem;
    color: #fff;
}

.img_slider {
    height: 14rem;
    background-color: teal;
    margin-top: 2rem;
}

.container {
    background-color: thistle;
    height: 30rem;
    margin-top: 2rem;
}
</style>

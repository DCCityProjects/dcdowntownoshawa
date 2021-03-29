<template>
    <div id="info">
        <!-- <div class="expandButton" @click="toggleExpanded">
            <i v-if="isExpanded == 1" class="fas fa-chevron-down"></i>
            <i v-else class="fas fa-chevron-up"></i>
        </div> -->
        <div class="swipeBar" v-hammer:swipe="onSwipe">
            <div class="bar"></div>
        </div>
        <div
            class="infoContainer"
            :class="{
                infoExpanded: isExpanded == 1,
                infoMinimized: isExpanded == 2,
            }"
            id="routeInfo"
        >
            <div>
                <swiper
                    :options="swiperOption"
                    ref="mySwiper"
                    class="swiper-slider"
                >
                    <swiper-slide
                        v-for="(imagePath, index) in this.$parent.$parent
                            .currentRoute.imagePaths"
                        :key="index"
                    >
                        <img
                            :src="getImgUrl(imagePath)"
                            alt=""
                            class="slider-image"
                        />
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="tab-container">
                <div class="tab-top">
                    <span
                        :class="{ active: selectedTab == 1 }"
                        @click="selectTab(1)"
                        >Information</span
                    >
                    <span
                        :class="{ active: selectedTab == 2 }"
                        @click="selectTab(2)"
                        >Contact</span
                    >
                </div>
                <div v-show="selectedTab == 1" class="tab-information">
                    <p
                        class="info_text"
                        v-show="
                            this.$parent.$parent.currentRoute.locationName !=
                                'N/A'
                        "
                    >
                        <span>Name:</span>
                        {{ this.$parent.$parent.currentRoute.locationName }}
                    </p>
                    <p
                        class="info_text"
                        v-show="
                            this.$parent.$parent.currentRoute.locationYear !=
                                'N/A'
                        "
                    >
                        <span>Year:</span>
                        {{ this.$parent.$parent.currentRoute.locationYear }}
                    </p>
                    <p
                        v-show="
                            this.$parent.$parent.currentRoute.locationPainter !=
                                'N/A'
                        "
                        class="info_text"
                        id="painter"
                    >
                        <span>Painter:</span>
                        {{ this.$parent.$parent.currentRoute.locationPainter }}
                    </p>
                    <p
                        class="info_text"
                        v-show="
                            this.$parent.$parent.currentRoute
                                .locationInformation != 'N/A'
                        "
                    >
                        <span>Description:</span> <br />
                        {{
                            this.$parent.$parent.currentRoute
                                .locationInformation
                        }}
                    </p>
                </div>
                <div v-show="selectedTab == 2" class="tab-contact">
                    <ul>
                        <li
                            class="tab_text"
                            v-show="
                                this.$parent.$parent.currentRoute.address !=
                                    'N/A'
                            "
                        >
                            <p>
                                <i class="fas fa-map-marker-alt"></i>Address:

                                <span>{{
                                    this.$parent.$parent.currentRoute.address
                                }}</span>
                            </p>
                        </li>
                        <li
                            class="tab_text"
                            v-show="
                                this.$parent.$parent.currentRoute.email != 'N/A'
                            "
                        >
                            <p><i class="fas fa-paper-plane"></i> Email:</p>
                            <span>{{
                                this.$parent.$parent.currentRoute.email
                            }}</span>
                        </li>
                        <li
                            class="tab_text"
                            v-show="
                                this.$parent.$parent.currentRoute.phone != 'N/A'
                            "
                        >
                            <p><i class="fas fa-paper-plane"></i> Phone:</p>
                            <span>{{
                                this.$parent.$parent.currentRoute.phone
                            }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    name: "RouteInfo",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperOption: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            selectedTab: 1,
            isExpanded: 0,
        };
    },
    methods: {
        selectTab(i) {
            this.selectedTab = i;
        },
        toggleExpanded() {
            // this.isExpanded = !this.isExpanded;
            if (this.isExpanded == 0) {
                this.isExpanded = 1;
            } else if (this.isExpanded == 1) {
                this.isExpanded = 0;
            } else {
                this.isExpanded = 0;
            }
        },
        getImgUrl(pic) {
            return require("../assets/" + pic);
        },
        onSwipe(e) {
            console.log(e);
            if (e.direction == 16) {
                switch (this.isExpanded) {
                    case 0:
                        this.isExpanded = 2;
                        console.log("CASE 0 TO 2");
                        break;
                    case 1:
                        this.isExpanded = 2;
                        console.log("CASE 1 TO 0");
                        break;
                    default:
                        break;
                }
            } else if (e.direction == 8) {
                switch (this.isExpanded) {
                    case 0:
                        this.isExpanded = 1;
                        break;
                    case 2:
                        this.isExpanded = 0;
                        break;
                    default:
                        break;
                }
            }
        },
        onSwipeDown(e) {
            console.log(this.isExpanded);
            console.log(e);
            switch (this.isExpanded) {
                case 0:
                    this.isExpanded = 2;
                    console.log("CASE 0 TO 2");
                    break;
                case 1:
                    this.isExpanded = 0;
                    console.log("CASE 1 TO 0");
                    break;
                default:
                    break;
            }
        },
        onSwipeUp() {
            switch (this.isExpanded) {
                case 0:
                    this.isExpanded = 1;
                    break;
                case 2:
                    this.isExpanded = 0;
                    break;
                default:
                    break;
            }
        },
    },
};
</script>

<style scoped>
#info {
    position: absolute;
    z-index: 10;
    bottom: 0%;
    left: 0;
    z-index: 400;
}
.infoContainer {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    height: 55vh;
    width: 100vw;
    background: white;
    border-radius: 0 0 20px 20px;
    padding: 0 13px 13px 13px;
    transition: all 0.3s ease-in;
    height: 45vh;
    overflow-y: scroll;
}
.infoExpanded {
    height: 75vh;
}
.infoMinimized {
    height: 5vh;
}
.swipeBar {
    width: 100%;
    height: 20px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 0;
    border-radius: 10px 10px 0 0;
}
.swipeBar .bar {
    background: #c4c4c4;
    border-radius: 10px;
    width: 25%;
    height: 7px;
    margin: 0 auto;
}
.expandButton {
    background: #3360a9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px 30px 0px 0px;
    width: 150px;
    height: 20px;
    margin: 0 auto;
    color: white;
}
.slider-image {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.swiper-slider {
    border-radius: 10px;
}

.tab-container {
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 0.5rem 0;
    padding: 0.5rem;
    padding-bottom: 5.5vh;
}
.tab-top {
    display: flex;
    justify-content: space-around;
    margin: 0.5rem 0;
}
.tab-top span {
    width: 50%;
    color: #828282;
    text-transform: uppercase;
    padding: 0.2rem 0;
    font-size: 0.8rem;
    font-weight: 600;
}
.tab-top span.active {
    background: #3360a9;
    color: white;
    border-radius: 5px;
    text-decoration: underline;
}

.tab-contact ul {
    padding-left: 0;
    text-align: left;
}

.info_text {
    text-align: left;
}

.info_text span {
    font-weight: 700;
}

.tab_text {
    display: flex;
    justify-content: space-between;
    /* height: 2rem; */
    line-height: 2;
    padding-left: 1rem;
    padding-right: 1rem;
}
.tab_text p {
    margin: 0;
}
.close-button {
    display: none;
}
@media only screen and (min-width: 1200px) {
    .infoContainer {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        height: 100vh;
        width: 30vw;
        overflow-y: scroll;
        background: white;
        border-radius: 20px;
        padding: 13px;
        padding-bottom: 6vh;
        transition: all 0.3s ease-in;
    }
    #info {
        position: absolute;
        z-index: 10;
        bottom: 0%;
        left: initial;
        right: 0;
        z-index: 400;
    }
}
</style>

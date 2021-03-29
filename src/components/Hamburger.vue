<template>
    <div
        id="hamburger_menu"
        :class="{ hamburger_closed: this.$parent.isHambugerMenuOpen == false }"
    >
        <!-- Close button -->
        <button
            class="close-button"
            aria-label="Close menu"
            type="button"
            @click="closeMenu"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#828282"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
        <!-- Logo container -->
        <div class="logo_container">
            <router-link to="/">
                <img src="../assets/img/logos/teachingLogo.svg" />
            </router-link>
        </div>

        <ul class="vertical accordion-menu" data-accordion-menu>
            <li class="nav-wrap-item">
                <div class="nav-item">
                    <img
                        src="../assets/img/routes_hamburgeMenu/casual_route.png"
                        alt="casual"
                    />
                    <div class="title">
                        <p class="titleText">CASUAL</p>
                        <p class="description">
                            Located on King St. North side. It's full of abundant historical sites, the oldest building traces back to 17 century. 
                        </p>
                    </div>
                    <i
                        class="fas fa-chevron-down drop-item"
                        @click="setSelectedItem(1)"
                    ></i>
                </div>
                <div v-show="selectedItem == 1" class="nav-extended">
                    <ul class="stops_ul">
                        <li @click="goRoute" data-state="casual" data-id="1">
                            Oshawa House
                        </li>
                        <li @click="goRoute" data-state="casual" data-id="2">
                            Plane Crash
                        </li>
                        <li @click="goRoute" data-state="casual" data-id="3">
                            First stand alone Post Office
                        </li>
                        <li @click="goRoute" data-state="casual" data-id="4">
                            Regent Theatre
                        </li>
                        <li @click="goRoute" data-state="casual" data-id="5">
                            Genosha Hotel
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-wrap-item">
                <div class="nav-item">
                    <img
                        src="../assets/img/routes_hamburgeMenu/development.jpeg"
                        alt="development"
                    />
                    <div class="title">
                        <p class="titleText">DEVELOPMENT</p>
                        <p class="description">
                            A brand new neighbourhood is being planned in Oshawa's core, let's take a tour of it's growth.   
                        </p>
                    </div>
                    <i
                        class="fas fa-chevron-down drop-item"
                        @click="setSelectedItem(2)"
                    ></i>
                </div>
                <div v-show="selectedItem == 2" class="nav-extended">
                    <ul class="stops_ul">
                        <li
                            @click="goRoute"
                            data-state="development"
                            data-id="1"
                        >
                            Ontario Street & Richmond Street
                        </li>
                        <li
                            @click="goRoute"
                            data-state="development"
                            data-id="2"
                        >
                            80 Bond Street
                        </li>
                        <li
                            @click="goRoute"
                            data-state="development"
                            data-id="3"
                        >
                            135 Bruce Street
                        </li>
                        <li
                            @click="goRoute"
                            data-state="development"
                            data-id="4"
                        >
                            47 Simcoe Street South
                        </li>
                        <li
                            @click="goRoute"
                            data-state="development"
                            data-id="5"
                        >
                            Lovell Drugs Heritage Building Revitalization
                        </li>
                        <li
                            @click="goRoute"
                            data-state="development"
                            data-id="6"
                        >
                            The Genosha Hotel Heritage Building Revitalization
                        </li>
                        <li
                            @click="goRoute"
                            data-state="development"
                            data-id="7"
                        >
                            Go Train Expansion
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-wrap-item">
                <div class="nav-item">
                    <img
                        src="../assets/img/routes_hamburgeMenu/public_art.jpg"
                        alt="public art"
                    />
                    <div class="title">
                        <p class="titleText">PUBLIC ART</p>
                        <p class="description">
                            Explore Oshawa's public art by walking along the Oshawa Creek. 
                        </p>
                    </div>
                    <i
                        class="fas fa-chevron-down drop-item"
                        @click="setSelectedItem(3)"
                    ></i>
                </div>
                <div v-show="selectedItem == 3" class="nav-extended">
                    <ul class="stops_ul">
                        
                        <li @click="goRoute" data-state="publicArt" data-id="1">
                            Grace
                        </li>
                        <li @click="goRoute" data-state="publicArt" data-id="2">
                            Crown
                        </li>
                        <li @click="goRoute" data-state="publicArt" data-id="3">
                            River Tree/Bench
                        </li>
                        <li @click="goRoute" data-state="publicArt" data-id="4">
                            Silent Bells
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-wrap-item">
                <div class="nav-item">
                    <img
                        src="../assets/img/routes_hamburgeMenu/mural.jpg"
                        alt="murals"
                    />
                    <div class="title">
                        <p class="titleText">MURALS</p>
                        <p class="description">
                            Discover artworks attached to buildings & enjoy
                            free-standing sculptures and view a range of murals.
                        </p>
                    </div>
                    <i
                        class="fas fa-chevron-down drop-item"
                        @click="setSelectedItem(4)"
                    ></i>
                </div>
                <div v-show="selectedItem == 4" class="nav-extended">
                    <ul class="stops_ul">
                        <li @click="goRoute" data-state="murals" data-id="1">
                            Full Steam Ahead
                        </li>
                        <li @click="goRoute" data-state="murals" data-id="2">
                            On the Lake(The Argyle)
                        </li>
                        <li @click="goRoute" data-state="murals" data-id="3">
                            Oshawa 1935
                        </li>
                        <li @click="goRoute" data-state="murals" data-id="4">
                            Borsberry Musical Hall
                        </li>
                        <li @click="goRoute" data-state="murals" data-id="5">
                            Driving Force
                        </li>
                        <li @click="goRoute" data-state="murals" data-id="6">
                            Recreation By The Lake
                        </li>
                    </ul>
                </div>
            </li>

            <div class="backToMap" @click="closeMenu">
                <router-link to="/">
                    <i class="fas fa-arrow-circle-left"></i> Back To Map
                </router-link>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Hamburger",

    methods: {
        closeMenu() {
            this.$parent.isHambugerMenuOpen = false;
        },
        setSelectedItem(item) {
            if (this.selectedItem === item) {
                console.log("same", item);
                this.selectedItem = 0;
            } else {
                console.log("not same", item);
                this.selectedItem = item;
            }
        },
        goRoute(e) {
            e.preventDefault();
            let route_id = e.target.getAttribute("data-id");
            this.route_id = route_id;
            let state = e.target.getAttribute("data-state");
            this.state = state;
            this.$emit("changeRoute", {
                state: this.state,
                route_id: this.route_id,
            });
        },
    },
    data: () => {
        return {
            selectedItem: 0,
            route_id: null,
            state: "",
        };
    },
};
</script>

<style scoped>
#hamburger_menu {
    height: 100vh;
    background-color: #f8f8f8;
    width: 75vw;
    padding-bottom: 5.5vh;
    position: absolute;
    z-index: 10000;
    transition: all 0.3s ease-in;
    left: 0;
    top: 0;
}
.hamburger_closed {
    left: -75vw !important;
}

.logo_container {
    height: 8rem;
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}
.logo_container img {
    margin: 0 auto;
    width: 14rem;
}

.img_container {
    background: grey;
    width: 4rem;
    height: 100%;
    border-radius: 10px;
}

ul {
    padding: 0 3%;
    list-style: none;
}

.nav-item {
    height: 5rem;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-top: 1rem;
    padding: 0.5rem;
    display: flex;
    position: relative;
    z-index: 300;
    align-items: center;
}
.nav-item img {
    background: rgb(191, 191, 191);
    height: 4rem;
    width: 4rem;
    border-radius: 10px;
    object-fit: cover;
}
.title {
    text-align: left;
    margin: 0 2%;
}
.titleText {
    font-weight: 900;
    margin: 0;
}
.description {
    font-size: 0.8rem;
    line-height: 1;
    margin: 0;
}
.drop-item {
    display: flex;
    align-items: center;
}

.accordion-menu a {
    padding: 0;
}
.close-button {
    border: none;
    font-size: 2rem;
    cursor: pointer;
    background: transparent;
    margin-top: 0.3rem;
    position: absolute;
    right: 0;
}
.close-button svg {
    height: 2rem;
}
.nav-extended {
    background: #f2f5fa;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 200;
    margin-top: -10px;
    padding-top: 15px;
    border-radius: 0px 0px 10px 10px;
}
.nav-extended ul {
    padding: 0;
    margin: 0;
    text-align: left;
}
.nav-extended ul li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.112);
    padding: 0.3rem 0;
    transition: all ease-in-out 0.25s;
    cursor: pointer;
    padding: 1% 3% 1% 3%;
}
.nav-extended ul li:hover {
    /* background-color: rgba(0, 0, 0, 0.153); */
    background: #d1d5db;
    color: #111827;
    font-weight: 700;
}
.nav-extended ul li:last-child {
    border: none;
}

.sub_list {
    z-index: 100;
}

.nav-item {
    height: auto;
}

.description {
    line-height: 1.1;
}

.backToMap {
    margin-top: 2.2rem;
    color: #3360a9;
}

.backToMap > a {
    text-decoration: none;
}

.backToMap > a:visited {
    color: #213e6d;
}

@media only screen and (min-width: 1200px) {
    #hamburger_menu {
        height: 100vh;
        background-color: #f8f8f8;
        width: 30vw;
    }
}
</style>

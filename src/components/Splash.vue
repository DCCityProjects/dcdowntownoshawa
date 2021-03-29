<template>
    <main id="splash">
        <section id="page0" class="page">
            <img
                class="logo"
                id="teaching"
                src="../assets/img/logos/teachingcity_logo_vertical.svg"
                alt="Teaching City Logo"
            />
            <div class="logo-2">
                <img
                    class="logo"
                    id="oshawa_logo"
                    src="../assets/img/logos/oshawa_w_tagline.svg"
                    alt="Downtown Oshawa"
                />
                <img
                    class="logo"
                    id="durham_logo"
                    src="../assets/img/logos/durham_logo.svg"
                    alt="Durham College Logo"
                />
            </div>
        </section>
        <section id="page1" class="page">
            <img
                class="logo"
                id="teaching_logo"
                src="../assets/img/splash/oshawa_title_vector.svg"
                alt="Teaching City Logo"
            />
            <div class="text">
                <h2>DOWNTOWN</h2>
                <h1>OSHAWA</h1>
                <h3>WALKING TOUR</h3>
            </div>
        </section>
        <section id="page2" class="page">
            <img
                class="logo"
                id="loading"
                src="../assets/img/splash/circleLoad.gif"
                alt="Teaching City Logo"
            />
        </section>
    </main>
</template>

<script>
import gsap from "gsap";

export default {
    mounted() {
        let tl = gsap.timeline({
            onComplete: function() {
                localStorage.isFirstTimeUser = false;
            },
        });
        console.log(tl);

        tl.to(
            "#page0",
            {
                opacity: 1,
            },
            0
        );
        tl.to(
            "#page0",
            {
                opacity: 0,
                autoAlpha: 0,
                delay: 1,
                display: "none",
            },
            1
        );
        tl.to(
            "#page1",
            {
                opacity: 1,
            },
            3
        );
        tl.from(
            "#page1 .logo",
            {
                opacity: 1,
                y: 100,
                stagger: 1,
            },
            3
        );
        tl.from(
            "#page1 .text *",
            {
                opacity: 0,
                delay: 0.5,
                y: 100,
                stagger: 0.3,
            },
            3
        );
        tl.to(
            "#page1",
            {
                opacity: 0,
                autoAlpha: 0,
                delay: 2,
                display: "none",
            },
            5
        );
        tl.to(
            "#page2",
            {
                opacity: 1,
            },
            9
        );
        tl.to(
            "#page2",
            {
                opacity: 0,
                autoAlpha: 0,
                delay: 1,
                display: "none",
            },
            10
        );
        tl.to(
            "#splash",
            {
                opacity: 0,
                autoAlpha: 0,
                display: "none",
            },
            12
        );
        //     let tl = gsap.timeline({
        //         duration: 1,
        //         delay: 0.5,
        //         onComplete: function() {
        //             // localStorage.isFirstTimeUser = false;
        //         },
    },
    // mounted: function() {
    //     let tl = gsap.timeline({
    //         duration: 1,
    //         delay: 0.5,
    //         onComplete: function() {
    //             // localStorage.isFirstTimeUser = false;
    //         },
    //     });
    //     tl.from("#teaching_logo", {
    //         delay: 0,
    //         scale: 0,
    //         opacity: 0.5,
    //         ease: "slow.in",
    //     });
    //     tl.from("#oshawa_logo", {
    //         delay: 0,
    //         scale: 0,
    //         opacity: 0.5,
    //         ease: "slow.in",
    //     });
    //     tl.from("#durham_logo", {
    //         delay: 0,
    //         scale: 0,
    //         opacity: 0.5,
    //         ease: "slow.in",
    //     });
    //     tl.from("#splash p", {
    //         // scale: 0.6,
    //         y: 20,
    //         opacity: 0,
    //         ease: "slow.in",
    //     });
    //     tl.from("#splash #preloader", {
    //         opacity: 0,
    //     });
    //     tl.to("#splash", {
    //         delay: 1,
    //         autoAlpha: 0,
    //     });
    // },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#splash {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 10000000;
    background: #fbfbfb;
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    top: 0;
    font-family: "Montserrat", sans-serif;
}
.page {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 10000001;
    opacity: 0;
}
#page0 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
#page0 #teaching {
    width: 40%;
}
#page0 .logo-2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#page0 .logo {
    width: 70%;
    margin: 1rem;
}
#page1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
#page1 .text {
    margin: 4rem 0;
}
#page1 h1 {
    font-size: 4rem;
    margin: 0;
    font-weight: 800;
    color: #3360a9;
}
#page1 h2 {
    color: black;
    margin: 0;
    line-height: 0;
}
#page1 h3 {
    color: black;
    margin: 0;
    line-height: 0;
    letter-spacing: 2px;
    font-size: 1.5rem;
}
#page2 {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}
#page2 img {
    width: 30%;
}
.logo {
    width: 100%;
}

#teaching_logo {
    width: 70%;
}

#oshawa_logo {
    /* padding: 2rem;
        margin-top: -10em; */
    max-width: 35%;
    float: left;
}

#durham_logo {
    max-width: 35%;
}

#welcome_line1 {
    font-size: 1.2rem;
    color: #4b5563;
    margin-bottom: -0.4rem;
}
#welcome_line2 {
    font-size: 3rem;
    font-weight: 500;
    color: #162b57;
}
#welcome_line3 {
    font-size: 1.2rem;
    color: #4b5563;
    margin-top: -0.4rem;
}

#preloader {
    width: 10%;
    margin-top: 2rem;
}
</style>

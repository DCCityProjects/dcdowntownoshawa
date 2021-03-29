<template>
    <div class="footer grid-x grid-padding-x">
        <div class="cell small-12 footerContainer">
            <img
                class="footerLogo"
                src="../assets/img/logos/teachingLogo.svg"
                alt="oshawa city logo"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer {
    background-color: #f8f8f8;
    color: #ffffff;
    /* padding: 10px; */
    z-index: 1000;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 5vh;
    box-shadow: 0px 2px 5px #888;
    left: 0;
}

/* logo-white 1 */
.footerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.footerLogo {
    height: calc(5vh - 0.5rem);
    margin-top: 0.5rem;
}
</style>

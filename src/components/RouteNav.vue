<template>
    <div class="route_nav">
        <p class="route_info">{{ displayState }} - {{ routeNumber }}</p>
        <div class="next_stop" @click="goNext">
            <p>Next</p>
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "RouteNav",
    props: {
        displayState: {
            type: String,
        },
        routeNumber: {
            type: Number,
        },
        state: {
            type: String,
        },
    },
    methods: {
        goNext() {
            console.log("Going to -> ", this.state, " ", this.routeNumber);
            this.$emit("setNextData", {
                state: this.state,
                route_id: parseInt(this.routeNumber) + 1,
            });
        },
    },
};
</script>

<style scoped>
.route_nav {
    position: absolute;
    width: calc(85vw + (3.2rem / 3));
    height: 3.1rem;
    z-index: 10;
    top: 20px;
    left: calc((3.2rem / 3) + 15px);
    border-radius: 7px;
    background-color: #f8f8f8;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3%;
}

.route_info {
    text-align: left;
    font-size: 1rem;
    color: #4f4f4f;
    /* background-color: #f8f8f8; */
    line-height: 1;
    margin-left: calc(3.2rem / 3 + 15px);
}
.callout.route_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100%;
    margin-left: 48px;
}
.callout {
    padding: 0;
    border: none;
    margin-bottom: 0;
}

.loc {
    font-size: 0.8rem;
    line-height: 1;
}
.next_stop {
    display: flex;
    align-items: center;
    color: #3360a9;
    cursor: pointer;
}

.next_stop p {
    font-weight: 700;
    text-align: right;
    line-height: 3rem;
    white-space: nowrap;
    margin-right: 0.3rem;
}
.next_stop:hover {
    color: #ff9900;
}

.next_stop span {
    margin-left: 5px;
}
@media only screen and (min-width: 1200px) {
    .route_nav {
        position: absolute;
        width: 45vw;
        height: 3.3rem;
        z-index: 10;
        top: 20px;
        border-radius: 7px;
        background-color: #f8f8f8;
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3%;
        padding-left: 3%;
    }
    .route_info {
        text-align: left;
        font-size: 1rem;
        color: #4f4f4f;
        /* background-color: #f8f8f8; */
        line-height: 1;
        margin-left: 0px;
    }
}
</style>

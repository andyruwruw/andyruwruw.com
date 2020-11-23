<template>
    <div class="MenuButton">
        <div :class="{dark: dark}" class="menu-button-wrap" @click="route">
            <h1 class="size">{{text}}</h1>
            <h1 :class="{currentPage: curr == path}" class="normal">{{text}}</h1>
            <h1 :class="{currentPage: curr == path}" class="hover-text">{{text}}</h1>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'MenuButton',
    props: {
        text: String,
        path: String,
        curr: String,
        dark: Boolean
    },
    data() {
        return {
            active: false,
        }
    },
    methods: {
        route() {
            if (this.curr != this.path)
            {
                this.$router.push({name: this.path});
            } 
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.currentPage {
    color: rgba(255, 255, 255, 0.685) !important;
}

.dark .currentPage {
    color:rgba(119, 121, 131, 0.829) !important;
}

h1 {
  margin: 0 10px;
  font-size: 1.3em;
  transition: all .3s ease;
}

.dark .normal {
    color: rgb(24, 25, 29);
}

.menu-button-wrap {
    display: inline-block;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.size {
    color: rgba(0, 0, 0, 0);
}

.normal {
    position: absolute;
    color: white;
    top: 0px;
}

.menu-button-wrap:hover .normal:not(.currentPage) {
    top: 105%;
}

.hover-text {
    position: absolute;
    color: rgba(253, 253, 253, 0.685);
    top: -105%;
}

.dark .hover-text {
    color: rgba(94, 95, 102, 0.829);
}

.menu-button-wrap:hover .hover-text:not(.currentPage) {
    top: 0px;
}
</style>

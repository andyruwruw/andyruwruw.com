<template>
    <div class="SkillPreview">
        <div id="planet-wrapper" :style="{'--diameter': + diameter}">
            <div :style="{'--red': + COLOR_SCHEMES[color].planet.red, '--green': + COLOR_SCHEMES[color].planet.green, 
            '--blue': + COLOR_SCHEMES[color].planet.blue}" id="planet">
                <div class="spot" v-for="(spot, index) in spots" :key="'spot-'+index" :style="{'--spotdiameter': + spot.size, '--xPos': + spot.xPos, '--yPos': + spot.yPos}" />
                <div id="planet-shadow"/>
            </div>
            <div id="flagpole"><div id="flag" :style="{'--flagred': + COLOR_SCHEMES[color].planet.red, '--flaggreen': + COLOR_SCHEMES[color].planet.green, '--flagblue': + COLOR_SCHEMES[color].planet.blue}">{{skill.flag}}</div></div>
            
            <div class="bar" v-for="(bar, index) in bars" :class="{left: bar.direction == 'left', right: bar.direction == 'right'}" :key="'bar'+index" :style="{'--barheight': + bar.height,'--delay': + bar.delay, '--length': + bar.length, '--barred': + bar.red, '--bargreen': + bar.green, '--barblue': + bar.blue,}" />
        </div>
        <div id="planet-details" :style="{'--red': + COLOR_SCHEMES[color].planet.red, '--green': + COLOR_SCHEMES[color].planet.green, '--blue': + COLOR_SCHEMES[color].planet.blue}">
            <p class="nomargin">Planet</p>
            <h1>{{skill.title}}
                <div @click="changePage(false)" v-if="w > 700" class="button top" id="left"><div class="triangle"/></div>
                <div @click="changePage(true)" v-if="w > 700" class="button top" id="right"><div class="triangle"/></div>
            </h1>
            <p>Info</p>
            <h2 v-for="(line, index) in skill.description" v-bind:key="'description' + index">{{line}}</h2>
            <p>Comfort / Habitability</p>
            <div id="comfort">
                <div class="comfort-point" :style="{'--delay': + num}" v-for="num in skill.proficiency" :key="'proficient' + num">
                </div>
                <div class="comfort-point null" :style="{'--delay': + num + (skill.proficiency)}" v-for="num in 10 - skill.proficiency" :key="'notproficient' + num"/>
            </div>
            
            <div @click="back" id="back">
                <p class="center">RETURN</p>
            </div>
            <div style="position: relative;">
            <div @click="changePage(false)" v-if="w < 700" class="button bottom" id="left"><div class="triangle"/></div>
            <div @click="changePage(true)" v-if="w < 700" class="button bottom" id="right"><div class="triangle"/></div>
            </div>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: 'SkillPreview',
    data() {
        return {
            color: 0,
            diameter: 300,
            COLOR_SCHEMES: [
                {background: {red: 230, green: 230, blue: 250}, planet: {red: 18, green: 119, blue: 130}, spots: "", bars: [{red: 137, green: 172, blue: 129},{red: 19, green: 51, blue: 55},{red: 255, green: 165, blue: 0}]},
                {background: {red: 180, green: 150, blue: 150}, planet: {red: 174, green: 0, blue: 1}, spots: "", bars: [{red: 238, green: 186, blue: 48},{red: 116, green: 0, blue: 1},{red: 15, green: 15, blue: 15}]},
                {background: {red: 200, green: 200, blue: 200}, planet: {red: 72, green: 116, blue: 191}, spots: "", bars: [{red: 14, green: 54, blue: 124},{red: 251, green: 162, blue: 87},{red: 224, green: 66, blue: 66}]},
                {background: {red: 242, green: 209, blue: 148}, planet: {red: 42, green: 75, blue: 134}, spots: "", bars: [{red: 140, green: 68, blue: 62},{red: 51, green: 56, blue: 80},{red: 145, green: 197, blue: 242}]}
            ],
            spots: [],
            bars: [],
            w: 0,
            interval: null,
        }
    },
    methods: {
        async changePage(direction)
        {
            var newIndex = 0;
            if (direction)
            {
                newIndex = (parseInt(this.index, 10) + 1) % this.skills.length;
            }
            else {
                newIndex = parseInt(this.index, 10) - 1;
                if (newIndex < 0)
                {
                    newIndex = this.skills.length - 1;
                }
            }
            console.log(newIndex);
            this.$emit('reload', newIndex);
        },
        back() {
            this.$router.push({name: "skills"});
        },
        checkWidth() {
            if (this.$router.currentRoute.name != "skillpreview")
            {
                clearInterval(this.interval);
            }
            this.w = window.innerWidth;
        },
        createPage()
        {
            this.color = this.index % this.COLOR_SCHEMES.length;

            let spotNum = Math.round(Math.random() * 10) + 10;
            for (let i = 0; i < spotNum; i++)
            {
                this.spots.push({size: Math.round(Math.random() * 30) + 20, xPos: Math.random(), yPos: Math.random()});
            }

            let background = this.COLOR_SCHEMES[this.color].background;

            this.$store.dispatch("changeBackgroundColor", {color: "rgb(" + background.red + "," + background.green + "," + background.blue + ")"});
            let lengths = 
            [
                Math.round(Math.random() * 150) + 180,
                Math.round(Math.random() * 150) + 180,
                Math.round(Math.random() * 150) + 180
            ];
            for (let i = 0; i < 3; i++)
            {
                this.bars.push({height: i, delay: Math.random() / 2+.1, direction: "left", length: lengths[i], red: this.COLOR_SCHEMES[this.color].bars[i].red, green: this.COLOR_SCHEMES[this.color].bars[i].green, blue: this.COLOR_SCHEMES[this.color].bars[i].blue})
            }
            for (let i = 2; i >= 0; i--)
            {
                this.bars.push({height: i, delay: Math.random() / 2+.1, direction: "right", length: lengths[i], red: this.COLOR_SCHEMES[this.color].bars[2-i].red, green: this.COLOR_SCHEMES[this.color].bars[2-i].green, blue: this.COLOR_SCHEMES[this.color].bars[2-i].blue})
            }
        }
    },
    computed: {
        skill() {
            return this.$store.state.skills[this.$store.state.index];
        },
        skills() {
            return this.$store.state.skills;
        },
        index() {
            return this.$store.state.index;
        }
    },
    created() {
        this.createPage();
        this.interval = setInterval(this.checkWidth, 100);
    }
}
</script>
<!-- Details CSS -->
<style scoped>
#back {
    display: block;
    background-position: center center;
    width: 200px;
    height: 60px;
    background-color: rgba(var(--red), var(--green), var(--blue), 1);
    border-radius: 20px;
    background-image: url('../assets/solarsystem/back2.png');
    background-size: auto 75%;
    background-repeat: no-repeat;
    margin: 0 auto;
    
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.253);
    transition: all .3s ease;
    margin-top: 140px;
    position: relative;
    cursor: pointer;
}

.center {
    text-align: center;
    position: absolute;
    top: -75px;
    width: 200px;
    color: rgba(61, 61, 61, 0.288);
    transition: all .3s ease;
}

#back:hover .center {
    transform: translate(3px, 3px);
    color: rgb(255, 255, 255);
    text-shadow: 0px 0px 10px rgb(255, 255, 255);
    animation: strobe .5s ease-in-out infinite;
}

@keyframes strobe {
    0% {
        color: rgb(255, 255, 255);
        text-shadow: 0px 0px 10px rgb(255, 255, 255);
    }
    50% {
        color: rgb(224, 224, 224);
        text-shadow: 0px 0px 10px rgb(214, 214, 214);
    }
    100% {
        color: rgb(255, 255, 255);
        text-shadow: 0px 0px 10px rgb(255, 255, 255);
    }
}




#back:hover {
    transform: translate(-3px, -3px);
    box-shadow: 8px 5px 6px rgba(0, 0, 0, 0.199);
}
#bottom-buttons {
    margin-top: 50px;
    width: 100%;
    display: block;
    height: 25px;
}

.top#right:hover {
    transform: rotate(-30deg) scale(1.2,1.2);
}

.top#left:hover {
    transform: rotate(30deg) scale(1.2,1.2);
}

.bottom#right:hover {
    transform: rotate(-30deg) scale(1.2,1.2) translateY(-55px);
}

.bottom#left:hover {
    transform: rotate(30deg) scale(1.2,1.2) translateY(-50px) translateX(5px);
}

.bottom#right {
    right: 0px;
    transform: rotate(-30deg) translateY(-55px);
}

.bottom#left {
    left: 0px;
    transform: rotate(30deg) translateY(-50px) translateX(5px);
}

#right {
    right: -80px;
    transform: rotate(-30deg);
}

#left {
    left: -80px;
    transform: rotate(30deg);
}

.triangle {
	position: relative;
	background-color: rgba(var(--red), var(--green), var(--blue), 1);
	text-align: left;
}
.triangle:before,
.triangle:after {
	content: '';
	position: absolute;
	background-color: inherit;
}
.triangle,
.triangle:before,
.triangle:after {
	width:  25px;
	height: 25px;
	border-top-right-radius: 30%;
}

.triangle {
	transform: rotate(-60deg) skewX(-30deg) scale(1,.866);
}
.triangle:before {
	transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
}
.triangle:after {
	transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
}

.button {
    display: block;
    width: 40px;
    height: 40px;
    top: 0px;
    position: absolute;
    z-index: 100;
    transition: all .2s ease;
}

#comfort {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    width: 90%;
}

.comfort-point {
    --delay: 1;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: relative;
    overflow: hidden;
    animation: imhiding calc(var(--delay) * .1s + .6s) linear, pop-up .3s linear calc(var(--delay) * .1s + .6s), floating-dots 1.5s ease-in-out calc(var(--delay) * .1s + .9s) infinite;
    background-color:rgba(var(--red), var(--green), var(--blue), 1);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.233);
}

@keyframes floating-dots {
    0% {
       transform: translateY(0px);
    }
    60% {
       transform: translateY(0px);
       box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.233);
    }
    80% {
         transform: translateY(-5px);
         box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.103);
    }
    100% {
         transform: translateY(0px);
         box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.233);
    }
}


@keyframes imhiding {
    from {
        opacity: 0;
    }
    to {
        opacity: 0;
    }
}

@keyframes pop-up {
    from {
        opacity: 0;
        transform: scale(.1, .1);
    }
    to {
        opacity: 1;
        transform: scale(1, 1);
    }
}

.null {
    background-color:rgba(var(--red), var(--green), var(--blue), .1);
    border: 1px solid rgba(168, 167, 167, 0.137);
    animation: imhiding calc(var(--delay) * .1s + .6s) linear, pop-up .3s linear calc(var(--delay) * .1s + .6s);
}

#planet-details {
    --red: 0;
    --green: 0;
    --blue: 0;
    display: block;
    margin: 0 auto;
    width: 90vw;
    max-width: 500px;
    min-height: 100px;
    animation: slide-up .5s ease;
    margin-bottom: 20vh;
}

@keyframes slide-up {
    from {
        transform: translateY(50vh);
        opacity: 0;
    }
}

p {
    color: rgba(0, 0, 0, 0.199);
    text-transform: uppercase;
    font-family: 'Lovelo-Black', Fallback, sans-serif;
    text-align: left;
    margin: 0;
    margin-top: 50px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.116);
}

.nomargin {
    margin-top: 0px;
}

h1 {
    font-family: 'Neucha', cursive;
    text-align: left;
    position: relative;
    font-size: 5em;
    color: rgb(var(--red), var(--green), var(--blue));
    margin: 0;
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.158);
}

h2 {
    color: rgba(49, 49, 49, 0.877);
    text-align: left;
    font-size: 1em;
    line-height: 1.5em;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.082);
}
</style>
<!-- Planet CSS -->
<style scoped>
#flag {
    --flagred: 0;
    --flaggreen: 0;
    --flagblue: 0;
    display: block;
    font-size: 1em;
    line-height: 24px;
    position: absolute;
    left: 0px;
    top: -20px;
    font-family: 'Neucha', cursive;
    color: rgba(255, 255, 255, 0.767);
    display: block;
    width: 35px;
    height: 20px;
    text-align: center;
    background-color: rgb(calc(var(--flagred) + 10), calc(var(--flaggreen) + 10), calc(var(--flagblue) + 10));
}

#flagpole {
    display: block;
    position: absolute;
    left: calc(var(--diameter) / 2 * 1px);
    top: -20px;
    height: 20px;
    width: 4px;
    background-color:rgb(0, 0, 0);
    animation: flagflip .8s ease .5s, hide .5s linear;
    transform-origin: 0px 100%;
    z-index: -100;
}

@keyframes flagflip {
    from {
        transform: rotate(90deg) translateY(10px);
    }
    to {

    }
}
.SkillPreview {
    display: block;
    min-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    position: absolute;
    left: 0px;
}

#planet {
    --red: 0;
    --green: 0;
    --blue: 0;
    background-color: rgb(var(--red), var(--green), var(--blue));
    display: block;
    width: calc(var(--diameter) * 1px);
    height: calc(var(--diameter) * 1px);
    border-radius: 100%;
    overflow: hidden;
    position: relative;
    animation: zoom .5s ease;
}

@keyframes zoom {
    from {
        transform: scale(.1, .1);
    }
}

.spot {
    --spotdiameter: 5;
    --xPos: .2;
    --yPos: .3;
    display: block;
    width: calc(var(--spotdiameter) * 1px);
    height: calc(var(--spotdiameter) * 1px);
    position: absolute;
    left: calc(var(--diameter) * var(--xPos) * 1px);
    top: calc(var(--diameter) * var(--yPos) * 1px);
    background-color: rgb(calc(var(--red) - 20), calc(var(--green) - 20), calc(var(--blue) - 20));
    border-radius: 100%;
    z-index: 1;
}

#planet-shadow {
    display: block;
    position: absolute;
    z-index: 2;
    width: calc(var(--diameter) * 1px);
    height: calc(var(--diameter) * 1px);
    border-radius: 100%;
    background-image: radial-gradient(circle at calc(var(--diameter) * 5/8 * 1px) calc(var(--diameter) * 3/8 * 1px), rgba(0, 0, 0, 0)0% 40%, rgba(0, 0, 0, 0.116) 40% 100%);
}

#planet-wrapper {
    --diameter: 300;
    position: relative;
    width: calc(var(--diameter) * 1px);
    height: calc(var(--diameter) * 1px);
    margin: 20px auto;
    margin-top: 120px;
    display: block;
}

.bar {
    --delay: 0;
    --barred: 0;
    --bargreen: 0;
    --barblue: 0;
    --length: 0;
    --barheight: 0;
    --barthickness: 40;

    position: absolute;
    top: calc(var(--barheight) * 60px + (((var(--diameter) * 1px) - ((var(--barthickness) * 1px + 10px) * 3)) / 2));
    border-radius: 20px;
    z-index: -100;
    display: block;
    width: calc(var(--length) * 1px);
    height: calc(var(--barthickness) * 1px);
    background-color: rgb(var(--barred), var(--bargreen), var(--barblue));
    animation: extend .5s ease calc(var(--delay) * 1s), hide calc(var(--delay) * 1s) linear 0s, float calc(var(--delay) * 6s + 2s) ease-in-out calc(var(--delay) * 1s + .5s) infinite;
}

.left {
    right: calc(var(--diameter) / 2 * 1px);
}

.right {
    left: calc(var(--diameter) / 2 * 1px);
}

@keyframes extend {
    from {
        width: 0px;
    }
    to {
        width: calc(var(--length) * 1px);
    }
}

@keyframes float {
    0% {
        width: calc(var(--length) * 1px);
    }
    50% {
        width: calc(var(--length) * 1px * 1.1);
    }
    100% {
        width: calc(var(--length) * 1px);
    }
}

@keyframes hide {
    from {
        opacity: 0;
    }
    to {
        opacity: 0;
    }
}
</style>

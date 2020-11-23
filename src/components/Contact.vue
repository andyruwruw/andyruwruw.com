<template>
<div id="contact">
    <div id="contact-div">
        <h1>Contact Me</h1>
        <div id="contact-content">
            <p>andrew@youngshome.com</p>
            <p>1 (650) 999-1674</p>
        </div>
        <div id="contact-button-flex" class="flex">
            <a href="https://www.linkedin.com/in/andrew-young-3322b3133/" target="_blank" @click="setDisplay(2)" class="contact-button" id="linkedin"></a>
            <span class="contact-button"></span>
            <a href="https://github.com/andyruwruw" target="_blank" @click="setDisplay(3)" class="contact-button" id="github"></a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
        display: 0,
        title: ["Email Address", "Phone Number", "Linked In", "Github"],
    }
  },
  methods: {
    setDisplay(num) {
        this.display = num;
    }
  },
  computed: {
    displayTitle() {
        return this.title[this.display];
    }
  }
}
</script>

<style scoped>
#contact {
    background-color: rgb(240, 240, 240);
    padding-top: 50px;
}
#contact-div {
    display: block;
    width: 100%;
    background-color: rgb(39, 39, 39);
    padding-bottom: 50px;
    padding-top: 40px;
    color: rgb(143, 143, 143);
}

#contact-button-flex {
    width: 25%;
    min-width: 500px;
    justify-content: center;
    margin-top: 20px;
    margin: 0 auto;
}

.contact-button {
    display: block;
    width: 50px;
    height: 50px;
    filter: invert(100%);

    background-size: cover;

    border: 0;
    background-color: rgba(143, 143, 143, 0);
    opacity: .5;

    transition: .5s;
}

.contact-button:hover {
    opacity: 1;
    animation: hover .5s ease;
    transform: scale(1.3, 1.3);
}

@keyframes hover {
  0%   {transform: rotate(0deg) scale(1.3, 1.3)}
  100% {transform: rotate(360deg) scale(1.3, 1.3)}
}

.active {
    opacity: .8;
    transform: scale(1.3, 1.3);
}

#phone {
    background-image: url("../assets/icons/phone.png");
}

#gmail {
    background-image: url("../assets/icons/gmail.png");
}

#linkedin {
    background-image: url("../assets/icons/linkedin.png");
}

#github {
    background-image: url("../assets/icons/github.png");
}

a {
    text-decoration: none;
    color: rgb(207, 207, 207);
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    font-size: 1.5em;
}

#contact-flex {
    width: 100%;
    margin: 0 auto;
    justify-content: center;
}

#contact-content {
    width: 100%;
    text-align: center;
}

h1 {
    width: 100%;
    text-align: center;
    margin-top: 20px;
}


</style>
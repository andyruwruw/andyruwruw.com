import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import Skills from './views/Skills.vue'
import Experience from './views/Experience.vue'
import Contact from './views/Contact.vue'
import SkillPreview from './views/SkillPreview.vue'
import PortfolioPreview from './views/PortfolioPreview.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:num/:item',
      name: 'portfoliopreview',
      component: PortfolioPreview
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/skills/:num/:skill',
      name: 'skillpreview',
      component: SkillPreview
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },

  ]
})

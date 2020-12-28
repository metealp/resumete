<template>
  <div >
    <q-layout view="lHh Lpr lff" style="100%" class="shadow-2 rounded-borders" @scroll="scrollHandler">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="r_menu" />
            <q-toolbar-title></q-toolbar-title>
            <q-tabs align="right">
                <q-route-tab to="/" label="Resume" />
                <q-route-tab to="/portfolio" label="Portfolio" />
                <q-route-tab to="/blog" label="Blog" />
            </q-tabs>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="300"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc( 100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
                clickable
                v-ripple
                :active="link === 'intro'"
                @click="scrollToElement('intro')"
                active-class="my-menu-link"
            >
                <q-item-section>Introduction</q-item-section>
            </q-item>

            <q-item
                clickable
                v-ripple
                :active="link === 'skills'"
                @click="scrollToElement('skills')"
                active-class="my-menu-link"
            >
                <q-item-section>Skills</q-item-section>
            </q-item>

            <q-item
                clickable
                v-ripple
                :active="link === 'education'"
                @click="scrollToElement('education')"
                active-class="my-menu-link"
            >
                <q-item-section>Education</q-item-section>
            </q-item>

            <q-item
                clickable
                v-ripple
                :active="link === 'experience'"
                @click="scrollToElement('experience')"
                active-class="my-menu-link"
            >
                <q-item-section>Experience</q-item-section>
            </q-item>

            <q-item
                clickable
                v-ripple
                :active="link === 'interests'"
                @click="scrollToElement('interests')"
                active-class="my-menu-link"
            >
                <q-item-section>Interests</q-item-section>
            </q-item>
            <q-item
                clickable
                v-ripple
                :active="link === 'volunteering'"
                @click="scrollToElement('volunteering')"
                active-class="my-menu-link"
            >
                <q-item-section>Volunteering Program</q-item-section>
            </q-item>
            <q-item
                clickable
                v-ripple
                :active="link === 'references'"
                @click="scrollToElement('references')"
                active-class="my-menu-link"
            >
                <q-item-section>References</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
            <div id="resumeAvatarCont" class="q-pa-sm q-mt-sm absolute-left">
                <q-avatar size="75px" >
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
            </div>
            <div class="fixed-right bg-transparent">
                <div class="text-weight-bold q-mt-md">Mete Alp Kızılçay, MSc.</div>
                <div class="text-weight-bold">Full Stack Developer</div>

                <q-btn flat size="10px" round class="socialMediaLinks" 
                type="a" :icon="instagramIcon" 
                href="https://www.instagram.com/mete.spam/" target="_blank" />
                <q-btn flat size="10px" round class="socialMediaLinks" 
                type="a" :icon="githubIcon" 
                href="https://github.com/metealp" target="_blank" />
                <q-btn flat size="10px" round class="socialMediaLinks" 
                type="a" :icon="twitterIcon" 
                href="https://twitter.com/metealpki" target="_blank" />
                <q-btn flat size="10px" round class="socialMediaLinks" 
                type="a" :icon="linkedinIcon" 
                href="https://www.linkedin.com/in/mete-alp-k%C4%B1z%C4%B1l%C3%A7ay-9bb184161/" target="_blank" />
            </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <q-page padding >
            <h3 class="resumeSectionTitle" id="intro">Introduction</h3>
            <h3 class="resumeSectionTitle" id="skills">Skills</h3>
            <h3 class="resumeSectionTitle" id="education">Education</h3>
            <h3 class="resumeSectionTitle" id="experience">Experiences</h3>
            <p v-for="n in 50" :key="n">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam, alias aliquam saepe illum aperiam nostrum magni provident voluptate eos recusandae, fuga nisi soluta quaerat, earum voluptatum quis harum reiciendis!</p>
            <h3 class="resumeSectionTitle" id="interests">Interests</h3>
            <h3 class="resumeSectionTitle" id="volunteering">Volunteering</h3>
            <h3 class="resumeSectionTitle" id="references">References</h3>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import { fabLinkedin } from '@quasar/extras/fontawesome-v5';
import { fabInstagram } from '@quasar/extras/fontawesome-v5';
import { fabGithub } from '@quasar/extras/fontawesome-v5';
import { fabTwitter } from '@quasar/extras/fontawesome-v5';
import { scroll } from 'quasar'
// const { getScrollTarget, setScrollPosition } = scroll

export default {
  data() {
    return {
        drawer: false,
        link: "intro",
        linkedinIcon: "",
        twitterIcon: null,
        githubIcon: null,
        instagramIcon: null,
        currentPosition: 0,
    };
  },
  created() {
      this.linkedinIcon = fabLinkedin
      this.twitterIcon = fabTwitter
      this.githubIcon = fabGithub
      this.instagramIcon = fabInstagram
  },
  methods: {
    scrollHandler(details){
        this.currentPosition = details.position
    },
    scrollToElement(elmId){
        const elm =  document.getElementById(elmId);
        const target = scroll.getScrollTarget(elm);
        const offset = elm.offsetTop - elm.scrollHeight;
        const duration = 300;
        scroll.setScrollPosition(target, offset, duration);
        this.link = elmId; 
    }
  },
//   computed: {
//       closest
//   },
    watch: {
        currentPosition: function (newPos){
            const titles = Array.from(document.getElementsByClassName("resumeSectionTitle"))
            const withPos = titles.map( (x) => ( 
                { 
                    elemId: x.id,
                    position: x.offsetTop 
                } 
            ));
            let posDiff = 0;
            let closestTitle = "intro";
            withPos.forEach(x => { 
                if(x.position-newPos+20 < posDiff){
                    posDiff = newPos-x.position;
                    closestTitle = x.elemId;
                }
            })
            this.link = closestTitle;
        }
    }
};
</script>
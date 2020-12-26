<template>
  <div >
    <q-layout view="Hh Lpr lff" style="100%" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
            <q-btn dense flat round icon="r_developer_mode" @click="left = !left" />
            <q-toolbar-title> Mete Alp Kızılçay </q-toolbar-title>
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
                @click="link = 'intro'"
                active-class="my-menu-link"
            >
                <q-item-section>Intro</q-item-section>
            </q-item>

            <q-item
                clickable
                v-ripple
                :active="link === 'skills'"
                @click="link = 'skills'"
                active-class="my-menu-link"
            >
                <q-item-section>Skills</q-item-section>
            </q-item>

            <q-item
                clickable
                v-ripple
                :active="link === 'education'"
                @click="link = 'education'"
                active-class="my-menu-link"
            >
                <q-item-section>Education</q-item-section>
            </q-item>

            <q-item
                clickable
                v-ripple
                :active="link === 'experience'"
                @click="link = 'experience'"
                active-class="my-menu-link"
            >
                <q-item-section>Experience</q-item-section>
            </q-item>

            <q-item
                clickable
                v-ripple
                :active="link === 'interests'"
                @click="link = 'interests'"
                active-class="my-menu-link"
            >
                <q-item-section>Interests</q-item-section>
            </q-item>
            <q-item
                clickable
                v-ripple
                :active="link === 'volunteering'"
                @click="link = 'volunteering'"
                active-class="my-menu-link"
            >
                <q-item-section>Volunteering Program</q-item-section>
            </q-item>
            <q-item
                clickable
                v-ripple
                :active="link === 'references'"
                @click="link = 'references'"
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
        <q-page padding>
          <p v-for="n in 115" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
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


export default {
  data() {
    return {
        left: false,
        link: "intro",
        linkedinIcon: "",
        twitterIcon: null,
        githubIcon: null,
        instagramIcon: null,
    };
  },
  created() {
      this.linkedinIcon = fabLinkedin
      this.twitterIcon = fabTwitter
      this.githubIcon = fabGithub
      this.instagramIcon = fabInstagram

  }
};
</script>
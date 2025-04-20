<template>
  <div >
    <q-layout view="lHh Lpr lff" style="100%" class="shadow-2 rounded-borders" >
      <q-header elevated class="layoutHeader">
        <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="r_menu" />
            <q-toolbar-title></q-toolbar-title>
            <q-tabs align="right">
                <q-route-tab to="/" label="Resume" />
                <q-route-tab to="/portfolio" label="Portfolio" />
                <!-- <q-route-tab to="/blog" label="Blog" /> -->
            </q-tabs>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="220"
        :breakpoint="400"
        id="mainDrawer"
      >
        <q-scroll-area style="height: calc( 100% - 220px); margin-top: 220px; border-right: 1px solid #ddd">
            <slot name="drawer" />
        </q-scroll-area>

        <q-img class="absolute-top avatarBgImage" src="/src/assets/8568.jpg" style="height: 220px">
            <div id="resumeAvatarCont" class="q-pa-sm q-mt-sm absolute-top">
              <div class="row justify-center">
                <q-avatar size="90px" class="" >
                    <img :src="layoutAvatar">
                </q-avatar>
              </div>
            </div>
            <div class="absolute-bottom bg-transparent">
              <div class="row justify-center">
                <div class="text-weight-bold q-mt-md">Mete Alp Kızılçay, MSc.</div>
                <div class="text-weight-bold">Full Stack Developer</div>
                <div id="layoutContEmail"><a href="mailto:kizilcaymetealp@gmail.com" target="_blank">kizilcaymetealp@gmail.com</a></div>
                <div id="layoutContGithub"><a href="https://github.com/metealp" target="_blank" rel="noopener noreferrer">https://github.com/metealp</a></div>
              </div>
            </div>
        </q-img>
      </q-drawer>

      <q-page-container>
          <slot name="page" />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fabLinkedin, fabInstagram, fabGithub, fabTwitter } from '@quasar/extras/fontawesome-v5';
import avatarImg from "../assets/resume_img.jpg";

const drawer = ref(false);
const linkedinIcon = ref(null);
const twitterIcon = ref(null);
const githubIcon = ref(null);
const instagramIcon = ref(null);
const layoutAvatar = ref(avatarImg);

onMounted(() => {
  linkedinIcon.value = fabLinkedin;
  twitterIcon.value = fabTwitter;
  githubIcon.value = fabGithub;
  instagramIcon.value = fabInstagram;
});
</script>
<template>
    <Layout v-scroll="scrollHandler"> 
        <template v-slot:drawer>
          <q-list padding>
            <q-item
              clickable
              v-ripple
              :active="link === 'helEdc'"
              @click="scrollToElement('helEdc')"
              active-class="drawer-menu-link">
              <q-item-section>Helios EDC</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'helErp'"
              @click="scrollToElement('helErp')"
              active-class="drawer-menu-link">
              <q-item-section>Helios ERP</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'helRm'"
              @click="scrollToElement('helRm')"
              active-class="drawer-menu-link">
              <q-item-section>Helios Remote Monitoring</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'medcaseLan'"
              @click="scrollToElement('medcaseLan')"
              active-class="drawer-menu-link">
              <q-item-section>Medcase Landing</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'mevnAuth'"
              @click="scrollToElement('mevnAuth')"
              active-class="drawer-menu-link">
              <q-item-section>VENoM Auth</q-item-section>
            </q-item>

          </q-list>
        </template>

        <template v-slot:page>
          <q-page padding>
            <!-- <h3 class="resumeSectionTitle" id="heledc">Helios Electronic Data Capture</h3>
            <h3 class="resumeSectionTitle" id="helErp">Helios Enterprise Resource Management</h3>
            <h3 class="resumeSectionTitle" id="helRm">Helios Remote Monitoring</h3>
            <h3 class="resumeSectionTitle" id="medcaseLan">Medcase Landing</h3>
            <h3 class="resumeSectionTitle" id="mevnAuth">VENoM Stack Authentication</h3> -->
            <div v-for="project in projects" :key="project.id" v-show="isPortfolioReady">
              <Project
                :id="project.id"
                :title="project.title"
                :contribution="project.contribution"
                :stack="project.stack"
                :details="project.details"
                :images="project.images"
              > </Project>
            </div>
            <div v-show="!isPortfolioReady">
              <div class="row items-center">
                <div class="col-12 col-md-6">
                  <q-img
                    :src="bgImage"
                    spinner-color="white"
                    max
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </q-page>
        </template>
    </Layout>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { scroll, debounce } from 'quasar';
import Layout from '../layouts/Layout.vue';
import Project from '../components/Project.vue';
import bgImage from '../assets/60028.jpg';

const isPortfolioReady = ref(false);
const drawer = ref(false);
const link = ref("helEdc");
const currentPosition = ref(0);
const sectionTitles = ref(null);
const sectionWithPos = ref(null);

const projects = ref([
  {
    id: "heledc",
    title: "Helios Electronic Data Capture",
    contribution: "contributionEDC",
    stack: "stackEDC",
    details: "detailsEDC",
    images: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg","https://cdn.quasar.dev/img/parallax2.jpg"],
  },
  {
    id: "helErp",
    title: "Helios Enterprise Resource Management",
    contribution: "contributionhelErp",
    stack: "stackhelErp",
    details: "detaihelErp",
    images: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg","https://cdn.quasar.dev/img/parallax2.jpg"],
  },
  {
    id: "helRm",
    title: "Helios Remote Monitoring",
    contribution: "contributionhelRm",
    stack: "stackhelRm",
    details: "detahelRm",
    images: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg","https://cdn.quasar.dev/img/parallax2.jpg"],
  },
  {
    id: "medcaseLan",
    title: "Medcase Landing",
    contribution: "contributionmedcaseLan",
    stack: "stackmedcaseLan",
    details: "detailsEmedcaseLan",
    images: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg","https://cdn.quasar.dev/img/parallax2.jpg"],
  },
  {
    id: "mevnAuth",
    title: "VENoM Stack Authentication",
    contribution: "contributionmevnAuth",
    stack: "stackmevnAuth",
    details: "detailsmevnAuth",
    images: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg","https://cdn.quasar.dev/img/parallax2.jpg"],
  }
]);

const scrollHandler = debounce(function(position) {
  currentPosition.value = position;
}, 200);

const scrollToElement = (elmId) => {
  const elm = document.getElementById(elmId);
  const target = scroll.getScrollTarget(elm);
  const offset = elm.offsetTop - elm.scrollHeight;
  const duration = 300;
  scroll.setScrollPosition(target, offset, duration);
  link.value = elmId;
};

onMounted(() => {
  sectionTitles.value = Array.from(document.getElementsByClassName("resumeSectionTitle"));
  sectionWithPos.value = sectionTitles.value.map((x) => ({
    elemId: x.id,
    position: x.offsetTop
  }));
});

watch(currentPosition, (newPos) => {
  let posDiff = 0;
  let closestTitle = "intro";
  if (sectionWithPos.value) {
    sectionWithPos.value.forEach(x => {
      if (x.position - newPos + 20 < posDiff) {
        posDiff = newPos - x.position;
        closestTitle = x.elemId;
      }
    });
    link.value = closestTitle;
  }
});
</script>
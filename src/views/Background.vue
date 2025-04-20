<template>
    <Layout v-scroll="scrollHandler"> 
        <template v-slot:drawer>
            <q-list padding>
                <q-item
                    clickable
                    v-ripple
                    :active="link === 'intro'"
                    @click="scrollToElement('intro')"
                    active-class="drawer-menu-link">
                    <q-item-section>Introduction</q-item-section>
                </q-item>

                <q-item
                    clickable
                    v-ripple
                    :active="link === 'skills'"
                    @click="scrollToElement('skills')"
                    active-class="drawer-menu-link">
                    <q-item-section>Skills</q-item-section>
                </q-item>

                <q-item
                    clickable
                    v-ripple
                    :active="link === 'education'"
                    @click="scrollToElement('education')"
                    active-class="drawer-menu-link">
                    <q-item-section>Education</q-item-section>
                </q-item>

                <q-item
                    clickable
                    v-ripple
                    :active="link === 'experience'"
                    @click="scrollToElement('experience')"
                    active-class="drawer-menu-link">
                    <q-item-section>Experience</q-item-section>
                </q-item>

                <q-item
                    clickable
                    v-ripple
                    :active="link === 'interests'"
                    @click="scrollToElement('interests')"
                    active-class="drawer-menu-link">
                    <q-item-section>Interests</q-item-section>
                </q-item>
                <q-item
                    clickable
                    v-ripple
                    :active="link === 'volunteering'"
                    @click="scrollToElement('volunteering')"
                    active-class="drawer-menu-link">
                    <q-item-section>Volunteering Program</q-item-section>
                </q-item>
                <q-item
                    clickable
                    v-ripple
                    :active="link === 'references'"
                    @click="scrollToElement('references')"
                    active-class="drawer-menu-link">
                    <q-item-section>References</q-item-section>
                </q-item>
            </q-list>
        </template>

        <template v-slot:page>
            <q-page padding>
                <h3 class="resumeSectionTitle" id="intro">Introduction</h3>
                <Introduction> </Introduction>
                <h3 class="resumeSectionTitle" id="skills">Skills</h3>
                <Skills> </Skills>
                <h3 class="resumeSectionTitle" id="education">Education</h3>
                <Education> </Education>
                <h3 class="resumeSectionTitle" id="experience">Experience</h3>
                <Experience> </Experience>
                <h3 class="resumeSectionTitle" id="interests">Interests</h3>
                <Interests> </Interests>
                <h3 class="resumeSectionTitle" id="volunteering">Volunteering</h3>
                <Volunteering> </Volunteering>
                <h3 class="resumeSectionTitle" id="references">References</h3>
                <References> </References>
            </q-page>
        </template>
    </Layout>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { scroll, debounce } from 'quasar';
import Layout from '../layouts/Layout.vue';
import References from '../components/References.vue';
import Introduction from '../components/Introduction.vue';
import Skills from '../components/Skills.vue';
import Experience from '../components/Experience.vue';
import Education from '../components/Education.vue';
import Interests from '../components/Interests.vue';
import Volunteering from '../components/Volunteering.vue';

const drawer = ref(false);
const link = ref("intro");
const currentPosition = ref(0);
const sectionTitles = ref(null);
const sectionWithPos = ref(null);

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
    sectionWithPos.value.forEach(x => {
        if (x.position - newPos + 20 < posDiff) {
            posDiff = newPos - x.position;
            closestTitle = x.elemId;
        }
    });
    link.value = closestTitle;
});
</script>
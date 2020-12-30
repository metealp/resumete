<template>
    <div class="q-px-lg q-pb-md">
        <q-timeline :layout="layout" color="secondary">

        <q-timeline-entry
            title="Web Developer at Monitor Cro"
            subtitle="July, 2020 ~ ..."
            side="left"
        >
            <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </q-timeline-entry>

        <q-timeline-entry
            title="BIM Developer at Nika PMC"
            subtitle="December, 2018 ~ July, 2020"
            side="right"
        >
            <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </q-timeline-entry>

        </q-timeline>
    </div>
</template>

<script>
export default {
    computed: {
        layout () {
        return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
        }
    }
}

</script>

<style>

</style>
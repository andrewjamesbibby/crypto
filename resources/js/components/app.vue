<template>
    <div id="app">

        <div class="container">

            <nav class="main level">
                <!--<p class="level-item has-text-centered">-->
                    <!--<router-link v-bind:to="'/'">Home</router-link>-->
                <!--</p>-->
                <p class="level-item has-text-centered">
                    <router-link v-bind:to="'/crypto'">Crypto</router-link>
                </p>
                <!--<p class="level-item has-text-centered">-->
                    <!--<router-link v-bind:to="'/chat'">Chat</router-link>-->
                <!--</p>-->
                <!--<p class="level-item has-text-centered">-->
                    <!--<router-link v-bind:to="'/chart'">Charts</router-link>-->
                <!--</p>-->
                <!--<p class="level-item has-text-centered">-->
                    <!--<router-link v-bind:to="'/response'">Response</router-link>-->
                <!--</p>-->
            </nav>

            <router-view></router-view>
        </div>

    </div>
</template>

<style scoped>

    nav.main {
        border-bottom: solid 1px #f5f5f5;
        margin-top: 20px;
    }

    nav p {
        padding: 1em;
    }

</style>

<script>
    export default {
        mounted() {
        },
    }
</script>

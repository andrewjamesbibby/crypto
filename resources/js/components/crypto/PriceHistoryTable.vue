<template>
    <div>
        <h1><strong>Crypto Price History</strong></h1>

        <table class="table is-fullwidth is-striped is-hoverable" v-if="prices.length > 0">
            <thead>
            <tr>
                <th>Time</th>
                <th>BTC</th>
                <th>ETH</th>
                <th>LTC</th>
                <th>XRP</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="price in prices.slice().reverse()">
                <td>{{ price.datetime | moment("Do MMM h:mm:ss ") }}</td>
                <td>{{ price.data.DISPLAY.BTC.GBP.PRICE  }}</td>
                <td>{{ price.data.DISPLAY.ETH.GBP.PRICE }}</td>
                <td>{{ price.data.DISPLAY.LTC.GBP.PRICE }}</td>
                <td>{{ price.data.DISPLAY.XRP.GBP.PRICE }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        computed: {
            prices() {
                return this.$store.state.prices;
            }
        },
    }
</script>
<style scoped>

    table {
        margin-bottom: 100px;
    }

    h1 {
        border-bottom: solid 2px #fafafa;
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

</style>


<template>
    <div>
        <LatestCryptoPrices />
        <CryptoCharts />
        <PriceHistoryTable />
    </div>
</template>

<script>
    import LatestCryptoPrices from './LatestCryptoPrices';
    import PriceHistoryTable from './PriceHistoryTable';
    import CryptoCharts from "./charts/CryptoCharts";

    export default {
        components: {CryptoCharts, PriceHistoryTable, LatestCryptoPrices },
        data : function(){
            return {
            }
        },
        mounted() {
            this.listen();
        },
        computed: {
            prices() {
                return this.$store.state.prices
            },
        },
        methods: {
            storePrices(data){
                this.$store.commit('storePrices', data);
            },
            updateCharts(data){
                this.$store.commit('updateCharts', data);
            },
            listen() {
                Echo.channel('crypto-price')
                    .listen('ObtainedPrices', (data) => {
                        this.storePrices(data);
                        this.updateCharts(data);
                    });
            }
        }
    }
</script>
<style scoped>

    h1 {
        border-bottom: solid 2px #fafafa;
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
    }


</style>

<template>
    <GChart type="LineChart" :data="chartData" :options="chartOptions"/>
</template>
<script>
    import {mapState} from 'Vuex'

    export default {
        data : function(){
            return {
                chartOptions: {
                    legend: 'none',
                    series: {
                        0: { color: '#39e231' },
                    },
                    title: 'Etherium (ETH)',
                    pointSize: 5,
                },
            }
        },
        computed: {
            chartData() {
                return this.ltcChart.chartRows
            },
            ...mapState(['ltcChart'])
        },
    }
</script>

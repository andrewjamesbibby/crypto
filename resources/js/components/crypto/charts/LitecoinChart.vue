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
                        0: { color: '#4679e2' },
                    },
                    title: 'Litecoin (LTC)',
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

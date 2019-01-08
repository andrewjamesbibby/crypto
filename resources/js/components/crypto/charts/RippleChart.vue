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
                        0: { color: '#44e2d3' },
                    },
                    title: 'Ripple (XRP)',
                    pointSize: 5,
                },
            }
        },
        computed: {
            chartData() {
                return this.xrpChart.chartRows
            },
            ...mapState(['xrpChart'])
        },
    }
</script>

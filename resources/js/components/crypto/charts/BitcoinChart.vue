<template>
    <GChart
        type="LineChart"
        :data="chartData"
        :options="chartOptions"
        :events="chartEvents"
        ref="gChart"
    />
</template>
<script>
    import {mapState} from 'Vuex'

    export default {
        data : function(){
            return {
                chartOptions: {
                    legend: 'none',
                    series: {
                        0: { color: '#e2431e' },
                    },
                    title: 'Bitcoin (BTC)',
                    pointSize: 5,
                },
                chartEvents: {
                    'select': () => {
                        const chart = this.$refs.gChart.chartObject;
                        const selection = chart.getSelection();
                        console.log(selection[0].row);

                    }
                }
            }
        },
        computed: {
            chartData() {
                return this.btcChart.chartRows
            },
            ...mapState(['btcChart'])
        },
    }
</script>

import Vue from 'vue';
import Vuex from 'Vuex';
import moment from 'moment';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        prices: [],
        btcChart : {
            chartRows : [ [ 'Date', 'Price'], [ '*', 0 ] ],
            selected : 0
        },
        ltcChart : {
            chartRows : [ [ 'Date', 'Price'], [ '*', 0 ] ],
            selected : 0
        },
        ethChart : {
            chartRows : [ [ 'Date', 'Price'], [ '*', 0 ] ],
            selected : 0
        },
        xrpChart : {
            chartRows : [ [ 'Date', 'Price'], [ '*', 0 ] ],
            selected : 0
        }
    },
    getters: {
    },
    mutations: {
        storePrices(state, data) {
            // Push new price data to prices store
            state.prices.push({
                datetime : data.prices.timestamp,
                data : data.prices,
            });

            // Remove oldest price (only display history of 10 items)
            if(state.prices.length >= 50){
                state.prices.shift();
            }
        },
        updateCharts(state, data){

            // Add new node to each line chart
            state.btcChart.chartRows.push([ moment(data.prices.timestamp).format('hh:mm'), data.prices.RAW.BTC.GBP.PRICE ]);
            state.ltcChart.chartRows.push([ moment(data.prices.timestamp).format('hh:mm'), data.prices.RAW.LTC.GBP.PRICE ]);
            state.ethChart.chartRows.push([ moment(data.prices.timestamp).format('hh:mm'), data.prices.RAW.ETH.GBP.PRICE ]);
            state.xrpChart.chartRows.push([ moment(data.prices.timestamp).format('hh:mm'), data.prices.RAW.XRP.GBP.PRICE ]);

            // remove oldest node (only display history of 10 items)
            if(state.btcChart.chartRows.length >= 11){
                state.btcChart.chartRows.splice(1,1);
            }

            if(state.ltcChart.chartRows.length >= 11){
                state.ltcChart.chartRows.splice(1,1);
            }

            if(state.ethChart.chartRows.length >= 11){
                state.ethChart.chartRows.splice(1,1);
            }

            if(state.xrpChart.chartRows.length >= 11){
                state.xrpChart.chartRows.splice(1,1);
            }
        }
    }
});

export default store;
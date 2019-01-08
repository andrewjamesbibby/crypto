<template>
    <div>
        <h1><strong>Crypto Current Prices</strong> - <a @click="update" href="#">Update</a></h1>
        <div class="columns">
            <div class="column is-3" v-for="(crypto, index) in cryptos">
                <div class="level-item has-text-centered"  v-bind:class="{ selected: crypto.active }" @click="select(index)">
                    <div>
                        <p class="heading">{{ crypto.name }}</p>
                        <p class="title">{{ prices.length > 0 ?  prices[0].data.DISPLAY[crypto.code].GBP.PRICE : 0 }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                cryptos : [
                    { code: "BTC", name: "Bitcoin", active: true  },
                    { code: "LTC", name: "Litecoin", active: false },
                    { code: "ETH", name: "Etherium", active: true },
                    { code: "XRP", name: "Ripple", active: true },
                ]
            }
        },
        computed: {
            prices() {
                return this.$store.state.prices;
            }
        },
        methods : {
            select(item){
                this.cryptos[item].active = this.cryptos[item].active ? false : true;
            },
            update(){
                axios.get('/update')
                    .then(function (response) {
                    })
                    .catch(function (error) {
                        console.log('error updating!');
                    })
            }
        }
    }
</script>
<style scoped>

    h1 {
        border-bottom: solid 2px #fafafa;
        padding: 10px;
        margin-bottom: 20px;
    }

    .level-item {
        padding-top: 8px;
        padding-bottom: 8px;
    }

    .level-item:hover {
        background-color: #fafafa;
        cursor: pointer;
    }

    .level-item.selected {
        background-color: #e2e031;
    }

</style>

<template>
    <div>
        <h1><strong>Crypto Charts</strong></h1>

        <div class="columns">
            <div class="column is-half">
                <BitcoinChart />
            </div>
            <div class="column is-half">
                <LitecoinChart />
            </div>
        </div>

        <div class="columns">
            <div class="column is-half">
                <EtheriumChart />
            </div>
            <div class="column is-half">
                <RippleChart />
            </div>
        </div>
    </div>

</template>
<script>

    import BitcoinChart from './BitcoinChart';
    import LitecoinChart from './LitecoinChart';
    import EtheriumChart from './EtheriumChart';
    import RippleChart from './RippleChart';

    export default {
        components: { BitcoinChart, LitecoinChart, EtheriumChart, RippleChart },
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

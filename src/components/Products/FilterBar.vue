<template>
    <div class="col-3 d-none d-lg-block d-xl-block">
        <div class="card-selector">
            <div class="card-body p-5">
                <div class="search-title">
                    <h4>Catagorias</h4>
                    <h6 v-for="item in info.types" :key="item.name" @click="" :value="item.value">
                        {{ item.name }}
                    </h6>
                </div>
                <div class="search-title">
                    <h4>Marcas</h4>
                    <h6 v-for="item in info.branches" :key="item.name" @click="" :value="item.value">
                        {{ item.name }}
                    </h6>
                </div>
                <div class="search-title">
                    <h5>Price Range</h5>
                    <input type="range" min="0" max="100" value="50" class="slider" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const info = reactive({
    types: [
        { name: 'Audifonos', value: 'audifonos' },
        { name: 'Interfaces', value: 'interfaces' },
        { name: 'Monitores', value: 'monitores' },
        { name: 'Microfonos', value: 'microfonos' }
    ],
    branches: [
        { name: 'Sennheiser', value: 'Sennheiser' },
        { name: 'Beyerdynamic', value: 'Beyerdynamic' },
        { name: 'KRK', value: 'KRK' },
    ],
    colors: [
        { name: 'yellow', value: '#FFC015' },
        { name: 'blue', value: '#829FAA' },
        { name: 'white', value: '#BFB8AE' },
        { name: 'silver', value: '#817A77' }
    ]
})


</script>
<style scoped>
.card-selector {
    color: #DCDCDC;
    height: 40rem;
    background: #2c3539 !important;
    box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title {
    margin-bottom: 60px;
}

.search-title h6 {
    cursor: pointer;
}

.circle {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 6px;
    cursor: pointer
}
</style>
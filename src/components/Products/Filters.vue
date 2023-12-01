<template>
    <div class="d-flex">
        <div class="dropdown flex-fill px-4 px-sm-0">
            <a class="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">ORDENAR POR 
                <span style="color:#f2be00;">{{ sort }}</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" @click="sortBy('categoria')" value="categoria">Categorias</a>
                <a class="dropdown-item" @click="sortBy('precio')" value="precio">Precio</a>
                <a class="dropdown-item" @click="sortBy('marcas')" value="marcas">Marcas</a>
            </div>
        </div>
        <div class="dropdown d-block d-lg-none d-xl-none px-4 px-sm-0">
            <button class="btn btn-light dropdown-toggle" role="button" id="MenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">CATAGORIAS</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const sort = ref('CATEGORIAS')

const emit = defineEmits<{
    (e: 'sortItem', name: string): void
}>()

function sortBy(value: string): void {
    emit('sortItem', value);
    sort.value = value.toUpperCase()
}
</script>


<style scoped>
.btn-light {
    color: black !important;
    background: white;
    border-radius: 0 !important;
    border: 1px solid grey !important;
}

.dropdown-menu {
    background-color: #F8F8F8 !important;
    color: #2c3539 !important;
}

.dropdown-menu>a:hover {
    background-color: #dae0e5;
    cursor: pointer
}
</style>
<template>
    <div class="searc d-none d-xl-block d-lg-block pr-3">
      <input type="search" class="search" placeholder="Buscar..." @focus="onInputFocus" @blur="onInputBlur">
    </div>
  </template>
  
  <script setup>
  const onInputFocus = () => {
    document.querySelector('.search').classList.add('focused');
  }
  
  const onInputBlur = () => {
    document.querySelector('.search').classList.remove('focused');
  }
  </script>
  
  <style scoped>
  .search {
    outline: none;
    border: none;
    background: url('../../assets/img/search.png') no-repeat 5px center;
    background-size: 30px;
    padding: 5px 8px 4px 26px;
    width: 10px;
    border-radius: 10em;
    transition: all 0.5s;
    margin-right: 10px;
    color: white; /* Color del texto normal */
  }
  
  .search.focused {
    width: 160px;
    font-family: inherit;
    padding-left: 30px;
    border-color: #DCDCDC;
    box-shadow: 0 0 5px #DCDCDC;
    backface-visibility: hidden;
    perspective: 1000;
    background-size: 24px;
    color: white; /* Color del texto cuando está enfocado */
  }
  
  .search::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}
  </style>
  
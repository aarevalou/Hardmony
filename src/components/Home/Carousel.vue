<template>
  <section class="carousel">
    <div id="heroControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#heroControls" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="img-fluid" src="../../assets/img/focusrites.png" alt="First-slide" title="First-slide">
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="../../assets/img/presonus.png" alt="Second-slide" title="Second-slide">
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="../../assets/img/genelecs.png" alt="Third-slide" title="Third-slide">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-fluid {
  justify-content: center;
  height: 400px; 
  margin: auto; 
  display: block; 
}

.carousel-indicators button {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid rgb(129, 127, 127);
}

.carousel-indicators>.active {
  background: #e0f0f8;
}
</style>

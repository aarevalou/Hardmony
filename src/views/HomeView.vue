<template>
  <main>
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
          <img class="img-fluid" src="../assets/img/focusrites.png" alt="First-slide" title="First-slide">
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="../assets/img/presonus.png" alt="Second-slide" title="Second-slide">
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="../assets/img/genelecs.png" alt="Third-slide" title="Third-slide">
        </div>
      </div>
    </div>
  </section>
  <section class="about-us">
    <div class="row p-4">
      <div class="col-6">
        <img class="float-lg-right" src="../assets/img/beyer.jpg" alt="home-img" title="home-img" loading="lazy">
      </div>
      <div class="col-12 col-sm-6">
        <h2>La supremacia de los audífonos Beyerdynamic</h2>
        <p>Los audífonos Beyerdynamic destacan por su supremacía en la calidad de audio y la ingeniería de sonido de alta fidelidad. Con décadas de experiencia en la industria del audio, Beyerdynamic ha perfeccionado la artesanía de sus productos para ofrecer una reproducción de sonido excepcionalmente precisa y detallada. La marca alemana es reconocida por su construcción robusta y duradera, junto con el confort de uso durante largos períodos.
        </p>
      </div>
    </div>
    <div class="row p-4">
      <div
        class="col-12 col-sm-6 text-sm-right text-md-right ml-sm-0 ml-md-5 ml-lg-5 ml-xl-5 text-lg-right order-sm-first order-12"
        style="margin-right: -8%; z-index:1;">
        <h2>El tamaño si importa!</h2>
        <p>En nuestra tienda, te ofrecemos una amplia gama de monitores de gran tamaño, destacando especialmente la prestigiosa serie de monitores de estudio de ADAM Audio. Estos monitores han ganado reconocimiento por su excepcional calidad de sonido y precisión en la reproducción auditiva. La serie de monitores de ADAM Audio está diseñada para satisfacer las demandas de profesionales de la música, productores y entusiastas del audio que buscan una reproducción fiel y detallada.
        </p>
      </div>
      <div class="col-6">
        <img src="../assets/img/adams.jpg" alt="home-img-2" title="home-img-2" loading="lazy">
      </div>
    </div>
  </section>
  </main>
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

.about-us img {
  width: 90%;
  min-width: 380px;
}

</style>



export const cardVideo = (data) => `
    <a href="/video.html"
    class="cover">
    <img class="image"
      src=${data.cover}>
      <time class="time">${data.time}</time>
  </a>
  <div class="container flex">
    <div class="user-avatar">
      <img class="image" src=${data.avatar}>
    </div>
    <div class="content">
      <h3 class="title row-text-2">
        <a href="video.html">💕 Un video mas en la seccion - Clon Youtube 💕</a>
      </h3>
      <a href="#">Gerbo67</a>
      <p class="video-information">
        <span class="views">${data.views} visualizaciones</span>
        <span>Hace 2 horas</span>
      </p>
    </div>
  </div>
  `

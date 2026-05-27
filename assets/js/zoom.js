// Initialize medium zoom. Constrain the zoomed image to a 50vw × 50vh box
// centered in the viewport so figures don't blow up to fullscreen.
$(document).ready(function () {
  // Tweak this fraction (0..1) to make zoom larger or smaller.
  var ZOOM_FRACTION = 0.7;

  function makeContainer() {
    var w = window.innerWidth * ZOOM_FRACTION;
    var h = window.innerHeight * ZOOM_FRACTION;
    return {
      width: w,
      height: h,
      top: (window.innerHeight - h) / 2,
      left: (window.innerWidth - w) / 2,
    };
  }

  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
    container: makeContainer(),
  });

  // Recompute container on window resize so the cap follows the viewport.
  let resizeT;
  window.addEventListener("resize", function () {
    clearTimeout(resizeT);
    resizeT = setTimeout(function () {
      medium_zoom.update({ container: makeContainer() });
    }, 150);
  });
});

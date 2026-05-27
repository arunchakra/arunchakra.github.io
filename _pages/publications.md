---
layout: page
permalink: /publications/
title: publications
description: Publications grouped by Basic Science and Clinical Research, in reverse chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

<div class="publications">

<details class="pub-section pub-section-basic">
<summary class="category-header category-header-basic">Basic Science<span class="category-count" aria-hidden="true"></span></summary>

{% bibliography -q @*[category=basic] %}

</details>

<details class="pub-section pub-section-clinical">
<summary class="category-header category-header-clinical">Clinical Research<span class="category-count" aria-hidden="true"></span></summary>

{% bibliography -q @*[category=clinical] %}

</details>

</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("details.pub-section").forEach(function (section) {
      var count = section.querySelectorAll("ol.bibliography > li").length;
      var slot = section.querySelector(".category-count");
      if (slot && count > 0) {
        slot.textContent = " (" + count + ")";
      }
    });
  });
</script>

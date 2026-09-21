/* site.js — inicialización Mermaid local (offline) + utilidades del sitio */
(function () {
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      themeVariables: {
        primaryColor: "#EFF6FF",
        primaryBorderColor: "#3B82F6",
        primaryTextColor: "#1E293B",
        lineColor: "#94A3B8",
        secondaryColor: "#F0FDF4",
        secondaryBorderColor: "#10B981",
        secondaryTextColor: "#1E293B",
        tertiaryColor: "#FFF7ED",
        tertiaryBorderColor: "#F59E0B",
        tertiaryTextColor: "#1E293B",
        noteBkgColor: "#F8FAFC",
        noteTextColor: "#6B7280",
        noteBorderColor: "#E2E8F0",
        fontSize: "14px",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      },
      flowchart: { curve: "basis", padding: 32, nodeSpacing: 80, rankSpacing: 80, htmlLabels: true, wrappingWidth: 160 },
      sequence: { mirrorActors: false, messageAlign: "center" },
      gantt: { titleTopMargin: 25, barHeight: 24, barGap: 6 }
    });
  }
  // marcar enlace activo del sidebar
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".sidebar a.nav-link").forEach(function (a) {
    var href = a.getAttribute("href").split("/").pop();
    if (href === path) a.classList.add("active");
  });

  // ----- Colapso y toggle del Sidebar -----
  var siteHeader = document.querySelector(".site-header");
  var sidebar = document.querySelector(".sidebar");
  var toggleBtn = document.getElementById("sidebar-toggle");

  if (!toggleBtn && siteHeader && sidebar) {
    toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "sidebar-toggle";
    toggleBtn.id = "sidebar-toggle";
    toggleBtn.setAttribute("aria-label", "Colapsar / expandir menú lateral");
    toggleBtn.setAttribute("title", "Colapsar / expandir menú lateral");
    toggleBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    siteHeader.insertBefore(toggleBtn, siteHeader.firstChild);
  }

  // Restaurar estado guardado en localStorage (o colapsado por defecto en móviles si no está guardado)
  var isSavedCollapsed = localStorage.getItem("sidebar-collapsed");
  var isCollapsed = isSavedCollapsed !== null ? (isSavedCollapsed === "true") : (window.innerWidth <= 980);

  if (isCollapsed) {
    document.body.classList.add("sidebar-collapsed");
    document.documentElement.classList.add("sidebar-collapsed");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var isCollapsed = document.body.classList.toggle("sidebar-collapsed");
      document.documentElement.classList.toggle("sidebar-collapsed", isCollapsed);
      localStorage.setItem("sidebar-collapsed", isCollapsed ? "true" : "false");
    });
  }

  // ----- Secciones colapsables en el sidebar -----
  document.querySelectorAll(".sidebar .nav-section h4").forEach(function (h4) {
    h4.addEventListener("click", function () {
      var section = h4.closest(".nav-section");
      if (section) section.classList.toggle("collapsed");
    });
  });

  // ----- Lightbox / Zoom de diagramas a pantalla completa -----
  var lightbox = document.createElement("div");
  lightbox.className = "diagram-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Zoom de diagrama");
  lightbox.innerHTML =
    '<button type="button" class="diagram-lightbox-close" aria-label="Cerrar">&times;</button>' +
    '<div class="diagram-lightbox-container">' +
    '  <img src="" alt="Diagrama ampliado">' +
    '  <div class="diagram-lightbox-caption"></div>' +
    '</div>';
  document.body.appendChild(lightbox);

  var lbImg = lightbox.querySelector("img");
  var lbCaption = lightbox.querySelector(".diagram-lightbox-caption");
  var lbClose = lightbox.querySelector(".diagram-lightbox-close");

  function openLightbox(src, alt, captionHtml) {
    lbImg.src = src;
    lbImg.alt = alt || "Diagrama ampliado";
    if (captionHtml && captionHtml.trim().length > 0) {
      lbCaption.innerHTML = captionHtml;
      lbCaption.style.display = "block";
    } else {
      lbCaption.style.display = "none";
    }
    lightbox.classList.add("active");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.classList.remove("lightbox-open");
    setTimeout(function () {
      if (!lightbox.classList.contains("active")) {
        lbImg.src = "";
      }
    }, 250);
  }

  lbClose.addEventListener("click", function (e) {
    e.stopPropagation();
    closeLightbox();
  });

  lightbox.addEventListener("click", function (e) {
    if (!e.target.closest(".diagram-lightbox-caption")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });

  document.querySelectorAll(".diagram img").forEach(function (img) {
    img.setAttribute("title", "Haz clic para ampliar a pantalla completa");

    var figure = img.closest(".diagram");
    if (figure && !figure.querySelector(".diagram-zoom-badge")) {
      var badge = document.createElement("span");
      badge.className = "diagram-zoom-badge";
      badge.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> Clic para ampliar';
      figure.appendChild(badge);
    }

    img.addEventListener("click", function () {
      var caption = figure ? figure.querySelector("figcaption") : null;
      var captionHtml = caption ? caption.innerHTML : "";
      openLightbox(img.src, img.alt, captionHtml);
    });
  });
})();

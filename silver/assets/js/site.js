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
})();

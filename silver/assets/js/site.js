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
})();

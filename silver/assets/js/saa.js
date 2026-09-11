/* SAA-C03 · capa silver — inicialización Mermaid (tema dark-AWS) + utilidades
   100% offline: usa assets/js/mermaid.min.js local */
(function () {
  "use strict";

  // ----- Navegación móvil -----
  var toggle = document.querySelector(".sidebar-toggle");
  var sidebar = document.querySelector(".sidebar");
  if (toggle && sidebar) {
    toggle.addEventListener("click", function () { sidebar.classList.toggle("open"); });
    document.addEventListener("click", function (e) {
      if (sidebar.classList.contains("open") && !sidebar.contains(e.target) && e.target !== toggle) {
        sidebar.classList.remove("open");
      }
    });
  }

  // ----- Marcar enlace activo -----
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-group a").forEach(function (a) {
    if ((a.getAttribute("href") || "").endsWith(path)) a.classList.add("active");
  });

  // ----- Mermaid con tema Dark AWS -----
  if (typeof mermaid !== "undefined") {
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      securityLevel: "loose",
      themeVariables: {
        background: "#12151b",
        primaryColor: "#232f3e",        // nodos: AWS squid ink
        primaryBorderColor: "#ff9900",  // bordes: naranja AWS
        primaryTextColor: "#e9ebed",
        secondaryColor: "#1d2b26",
        secondaryBorderColor: "#2ea597",
        secondaryTextColor: "#e9ebed",
        tertiaryColor: "#2a2116",
        tertiaryBorderColor: "#ec7211",
        tertiaryTextColor: "#e9ebed",
        lineColor: "#8792a1",
        noteBkgColor: "#1a222a",
        noteTextColor: "#a7b1bc",
        noteBorderColor: "#2e3844",
        actorBkg: "#232f3e",
        actorBorder: "#ff9900",
        actorTextColor: "#e9ebed",
        signalColor: "#a7b1bc",
        signalTextColor: "#e9ebed",
        labelBoxBkgColor: "#232f3e",
        labelBoxBorderColor: "#ff9900",
        sequenceNumberColor: "#16191f",
        fontSize: "15px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
      },
      flowchart: {
        curve: "basis",
        padding: 32,
        nodeSpacing: 80,
        rankSpacing: 80,
        htmlLabels: true,
        wrappingWidth: 200
      },
      sequence: { mirrorActors: false, messageAlign: "center", actorMargin: 90, width: 180 },
      gantt: { titleTopMargin: 25, barHeight: 24, barGap: 6 }
    });
  }

  // ----- Contador de diagramas (debug amable) -----
  window.addEventListener("load", function () {
    var n = document.querySelectorAll(".mermaid svg").length;
    if (n && window.console) console.log("[silver] " + n + " diagramas mermaid renderizados");
  });
})();

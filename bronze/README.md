# Capa bronze — fuentes oficiales

La capa bronze contiene la documentación oficial de AWS sobre la que se construye todo el
material de estudio. Esta edición unificada la organiza en **dos capas con roles distintos**:

## 01-fases-curadas/ — las fuentes del curso

155 documentos oficiales en dos formatos (HTML crudo en `raw/` y Markdown limpio en
`markdown/`), organizados en las 9 fases de la ruta de estudio:

| Fase | Prefijo | Contenido |
|------|---------|-----------|
| 0 | EXAM- | Página oficial del examen, exam guide, sample questions, política de nombres |
| 1 | FND- | Fundamentos y Well-Architected |
| 2 | NET- | Redes y conectividad |
| 3 | CMP- | Cómputo |
| 4 | STG- | Almacenamiento |
| 5 | DB- | Bases de datos |
| 6 | INT- | Integración y analytics |
| 7 | SEC-/MIG- | Seguridad, migración y DR |
| 8 | GOV- | Gobernanza y costos |

Cada página del curso silver cita estos IDs. El registro detallado (dominios del examen,
prioridad, URL, estado) está en `01-fases-curadas/manifest.csv` (conservado del original)
y consolidado en `../manifest-maestro.csv`.

## 02-biblioteca-servicios/ — biblioteca de referencia

Biblioteca exhaustiva organizada por categoría de servicio (no por fase de estudio):

- `01-exam/` — exam guide oficial (PDF + HTML) y guía de estudio desglosada por dominio.
- `02-well-architected/` — el framework completo, pilar por pilar, con todos sus capítulos.
- `03-whitepapers/` — whitepapers clave (Disaster Recovery, Shared Responsibility Model).
- `04-faqs/` — 214 FAQs oficiales por servicio.
- `05-docs/` — documentación por servicio (~180 servicios: analytics, compute, containers,
  db, integration, mgmt, network, security, storage…), en HTML y Markdown.
- `_manifest/` — fragments JSON originales con la justificación de cada fuente
  (dominio, task statement, motivo de inclusión).

## manifest-maestro.csv

Registro consolidado de las **823 fuentes únicas** de ambas capas, deduplicadas por URL.
Columnas: `pack` (capa de procedencia), `id`, `domains` (D1–D4), `phase` (fase o categoría),
`service`, `title`, `url` (fuente oficial), `status`, `raw_path` y `md_path` (rutas locales
relativas a la raíz del paquete) y `fetched_at`.

> Nota: 7 entradas están marcadas `url-solo`: el zip original de la biblioteca las anunciaba
> como descargadas pero los archivos no venían incluidos; se conserva la URL oficial para
> consultarlas en línea.

# Informe de unificación — SAA-C03 Definitivo

Este documento resume el análisis comparativo de las dos versiones originales del material
de estudio y las decisiones tomadas para construir la edición unificada.

## 1. Las dos versiones originales

### Pack A — "saa-completo" (105 MB · 1.471 archivos)

| Capa | Contenido |
|------|-----------|
| bronze | **Biblioteca masiva**: 755 HTML + 676 MD + 4 PDF. Docs por servicio (1.110 archivos), 214 FAQs, whitepapers (DR, SRM), Well-Architected completo, exam guide oficial. Manifest en fragments JSON (767 URLs con dominios, tasks y justificación por entrada). |
| silver | 19 páginas: 4 dominios **profundos** (48–60 KB, 33 diagramas Mermaid en total), 10 páginas de apéndice técnico por área, cheat sheets (56 KB), banco de 24 preguntas con respuesta razonada, glosario de 176 términos EN, ruta de 8 semanas. |
| ausente | Sin README, sin guía maestra, sin manifest consolidado, sin laboratorios, sin comparativas, sin trazabilidad navegable. |

### Pack B — "SAA-C03-Study-Pack" (16 MB · 382 archivos)

| Capa | Contenido |
|------|-----------|
| README + guía | README completo con instrucciones y **guía maestra PDF de 28 páginas** (plan, fases, trazabilidad, estrategia EN). |
| bronze | 155 documentos curados (HTML + MD) en 9 fases con IDs citables + **manifest.csv consolidado** (155 filas: dominios, fase, servicio, URL, estado, rutas) + 10 fragments jsonl. |
| silver | **55 páginas**: 6 de inicio (incluye estrategia EN, Skill Builder y fuentes), 41 temas granulares por fase con checkpoints, 4 dominios alineados a los 13 task statements, extras: banco de 60 preguntas, comparativas, laboratorios, glosario de 78 conceptos. |
| ausente | Cobertura de fuentes mucho menor (155 vs 767 URLs), sin FAQs, sin cheat sheets, sin apéndice técnico, sin deep dives. |

## 2. Veredicto de completitud

**Ninguna versión es un superconjunto de la otra** — ganan en dimensiones distintas:

| Dimensión | Ganador | Motivo |
|-----------|---------|--------|
| Cantidad y cobertura de fuentes | **Pack A** | 767 URLs vs 155; FAQs, whitepapers y docs por servicio inexistentes en B |
| Curación y pedagogía | **Pack B** | Ruta de 9 fases, 41 temas con checkpoints, alineación exacta a task statements |
| Profundidad técnica por dominio | **Pack A** | Páginas de dominio 2× más extensas, 4× más diagramas |
| Guía de plan y trazabilidad | **Pack B** | Guía maestra PDF + manifest consolidado |
| Práctica de examen | Empate | B: 60 preguntas · A: 24 escenarios distintos → se conservan ambos (84) |
| Laboratorios y comparativas | **Pack B** | A no los tiene |
| Cheat sheets y glosario de términos | **Pack A** | B no los tiene |

Solapamiento: 99 URLs comunes en ambos bronze (~16 % de B ya estaba en A). Los glosarios y
bancos de preguntas son complementarios, no duplicados.

## 3. Decisiones de fusión

1. **Esqueleto del curso = Pack B.** Su navegación por fases es la pedagogía dominante y su
   estructura de directorios es la base del silver unificado (se mantienen intactas las 55 páginas).
2. **Importaciones desde Pack A** (18 páginas, re-ruteadas y con menú unificado):
   - 4 dominios → `silver/dominios/dominio-N-deep-dive.html` (se conservan también los de B:
     los de B repasan los task statements; los de A profundizan la técnica).
   - 10 apéndices técnicos → `silver/apendice/`.
   - 4 extras → `cheat-sheets.html`, `banco-preguntas-2.html` (24 escenarios),
     `glosario-terminos.html` (176 términos), `ruta-8-semanas.html`.
3. **Colisiones resueltas por calidad**: banco principal = 60 preguntas de B; glosario principal =
   conceptos de B; los equivalentes de A se conservan como "II"/"terminos" (contenidos distintos).
4. **Guía maestra y README = Pack B** (PDF de 28 páginas, portada editable).
5. **Bronze en dos capas** con roles explícitos:
   - `01-fases-curadas/` = fuentes citadas por el curso (IDs EXAM/FND/NET/…).
   - `02-biblioteca-servicios/` = biblioteca de referencia exhaustiva por servicio.
   - Se conservan ambas copias de las 99 URLs solapadas porque cumplen roles distintos
     (citable por ID en fases vs. biblioteca por servicio) y el coste de duplicación es bajo.
6. **manifest-maestro.csv consolidado**: 823 fuentes únicas (155 fases + 668 biblioteca,
   deduplicadas por URL), con rutas relativas al paquete y columna `pack` de procedencia.
7. **Assets duales**: el sitio base usa sus CSS/JS/Mermaid propios; las páginas importadas
   conservan los suyos (`style-ext.css`, `saa.js`, `mermaid-dd.min.js`) para garantizar que
   los diagramas Mermaid se rendericen exactamente igual que en su versión original.

## 4. Correcciones aplicadas durante la unificación

- 287 referencias a `bronze/` en páginas base re-enrutadas a la capa `01-fases-curadas/`.
- 4 back-links de los deep dives corregidos a rutas hermanas.
- 3 enlaces internos viejos (`ruta-estudio.html`) actualizados al nuevo nombre.
- 1 enlace a un documento que **no venía en el zip original del Pack A** (7 archivos de
  IAM/Detective marcados "ok" en su manifest pero ausentes) redirigido a la URL oficial de AWS;
  sus 7 filas del manifest maestro quedaron marcadas `url-solo`.
- Validación final automatizada: **5.744 referencias locales comprobadas, 0 rotas**;
  823 filas del manifest con rutas existentes; 0 anomalías de rutas.

## 5. Números finales

| Métrica | Valor |
|---------|-------|
| Páginas del curso silver | 73 (6 inicio + 41 temas + 8 dominios + 10 apéndice + 8 extras) |
| Diagramas Mermaid | 112 (curso base) + 104 (deep dive/apéndice) |
| Preguntas con respuesta razonada | 84 (60 + 24) |
| Documentos bronze | 1.767 archivos en 2 capas |
| Fuentes únicas trazadas | 823 (manifest-maestro.csv) |
| Términos de glosario | 78 conceptos + 176 términos EN |

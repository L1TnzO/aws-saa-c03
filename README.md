# SAA-C03 Definitivo — Edición unificada

Paquete completo para preparar el examen **AWS Certified Solutions Architect – Associate (SAA-C03)**.
Es la **fusión de dos versiones previas** del material (un curso curado por fases y una guía extendida
con biblioteca masiva), unificadas conservando lo mejor de cada una y con todos los enlaces internos
verificados (0 rotos).

## Qué contiene

| Ruta | Qué es |
|------|--------|
| `guia-maestra/Guia-Maestra-SAA-C03.pdf` | **Guía maestra** (28 páginas): el examen en cifras, estructura oficial (4 dominios · 13 task statements), ruta optimizada de 9 fases, desglose dominio→task statement→documentación con URLs, recursos de Skill Builder y estrategia para rendir en inglés. |
| `silver/` | **Curso web autocontenido (73 páginas HTML)**. Abrir `silver/index.html` en cualquier navegador. Funciona 100% offline. Ver detalle abajo. |
| `bronze/01-fases-curadas/` | 155 documentos oficiales (HTML + Markdown) organizados en las 9 fases de la ruta de estudio, con IDs citables (EXAM-, FND-, NET-, CMP-, STG-, DB-, INT-, SEC-, MIG-, GOV-). |
| `bronze/02-biblioteca-servicios/` | **Biblioteca exhaustiva** (1.400+ archivos): docs por servicio, 214 FAQs, whitepapers y Well-Architected completo. Cobertura de referencia que no existe en la versión curada. |
| `bronze/manifest-maestro.csv` | **Registro maestro consolidado: 823 fuentes únicas** con URL oficial, dominio del examen, fase/categoría, servicio y rutas locales. |
| `docs/INFORME-UNIFICACION.md` | Análisis comparativo de las dos versiones originales y decisiones de fusión tomadas. |

## El curso silver (73 páginas)

| Sección | Páginas | Contenido |
|---------|---------|-----------|
| Inicio | 6 | Cómo usar el curso, examen en cifras, ruta de 9 fases, estrategia EN, Skill Builder, trazabilidad. |
| Temas por fase | 41 | Una página por servicio/área: qué es, cómo diseñar con él, diagramas Mermaid, tablas de decisión, señales del examen, checkpoint y fuentes. |
| Repaso por dominio | 4 | Los 13 task statements oficiales desglosados con señales→respuestas y mapa de servicios. |
| **Deep dive por dominio** | 4 | Análisis técnico extendido de cada dominio (IAM a fondo, orden de evaluación de políticas, VPC endpoints, estrategias DR, etc.). |
| **Apéndice técnico** | 10 | Una página por área de servicios con el detalle servicio a servicio: límites, precios, casos de uso. |
| Extras | 8 | Banco de 60 preguntas + **banco II de 24 escenarios** con respuestas razonadas, **cheat sheets**, comparativas, laboratorios Free Tier, glosario de conceptos, **glosario de 176 términos EN** y ruta alternativa de 8 semanas. |

Las secciones en **negrita** provienen de la guía extendida fusionada; el resto, del curso por fases.
Todo el sitio funciona offline (CSS, JS y Mermaid incluidos localmente).

## Cómo usar

1. **Lee la guía maestra** (`guia-maestra/Guia-Maestra-SAA-C03.pdf`) para entender el plan de estudio.
2. **Estudia en el sitio**: abre `silver/index.html` y sigue la ruta de 9 fases desde el menú lateral.
3. **Profundiza**: tras cada tema usa su "deep dive" de dominio y el apéndice técnico del área.
4. **Repasa exprés**: cheat sheets y tablas comparativas en la víspera del examen.
5. **Practica**: banco de 60 preguntas + banco II de 24 escenarios (84 preguntas en total, con respuesta razonada).
6. **Audita cualquier afirmación**: cada página cita IDs de documento → `bronze/01-fases-curadas/markdown/` o `bronze/manifest-maestro.csv` (823 fuentes con URL).

## Datos clave del examen

- 65 preguntas (50 evaluadas + 15 no evaluadas) · 130 minutos · nota mínima 720/1.000 · USD 150.
- Dominios: D1 Secure 30% · D2 Resilient 26% · D3 High-Performing 24% · D4 Cost-Optimized 20%.
- El material asume presentación **en inglés**: mantiene el vocabulario técnico EN tal como aparece
  en el examen y dedica páginas completas a la técnica de lectura de preguntas.

## Estructura del paquete

```
SAA-C03-Definitivo/
├── README.md                        ← este archivo
├── docs/INFORME-UNIFICACION.md      ← comparativa y decisiones de fusión
├── guia-maestra/                    ← guía maestra PDF + fuente de portada
├── bronze/
│   ├── README.md                    ← cómo consultar la capa de fuentes
│   ├── manifest-maestro.csv         ← 823 fuentes consolidadas
│   ├── 01-fases-curadas/            ← 155 docs curados (raw + markdown, 9 fases)
│   └── 02-biblioteca-servicios/     ← biblioteca exhaustiva por servicio
└── silver/                          ← curso web offline (73 páginas)
    ├── index.html                   ← punto de entrada
    ├── examen.html · ruta.html · estrategia.html · skill-builder.html · fuentes.html
    ├── temas/       (41 páginas)
    ├── dominios/    (4 base + 4 deep-dive)
    ├── apendice/    (10 páginas)
    ├── extras/      (8 páginas)
    └── assets/      (css/js local, dos builds de Mermaid)
```

## Origen del material

Todo el contenido se construye sobre documentación oficial de AWS: docs.aws.amazon.com,
aws.amazon.com/certification, skillbuilder.aws y d1.awsstatic.com. El detalle completo de
qué se tomó de cada versión original está en `docs/INFORME-UNIFICACION.md`.

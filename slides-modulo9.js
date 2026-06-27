window.MODULE_TITLE = "Diseña tu propio SGC";
window.SLIDES = [
  { type: 'portada', eyebrow: 'Módulo 9 de 9 — Proyecto Final', title: 'Diseña tu propio SGC',
    intro: 'Es el momento de aplicar todo lo aprendido. En este proyecto final diseñarás un Sistema de Gestión de la Calidad básico para una empresa real o ficticia, cubriendo las cláusulas 4 a 10 de la norma.',
    meta: ['⏱ 3 horas', '🎓 Certificado de finalización', '📋 SGC completo exportable'] },
  { type: 'callout', variant: 'info', label: 'Cómo funciona este proyecto',
    html: '<p>Elige un tipo de empresa, completa los campos de cada sección aplicando los conocimientos del curso, y al finalizar recibirás tu certificado de finalización y podrás exportar tu SGC en PDF. No hay respuestas incorrectas: lo que importa es que las respuestas sean coherentes y específicas para la empresa elegida.</p>' },
  { type: 'empresas' },
  { type: 'proyecto', num: 1, title: '📍 Cláusula 4 — Contexto de la organización', campos: [
    { id: 'c4_alcance', label: 'Declaración de alcance del SGC', placeholder: 'Ejemplo: El SGC aplica al diseño, producción y venta de productos de panadería artesanal desde el obrador de Madrid...', hint: 'Incluye: qué productos/servicios, qué procesos y qué ubicaciones abarca el sistema.' },
    { id: 'c4_fortalezas', label: '3 fortalezas internas relevantes para el SGC', placeholder: '1. Personal con alta experiencia en el oficio\n2. Proceso productivo bien definido aunque no documentado\n3. Base de clientes fidelizada de larga trayectoria', minHeight: 90 },
    { id: 'c4_riesgos', label: '3 riesgos externos identificados', placeholder: '1. Dependencia de proveedor único de materias primas\n2. Entrada de competidores con precios más bajos\n3. Cambios en normativa sanitaria alimentaria', minHeight: 90 },
    { id: 'c4_partes', label: 'Partes interesadas principales y su expectativa clave', placeholder: 'Clientes: calidad constante y disponibilidad del producto\nEmpleados: formación y condiciones laborales justas\nProveedores: pagos a tiempo y comunicación clara' }
  ]},
  { type: 'proyecto', num: 2, title: '👔 Cláusula 5 — Liderazgo', campos: [
    { id: 'c5_politica', label: 'Redacta la política de calidad de tu empresa', placeholder: 'En [empresa], nuestro compromiso es...', minHeight: 120, hint: 'Recuerda: debe ser específica a tu empresa, incluir compromiso de cumplimiento y mejora continua, y terminar indicando que se comunicará a toda la organización.' },
    { id: 'c5_rq', label: '¿Quién es el Responsable de Calidad y cuáles son sus funciones principales?', placeholder: 'El Responsable de Calidad es [nombre/cargo]. Sus funciones incluyen...' }
  ]},
  { type: 'proyecto', num: 3, title: '⚠️ Cláusula 6 — Planificación', campos: [
    { id: 'c6_riesgos', label: 'Define 2 riesgos con su nivel y acción planificada', placeholder: 'RIESGO 1: Fallo del proveedor de harina\nProbabilidad: 2 · Impacto: 3 · Nivel: 6-ALTO\nAcción: Homologar proveedor alternativo antes de Q2\nResponsable: Gerencia\n\nRIESGO 2: ...', minHeight: 140 },
    { id: 'c6_objetivos', label: 'Define 2 objetivos de calidad SMART', placeholder: 'OBJETIVO 1: Reducir las reclamaciones de clientes\nIndicador: Nº reclamaciones/mes · Meta: <2/mes · Responsable: Calidad · Fecha: 31/12/2026\n\nOBJETIVO 2: ...', minHeight: 120 }
  ]},
  { type: 'proyecto', num: 4, title: '🛠️ Cláusula 7 — Soporte', campos: [
    { id: 'c7_recursos', label: 'Lista los recursos críticos que necesita tu SGC', placeholder: 'Personas: 1 responsable de calidad a tiempo parcial...\nInfraestructura: ...\nConocimiento crítico a proteger: ...\nEquipos de medición a calibrar: ...' },
    { id: 'c7_docs', label: '¿Qué información documentada es esencial en tu empresa? (mínimo 5)', placeholder: '1. Política de calidad\n2. Mapa de procesos\n3. Procedimiento de atención a reclamaciones\n4. Fichas de competencia del personal\n5. ...', minHeight: 120 }
  ]},
  { type: 'proyecto', num: 5, title: '⚙️ Cláusula 8 — Operación', campos: [
    { id: 'c8_proceso', label: 'Describe el proceso principal de tu empresa (entradas → actividades → salidas)', placeholder: 'ENTRADA: Pedido del cliente / materia prima\nACTIVIDADES: Recepción → Producción → Control calidad → Entrega\nSALIDA: Producto/servicio entregado + factura\n\nControles en cada etapa: ...' },
    { id: 'c8_nc', label: '¿Cómo controlas las salidas no conformes en tu empresa?', placeholder: 'Cuando se detecta un producto/servicio no conforme, la acción inmediata es...\nSe documenta en...\nSe notifica al cliente cuando...' }
  ]},
  { type: 'proyecto', num: 6, title: '📊 Cláusula 9 — Evaluación del desempeño', campos: [
    { id: 'c9_kpis', label: 'Define 3 KPIs que medirás mensualmente', placeholder: 'KPI 1: Tasa de satisfacción del cliente · Método: encuesta post-compra · Meta: >8/10\nKPI 2: Nº no conformidades · Método: registro interno · Meta: <3/mes\nKPI 3: ...', minHeight: 100 },
    { id: 'c9_auditoria', label: 'Plan de auditorías internas: ¿qué, cuándo y quién?', placeholder: 'Frecuencia: semestral\nAuditor: [cargo, debe ser independiente del área auditada]\nAlcance: todas las cláusulas 4-10\nPrimer ciclo: Q1 2027' }
  ]},
  { type: 'proyecto', num: 7, title: '🔄 Cláusula 10 — Mejora continua', campos: [
    { id: 'c10_nc', label: 'Documenta una no conformidad real o hipotética con su acción correctiva completa', placeholder: 'NC: Un cliente recibió su pedido con un error en el producto\nAcción inmediata: Reposición urgente + disculpa\nCausa raíz (5 porqués): ...\nAcción correctiva: ...\nResponsable: · Fecha: · Verificación eficacia: ...', minHeight: 160 }
  ]},
  { type: 'evaluar' },
  { type: 'certificado' }
];

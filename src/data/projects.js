// src/data/projects.js
export const projects = [
  {
    title: "SERTEAPP – Sistema de Información a la medida",
    description:
      "Sistema de información desarrollado con Laravel y Angular, desplegado en AWS, con base de datos SQL y versión móvil conectada mediante APIs REST.",
    image: "/projects/serteapp-preview.jpg",
    tech: [
      "Laravel",
      "Angular",
      "MySQL",
      "AWS",
      "Flutter",
      "REST API"
    ],
    features: [
      "Gestión centralizada de procesos internos",
      "Frontend SPA con Angular",
      "API REST para consumo web y móvil",
      "Aplicación móvil con autenticación segura",
      "Interfaz moderna con soporte para modo dark"
    ],
    demoUrl: "https://www.serteapp.org",
    githubUrl: "https://github.com/Darwinsolano2023/SERTEAPP.git"
  },
  {
    title: "Pipeline ETL Automatizado en Python",
    description:
      "Automatismo de 5 pasos para extracción, limpieza, transformación y envío de datos vía SFTP, con logging en base de datos y notificaciones por correo usando Amazon SES (SMTP).",
    image: "/projects/serteapp-preview.jpg",
    tech: [
      "Pyhton",
      "PostgreSQL",
      "SES SMTP",
      "AWS",
      "S3 Bucket"
    ],
    features: [
      "Reducción significativa de carga manual.",
      "Mejora en la calidad y confiabilidad de los datos.",
      "Trazabilidad completa del proceso end-to-end.",
      "Automatización lista para ejecución programada (cron / scheduler)."
    ],
    githubUrl: "https://github.com/Darwinsolano2023/Pipeline-ETL-Automatizado.git"
  },
  {
    title: "FullGasJC – Ecommerce B2B",
    description:
      "Plataforma Ecommerce desarrollada en Laravel para la venta y gestión de productos, pedidos y clientes, desplegada en Google Cloud Platform.",
    image: "/projects/fullgasjc-preview.jpg",
    tech: [
      "Laravel",
      "PostgreSQL",
      "GCP",
      "REST API",
      "Bootstrap"
    ],
    features: [
      "Gestión de productos y electrodomesticos por categorias",
      "Ofertas y descuentos por volumen",
      "Gestion de pedidos por whatsapp",
      "Panel administrativo con métricas",
      "Arquitectura escalable"
    ],
    demoUrl: "https://www.fullgasjc.com",
    githubUrl: "https://github.com/Darwinsolano2023/FullgasJC.git"
  }
];

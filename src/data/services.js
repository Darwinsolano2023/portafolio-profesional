// src/data/services.js
import { Code, Database, TrendingUp, Cloud, Award, Briefcase } from 'lucide-react';

export const services = [
  {
    icon: Code,
    title: "Desarrollo Full Stack",
    description: "Aplicaciones web y móviles con Laravel, Angular, React, Node.js e Ionic. Arquitectura escalable y APIs RESTful."
  },
  {
    icon: Database,
    title: "Integración de Sistemas & APIs",
    description: "Conexión de plataformas mediante APIs RESTful con OAuth 2.0, JWT y sincronización de datos en tiempo real."
  },
  {
    icon: TrendingUp,
    title: "Analítica & Big Data",
    description: "ETL Pipelines con Python, BigQuery, procesamiento de grandes volúmenes de datos y análisis avanzado."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Arquitecturas en Azure y GCP, Data Factory, BigQuery, CI/CD, Docker y despliegue automatizado."
  },
  {
    icon: Award,
    title: "Business Intelligence",
    description: "Dashboards interactivos en Power BI y Looker Studio con KPIs automatizados y reportes ejecutivos."
  },
  {
    icon: Briefcase,
    title: "Automatización Python",
    description: "Scripts de automatización, procesamiento de datos con pandas/NumPy y reducción de tareas manuales."
  }
];
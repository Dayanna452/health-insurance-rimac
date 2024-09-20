# Health Insurance Risk App

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Structure Project

The core of the project is developed within the `src` folder:

Como mostrar esto de una manera más ordenada en mi readme:

```bash
src/
├── assets/
├── data/
    ├── constants/
    ├── stores/
├── pages/
├── presentation/
    ├── components/
        ├── blocks/
            ├── Button/
                ├── styles/
                |── hooks/ (opcional)
                └── index.tsx
        ├── contents/
            ├── Footer/
                ├── parts/
                ├── styles/
                |── hooks/ (opcional)
                └── index.tsx
        ├── layouts/
    ├── styles/
    ├── utils/
```

## Descripción de Carpetas y Archivos

### `src/assets/`

Contiene recursos estáticos como imágenes, fuentes, íconos, etc.

### `src/data/`

Contiene datos, mocks o información estática que se utilizan en toda la aplicación.

- **`constants/`:** Constantes globales de la aplicación como nombres de acciones o cualquier valor fijo reutilizable.
- **`stores/`:** Manejo del estado global de la aplicación.

### `src/pages/`

Componentes que representan las diferentes vistas o páginas de la aplicación.

### `src/presentation/`

Contiene los componentes visuales y estilizados de la aplicación:

- **`components/`:** Componentes reutilizables en diferentes partes de la aplicación.
  - **`blocks/`:** Componentes atómicos como botones, inputs, etc.
  - **`contents/`:** Componentes más grandes como headers, footers y secciones.
  - **`layouts/`:** Diseños de páginas y contenedores principales.
- **`styles/`:** Estilos globales en SASS. Incluye variables, mixins y reseteos.
- **`utils/`:** Funciones y hooks reutilizables que encapsulan lógica que no pertenece a un componente específico, como validación de formularios.

### `main.tsx`

Punto de entrada de la aplicación React. Aquí se monta el componente raíz y se configura el enrutador y otros proveedores globales.

## Cómo Empezar

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   yarn install
   ```
3. Ejecutar la aplicación en modo desarrollo:
   ```bash
   yarn dev
   ```
4. Visitar `http://localhost:5173` en el navegador.

## Herramientas Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz.
- **Vite**: Herramienta de desarrollo rápida y moderna para proyectos de frontend.
- **SASS**: Preprocesador de CSS para una mejor gestión de estilos.
- **TypeScript**: Superconjunto de JavaScript que añade tipos estáticos opcionales.
- **Zustand**: Gestor de estados globales.

## Contribuciones

Si deseas contribuir, por favor sigue estos pasos:

1. Crea un fork del repositorio.
2. Crea una nueva rama (`feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

¡Gracias por contribuir y ser parte de este proyecto!

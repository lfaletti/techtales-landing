# Creador de cuentos de Ciencia Ficción - Página de Inicio

Una página de inicio bilingüe para el Creador de cuentos de Ciencia Ficción, un chatbot de narrativa de ciencia ficción que crea historias inmersivas tanto en inglés como en español.

## 🌟 Características

- **Soporte Bilingüe**: Cambio fluido de idioma entre inglés y español
- **Diseño Moderno**: Interfaz limpia y responsiva construida con Next.js y Tailwind CSS
- **Elementos Interactivos**: Interfaz de usuario atractiva con transiciones suaves
- **Tema de Ciencia Ficción**: Diseño inmersivo que captura la esencia de la narrativa sci-fi
- **Responsivo Móvil**: Optimizado para todos los tamaños de dispositivo

## 🚀 Comenzando

### Prerrequisitos

- Node.js 18+ 
- Gestor de paquetes npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/lfaletti/techtales-landing.git
cd techtales-landing
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página de inicio.

## 🌍 Selección de Idioma

La página de inicio soporta dos idiomas:

- **Inglés**: Idioma predeterminado para usuarios internacionales
- **Español**: Traducción completa al español para usuarios hispanohablantes

Los usuarios pueden cambiar entre idiomas usando el selector de idioma en la barra de navegación. La selección se conserva entre actualizaciones de página.

## 📁 Estructura del Proyecto

```
techtales-landing/
├── app/                    # Directorio de la aplicación Next.js
├── components/             # Componentes React reutilizables
├── public/                 # Recursos estáticos
├── styles/                 # Archivos CSS y de estilos
├── lib/                    # Funciones de utilidad y configuraciones
├── locales/               # Archivos de traducción
└── README.md              # Documentación del proyecto
```

## 🛠️ Construido Con

- **Next.js 14**: Framework de React para producción
- **TypeScript**: JavaScript con tipado seguro
- **Tailwind CSS**: Framework CSS utility-first
- **React**: Biblioteca JavaScript para construir interfaces de usuario
- **Internacionalización**: Soporte i18n integrado para contenido bilingüe

## 🎨 Personalización

La página de inicio puede personalizarse fácilmente mediante:

1. **Colores**: Modifica la configuración de Tailwind CSS en `tailwind.config.js`
2. **Contenido**: Actualiza el contenido de texto en los archivos de localización (`locales/en.json`, `locales/es.json`)
3. **Componentes**: Modifica los componentes React en el directorio `components/`
4. **Estilos**: Ajusta los estilos usando clases de Tailwind o CSS personalizado

## 📱 Diseño Responsivo

La página de inicio es completamente responsiva y está optimizada para:

- Computadoras de escritorio (1024px+)
- Tabletas (768px - 1023px)
- Teléfonos móviles (320px - 767px)

### Otras Plataformas

La aplicación puede desplegarse en cualquier plataforma que soporte Next.js:

- Netlify
- AWS Amplify
- Heroku
- DigitalOcean App Platform

**Creador de cuentos de Ciencia Ficción** - Donde la ciencia ficción se encuentra con la narrativa interactiva 🚀✨

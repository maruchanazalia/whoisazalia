# Portafolio Personal - Estilo Journaling Emocional

Un portafolio personal moderno construido con React, inspirado en journaling emocional, collages estéticos y moodboards. Diseñado para transmitir autenticidad, crecimiento personal y profesionalismo técnico.

## 🎨 Características

- **Neuromorfismo**: Estilos suaves con sombras internas y externas para profundidad visual
- **Parallax Effects**: Efectos de parallax en el header y sección hero para movimiento y profundidad emocional
- **Componentes Reutilizables**: SkillCard, ExperienceTimeline, MoodCollage, PlaylistWidget, QuoteBubble
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones emocionales y animaciones fluidas
- **Paleta de Colores Pastel**: Tonos suaves, grises suaves, blancos y acentos en verde/azul claro

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación principal
│   ├── HeroSection.jsx      # Sección hero con collage y parallax
│   ├── Skills.jsx           # Tarjetas de habilidades
│   ├── Experience.jsx      # Timeline de experiencia
│   ├── Projects.jsx         # Showcase de proyectos
│   ├── Contact.jsx          # Formulario de contacto
│   ├── Footer.jsx           # Pie de página
│   ├── SkillCard.jsx        # Componente reutilizable de skill
│   ├── ExperienceTimeline.jsx  # Timeline reutilizable
│   ├── MoodCollage.jsx      # Collage estilo journaling
│   ├── PlaylistWidget.jsx   # Widget de playlist de Spotify
│   └── QuoteBubble.jsx      # Burbujas de citas
├── App.jsx                  # Componente principal
├── App.css                  # Estilos adicionales
└── index.css                # Estilos base con Tailwind
```

## 🎯 Personalización

### 1. Información Personal

Edita `src/App.jsx` para personalizar:

```jsx
const profileData = {
  profileImage: 'ruta/a/tu/foto.jpg', // Tu foto de perfil
  quotes: [
    { quote: 'Tu frase favorita', author: 'Tu nombre' },
    // Agrega más citas
  ],
  playlist: [
    { name: 'Canción', artist: 'Artista', spotifyUrl: 'URL' },
    // Agrega tus canciones favoritas
  ],
};
```

### 2. Skills y Tecnologías

Edita `src/components/Skills.jsx` para agregar o modificar tus habilidades:

```jsx
const skills = [
  { name: 'React', icon: FaReact, level: 'advanced' },
  // Agrega más skills
];
```

### 3. Experiencia Profesional

Edita `src/components/Experience.jsx` para actualizar tu experiencia:

```jsx
const experiences = [
  {
    title: 'Tu Puesto',
    company: 'Tu Empresa',
    period: '2023 - Present',
    description: 'Tu descripción',
    technologies: ['React', 'Node.js'],
  },
  // Agrega más experiencias
];
```

### 4. Proyectos

Edita `src/components/Projects.jsx` para mostrar tus proyectos:

```jsx
const projects = [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción',
    technologies: ['React', 'Node.js'],
    image: 'ruta/a/imagen.jpg',
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://tu-proyecto.com',
  },
  // Agrega más proyectos
];
```

### 5. Información de Contacto

Edita `src/components/Contact.jsx` para actualizar:

- Email de contacto
- Enlaces a redes sociales (LinkedIn, GitHub, Twitter, Instagram)

### 6. Colores y Estilos

Los colores se pueden personalizar en `tailwind.config.js`:

```js
colors: {
  pastel: {
    pink: '#FFE5E5',
    blue: '#E5F3FF',
    green: '#E5FFE5',
    // Modifica los colores según tu preferencia
  },
}
```

## 🎨 Estilos Neuromórficos

El proyecto utiliza clases de neuromorfismo personalizadas:

- `.neuromorphic` - Sombra externa estándar
- `.neuromorphic-inset` - Sombra interna
- `.neuromorphic-sm` - Versión pequeña
- `.neuromorphic-hover` - Efecto hover

## 📱 Responsive Design

El portafolio está completamente optimizado para:
- Móviles (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Pantallas grandes (1280px+)

## 🔧 Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework de CSS utility-first
- **Parallax.js** - Efectos de parallax
- **React Icons** - Iconos SVG

## 📝 Notas

- El formulario de contacto actualmente muestra una alerta. Puedes integrarlo con un servicio como Formspree, EmailJS o tu propio backend.
- Las imágenes de proyectos usan placeholders. Reemplázalas con screenshots reales de tus proyectos.
- La playlist de Spotify es un widget de ejemplo. Puedes integrar la API de Spotify para mostrar tu playlist real.

## 🌟 Características Emocionales

- **Frases Motivacionales**: "Finding new paths to travel is better than being stuck"
- **Música**: "La música dice todo lo que no puedo decir"
- **Saludo Personal**: "Hola amigos lind@s..."
- **Elementos Visuales**: Estrellas, galletas, audífonos como elementos decorativos

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

Hecho con ❤️ y mucho café ☕

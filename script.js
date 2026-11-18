const locations =
 {/*entrada: {
    title: "Entrada principal",
    eyebrow: "ESTÁS EN",
    description: "El acceso principal y punto de encuentro de la comunidad educativa.",
    text: "La tercera panorámica corresponde a la entrada. Desde este sector se puede recorrer el interior y continuar hacia los patios y otros espacios.",
    space: "Acceso principal",
    image: "PROYECTO ESCUELA CLIC/Entrada Principal.jpeg",
    hotspots: [
      { x: 52, y: 47, target: "pasillo", label: "Recorrer pasillo" },
      { x: 67, y: 47, target: "entrada2", label: "Ir a la entrada2" }
    ]
  },*/

   entrada: {
    title: "Entrada principal",
    eyebrow: "ESTÁS EN",
    description: "El acceso principal y punto de encuentro de la comunidad educativa.",
    text: "La tercera panorámica corresponde a la entrada. Desde este sector se puede recorrer el interior y continuar hacia los patios y otros espacios.",
    space: "Acceso principal",
    image: "PROYECTO ESCUELA CLIC/Entrada Principal.jpeg",
    hotspots: [
      { x: 15, y: 47, target: "pasillo", label: "Recorrer pasillo" },
      { x: 80, y: 50, target: "entrada2", label: "Ir a la entrada2" }
    ]
  },

  entrada2: {
    title: "Segunda entrada",
    eyebrow: "ESTÁS EN",
    description: "Conecta la entrada principal con el SUM, permitiendo un acceso directo a este espacio",
    image: "PROYECTO ESCUELA CLIC/2da entrada.jpeg",
    hotspots: [
      { x: 38, y: 50, target: "entrada", label: "Volver a la entrada" },
      { x: 90, y: 50, target: "sum", label: "Ir al sum" },
      { x: 81, y: 50, target: "escalera1", label: "Subir al primer piso" }
    ]

  },

escalera1: {
    title: "Escalera N° 1",
    eyebrow: "ESTÁS EN",
    description: "Conecta los distintos niveles de la insitutución, facilitando la circulacion interna y el acceso rapido entre las plantas del edificio.",
    image: "PROYECTO ESCUELA CLIC/Escalera 1.jpeg",
    hotspots: [
      { x: 18, y: 45, target: "entrada2", label: "Volver a la segunda entrada" },
      { x: 9, y: 35, target: "pasilloescalera1", label: "Subir" }
    ]

  },

  pasilloescalera1: {
    title: "Primer piso",
    eyebrow: "ESTÁS EN",
    description: "Area de distribuion de la planta alta que conecta los distintos sectores y la circulacion hacia aulas y baños.",
    image: "PROYECTO ESCUELA CLIC/1° piso- Escalera 1- salones-baño damas.jpeg",
    hotspots: [
      { x: 10, y: 45, target: "escalera1", label: "Ir a planta baja" },
      { x: 18, y: 40, target: "preceptoria2dopiso", label: "Ir a Sector adiministrativo y aulas" },
      { x: 35, y: 45, target: "escalera2", label: "Bajar a planta baja" },
      { x: 40, y: 45, target: "pasilloescalera3", label: "ir" }

    ]
  },

  pasilloescalera3: {
    title: "Primer piso",
    eyebrow: "ESTÁS EN",
    description: "",
    image: "PROYECTO ESCUELA CLIC/Pasillo 1°piso- escalera 3.jpeg",
    hotspots: [
      { x: 85, y: 45, target: "pasilloescalera1", label: "Volver al area de distribución" },
      { x: 10, y: 45, target: "escalera3", label: "Ir a la escalera3" }

    ]
  },

  escalera3: {
    title: "Escalera N°3",
    eyebrow: "ESTÁS EN",
    description: "Acceso de salida/conexión desde el primer piso hacia el pasilllo exterior.",
    image: "PROYECTO ESCUELA CLIC/Escalera 3.jpeg",
    hotspots: [
      { x: 14, y: 50, target: "pasillo", label: "Bajar al pasillo exterior" },
      { x: 10, y: 35, target: "pasilloescalera3", label: "volver" },
      { x: 80, y: 35, target: "pasillocomedor", label: "Ir al pasillo " }

    ]
  },

  pasillocomedor: {
    title: "Pasillo Comedor/Aulas",
    eyebrow: "ESTÁS EN",
    description: "Pasillo largo ubicado al subir por la Escalera N°3, que conduce hacia el comedor de la escuela y da acceso a cuatro salones de clase.",
    image: "PROYECTO ESCUELA CLIC/Pasillo Comedor.jpeg",
    hotspots: [
      { x: 58, y: 40, target: "escalera3", label: "Volver a la Escalera N°3" },
      { x: 14, y: 45, target: "preceptoriacomedor", label: "Ir a Preceptoria" }
    ]
  },

preceptoriacomedor: {
    title: "Preceptoria de ciclo superior",
    eyebrow: "ESTÁS EN",
    description: "Oficina dedicada al seguimiento academico, control de asistencia y atencion a estudiantes y tutores.",
    image: "PROYECTO ESCUELA CLIC/Preceptoria-Comedor.jpeg",
    hotspots: [
      { x: 80, y: 40, target: "pasillocomedor", label: "Volver al pasillo" },
      { x: 40, y: 40, target: "comedor", label: "Ir al comedor"}
    ]
  },

  comedor: {
    title: "Comedor",
    eyebrow: "ESTÁS EN",
    description: "",
    image: "PROYECTO ESCUELA CLIC/Comedor.jpeg",
    hotspots: [
      { x: 67, y: 40, target: "preceptoriacomedor", label: "Volver al pasillo" }
      
    ]
  },

patio: {
    title: "Patio externo",
    eyebrow: "ESTÁS EN",
    description: "Es un espacio de convivencia donde los alumnos comparten recreos y diferentes actividades. Alli se encuentran seis aulas, una preceptoría y el lugar destinado a estacionar bicicletas. Tambien se realizan el izamiento y el arrio de la bandera nacional.",
    image: "PROYECTO ESCUELA CLIC/Patio.jpg",
    hotspots: [
      { x: 58, y: 52, target: "sum", label: "ir al sum" },
      { x: 27, y: 52, target: "pasillocomputacion", label: "ir al polideportivo/sala de informatica" },
      { x: 36, y: 52, target: "pasillolaboratorio", label: "ir al pasillo" }
      
    ]
  },

pasillocomputacion: {
    title: "Pasillo al polideportivo",
    eyebrow: "ESTÁS EN",
    description: "Es el espacio que conduce al polideportivo y permite el acceso a la sala de programacion",
    image: "PROYECTO ESCUELA CLIC/Pasillo polideportivo.jpg",
    hotspots: [
      { x: 68, y: 52, target: "patio", label: "ir al patio externo" },
      { x: 15, y: 52, target: "saladeinformatica", label: "Ir a la sala de informatica" },
      { x: 26, y: 52, target: "polideportivo_entrada", label: "Ir al polideportivo" }
    ]
  },

saladeinformatica: {
    title: "Sala de informatica",
    eyebrow: "ESTÁS EN",
    description: "En esta sala de informatica donde cursan los alumnos del ciclo superior de la Tecnicatura en Programación. Aca tienen sus clases practicas para aprender a desarrollar sistemas, páginas web, aplicaciones y base de datos.",
    image: "PROYECTO ESCUELA CLIC/laboratorio de programacion.jfif",
    hotspots: [
      { x: 58, y: 49, target: "pasillocomputacion", label: "Salir" }
    ]
  },

  polideportivo_entrada: {
    title: "Sector Techado del Polideportivo",
    eyebrow: "ESTÁS EN",
    description: "Este es el acceso principal y sector techado del polideportivo. Es un espacio cubierto donde los alumnos tienen clases de educacion fisica, realiza activividades recreativas y se reunen en días de lluvia o mucho calor.",
    image: "PROYECTO ESCUELA CLIC/polideportivogaleria.jfif",
    hotspots: [
      { x: 37, y: 44, target: "pasillocomputacion", label: "Salir" },
      { x: 15, y: 44, target: "polideportivo", label: "Ir al polideportivo" }
    ]
  },

polideportivo: {
    title: "Polideportivo - Sector Descubierto",
    eyebrow: "ESTÁS EN",
    description: "Este es el sector abierto y al aire libre del polideportivo. Aca se realizan prácticas deportivas, partidos, entrenamientos y actividades fisicas duarnte las clases de educación fisica y eventos escolares.",
    image: "PROYECTO ESCUELA CLIC/Gemini_Generated_Image_am6q9cam6q9cam6q.jfif",
    hotspots: [
      { x: 49, y: 44, target: "polideportivo_entrada", label: "Ir al sector techado" },
      { x: 60, y: 44, target: "sumpolideportivo", label: "Ir al SUM del polideportivo" }
    ]
  },

sumpolideportivo: {
    title: "Polideportivo - Sector Descubierto",
    eyebrow: "ESTÁS EN",
    description: "Este es el salón de usos múltimples del polideportivo. Aunque es mas chico que el salón principal, es el espacio cerrado que se utiliza para organizar torneos, reuniones, eventos deportivos y distintas actividades con los alumnos.",
    image: "PROYECTO ESCUELA CLIC/Sum polideportivo.jpg",
    hotspots: [
      { x: 74, y: 44, target: "polideportivo", label: "Ir al polideportivo" }
    ]
  },

  escalera2: {
    title: "Escalera N°2",
    eyebrow: "ESTÁS EN",
    description: "Acceso que vincula la entrada principal de planta baja con el primer piso.",
    image: "PROYECTO ESCUELA CLIC/Escalera 2.jpeg",
    hotspots: [
      { x: 14, y: 65, target: "entrada", label: "Ir a entrada" },
      { x: 70, y: 35, target: "pasilloescalera1", label: "Subir al 1er piso" }

    ]
  },

  preceptoria2dopiso: {
    title: "Pimer piso - Sector administrativo y aulas",
    eyebrow: "ESTÁS EN",
    description: "Pasillo del nivel superior del edificio que da acceso a la preceptoria, la sala de computación, salones de clases y los sanitarios para docentes y personal.",
    image: "PROYECTO ESCUELA CLIC/1°piso- preceptoria-sala de Computacion-Baños.jpeg",
    hotspots: [
      { x: 20, y: 45, target: "pasilloescalera1", label: "Volver" },
      { x: 35, y: 45, target: "saladecomputación", label: "Ir a la sala de computacion de ciclo básico" }
    ]
  },

  saladecomputación: {
    title: "Sala de computacion - Ciclo Básico",
    eyebrow: "ESTÁS EN",
    description: "Esta es la sala de computación para los cursos de ciclo básico, donde los alumnos realizan sus practicas de informatica y proyectos digitales",
    image: "PROYECTO ESCUELA CLIC/Sala de Computacion-1° piso.jpeg",
    hotspots: [
      { x: 88, y: 45, target: "preceptoria2dopiso", label: "Volver" }
    ]
  },

  sum: {
    title: "Salón de usos múltiples",
    eyebrow: "ESTÁS EN",
    description: "Un espacio amplio para encuentros, actividades y celebraciones.",
    text: "Este gran espacio cubierto funciona como salón de usos múltiples. Desde aquí se puede acceder al patio exterior que aparece en la cuarta panorámica.",
    space: "SUM / Salón de usos múltiples",
    image: "PROYECTO ESCUELA CLIC/SUM.jpeg",
    hotspots: [
      { x: 77, y: 47, target: "patio", label: "Salir al patio" },
      { x: 50, y: 47, target: "entrada2", label: "Volver a la segunda entrada"},
      { x: 25, y: 47, target: "pasillo", label: "Ir al pasillo exterior" }
    ]
  },

  pasillo: {
    title: "Pasillo exterior",
    eyebrow: "ESTÁS EN",
    description: "Un recorrido abierto que conecta distintos sectores de la escuela.",
    text: "Esta panorámica muestra uno de los recorridos exteriores de la escuela y conecta con el patio que vemos en la quinta imagen.",
    space: "Circulación exterior",
    image: "PROYECTO ESCUELA CLIC/Pasillo kiosco.jpeg",
    hotspots: [
      { x: 78, y: 48, target: "preceptoriadetaller", label: "Ir al anexo entre preceptoria y box" },
      { x: 8, y: 48, target: "entrada", label: "Volver a entrada" },
      { x: 53, y: 45, target: "galeria", label: "Ir a galeria" },
      {x: 28, y: 45, target: "sum", label: "Ir al SUM" }
    ]
  },

  galeria: {
    title: "Galeria",
    eyebrow: "ESTÁS EN",
    description: "Area de descanso donde los alumnos se reúnen y comen en los recreos o fuera del horario escolar.",
    text: "Esta panorámica muestra uno de los recorridos exteriores de la escuela y conecta con el patio que vemos en la quinta imagen.",
    image: "PROYECTO ESCUELA CLIC/Galeria- Kiosco-Cocina.jpeg",
    hotspots: [
      { x: 82, y: 48, target: "pasillo", label: "Volver" },
      { x: 15, y: 48, target: "pasillolaboratorio", label: "Ir hacia el patio externo" }
    ]
  },

  pasillolaboratorio: {
    title: "Pasillo",
    eyebrow: "ESTÁS EN",
    description: "Espacio en el que se conecta el lugar en el que los alumnos dejan sus bicicletas, comedor y patio externo",
    text: "Esta panorámica muestra uno de los recorridos exteriores de la escuela y conecta con el patio que vemos en la quinta imagen.",
    image: "PROYECTO ESCUELA CLIC/patio bicicleta.jfif",
    hotspots: [
      { x: 58, y: 48, target: "galeria", label: "Ir a la galeria" },
      { x: 15, y: 48, target: "laboratorio", label: "Ir al laboratorio" },
      { x: 5, y: 51, target: "patio", label: "Ir al patio externo" }
    ]
  },

laboratorio: {
    title: "Laboratorio",
    eyebrow: "ESTÁS EN",
    description: "Espacio destinado al desarrollo de clases practicas de la orientacion de Quimica, correspondientes al cico superior.",
    text: "Esta panorámica muestra uno de los recorridos exteriores de la escuela y conecta con el patio que vemos en la quinta imagen.",
    image: "PROYECTO ESCUELA CLIC/laboratorio de quimica.jfif",
    hotspots: [
      { x: 21, y: 30, target: "pasillolaboratorio", label: "Salir" }

    ]
  },

  box: {
    title: "Boxes",
    eyebrow: "ESTÁS EN",
    description: "Sala amplia dividida en distintos boxes o espacios separados, donde se dictan clases de Formación Profesional y actividades de taller.",
    text: "Esta panorámica muestra uno de los recorridos exteriores de la escuela y conecta con el patio que vemos en la quinta imagen.",
    image: "PROYECTO ESCUELA CLIC/Box.jpeg",
    hotspots: [
      { x: 85, y: 39, target: "preceptoriadetaller", label: "Salir" }
    ]
  },
  

preceptoriadetaller: {
    title: "Anexo entre preceptoria de taller y box",
    eyebrow: "ESTÁS EN",
    description: "Anexo entre Preceptoria de Taller y los boxes: conecta la administración de taller son la sala dividida en boxes donde se dictan clases practicas y de formacion rpofesional.",
    space: "Anexo",
    image: "PROYECTO ESCUELA CLIC/Preceptoria de taller.jpeg",
    hotspots: [
      { x: 45, y: 42, target: "pasillo", label: "Volver al pasillo externo" },
      { x: 65, y: 39, target: "box", label: "Ir a los boxes" }
    ]
  },
 
}

const route = ["sumpolideportivo","polideportivo","polideportivo_entrada","saladeinformatica","box", "laboratorio", "pasillolaboratorio","pasillocomputacion","comedor","preceptoriacomedor","pasillocomedor","galeria","sum", "patio", "entrada", "pasillo", "entrada2", "escalera1", "preceptoriadetaller", "pasilloescalera1", "preceptoria2dopiso", "saladecomputación", "escalera2", "pasilloescalera3", "escalera3"];
let current = 0;

const viewer = document.getElementById("viewer");
const world = document.getElementById("world");
const panorama = document.getElementById("panorama");
const hotspots = document.getElementById("hotspots");
const welcome = document.getElementById("welcome");
const tour = document.getElementById("tour");

const placeIndex = document.getElementById("placeIndex");
const placeTitle = document.getElementById("placeTitle");
const placeDescription = document.getElementById("placeDescription");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const dragHint = document.getElementById("dragHint");

let worldWidth = 0;
let x = 0;
let dragging = false;
let lastX = 0;
let moved = false;
let dragStartX = 0;
let targetX = 0;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getMaxPan() {
  return Math.max(0, worldWidth - viewer.clientWidth);
}

function renderX() {
  x = clamp(x, 0, getMaxPan());
  world.style.transform = `translate3d(${-x}px,0,0)`;
}

function setPanoramaPosition(percent) {
  const max = getMaxPan();
  x = clamp((percent / 100) * max, 0, max);
  renderX();
}

// script.js - CÓDIGO MODIFICADO

function buildHotspots(location) {
  hotspots.innerHTML = "";

  location.hotspots.forEach((spot) => {
    const button = document.createElement("button");
    button.className = "hotspot";
    button.style.left = `${spot.x}%`;
    button.style.top = `${spot.y}%`;
    button.dataset.target = spot.target;
    button.title = spot.label;
    
    button.innerHTML = `<img src="PROYECTO ESCUELA CLIC/hotpos.jfif" alt="Avanzar"><small>${spot.label}</small>`;
    
    button.addEventListener("pointerdown", e => e.stopPropagation());
    
    // Con esto, al hacerle un solo clic te lleva directo a la imagen sin tocar nada más
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      goTo(spot.target);
    });
    
    hotspots.appendChild(button);
  });
}


function updateUI(location) {
  placeIndex.textContent = String(current + 1).padStart(2, "0");
  placeTitle.textContent = location.title;
  placeDescription.textContent = location.description;
  progressText.textContent = `${current + 1} / ${route.length}`;
  progressBar.style.width = `${((current + 1) / route.length) * 100}%`;

  document.querySelectorAll(".map-node").forEach(node => {
    node.classList.toggle("active", node.dataset.location === route[current]);
  });

  document.getElementById("panelTitle").textContent = location.title;
  document.getElementById("panelText").textContent = location.text;
  document.getElementById("panelSpace").textContent = location.space;
  document.getElementById("panelRoute").textContent =
    `${String(current + 1).padStart(2, "0")} / ${String(route.length).padStart(2, "0")}`;
}

function loadLocation(id, initialPan = 50) {
  const location = locations[id];
  if (!location) return;

  current = route.indexOf(id);

  // 1. Efecto de avance (zoom suave) y desvanecimiento al salir
  panorama.style.opacity = "0";
  panorama.style.transform = "scale(1.06)";
  hotspots.style.opacity = "0";

  setTimeout(() => {
    panorama.src = location.image;
    panorama.alt = `Panorámica 360°: ${location.title}`;

    const initViewer = () => {
      worldWidth = panorama.naturalWidth * (viewer.clientHeight / panorama.naturalHeight);
      world.style.width = `${worldWidth}px`;
      hotspots.style.width = `${worldWidth}px`;
      hotspots.style.height = `${viewer.clientHeight}px`;

      setPanoramaPosition(initialPan);
      buildHotspots(location);
      updateUI(location);

      // 2. Reseteamos el zoom sin animación para que la nueva foto entre limpia
      panorama.style.transition = "none";
      panorama.style.transform = "scale(1)";
      
      // Forzamos al navegador a aplicar el cambio y activamos la transición de entrada
      void panorama.offsetWidth; 
      panorama.style.transition = "";
      
      panorama.style.opacity = "1";
      hotspots.style.opacity = "1";
    };

    panorama.onload = initViewer;
    if (panorama.complete) {
      initViewer();
    }
  }, 350);
}

function goTo(id) {
  const destination = route.includes(id) ? id : "entrada";
  loadLocation(destination, 50);
}


function next() {
  current = (current + 1) % route.length;
  loadLocation(route[current], 50);
}

function previous() {
  current = (current - 1 + route.length) % route.length;
  loadLocation(route[current], 50);
}

document.getElementById("startTour").addEventListener("click", () => {
  welcome.classList.add("leave");
  setTimeout(() => {
    welcome.remove();
    tour.classList.remove("is-hidden");
    loadLocation("entrada", 50);
    setTimeout(() => dragHint.classList.add("show"), 600);
    setTimeout(() => dragHint.classList.remove("show"), 3200);
  }, 700);
});

viewer.addEventListener("pointerdown", e => {
  dragging = true;
  moved = false;
  dragStartX = e.clientX;
  lastX = e.clientX;
  viewer.classList.add("dragging");
  viewer.setPointerCapture(e.pointerId);
});

viewer.addEventListener("pointermove", e => {
  if (!dragging) return;
  const dx = e.clientX - lastX;
  if (Math.abs(e.clientX - dragStartX) > 5) moved = true;
  x -= dx;
  lastX = e.clientX;
  renderX();
});


function endDrag() {
  dragging = false;
  viewer.classList.remove("dragging");
}
viewer.addEventListener("pointerup", endDrag);
viewer.addEventListener("pointercancel", endDrag);
viewer.addEventListener("pointerleave", () => { if (dragging) endDrag(); });

viewer.addEventListener("wheel", e => {
  e.preventDefault();
  x += e.deltaY * 0.6 + e.deltaX * 0.6;
  renderX();
}, { passive: false });

document.getElementById("nextBtn").addEventListener("click", next);
document.getElementById("prevBtn").addEventListener("click", previous);

document.getElementById("infoBtn").addEventListener("click", () => {
  document.getElementById("infoPanel").classList.add("open");
});
document.getElementById("closeInfo").addEventListener("click", () => {
  document.getElementById("infoPanel").classList.remove("open");
});

document.getElementById("mapBtn").addEventListener("click", () => {
  document.getElementById("mapModal").classList.add("open");
});
document.getElementById("closeMap").addEventListener("click", () => {
  document.getElementById("mapModal").classList.remove("open");
});

document.querySelectorAll(".map-node").forEach(node => {
  node.addEventListener("click", () => {
    document.getElementById("mapModal").classList.remove("open");
    goTo(node.dataset.location);
  });
});

document.getElementById("helpBtn").addEventListener("click", () => {
  document.getElementById("helpModal").classList.add("open");
});
document.getElementById("closeHelp").addEventListener("click", () => {
  document.getElementById("helpModal").classList.remove("open");
});

document.getElementById("fullscreenBtn").addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen?.();
  } else {
    await document.exitFullscreen?.();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") previous();
  if (e.key === "Escape") {
    document.getElementById("infoPanel").classList.remove("open");
    document.getElementById("mapModal").classList.remove("open");
    document.getElementById("helpModal").classList.remove("open");
  }
});

window.addEventListener("resize", () => {
  if (!panorama.naturalWidth) return;
  const oldMax = Math.max(1, worldWidth - viewer.clientWidth);
  const ratio = x / oldMax;

  worldWidth = panorama.naturalWidth * (viewer.clientHeight / panorama.naturalHeight);
  world.style.width = `${worldWidth}px`;
  hotspots.style.width = `${worldWidth}px`;
  hotspots.style.height = `${viewer.clientHeight}px`;

  x = ratio * getMaxPan();
  renderX();
});

panorama.style.transition = "opacity 0.6s ease-in-out";


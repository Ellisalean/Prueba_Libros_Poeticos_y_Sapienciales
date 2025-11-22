import { Question, QuestionType } from './types';

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "¿Qué significa el título hebreo del Salterio 'sefer tehilim'?",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Libro de oraciones",
      "Libro de lamentos",
      "Libro de alabanzas",
      "Libro de cánticos"
    ],
    correctAnswer: "Libro de alabanzas",
    explanation: "Aunque hay lamentos, el título hebreo enfatiza la alabanza (Tehilim)."
  },
  {
    id: 2,
    text: "Ordena cronológicamente las etapas de la literatura sapiencial (de lo antiguo a lo tardío):",
    type: QuestionType.ORDERING,
    imageUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Sabiduría Helenística (Sabiduría)",
      "Sabiduría Antigua (Proverbios)",
      "Crisis de Sabiduría (Job/Eclesiastés)"
    ],
    correctAnswer: "Sabiduría Antigua (Proverbios),Crisis de Sabiduría (Job/Eclesiastés),Sabiduría Helenística (Sabiduría)",
    explanation: "Primero el optimismo de Proverbios, luego la crisis de Job/Qohélet, finalmente la respuesta helenística."
  },
  {
    id: 3,
    text: "El principio de la sabiduría es el ________ del Señor.",
    type: QuestionType.WORD_BANK,
    imageUrl: "https://images.unsplash.com/photo-1507842217153-e2122e05ee22?q=80&w=1000&auto=format&fit=crop",
    options: [
      "amor",
      "estudio",
      "temor",
      "servicio"
    ],
    correctAnswer: "temor",
    explanation: "Proverbios 1:7: 'El principio de la sabiduría es el temor del Señor'."
  },
  {
    id: 4,
    text: "¿Con qué fiesta judía se relaciona la lectura de Eclesiastés (Qohélet)?",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Pascua",
      "Pentecostés",
      "Purim",
      "Tabernáculos (Sukkot)"
    ],
    correctAnswer: "Tabernáculos (Sukkot)",
    explanation: "Se lee en Sukkot para recordar la fragilidad de la vida."
  },
  {
    id: 5,
    text: "El libro de Job defiende la 'Teología de la Retribución' (si eres bueno te va bien).",
    type: QuestionType.TRUE_FALSE,
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb930b5?q=80&w=1000&auto=format&fit=crop",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Job desafía precisamente esa teología, mostrando que el justo también sufre."
  },
  {
    id: 6,
    text: "Completa la famosa frase de Eclesiastés: 'Vanidad de vanidades, todo es _______'.",
    type: QuestionType.WORD_BANK,
    imageUrl: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1000&auto=format&fit=crop",
    options: [
      "eterno",
      "pecado",
      "vanidad",
      "polvo"
    ],
    correctAnswer: "vanidad",
    explanation: "Es el lema del libro: Hebel hebelim (Vanidad de vanidades)."
  },
  {
    id: 7,
    text: "¿Qué estructura literaria tienen los primeros 4 capítulos de Lamentaciones?",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://images.unsplash.com/photo-1542259681-d4cd48b8c561?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Acróstico alfabético",
      "Quiasmo inverso",
      "Rima consonante",
      "Prosa narrativa"
    ],
    correctAnswer: "Acróstico alfabético",
    explanation: "Cada versículo comienza con una letra sucesiva del alfabeto hebreo."
  },
  {
    id: 8,
    text: "El Cantar de los Cantares nunca menciona explícitamente el nombre de Dios.",
    type: QuestionType.TRUE_FALSE,
    imageUrl: "https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=1000&auto=format&fit=crop",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "El nombre YHWH no aparece en el texto hebreo (salvo una posible abreviatura)."
  },
  {
    id: 9,
    text: "Ordena estos libros según su posición tradicional en el canon hebreo (Ketuvim):",
    type: QuestionType.ORDERING,
    imageUrl: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Job",
      "Salmos",
      "Proverbios"
    ],
    correctAnswer: "Salmos,Job,Proverbios",
    explanation: "El orden tradicional en los manuscritos suele ser: Salmos, luego Job, luego Proverbios."
  },
  {
    id: 10,
    text: "La palabra 'Mashal' (Proverbio) significa primariamente:",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Mandamiento divino",
      "Comparación o semejanza",
      "Historia antigua",
      "Profecía futura"
    ],
    correctAnswer: "Comparación o semejanza",
    explanation: "Mashal implica poner una cosa al lado de otra para comparar."
  },
  {
    id: 11,
    text: "Judit salvó a su pueblo cortándole la cabeza al general ________.",
    type: QuestionType.WORD_BANK,
    imageUrl: "https://images.unsplash.com/photo-1599926785123-57f8f53a3d62?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Nabucodonosor",
      "Holofernes",
      "Antíoco",
      "Senaquerib"
    ],
    correctAnswer: "Holofernes",
    explanation: "Judit embriagó y decapitó al general asirio Holofernes."
  },
  {
    id: 12,
    text: "¿En qué concilio judío (90 d.C.) se consolidó el canon que excluyó a los apócrifos?",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Nicea",
      "Trento",
      "Jamnia (Yavne)",
      "Jerusalén"
    ],
    correctAnswer: "Jamnia (Yavne)",
    explanation: "En Jamnia se definieron criterios que excluyeron textos griegos."
  },
  {
    id: 13,
    text: "El libro de Tobías enfatiza las obras de misericordia y la santidad del:",
    type: QuestionType.WORD_BANK,
    imageUrl: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1000&auto=format&fit=crop",
    options: [
      "templo",
      "matrimonio",
      "sábado",
      "sacrificio"
    ],
    correctAnswer: "matrimonio",
    explanation: "Tobías es una enseñanza clave sobre el matrimonio santo."
  },
  {
    id: 14,
    text: "¿A qué rey se le atribuye tradicionalmente la autoría de Eclesiastés?",
    type: QuestionType.WORD_BANK,
    imageUrl: "https://images.unsplash.com/photo-1544812409-9668221629ce?q=80&w=1000&auto=format&fit=crop",
    options: [
      "David",
      "Salomón",
      "Ezequías",
      "Josías"
    ],
    correctAnswer: "Salomón",
    explanation: "Se presenta como 'hijo de David, rey en Jerusalén', aludiendo a Salomón."
  },
  {
    id: 15,
    text: "La Sabiduría de Salomón fue escrita originalmente en hebreo.",
    type: QuestionType.TRUE_FALSE,
    imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1000&auto=format&fit=crop",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Fue escrito directamente en griego culto, probablemente en Alejandría."
  },
  {
    id: 16,
    text: "El 'Elogio de los Padres' (Hombres Ilustres) se encuentra en:",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Sabiduría",
      "Eclesiástico (Sirácida)",
      "Baruc",
      "Macabeos"
    ],
    correctAnswer: "Eclesiástico (Sirácida)",
    explanation: "Sirácida cap. 44-50."
  },
  {
    id: 17,
    text: "Ordena la secuencia teológica de los Salmos (del problema a la solución):",
    type: QuestionType.ORDERING,
    imageUrl: "https://images.unsplash.com/photo-1499652848871-1527a310b13a?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Acción de Gracias",
      "Lamento",
      "Himno de Alabanza"
    ],
    correctAnswer: "Lamento,Acción de Gracias,Himno de Alabanza",
    explanation: "El movimiento natural es: Lamento (dolor) -> Gracias (respuesta) -> Himno (adoración)."
  },
  {
    id: 18,
    text: "En el libro de Ester griego se añadieron oraciones y sueños para hacerlo más religioso.",
    type: QuestionType.TRUE_FALSE,
    imageUrl: "https://images.unsplash.com/photo-1623463577449-784db07281fa?q=80&w=1000&auto=format&fit=crop",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "El texto hebreo no menciona a Dios; el griego añade oraciones explícitas."
  },
  {
    id: 19,
    text: "Proverbios 8 personifica a la Sabiduría presente durante la ________.",
    type: QuestionType.WORD_BANK,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    options: [
      "guerra",
      "creación",
      "huida",
      "ley"
    ],
    correctAnswer: "creación",
    explanation: "Yo estaba allí cuando él formaba los cielos..."
  },
  {
    id: 20,
    text: "Los Salmos Reales celebran al Rey, pero apuntan proféticamente al Mesías.",
    type: QuestionType.TRUE_FALSE,
    imageUrl: "https://images.unsplash.com/photo-1579975096649-e773152b04cb?q=80&w=1000&auto=format&fit=crop",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Tienen un doble cumplimiento: histórico y mesiánico."
  }
];
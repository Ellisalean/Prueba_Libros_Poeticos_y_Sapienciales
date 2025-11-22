import { Question, QuestionType } from './types';

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "¿Qué significa el título hebreo del Salterio 'sefer tehilim'?",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/c16a3bb0-2cd7-4f5b-8dd9-79f9a0b0b19f_rw_1200.jpg?h=8aaca79b1cee77c34b69d511dc0a7aa0",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/8c3ce941-d97d-427b-bae7-dedc61fbecb0_rw_1200.jpg?h=abb410768f631656c11bb80191cdc6c7",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/f979625f-7411-46f4-9ad6-123da8f50171_rw_1200.jpg?h=f98e911de8566b5e446ade6b8b7f3861",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/8809f27a-d7eb-4772-a314-8c347a60a6f6_rw_1920.png?h=b5e1a55df8f9574701ca04952677bac0",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/5d10e85f-c458-43c4-b484-36f0c293ee54_rw_1920.jpg?h=05ddbf613a579b6080441f71bcf0d065",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Job desafía precisamente esa teología, mostrando que el justo también sufre."
  },
  {
    id: 6,
    text: "Completa la famosa frase de Eclesiastés: 'Vanidad de vanidades, todo es _______'.",
    type: QuestionType.WORD_BANK,
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/cfaa8188-f14b-4d0e-9c80-dd1d559f2507_rw_1200.jpg?h=3598ccebc1e352f66dff78389e11a700",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/47513d2e-e06d-4510-b2f6-7bef0c56dec0_rw_1920.jpg?h=feb9940bcd50bad239588500f1918fd2",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/4c099856-115f-46db-b508-11eca110e918_rw_1920.jpg?h=33926783f225d678101db24345f44e22",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "El nombre YHWH no aparece en el texto hebreo (salvo una posible abreviatura)."
  },
  {
    id: 9,
    text: "Ordena estos libros según su posición tradicional en el canon hebreo (Ketuvim):",
    type: QuestionType.ORDERING,
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/5889e284-d485-44e0-ac6c-5587feba0e8b_rw_1200.jpg?h=86d662de6ddd5a5f16a15f6e8bbd3949",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/50472b77-fb6b-481d-adaa-f7489f29ad57_rw_1200.jpg?h=5f05538eebd5d92cc3c02c0caaa7807a",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/3152720a-bf38-4b0c-af16-0bc9db038cf6_rw_1200.jpg?h=b169e25c0e43a14e4de6f905ba3d5b68",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/6a8503f1-1b9c-4005-8e50-0ce27912a8f4_rw_1200.jpg?h=a6d07dd391714bf98c0fd740bc5b6d08",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/7d2aeb25-74d2-4346-a381-2289d8963642_rw_1920.jpg?h=9a5ca08b642a6f3392dcc42b94f7b3f9",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/8c0a57e5-0e0b-4d15-860b-db19a2f817ca_rw_1920.jpg?h=a626b46f8a8d71303dec95d74ce8e02c",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Fue escrito directamente en griego culto, probablemente en Alejandría."
  },
  {
    id: 16,
    text: "El 'Elogio de los Padres' (Hombres Ilustres) se encuentra en:",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/569a3e42-6443-4523-ae27-eec1b5f3b2b8_rw_1200.jpg?h=4d7b38c569496d8dc26c6d0727d48d86",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/0e060a2f-ea10-46af-a859-6047b56c170a_rw_1200.jpg?h=2cdf9b5509c29e8b2ae4bc703e78a8d7",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/70e929ea-fad4-43be-8c3a-93ea14060b1b_rw_1920.png?h=ff9949c3266dc835ccd8867aaa78a4df",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "El texto hebreo no menciona a Dios; el griego añade oraciones explícitas."
  },
  {
    id: 19,
    text: "Proverbios 8 personifica a la Sabiduría presente durante la ________.",
    type: QuestionType.WORD_BANK,
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/ad775242-1700-40e3-bd40-a6119a6d6621_rw_1920.jpg?h=92ce771788fad764190a158b0015905f",
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
    imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/cb891053-f80c-4536-b209-3d659496a423_rw_1200.png?h=e8b6ad1eddd478803cc02d24d80e6887",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Tienen un doble cumplimiento: histórico y mesiánico."
  }
];
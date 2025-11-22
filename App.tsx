import React, { useState } from 'react';
import { UserState, QuestionType } from './types';
import { quizQuestions } from './questions';

// --- CONFIGURACIÓN ---
const LOGO_URL = "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/1ac05fb8-e508-4c03-b550-d2b907caadbd_rw_600.png?h=7572d326e4292f32557ac73606fd0ece";
const FORMSPREE_FORM_ID: string = 'xqajpkng'; 

// --- SUB-COMPONENTES INTERACTIVOS ---

// Componente para ordenar respuestas
const OrderingQuestion = ({ options, onConfirm }: { options: string[], onConfirm: (answer: string) => void }) => {
  const [items, setItems] = useState(options);

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newItems = [...items];
    if (direction === 'up' && index > 0) {
      [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    } else if (direction === 'down' && index < newItems.length - 1) {
      [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
    }
    setItems(newItems);
  };

  return (
    <div className="space-y-4 w-full animate-fade-in">
      <p className="text-sm text-stone-500 italic text-center">Usa las flechas para ordenar los elementos correctamente (Arriba/Abajo)</p>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={item} className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-stone-200 transition-all hover:border-blue-300">
            <div className="flex flex-col mr-3 space-y-1 bg-stone-50 rounded p-1">
              <button 
                onClick={() => moveItem(idx, 'up')}
                disabled={idx === 0}
                className={`p-1 rounded hover:bg-stone-200 ${idx === 0 ? 'text-stone-300' : 'text-blue-600'}`}
              >
                ▲
              </button>
              <button 
                onClick={() => moveItem(idx, 'down')}
                disabled={idx === items.length - 1}
                className={`p-1 rounded hover:bg-stone-200 ${idx === items.length - 1 ? 'text-stone-300' : 'text-blue-600'}`}
              >
                ▼
              </button>
            </div>
            <span className="flex-grow font-serif text-stone-800">{item}</span>
            <span className="text-xs font-bold text-stone-300 bg-stone-100 w-6 h-6 flex items-center justify-center rounded-full ml-2">
              {idx + 1}
            </span>
          </div>
        ))}
      </div>
      <button 
        onClick={() => onConfirm(items.join(','))}
        className="w-full mt-6 bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-md"
      >
        CONFIRMAR ORDEN
      </button>
    </div>
  );
};

// Componente para Banco de Palabras
const WordBankQuestion = ({ text, options, onConfirm }: { text: string, options: string[], onConfirm: (answer: string) => void }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  // Dividir el texto en antes y después del guion bajo
  const parts = text.split('________');
  
  return (
    <div className="space-y-8 w-full animate-fade-in">
      {/* Visualización de la frase */}
      <div className="text-xl md:text-2xl font-serif leading-relaxed text-stone-800 text-center">
        {parts[0]}
        <span className={`inline-block min-w-[120px] border-b-2 text-center font-bold px-2 mx-1 transition-all ${
          selectedWord 
            ? 'border-blue-600 text-blue-900 transform scale-105' 
            : 'border-stone-300 text-stone-300 bg-stone-50'
        }`}>
          {selectedWord || "?"}
        </span>
        {parts.length > 1 ? parts[1] : ''}
      </div>

      {/* Banco de opciones */}
      <div className="grid grid-cols-2 gap-4">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelectedWord(opt)}
            className={`py-3 px-4 rounded-lg border-2 transition-all text-sm font-bold uppercase tracking-wide ${
              selectedWord === opt 
                ? 'bg-blue-900 text-white border-blue-900 shadow-lg scale-105' 
                : 'bg-white text-stone-600 border-stone-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button 
        onClick={() => selectedWord && onConfirm(selectedWord)}
        disabled={!selectedWord}
        className={`w-full mt-4 font-bold py-3 rounded-lg transition-all shadow-md ${
          selectedWord 
           ? 'bg-blue-900 text-white hover:bg-blue-800 opacity-100 translate-y-0' 
           : 'bg-stone-200 text-stone-400 cursor-not-allowed opacity-70'
        }`}
      >
        CONFIRMAR RESPUESTA
      </button>
    </div>
  );
};

// --- APP PRINCIPAL ---

interface ExtendedUserState extends UserState {
  verificationCode?: string;
  completionDate?: string;
}

const App: React.FC = () => {
  const [userState, setUserState] = useState<ExtendedUserState>({
    name: '',
    email: '',
    started: false,
    finished: false,
    currentQuestionIndex: 0,
    answers: {},
    score: 0,
  });

  const [sendingStatus, setSendingStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Handlers
  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (userState.name && userState.email) {
      setUserState({ ...userState, started: true });
    }
  };

  const generateSecurityToken = (score: number, name: string) => {
    const date = new Date();
    const timeStr = date.toISOString().replace(/[-:T.]/g, '').slice(0, 12); 
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 3);
    const randomStr = Math.random().toString(16).slice(2, 6).toUpperCase();
    return `STL-${score.toString().padStart(2, '0')}-${timeStr}-${initials}-${randomStr}`;
  };

  const handleAnswer = (answer: string) => {
    const currentQuestion = quizQuestions[userState.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    const newScore = isCorrect ? userState.score + 1 : userState.score;
    const newAnswers = { ...userState.answers, [currentQuestion.id]: answer };

    // Delay para feedback visual si es click directo
    const delay = (currentQuestion.type === QuestionType.MULTIPLE_CHOICE || currentQuestion.type === QuestionType.TRUE_FALSE) ? 400 : 0;

    setTimeout(() => {
      if (userState.currentQuestionIndex < quizQuestions.length - 1) {
        setUserState({
          ...userState,
          score: newScore,
          answers: newAnswers,
          currentQuestionIndex: userState.currentQuestionIndex + 1,
        });
      } else {
        // Fin
        const token = generateSecurityToken(newScore, userState.name);
        const now = new Date().toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' });
        setUserState({
          ...userState,
          score: newScore,
          answers: newAnswers,
          finished: true,
          verificationCode: token,
          completionDate: now
        });
      }
    }, delay);
  };

  // Lógica de envío a Formspree
  const handleSubmitResults = async () => {
    if (!FORMSPREE_FORM_ID || FORMSPREE_FORM_ID === 'TU_CODIGO_AQUI') {
        alert('Error de configuración: ID de Formspree no válido.');
        return;
    }

    setSendingStatus('sending');

    // Usamos 'name' y 'email' estándar para que Formspree detecte el reply-to automáticamente
    const data = {
        name: userState.name,
        email: userState.email,
        score: `${userState.score} / ${quizQuestions.length}`,
        status: (userState.score / quizQuestions.length) * 100 >= 60 ? 'APROBADO' : 'REPROBADO',
        token: userState.verificationCode,
        date: userState.completionDate,
        // Asunto personalizado para identificar la materia en el correo
        _subject: `Examen Sapienciales: ${userState.name}`,
    };

    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSendingStatus('success');
        } else {
            setSendingStatus('error');
        }
    } catch (error) {
        console.error("Error sending form", error);
        setSendingStatus('error');
    }
  };

  // --- VISTAS ---

  // 1. PANTALLA DE INICIO (Split Layout)
  if (!userState.started) {
    return (
      <div className="min-h-screen flex flex-col md:flex-row bg-white">
        {/* Izquierda: Imagen Decorativa */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-stone-900">
          <img 
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1000&auto=format&fit=crop" 
            alt="Library" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black/90 to-transparent">
            <img src={LOGO_URL} alt="Logo" className="h-16 w-16 object-contain mb-4 bg-white/90 rounded-full p-2 backdrop-blur-sm" />
            <h1 className="text-white text-3xl md:text-5xl font-serif font-bold leading-tight mb-2">
              Latin Theological Seminary
            </h1>
            <p className="text-yellow-500 text-sm uppercase tracking-widest font-bold">Examen Final</p>
          </div>
        </div>

        {/* Derecha: Formulario */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-stone-50">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-800">Bienvenido, estudiante.</h2>
              <p className="text-stone-500 mt-2">Ingresa tus datos para iniciar la certificación de <br/><span className="font-serif text-blue-900 italic">Libros Apócrifos y Sapienciales</span>.</p>
            </div>

            <form onSubmit={handleStart} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-stone-100">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Nombre Completo</label>
                  <input 
                    required
                    type="text" 
                    className="w-full border-b-2 border-stone-200 py-3 text-lg focus:border-blue-900 focus:outline-none transition-colors bg-transparent"
                    placeholder="Tu nombre aquí"
                    value={userState.name}
                    onChange={(e) => setUserState({...userState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Correo Electrónico</label>
                  <input 
                    required
                    type="email" 
                    className="w-full border-b-2 border-stone-200 py-3 text-lg focus:border-blue-900 focus:outline-none transition-colors bg-transparent"
                    placeholder="tucorreo@ejemplo.com"
                    value={userState.email}
                    onChange={(e) => setUserState({...userState, email: e.target.value})}
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-transform active:scale-95 shadow-lg flex items-center justify-center group">
                INICIAR PRUEBA 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // 2. PANTALLA DE RESULTADOS (Certificado)
  if (userState.finished) {
    const passed = (userState.score / quizQuestions.length) * 100 >= 60;
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 print:bg-white">
        <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden border border-stone-200 relative print:shadow-none print:border-4 print:border-stone-900">
          
          {/* Header Certificado */}
          <div className="bg-blue-900 p-8 text-center text-white relative overflow-hidden print:bg-white print:text-black print:border-b print:border-stone-900">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <img src={LOGO_URL} alt="Logo" className="h-20 mx-auto mb-4 relative z-10 bg-white rounded-full p-1" />
            <h1 className="text-2xl md:text-3xl font-serif font-bold relative z-10">Latin Theological Seminary</h1>
            <p className="text-blue-200 text-xs uppercase tracking-[0.3em] mt-2 relative z-10 print:text-stone-500">Certificado Oficial de Resultados</p>
          </div>

          <div className="p-10 md:p-16 text-center space-y-8">
            <div>
              <p className="text-stone-500 italic text-lg mb-2">Se otorga el presente reconocimiento a:</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 border-b-2 border-stone-200 pb-6 inline-block px-8">{userState.name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto py-4">
              <div className="bg-stone-50 p-4 rounded border border-stone-100">
                <p className="text-xs font-bold text-stone-400 uppercase">Materia</p>
                <p className="font-semibold text-stone-800">Libros Apócrifos y Sapienciales</p>
              </div>
              <div className="bg-stone-50 p-4 rounded border border-stone-100">
                <p className="text-xs font-bold text-stone-400 uppercase">Calificación</p>
                <p className={`text-2xl font-bold ${passed ? 'text-blue-900' : 'text-red-600'}`}>{userState.score} / {quizQuestions.length}</p>
              </div>
              <div className="bg-stone-50 p-4 rounded border border-stone-100">
                <p className="text-xs font-bold text-stone-400 uppercase">Estado</p>
                <p className={`font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>{passed ? 'APROBADO' : 'REPROBADO'}</p>
              </div>
            </div>

            <div className="max-w-lg mx-auto">
              <p className="text-xs text-stone-400 uppercase mb-2">Token de Verificación Único</p>
              <div className="bg-stone-900 text-white font-mono text-sm p-3 rounded tracking-widest select-all">
                {userState.verificationCode}
              </div>
              <p className="text-[10px] text-stone-400 mt-2">{userState.completionDate}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8 print:hidden">
              
              {/* BOTÓN DE ENVÍO AUTOMÁTICO API */}
              {sendingStatus === 'success' ? (
                 <button disabled className="bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg cursor-default flex items-center justify-center">
                    ✓ Enviado Exitosamente
                 </button>
              ) : (
                <button 
                  onClick={handleSubmitResults} 
                  disabled={sendingStatus === 'sending'}
                  className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all flex items-center justify-center min-w-[200px] ${
                      sendingStatus === 'error' 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-blue-900 text-white hover:bg-blue-800'
                  }`}
                >
                  {sendingStatus === 'sending' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                  ) : sendingStatus === 'error' ? (
                      'Error - Reintentar'
                  ) : (
                      'Enviar Resultados al Profesor'
                  )}
                </button>
              )}

              <button onClick={() => window.print()} className="bg-white text-stone-700 border border-stone-300 px-8 py-3 rounded-full font-bold hover:bg-stone-50 transition-colors">
                Descargar PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. PANTALLA DE PREGUNTA (Slide Layout Activo)
  const currentQ = quizQuestions[userState.currentQuestionIndex];
  const progress = ((userState.currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white">
      
      {/* COLUMNA IZQUIERDA: Contexto Visual */}
      <div className="w-full md:w-5/12 h-1/3 md:h-full relative bg-stone-900 flex-shrink-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={currentQ.imageUrl} 
          alt="Contexto" 
          className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110 ease-linear"
        />
        <div className="absolute bottom-0 left-0 p-6 md:p-12 z-20 text-white w-full bg-gradient-to-t from-black/90 to-transparent">
          <div className="flex items-center space-x-2 mb-3">
            <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
              Pregunta {userState.currentQuestionIndex + 1}
            </span>
            <span className="text-stone-300 text-xs uppercase tracking-wider">/ {quizQuestions.length}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight text-shadow-lg">
            {currentQ.text.replace('________', '...')}
          </h2>
        </div>
        {/* Barra de progreso móvil */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20 md:hidden z-30">
           <div className="h-full bg-yellow-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* COLUMNA DERECHA: Interacción */}
      <div className="w-full md:w-7/12 h-2/3 md:h-full bg-white flex flex-col overflow-y-auto relative">
        {/* Barra de progreso desktop */}
        <div className="hidden md:block w-full h-2 bg-stone-100 sticky top-0 z-50">
          <div className="h-full bg-blue-900 transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="flex-grow flex flex-col justify-center p-6 md:p-12 lg:p-20 max-w-3xl mx-auto w-full">
          
          {/* Renderizado Condicional */}
          
          {(currentQ.type === QuestionType.MULTIPLE_CHOICE || currentQ.type === QuestionType.TRUE_FALSE) && (
             <div className="space-y-4 w-full animate-fade-in">
               <p className="text-stone-400 text-sm uppercase font-bold mb-4">Selecciona una opción:</p>
               {currentQ.options.map((opt, idx) => (
                 <button
                   key={idx}
                   onClick={() => handleAnswer(opt)}
                   className="w-full text-left p-5 rounded-xl border-2 border-stone-100 hover:border-blue-900 hover:bg-blue-50 transition-all group flex items-center justify-between shadow-sm hover:shadow-md"
                 >
                   <span className="font-medium text-stone-700 group-hover:text-blue-900 text-lg">{opt}</span>
                   <div className="h-6 w-6 rounded-full border-2 border-stone-300 group-hover:border-blue-900 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-blue-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                 </button>
               ))}
             </div>
          )}

          {currentQ.type === QuestionType.ORDERING && (
            <OrderingQuestion 
              options={currentQ.options} 
              onConfirm={handleAnswer} 
            />
          )}

          {currentQ.type === QuestionType.WORD_BANK && (
            <WordBankQuestion 
              text={currentQ.text} 
              options={currentQ.options} 
              onConfirm={handleAnswer} 
            />
          )}
        </div>

        <div className="p-4 text-center text-stone-300 text-[10px] uppercase tracking-widest">
          Latin Theological Seminary &copy; 2024
        </div>
      </div>
    </div>
  );
}

export default App;
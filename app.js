// app.js (usando módulos ES6)

// Importar as funções necessárias do SDK do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Suas configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCRy3UsBL2RHJSv4VxCv2sR7RgDZtOUe8o",
  authDomain: "newsletter-algoritmocafe.firebaseapp.com",
  projectId: "newsletter-algoritmocafe",
  storageBucket: "newsletter-algoritmocafe.appspot.com",
  messagingSenderId: "187627560154",
  appId: "1:187627560154:web:c03d87c53e94c22d5a59e3",
  measurementId: "G-4G84QYNTPM"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Referência ao formulário
const form = document.getElementById('newsletter-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;

    // Enviar o e-mail para o Realtime Database
    const emailsRef = ref(database, 'emails');
    push(emailsRef, {
        email: email,
        timestamp: Date.now()
    });

    // Limpar o campo de entrada
    emailInput.value = '';

    // Feedback para o usuário
    alert('Obrigado por se inscrever!');
});
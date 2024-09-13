// app.js

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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();
  
  // Referência ao formulário
  const form = document.getElementById('newsletter-form');
  
  form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const emailInput = document.getElementById('email-input');
      const email = emailInput.value;
  
      // Adicionar o e-mail à coleção "emails" no Firestore
      db.collection('emails').add({
          email: email,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
          // Limpar o campo de entrada
          emailInput.value = '';
  
          // Feedback para o usuário
          alert('Obrigado por se inscrever!');
      })
      .catch((error) => {
          console.error('Erro ao salvar o e-mail: ', error);
          alert('Desculpe, ocorreu um erro. Tente novamente mais tarde.');
      });
  });
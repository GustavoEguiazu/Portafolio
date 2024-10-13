//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
// Seleccionar el formulario
const formulario = document.querySelector('.contacto__formulario');

// Evento de envío del formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Seleccionar los campos
  const nombre = document.querySelector('input[placeholder="Nombre"]');
  const asunto = document.querySelector('input[placeholder="Asunto"]');
  const tuEmail = document.querySelector('input[placeholder="Tu Correo Electrónico"]');
  const consultanteEmail = document.querySelector('input[placeholder="Correo Electrónico del Consultante"]');
  const mensaje = document.querySelector('textarea[placeholder="Mensaje"]');

  // Validar que todos los campos estén completos
  if (nombre.value === '' || asunto.value === '' || tuEmail.value === '' || consultanteEmail.value === '' || mensaje.value === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Validación de correo electrónico básica
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(tuEmail.value) || !emailRegex.test(consultanteEmail.value)) {
    alert('Por favor, ingresa correos electrónicos válidos.');
    return;
  }

  // Mostrar mensaje de éxito o enviar el formulario
  alert('Gracias por contactarme. Me pondré en contacto contigo pronto.');
  
  // Aquí puedes añadir funcionalidad para enviar los datos a un servidor si fuera necesario.
});

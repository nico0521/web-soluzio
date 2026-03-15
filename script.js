// Form Validation and Submission
const form = document.querySelector('#contact-form');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    // Get form elements
    const empresa = document.getElementById('contact-empresa');
    const email = document.getElementById('contact-email');
    const phone = document.getElementById('contact-phone');
    const message = document.getElementById('contact-message');
    
    let isValid = true;
    
    // Validate empresa/name
    if (empresa.value.trim().length < 2) {
      showError(empresa, 'El nombre de la empresa debe tener al menos 2 caracteres');
      isValid = false;
    }
    
    // Validate email
    if (!isValidEmail(email.value)) {
      showError(email, 'Por favor ingresa un email válido');
      isValid = false;
    }
    
    // Validate phone (optional but if provided should be valid)
    if (phone.value.trim().length > 0 && phone.value.trim().length < 8) {
      showError(phone, 'Por favor ingresa un teléfono válido');
      isValid = false;
    }
    
    // Validate message
    if (message.value.trim().length < 10) {
      showError(message, 'El mensaje debe tener al menos 10 caracteres');
      isValid = false;
    }
    
    if (!isValid) return;
    
    // Disable submit button during submission
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando cotización...';
    submitBtn.disabled = true;
    
    // Submit to Formspree
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        showSuccess('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        form.reset();
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      showError(form, 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      // Re-enable button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Email validation function
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show error message
function showError(element, message) {
  const error = document.createElement('span');
  error.className = 'error-message';
  error.textContent = message;
  error.setAttribute('role', 'alert');
  
  // If element is the form itself, append to form
  if (element.tagName === 'FORM') {
    element.appendChild(error);
  } else {
    // Otherwise append to parent (form-group)
    element.parentNode.appendChild(error);
    element.setAttribute('aria-invalid', 'true');
  }
}

// Clear all error messages
function clearErrors() {
  document.querySelectorAll('.error-message').forEach(el => el.remove());
  document.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
  document.querySelectorAll('.success-message').forEach(el => el.remove());
}

// Show success message
function showSuccess(message) {
  const success = document.createElement('div');
  success.className = 'success-message';
  success.textContent = message;
  success.setAttribute('role', 'status');
  document.querySelector('#contact-form').appendChild(success);
}

// Smooth scrolling for CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', function(e) {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.product-card, .benefit-card, .process-step').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

// Dynamic copyright year
const copyrightYear = document.querySelector('#copyright-year');
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}

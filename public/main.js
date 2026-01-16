/* ===========================================
   PORTFOLIO CÉLINE HARBANE - JAVASCRIPT
   =========================================== */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Form validation (if form exists)
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset errors
      document.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));
      
      // Get values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      const honeypot = document.getElementById('website');
      
      // Honeypot check (anti-spam)
      if (honeypot && honeypot.value) {
        console.log('Bot detected');
        return;
      }
      
      let valid = true;
      
      // Validate name
      if (name.length < 2) {
        showError('name', 'Minimum 2 caractères');
        valid = false;
      }
      
      // Validate email
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Email invalide');
        valid = false;
      }
      
      // Validate subject
      if (subject.length < 3) {
        showError('subject', 'Minimum 3 caractères');
        valid = false;
      }
      
      // Validate message
      if (message.length < 10) {
        showError('message', 'Minimum 10 caractères');
        valid = false;
      }
      
      if (valid) {
        // Show loading
        const btnText = document.getElementById('btn-text');
        const btnLoading = document.getElementById('btn-loading');
        const submitBtn = document.getElementById('submit-btn');
        
        if (btnText) btnText.classList.add('hidden');
        if (btnLoading) btnLoading.classList.remove('hidden');
        if (submitBtn) submitBtn.disabled = true;
        
        // Simulate submission (replace with actual form submission)
        setTimeout(function() {
          if (successMsg) successMsg.classList.remove('hidden');
          form.reset();
          
          if (btnText) btnText.classList.remove('hidden');
          if (btnLoading) btnLoading.classList.add('hidden');
          if (submitBtn) submitBtn.disabled = false;
          
          // Hide success after 5s
          setTimeout(function() {
            if (successMsg) successMsg.classList.add('hidden');
          }, 5000);
        }, 1500);
      }
    });
    
    // Real-time validation
    ['name', 'email', 'subject', 'message'].forEach(function(field) {
      const element = document.getElementById(field);
      if (element) {
        element.addEventListener('input', function() {
          hideError(field);
        });
      }
    });
  }
  
  // Helper functions
  function showError(field, message) {
    const errorEl = document.getElementById(field + '-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
  }
  
  function hideError(field) {
    const errorEl = document.getElementById(field + '-error');
    if (errorEl) {
      errorEl.classList.add('hidden');
    }
  }
});

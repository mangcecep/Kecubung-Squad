// DOM Elements
const loginForm = document.getElementById('loginForm');
const nisInput = document.getElementById('nisInput');
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const rememberMe = document.getElementById('rememberMe');
const agreeTerms = document.getElementById('agreeTerms');
const signInBtn = document.getElementById('signInBtn');
const showTerms = document.getElementById('showTerms');

// Modals
const termsModal = document.getElementById('termsModal');
const successModal = document.getElementById('successModal');
const errorModal = document.getElementById('errorModal');
const errorMessage = document.getElementById('errorMessage');

// Modal buttons
const acceptTerms = document.getElementById('acceptTerms');
const continueBtn = document.getElementById('continueBtn');
const retryBtn = document.getElementById('retryBtn');a
const closeBtn = document.querySelector('.close');

// Demo credentials for testing
const validCredentials = {
  nis: 'student123',
  password: 'password123'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  loadSavedCredentials();
  setupEventListeners();
});

// Setup all event listeners
function setupEventListeners() {
  // Form submission
  loginForm.addEventListener('submit', handleLogin);
  
  // Password toggle
  togglePassword.addEventListener('click', togglePasswordVisibility);
  
  // Terms modal
  showTerms.addEventListener('click', showTermsModal);
  acceptTerms.addEventListener('click', acceptTermsAndClose);
  closeBtn.addEventListener('click', closeTermsModal);
  
  // Success modal
  continueBtn.addEventListener('click', closeSuccessModal);
  
  // Error modal
  retryBtn.addEventListener('click', closeErrorModal);
  
  // Close modals when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === termsModal) {
      closeTermsModal();
    }
    if (event.target === successModal) {
      closeSuccessModal();
    }
    if (event.target === errorModal) {
      closeErrorModal();
    }
  });
  
  // Input validation
  nisInput.addEventListener('input', validateForm);
  passwordInput.addEventListener('input', validateForm);
  agreeTerms.addEventListener('change', validateForm);
  
  // Enter key handling
  nisInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      passwordInput.focus();
    }
  });
  
  passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && validateForm()) {
      handleLogin(e);
    }
  });
}

// Handle login form submission
async function handleLogin(event) {
  event.preventDefault();
  
  if (!validateForm()) {
    showError('Please fill in all required fields and agree to the terms.');
    return;
  }
  
  const nis = nisInput.value.trim();
  const password = passwordInput.value;
  
  // Show loading state
  setLoadingState(true);
  
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Validate credentials
    if (nis === validCredentials.nis && password === validCredentials.password) {
      // Save credentials if remember me is checked
      if (rememberMe.checked) {
        saveCredentials(nis);
      } else {
        clearSavedCredentials();
      }
      
      showSuccess();
    } else {
      showError('Invalid NIS or password. Please try again.');
    }
  } catch (error) {
    showError('An error occurred. Please try again later.');
  } finally {
    setLoadingState(false);
  }
}

// Toggle password visibility
function togglePasswordVisibility() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
}

// Form validation
function validateForm() {
  const nis = nisInput.value.trim();
  const password = passwordInput.value;
  const termsAccepted = agreeTerms.checked;
  
  const isValid = nis.length > 0 && password.length > 0 && termsAccepted;
  
  // Update button state
  signInBtn.disabled = !isValid;
  
  return isValid;
}

// Loading state management
function setLoadingState(loading) {
  if (loading) {
    signInBtn.disabled = true;
    signInBtn.classList.add('loading');
    signInBtn.querySelector('.text-wrapper-7').textContent = 'Signing in...';
  } else {
    signInBtn.disabled = false;
    signInBtn.classList.remove('loading');
    signInBtn.querySelector('.text-wrapper-7').textContent = 'Sign in';
    validateForm(); // Re-validate to set correct disabled state
  }
}

// Modal functions
function showTermsModal() {
  termsModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeTermsModal() {
  termsModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function acceptTermsAndClose() {
  agreeTerms.checked = true;
  closeTermsModal();
  validateForm();
}

function showSuccess() {
  successModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
  successModal.style.display = 'none';
  document.body.style.overflow = 'auto';
  // Simulate redirect to dashboard
  console.log('Redirecting to dashboard...');
}

function showError(message) {
  errorMessage.textContent = message;
  errorModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeErrorModal() {
  errorModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Local storage functions
function saveCredentials(nis) {
  try {
    localStorage.setItem('rememberedNIS', nis);
    localStorage.setItem('rememberMe', 'true');
  } catch (error) {
    console.warn('Could not save credentials to localStorage');
  }
}

function loadSavedCredentials() {
  try {
    const rememberedNIS = localStorage.getItem('rememberedNIS');
    const shouldRemember = localStorage.getItem('rememberMe') === 'true';
    
    if (shouldRemember && rememberedNIS) {
      nisInput.value = rememberedNIS;
      rememberMe.checked = true;
    }
  } catch (error) {
    console.warn('Could not load saved credentials from localStorage');
  }
}

function clearSavedCredentials() {
  try {
    localStorage.removeItem('rememberedNIS');
    localStorage.removeItem('rememberMe');
  } catch (error) {
    console.warn('Could not clear saved credentials from localStorage');
  }
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add some helpful console messages for testing
console.log('🎓 PI School Login System');
console.log('📝 Demo credentials:');
console.log('   NIS: student123');
console.log('   Password: password123');
console.log('✨ Features:');
console.log('   - Form validation');
console.log('   - Password visibility toggle');
console.log('   - Remember me functionality');
console.log('   - Terms & conditions modal');
console.log('   - Success/error handling');
console.log('   - Loading states');
console.log('   - Responsive design');

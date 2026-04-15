// ===== LIEN-HE.JS =====

// ===== FORM VALIDATION =====
const form = document.getElementById('contactForm');

const validators = {
  hoTen: {
    validate: (val) => {
      if (!val.trim()) return 'Vui lòng nhập họ tên.';
      if (val.trim().length < 3) return 'Họ tên phải có ít nhất 3 ký tự.';
      return '';
    }
  },
  soDienThoai: {
    validate: (val) => {
      if (!val.trim()) return 'Vui lòng nhập số điện thoại.';
      const phone = val.replace(/\s/g, '');
      if (!/^(0|\+84)[0-9]{9}$/.test(phone)) return 'Số điện thoại không hợp lệ. VD: 0966651888';
      return '';
    }
  },
  email: {
    validate: (val) => {
      if (!val.trim()) return ''; // optional
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Email không hợp lệ.';
      return '';
    }
  },
  loaiCongTrinh: {
    validate: (val) => {
      if (!val) return 'Vui lòng chọn loại công trình.';
      return '';
    }
  },
  dongY: {
    validate: (checked) => {
      if (!checked) return 'Vui lòng đồng ý với chính sách bảo mật.';
      return '';
    }
  }
};

function setFieldState(fieldId, error) {
  const field = document.getElementById(fieldId);
  const errEl = document.getElementById(fieldId + '-err');

  if (!field) return;

  if (error) {
    field.classList.add('error');
    field.classList.remove('success');
    if (errEl) errEl.textContent = error;
  } else {
    field.classList.remove('error');
    if (field.tagName !== 'INPUT' || field.type !== 'checkbox') {
      if (field.value) field.classList.add('success');
    }
    if (errEl) errEl.textContent = '';
  }
}

function validateField(fieldId) {
  const validator = validators[fieldId];
  if (!validator) return true;

  const field = document.getElementById(fieldId);
  if (!field) return true;

  const value = field.type === 'checkbox' ? field.checked : field.value;
  const error = validator.validate(value);
  setFieldState(fieldId, error);
  return !error;
}

// Real-time validation on blur
Object.keys(validators).forEach(fieldId => {
  const field = document.getElementById(fieldId);
  if (!field) return;

  const eventType = field.type === 'checkbox' ? 'change' : 'blur';
  field.addEventListener(eventType, () => validateField(fieldId));

  if (field.type !== 'checkbox') {
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(fieldId);
    });
  }
});

// Form submit
form?.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate all fields
  const fieldsToValidate = ['hoTen', 'soDienThoai', 'email', 'loaiCongTrinh', 'dongY'];
  let isValid = true;

  fieldsToValidate.forEach(fieldId => {
    if (!validateField(fieldId)) isValid = false;
  });

  if (!isValid) {
    // Scroll to first error
    const firstError = form.querySelector('.error');
    firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // Simulate form submission
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');

  submitBtn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'flex';

  // Simulate API call delay
  setTimeout(() => {
    form.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }, 1800);
});

function resetForm() {
  form.reset();
  form.style.display = 'block';
  document.getElementById('formSuccess').style.display = 'none';

  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  submitBtn.disabled = false;
  btnText.style.display = 'flex';
  btnLoading.style.display = 'none';

  // Clear all states
  document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(el => {
    el.classList.remove('error', 'success');
  });
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
}

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // Close all
    faqItems.forEach(i => {
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      i.querySelector('.faq-answer').classList.remove('open');
    });

    // Open clicked if was closed
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
    }
  });
});

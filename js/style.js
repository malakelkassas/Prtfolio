const img = document.getElementById("myImg");
img.style.width = "200px";
img.style.height = "200px";
img.style.borderRadius = "50%";
img.style.objectFit = "cover";
img.style.border = "3px solid #ffe063ff";
img.style.transition = "0.3s ease";
img.addEventListener("mouseover", () => {
  img.style.borderColor = "#ff4d6d";
  img.style.transform = "scale(1.05)"; img.style.cursor = "pointer";
});
img.addEventListener("mouseout", () => {
  img.style.borderColor = "#ffe063ff";
  img.style.transform = "scale(1)";
});
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, { method: form.method, body: formData, headers: { 'Accept': 'application/json' } });
    if (response.ok) {
      formMessage.style.color = "green"; formMessage.textContent = "✅ تم الإرسال بنجاح! شكراً لتواصلك."; form.reset();
    }
    else {
      formMessage.style.color = "red"; formMessage.textContent = "❌ حصل خطأ، حاول مرة تانية.";
    }
  }
  catch (error) {
    formMessage.style.color = "red"; formMessage.textContent = "⚠ في مشكلة بالاتصال، حاول لاحقاً.";
  }
});

// Get all navbar links
const navLinks = document.querySelectorAll('.navbar-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active from all
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active to the clicked one
    link.classList.add('active');
  });
});

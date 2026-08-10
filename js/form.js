/* -------------------------------------------------
   Form handling: newsletter subscription and contact form.
   Works with Formspree (or any endpoint that accepts POST and returns JSON).
   ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // ----- Newsletter form -----
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const btn = this.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending…';

      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          alert('Thanks for subscribing!');
          this.reset();
        } else {
          throw new Error('Submission failed');
        }
      })
      .catch(err => {
        alert('Oops! Something went wrong. Please try again later.');
        console.error(err);
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = 'Subscribe';
      });
    });
  }

  // ----- Contact form (if present) -----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const btn = this.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.value = 'Sending…';

      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          alert('Message sent! I will get back to you soon.');
          this.reset();
        } else {
          throw new Error('Send failed');
        }
      })
      .catch(err => {
        alert('Oops! Could not send the message.');
        console.error(err);
      })
      .finally(() => {
        btn.disabled = false;
        btn.value = 'Send Message';
      });
    });
  }
});
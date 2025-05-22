document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (toggleBtn && nav) {
      toggleBtn.addEventListener('click', function() {
        nav.classList.toggle('show');
      });
    }

    // Testimonial slider logic
    const testimonials = document.querySelectorAll('.testimonial');
    let current = 0;
    if (testimonials.length > 0) {
      setInterval(() => {
        testimonials[current].classList.remove('active');
        current = (current + 1) % testimonials.length;
        testimonials[current].classList.add('active');
      }, 10000); // 10 seconds per testimonial
    }
  });

  /* timeline toggle */
document.querySelectorAll('.wf-btn').forEach(btn=>{
  btn.addEventListener('click',e=>{
    // button states
    document.querySelectorAll('.wf-btn').forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
    // timeline states
    document.querySelectorAll('.timeline').forEach(t=>t.classList.remove('active'));
    document.getElementById(e.target.dataset.target).classList.add('active');
  });
});
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

function join() {
  location.href = "/contact_form1/contact.html";
}


// go up button
const goUpButton = document.querySelector('#go-up-button');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 600) {
    goUpButton.style.display = 'block';
  } else {
    goUpButton.style.display = 'none';
  }
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
goUpButton.addEventListener('click', scrollToTop);

// testimonials
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');
const testimonials = [
  {
    name: 'Hem Chander Pandey',
    position: 'HUMAN RESOURCE',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "I learned how to introduce myself, talk about my interests, knowledge and skills with entrepreneurs and business owners, as well as how to take interview of others gain a better understanding of businesses.Yes the internship meet my expectations bcoz, As an intern, focus on being hardworking and open-minded towards my work. During internships, I  develop my  skills like time management, working on deadlines, interpersonal skills, building confidence, communication, listening skills, and problem-solving skills.",
  },
  {
    name: 'Dharani kommana',
    position: 'Hr intern',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'I have learnt how to share job post in LinkedIn, recruiting the people, how to take interviews, how to answer the questions asked by candidates & more. I appreciate the foundation because this foundation helping the poor people by providing education via code karo yaaro ,by providing food& by social activities.',
  },
  {
    name: 'Sreeja Ray',
    position: 'Machine learning intern',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Teamwork was the most important thing...beside this I got an opportunity to explore the field in NLP.Thank you for giving me such opportunities to explore more and familiar with NLP.",
  },
  {
    name: 'Neeraja Sanagapalli',
    position: 'Social media manager',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "I would say more than yes because I've mastered time management, managed people, convinced them with my idea towards social work or any other idea towards work for positive outcomes, hired people older than my age, impacted many people towards social work."
  },
  {
    name: 'Vanshika Agarwal',
    position: 'Computer Science Mentor/ Intern',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "This internship taught me the importance of teaching we have in our life. How a teacher can shape your life and can make you learn so many new things in many different ways.",
  },
]
let idx = 1;
function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}
setInterval(updateTestimonial, 10000);



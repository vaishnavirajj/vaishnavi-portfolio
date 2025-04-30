document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector("#navbar ul")

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Dropdown Menu for Mobile
  const dropdowns = document.querySelectorAll(".dropdown")

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault()
        this.classList.toggle("active")
      }
    })
  })

  // Active Navigation Link
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll("nav ul li a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })

          // Close mobile menu after clicking a link
          if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active")
          }
        }
      }
    })
  })

  // Form Submission
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For now, we'll just show an alert
      alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`)

      // Reset the form
      contactForm.reset()
    })
  }

  
  // Animation on scroll
  window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(
      ".skill-category, .project-card, .cert-card, .achievement-card, .education-item, .contact-item",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  })

  // Initialize animations
  const animatedElements = document.querySelectorAll(
    ".skill-category, .project-card, .cert-card, .achievement-card, .education-item, .contact-item",
  )

  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Trigger initial scroll event to animate elements in view
  window.dispatchEvent(new Event("scroll"))
})

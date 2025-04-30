document.addEventListener("DOMContentLoaded", () => {
  // Create lightbox elements
  const lightbox = document.createElement("div")
  lightbox.id = "lightbox"
  lightbox.className = "lightbox"

  const lightboxContent = document.createElement("div")
  lightboxContent.className = "lightbox-content"

  const lightboxImage = document.createElement("img")
  lightboxImage.className = "lightbox-image"

  const closeButton = document.createElement("span")
  closeButton.className = "lightbox-close"
  closeButton.innerHTML = "&times;"

  // Append elements
  lightboxContent.appendChild(lightboxImage)
  lightboxContent.appendChild(closeButton)
  lightbox.appendChild(lightboxContent)
  document.body.appendChild(lightbox)

  // Get all certificate and achievement links
  const certLinks = document.querySelectorAll(".cert-card")
  const achievementLinks = document.querySelectorAll(".achievement-card")

  // Function to open lightbox
  function openLightbox(e) {
    e.preventDefault()
    const imgSrc = this.getAttribute("href")
    lightboxImage.src = imgSrc
    lightbox.style.display = "flex"
    document.body.style.overflow = "hidden" // Prevent scrolling
  }

  // Add click event to all certificate and achievement links
  certLinks.forEach((link) => {
    link.addEventListener("click", openLightbox)
  })

  achievementLinks.forEach((link) => {
    link.addEventListener("click", openLightbox)
  })

  // Close lightbox when clicking the close button or outside the image
  closeButton.addEventListener("click", () => {
    lightbox.style.display = "none"
    document.body.style.overflow = "auto" // Re-enable scrolling
  })

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none"
      document.body.style.overflow = "auto" // Re-enable scrolling
    }
  })
})

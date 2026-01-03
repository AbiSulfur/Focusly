// Android-specific optimizations
const isAndroid = /Android/i.test(navigator.userAgent)
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

// Smooth scrolling untuk navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Android-specific viewport fixes
  if (isAndroid) {
    // Fix for Android Chrome viewport height issues
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    setVH()
    window.addEventListener("resize", setVH)
    window.addEventListener("orientationchange", setVH)

    // Prevent zoom on double tap
    let lastTouchEnd = 0
    document.addEventListener(
      "touchend",
      (event) => {
        const now = new Date().getTime()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }
        lastTouchEnd = now
      },
      false,
    )

    // Disable pull-to-refresh on Android
    document.body.style.overscrollBehavior = "none"
  }

  // Smooth scrolling
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Mobile navigation toggle with Android optimization
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (navToggle && navMenu) {
    const toggleMenu = (e) => {
      e.preventDefault()
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")

      // Add haptic feedback for Android
      if (isAndroid && navigator.vibrate) {
        navigator.vibrate(50)
      }

      // Prevent body scroll when menu is open
      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    }

    // Use touchstart for better Android responsiveness
    if (isTouchDevice) {
      navToggle.addEventListener("touchstart", toggleMenu, { passive: false })
    } else {
      navToggle.addEventListener("click", toggleMenu)
    }

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }

  // Navbar background on scroll
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)"
      navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      navbar.style.boxShadow = "none"
    }
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".feature-card, .step, .testimonial-card")

  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  const progressRing = document.querySelector(".progress-ring-circle")
  const timerText = document.querySelector(".timer-text")

  if (progressRing && timerText) {
    const radius = progressRing.r.baseVal.value
    const circumference = radius * 2 * Math.PI
    progressRing.style.strokeDasharray = circumference + " " + circumference
    progressRing.style.strokeDashoffset = circumference

    let progress = 0
    const interval = setInterval(() => {
      progress += 0.5
      const offset = circumference - (progress / 100) * circumference
      progressRing.style.strokeDashoffset = offset

      if (progress >= 100) {
        progress = 0
        progressRing.style.strokeDashoffset = circumference
      }
    }, 40)
  }

  const habitCheckboxes = document.querySelectorAll(".habit-checkbox")

  habitCheckboxes.forEach((checkbox) => {
    const toggleCheckbox = function (e) {
      e.preventDefault()
      const wasChecked = this.classList.contains("checked")
      this.classList.toggle("checked")

      // Add haptic feedback for Android
      if (isAndroid && navigator.vibrate) {
        navigator.vibrate(wasChecked ? 30 : 50)
      }
    }

    // Use touchstart for better Android responsiveness
    if (isTouchDevice) {
      checkbox.addEventListener("touchstart", toggleCheckbox, { passive: false })
    } else {
      checkbox.addEventListener("click", toggleCheckbox)
    }
  })

  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((button) => {
    if (!isTouchDevice) {
      // Desktop hover effects
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px)"
      })

      button.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
      })
    } else {
      // Android touch feedback
      button.addEventListener(
        "touchstart",
        function () {
          this.style.transform = "scale(0.96)"

          // Add haptic feedback for Android
          if (isAndroid && navigator.vibrate) {
            navigator.vibrate(30)
          }
        },
        { passive: true },
      )

      button.addEventListener(
        "touchend",
        function () {
          this.style.transform = "scale(1)"
        },
        { passive: true },
      )
    }
  })

  const hero = document.querySelector(".hero")
  const appMockup = document.querySelector(".app-mockup")

  if (hero && appMockup) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3
      appMockup.style.transform = `perspective(1200px) rotateY(-12deg) rotateX(2deg) translateY(${rate}px)`
    })
  }

  const statNumbers = document.querySelectorAll(".stat-number")

  const animateCounter = (element, target) => {
    let current = 0
    const increment = target / 60
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      const displayValue = Math.floor(current)
      const suffix = element.textContent.replace(/[0-9+%]/g, "").trim()
      element.textContent = displayValue.toLocaleString() + (suffix || "+")
    }, 16)
  }

  // Trigger counter animation when stats are visible
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const numberElement = entry.target
          const text = numberElement.textContent
          const target = Number.parseInt(text.replace(/[^\d]/g, ""))

          if (target > 0) {
            animateCounter(numberElement, target)
          }

          statsObserver.unobserve(numberElement)
        }
      })
    },
    { threshold: 0.5 },
  )

  statNumbers.forEach((stat) => {
    statsObserver.observe(stat)
  })

  const ctaButton = document.querySelector(".cta-section .btn-primary")

  if (ctaButton) {
    setInterval(() => {
      ctaButton.style.animation = "none"
      setTimeout(() => {
        ctaButton.style.animation = "ctaPulse 0.6s ease-out"
      }, 10)
    }, 3500)
  }

  // Add CSS for animations
  const style = document.createElement("style")
  style.textContent = `
        @keyframes ctaPulse {
            0% {
                box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
            }
            50% {
                box-shadow: 0 8px 35px rgba(99, 102, 241, 0.6);
            }
            100% {
                box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
            }
        }

        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: var(--spacing-8);
                border-bottom: 1px solid var(--border-color);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .nav-menu.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `
  document.head.appendChild(style)

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      }
    }
  })
})

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Optimize scroll performance
const optimizedScrollHandler = debounce(() => {
  // Scroll-based animations can be added here
}, 16)

window.addEventListener("scroll", optimizedScrollHandler)

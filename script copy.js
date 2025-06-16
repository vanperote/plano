document.addEventListener("DOMContentLoaded", () => {
  // Slideshow do Hero
  function initHeroSlideshow() {
    const slides = document.querySelectorAll(".hero-slide")
    if (slides.length < 2) return

    let currentSlide = 0

    function showNextSlide() {
      slides[currentSlide].classList.remove("active")
      currentSlide = (currentSlide + 1) % slides.length
      slides[currentSlide].classList.add("active")
    }

    // Muda a imagem a cada 5 segundos
    setInterval(showNextSlide, 5000)
  }

  // Inicializa o slideshow do hero
  initHeroSlideshow()

  // Funcionalidade do menu lateral dinâmico
  function initDynamicSidebar() {
    const sidebarItems = document.querySelectorAll(".sidebar-section li[data-content]")
    const contentTitle = document.getElementById("content-title")
    const dynamicContents = document.querySelectorAll(".dynamic-content")

    // Mapeamento de conteúdos para títulos
    const contentTitles = {
      "cenarios-economicos": "Cenários Econômicos - Sebrae Nacional",
      "tendencias-mercado": "Painéis - Sebrae Nacional",
      "analise-swot": "Análise SWOT - Sebrae Nacional",
      benchmarking: "Benchmarking - Sebrae Nacional",
      "relatorio-tendencias": "Relatório de Tendências - Sebrae Nacional",
      "estudos-setoriais": "Estudos Setoriais - Sebrae Nacional",
      "pesquisas-mercado": "Pesquisas de Mercado - Sebrae Nacional",
      "matriz-swot": "Matriz SWOT - Sebrae Nacional",
      "analise-pestel": "Análise PESTEL - Sebrae Nacional",
      "canvas-cenarios": "Canvas de Cenários - Sebrae Nacional",
    }

    function showContent(contentId) {
      // Esconde todos os conteúdos
      dynamicContents.forEach((content) => {
        content.classList.remove("active")
      })

      // Mostra o conteúdo selecionado
      const selectedContent = document.getElementById(`content-${contentId}`)
      if (selectedContent) {
        selectedContent.classList.add("active")
      }

      // Atualiza o título
      if (contentTitle && contentTitles[contentId]) {
        contentTitle.textContent = contentTitles[contentId]
      }

      // Garantir que todos os itens do menu com o mesmo contentId estejam marcados como ativos
      document.querySelectorAll(`.sidebar-section li[data-content="${contentId}"]`).forEach((item) => {
        item.classList.add("active")
      })
    }

    // Adiciona event listeners aos itens do menu
    sidebarItems.forEach((item) => {
      item.addEventListener("click", function () {
        const contentId = this.getAttribute("data-content")

        // Remove active de todos os itens do mesmo menu
        const parentSection = this.closest(".sidebar-section")
        const siblingItems = parentSection.querySelectorAll("li")
        siblingItems.forEach((sibling) => sibling.classList.remove("active"))

        // Adiciona active ao item clicado
        this.classList.add("active")

        // Mostra o conteúdo correspondente
        showContent(contentId)
      })
    })
  }

  // Chama a função após o DOM estar carregado
  initDynamicSidebar()

  // Elementos principais
  const steps = document.querySelectorAll(".step-new")
  const homeIcon = document.querySelector(".home-icon-new")
  const stepContents = document.querySelectorAll(".step-content-container")

  // Função para mostrar o conteúdo da etapa
  function showStepContent(stepNumber) {
    // Esconde todos os conteúdos de etapa
    stepContents.forEach((content) => {
      content.classList.remove("active")
    })

    // Mostra o conteúdo da etapa selecionada
    const selectedContent = document.getElementById(`step-content-${stepNumber}`)
    if (selectedContent) {
      selectedContent.classList.add("active")
    }

    // Atualiza a classe ativa nas etapas
    steps.forEach((step) => {
      step.classList.remove("active")
    })

    // Remove classe ativa do home
    if (homeIcon) {
      homeIcon.classList.remove("active")
    }

    // Adiciona a classe ativa à etapa clicada ou home
    if (stepNumber === "home") {
      if (homeIcon) {
        homeIcon.classList.add("active")
      }
    } else {
      const selectedStep = document.querySelector(`.step-new[data-step="${stepNumber}"]`)
      if (selectedStep) {
        selectedStep.classList.add("active")
      }
    }
  }

  // Adiciona evento de clique às etapas
  steps.forEach((step) => {
    step.addEventListener("click", function () {
      const stepNumber = this.getAttribute("data-step")
      showStepContent(stepNumber)
    })
  })

  // Adiciona evento de clique ao ícone home
  if (homeIcon) {
    homeIcon.addEventListener("click", () => {
      showStepContent("home")
    })
  }

  // Inicializa o home como ativo
  if (homeIcon) {
    homeIcon.classList.add("active")
  }

  // Funcionalidade do carrossel
  const carouselSlides = document.querySelectorAll(".carousel-slide")
  const carouselDots = document.querySelectorAll(".carousel-dot")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentSlide = 0

  function showSlide(index) {
    // Remove active de todos os slides e dots
    carouselSlides.forEach((slide) => slide.classList.remove("active"))
    carouselDots.forEach((dot) => dot.classList.remove("active"))

    // Adiciona active ao slide e dot atual
    if (carouselSlides[index]) {
      carouselSlides[index].classList.add("active")
    }
    if (carouselDots[index]) {
      carouselDots[index].classList.add("active")
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselSlides.length
    showSlide(currentSlide)
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length
    showSlide(currentSlide)
  }

  // Event listeners para o carrossel
  if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide)
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide)
  }

  // Event listeners para os dots
  carouselDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })

  // Auto-play do carrossel (opcional)
  setInterval(nextSlide, 5000)

  // Funcionalidade dos botões de acesso rápido
  const quickAccessBtns = document.querySelectorAll(".quick-access-btn")

  quickAccessBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const action = this.getAttribute("data-action")

      // Aqui você pode implementar as ações específicas para cada botão
      switch (action) {
        case "relatorios":
          console.log("Abrindo relatórios...")
          // Implementar navegação para relatórios
          break
        case "pesquisas":
          console.log("Abrindo pesquisas...")
          // Implementar navegação para pesquisas
          break
        case "dados":
          console.log("Abrindo dados...")
          // Implementar navegação para dados
          break
        case "tendencias":
          console.log("Abrindo tendências...")
          // Implementar navegação para tendências
          break
        case "ferramentas":
          console.log("Abrindo ferramentas...")
          // Implementar navegação para ferramentas
          break
        case "capacitacao":
          console.log("Abrindo capacitação...")
          // Implementar navegação para capacitação
          break
        case "eventos":
          console.log("Abrindo eventos...")
          // Implementar navegação para eventos
          break
        case "contato":
          console.log("Abrindo contato...")
          // Implementar navegação para contato
          break
        case "downloads":
          console.log("Abrindo downloads...")
          // Implementar navegação para downloads
          break
        default:
          console.log("Ação não definida")
      }

      // Feedback visual
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  })

  // Remover as seções relacionadas à paginação:

  // Funcionalidade para a paginação (se existir) - REMOVIDO
  /*
  const prevButtons = document.querySelectorAll(".prev")
  const nextButtons = document.querySelectorAll(".next")

  prevButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const container = this.closest(".step-content-container")
      if (container) {
        const currentStep = container.id.split("-").pop()
        if (currentStep !== "home" && Number.parseInt(currentStep) > 1) {
          showStepContent(Number.parseInt(currentStep) - 1)
        }
      }
    })
  })

  nextButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const container = this.closest(".step-content-container")
      if (container) {
        const currentStep = container.id.split("-").pop()
        if (currentStep === "home") {
          showStepContent(1)
        } else if (Number.parseInt(currentStep) < 6) {
          showStepContent(Number.parseInt(currentStep) + 1)
        }
      }
    })
  })
  */

  // Funcionalidade para os itens do menu lateral
  const sidebarItems = document.querySelectorAll(".sidebar-section li")

  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Encontra todos os itens no mesmo menu lateral
      const sidebarContainer = item.closest(".sidebar")
      const itemsInSameSidebar = sidebarContainer.querySelectorAll("li")

      // Remove a classe active apenas dos itens no mesmo menu lateral
      itemsInSameSidebar.forEach((i) => i.classList.remove("active"))

      // Adiciona a classe active ao item clicado
      item.classList.add("active")

      // Adiciona feedback visual
      item.style.transform = "scale(0.98)"
      setTimeout(() => {
        item.style.transform = "scale(1)"
      }, 100)
    })
  })

  // Verificar responsividade ao redimensionar a janela
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      // Garantir que todas as etapas estejam visíveis em telas pequenas
      const processSteps = document.querySelector(".process-steps-new")
      if (processSteps) {
        processSteps.style.overflowX = "auto"
      }
    } else {
      const processSteps = document.querySelector(".process-steps-new")
      if (processSteps) {
        processSteps.style.overflowX = "visible"
      }
    }
  })

  // Inicializar verificação de responsividade
  if (window.innerWidth <= 768) {
    const processSteps = document.querySelector(".process-steps-new")
    if (processSteps) {
      processSteps.style.overflowX = "auto"
    }
  }

  // Função para atualizar Power BI
  window.refreshPowerBI = (buttonElement) => {
    
    const stepInfoContainer = buttonElement.closest('.step-info');
    if (stepInfoContainer) {
      const iframe = stepInfoContainer.querySelector(".powerbi-container iframe");
  
      if (iframe) {
        if (iframe.src) {
          const originalSrc = iframe.src;
          iframe.src = ""; 
          
          setTimeout(() => {
            iframe.src = originalSrc;
          }, 100); 
          console.log("Painel atualizado:", originalSrc);
        } else {
          console.log("Não é possível atualizar: o iframe não tem um 'src' definido.");
        }
      } else {
        console.error("ERRO: Iframe não encontrado dentro de '.step-info'.");
      }
    } else {
      console.error("ERRO: Contêiner '.step-info' não encontrado.");
    }
  };

  // Função para detectar quando o Power BI carrega
  function initPowerBIHandlers() {
    const powerBIIframe = document.querySelector(".powerbi-container iframe")
    if (powerBIIframe) {
      powerBIIframe.addEventListener("load", () => {
        console.log("Power BI dashboard carregado com sucesso")
      })

      powerBIIframe.addEventListener("error", () => {
        console.log("Erro ao carregar Power BI dashboard")
        // Você pode adicionar uma mensagem de erro aqui se necessário
      })
    }
  }

  // Inicializar handlers do Power BI quando o conteúdo for mostrado
  const originalShowContent = window.showContent || (() => {})
  window.showContent = (contentId) => {
    originalShowContent(contentId)
    if (contentId === "tendencias-mercado") {
      setTimeout(initPowerBIHandlers, 500)
    }
  }

  // Funcionalidade das Ferramentas Leme
  const lemeCards = document.querySelectorAll(".leme-card")

  lemeCards.forEach((card) => {
    card.addEventListener("click", function () {
      const tool = this.getAttribute("data-tool")

      // Aqui você pode implementar as ações específicas para cada ferramenta
      switch (tool) {
        case "status":
          console.log("Abrindo Status da Solicitação...")
          // Implementar navegação para status
          break
        case "detalhamento":
          console.log("Abrindo Detalhamento do Plano...")
          // Implementar navegação para detalhamento
          break
        case "orcamento":
          console.log("Abrindo Orçamento...")
          // Implementar navegação para orçamento
          break
        case "acompanhamento":
          console.log("Abrindo Relatório de Acompanhamento...")
          // Implementar navegação para acompanhamento
          break
        case "consolidado":
          console.log("Abrindo Relatório Consolidado...")
          // Implementar navegação para consolidado
          break
        default:
          console.log("Ferramenta não definida")
      }

      // Feedback visual
      this.style.transform = "translateY(-4px) scale(0.98)"
      setTimeout(() => {
        this.style.transform = "translateY(-4px) scale(1)"
      }, 150)
    })
  })

  // Funcionalidade da Etapa 4 - Accordion
  function initStep4Functionality() {
    // Funcionalidade do menu lateral da Etapa 4
    const step4SidebarItems = document.querySelectorAll("#step-content-4 .sidebar-section li[data-content]")
    const step4ContentTitle = document.getElementById("content-title-4")
    const step4DynamicContents = document.querySelectorAll("#step-content-4 .dynamic-content")

    // Mapeamento de conteúdos para títulos da Etapa 4
    const step4ContentTitles = {
      "boletim-acompanhamento": "Boletim de Acompanhamento",
      "boletim-nps": "Boletim NPS",
      "metas-mobilizadoras": "Metas Mobilizadoras",
      "imagem-marca": "Imagem e Marca Sebrae",
      "monitoramento-projetos": "Monitoramento de Projetos e Processos",
    }

    function showStep4Content(contentId) {
      // Esconde todos os conteúdos da Etapa 4
      step4DynamicContents.forEach((content) => {
        content.classList.remove("active")
      })

      // Mostra o conteúdo selecionado
      const selectedContent = document.getElementById(`content-${contentId}`)
      if (selectedContent) {
        selectedContent.classList.add("active")
      }

      // Atualiza o título
      if (step4ContentTitle && step4ContentTitles[contentId]) {
        step4ContentTitle.textContent = step4ContentTitles[contentId]
      }

      // Reinicializa os accordions para o novo conteúdo
      setTimeout(initAccordions, 100)
    }

    // Adiciona event listeners aos itens do menu da Etapa 4
    step4SidebarItems.forEach((item) => {
      item.addEventListener("click", function () {
        const contentId = this.getAttribute("data-content")

        // Remove active de todos os itens do mesmo menu
        const parentSection = this.closest(".sidebar-section")
        const siblingItems = parentSection.querySelectorAll("li")
        siblingItems.forEach((sibling) => sibling.classList.remove("active"))

        // Adiciona active ao item clicado
        this.classList.add("active")

        // Mostra o conteúdo correspondente
        showStep4Content(contentId)
      })
    })

    // Função separada para inicializar accordions
    function initAccordions() {
      // Remove event listeners antigos para evitar duplicação
      const accordionHeaders = document.querySelectorAll("#step-content-4 .accordion-header")

      accordionHeaders.forEach((header) => {
        // Remove listeners antigos clonando o elemento
        const newHeader = header.cloneNode(true)
        header.parentNode.replaceChild(newHeader, header)
      })

      // Adiciona novos event listeners
      const newAccordionHeaders = document.querySelectorAll("#step-content-4 .accordion-header")

      newAccordionHeaders.forEach((header) => {
        header.addEventListener("click", function (e) {
          e.preventDefault()
          e.stopPropagation()

          const accordionItem = this.closest(".accordion-item")
          const accordionIcon = this.querySelector(".accordion-icon")
          const accordionContent = accordionItem.querySelector(".accordion-content")
          const isActive = accordionItem.classList.contains("active")

          console.log("Accordion clicado:", this.querySelector(".accordion-year").textContent, "Ativo:", isActive)

          if (isActive) {
            // Se está ativo, fecha
            accordionItem.classList.remove("active")
            accordionIcon.textContent = "+"
            accordionContent.style.display = "none"
          } else {
            // Fecha todos os outros accordions no mesmo container
            const container = this.closest(".accordion-container")
            const allItems = container.querySelectorAll(".accordion-item")
            const allIcons = container.querySelectorAll(".accordion-icon")
            const allContents = container.querySelectorAll(".accordion-content")

            allItems.forEach((item) => item.classList.remove("active"))
            allIcons.forEach((icon) => (icon.textContent = "+"))
            allContents.forEach((content) => (content.style.display = "none"))

            // Ativa este
            accordionItem.classList.add("active")
            accordionIcon.textContent = "−"
            accordionContent.style.display = "block"
          }
        })
      })

      // Funcionalidade dos links de download
      const downloadLinks = document.querySelectorAll("#step-content-4 .download-link")

      downloadLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault()

          const linkText = this.textContent
          const monthCard = this.closest(".month-card")
          const monthName = monthCard.querySelector("h4").textContent
          const accordionItem = this.closest(".accordion-item")
          const year = accordionItem.querySelector(".accordion-year").textContent

          console.log(`Download iniciado: ${linkText} - ${monthName} ${year}`)

          // Feedback visual
          this.style.color = "#0039b8"
          setTimeout(() => {
            this.style.color = "#004EDF"
          }, 200)
        })
      })
    }

    // Garantir que o primeiro item esteja ativo e visível
    const firstSidebarItem = step4SidebarItems[0]
    if (firstSidebarItem) {
      firstSidebarItem.classList.add("active")
      const firstContentId = firstSidebarItem.getAttribute("data-content")
      showStep4Content(firstContentId)
    }

    // Inicializa os accordions
    initAccordions()
  }

  // Chama a função quando a Etapa 4 for ativada
  const originalShowStepContent = showStepContent
  showStepContent = (stepNumber) => {
    originalShowStepContent(stepNumber)

    if (stepNumber === "4") {
      setTimeout(initStep4Functionality, 100)
    }
  }

  // Inicializa a funcionalidade se a Etapa 4 já estiver ativa
  if (document.getElementById("step-content-4").classList.contains("active")) {
    initStep4Functionality()
  }

  // Funcionalidade da Etapa 5 - Encerramento
  function initStep5Functionality() {
    const encerramentoBtns = document.querySelectorAll(".encerramento-btn-3d")

    encerramentoBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const action = this.getAttribute("data-action")

        // Aqui você pode implementar as ações específicas para cada jornada
        switch (action) {
          case "insercao-resultados":
            console.log("Iniciando jornada: Inserção de Resultados...")
            // Implementar navegação para inserção de resultados
            break
          case "encerramento-projetos":
            console.log("Iniciando jornada: Encerramento de Projetos e Processos...")
            // Implementar navegação para encerramento de projetos
            break
          default:
            console.log("Ação não definida")
        }

        // Feedback visual
        this.style.transform = "translateY(-2px) scale(0.98)"
        setTimeout(() => {
          this.style.transform = "translateY(-2px) scale(1)"
        }, 150)
      })
    })
  }

  // Atualizar a função showStepContent para incluir a Etapa 5
  const originalShowStepContent2 = showStepContent
  showStepContent = (stepNumber) => {
    originalShowStepContent2(stepNumber)

    // Aguardar um pouco para garantir que o DOM foi atualizado
    setTimeout(() => {
      if (stepNumber === "4") {
        console.log("Inicializando Etapa 4...")
        initStep4Functionality()
      } else if (stepNumber === "5") {
        initStep5Functionality()
      } else if (stepNumber === "1") {
        // Reativar funcionalidade da Etapa 1
        initDynamicSidebar()
        // Garantir que o primeiro item esteja ativo
        const firstItem = document.querySelector("#step-content-1 .sidebar-section li[data-content]")
        if (firstItem) {
          firstItem.click()
        }
      }
    }, 100)
  }

  // Inicializa a funcionalidade se a Etapa 5 já estiver ativa
  if (
    document.getElementById("step-content-5") &&
    document.getElementById("step-content-5").classList.contains("active")
  ) {
    initStep5Functionality()
  }

  // Funcionalidade da Etapa 6 - Avaliação e Aprendizado
  function initStep6Functionality() {
    // Funcionalidade do menu lateral da Etapa 6
    const step6SidebarItems = document.querySelectorAll("#step-content-6 .sidebar-section li[data-content]")
    const step6ContentTitle = document.getElementById("content-title-6")
    const step6DynamicContents = document.querySelectorAll("#step-content-6 .dynamic-content")

    // Mapeamento de conteúdos para títulos da Etapa 6
    const step6ContentTitles = {
      "suporte-usuario": "Avaliação e Aprendizado",
      "pergunte-sebrai": "Avaliação e Aprendizado",
    }

    function showStep6Content(contentId) {
      // Esconde todos os conteúdos da Etapa 6
      step6DynamicContents.forEach((content) => {
        content.classList.remove("active")
      })

      // Mostra o conteúdo selecionado
      const selectedContent = document.getElementById(`content-${contentId}`)
      if (selectedContent) {
        selectedContent.classList.add("active")
      }

      // Atualiza o título
      if (step6ContentTitle && step6ContentTitles[contentId]) {
        step6ContentTitle.textContent = step6ContentTitles[contentId]
      }

      // Reinicializa as funcionalidades específicas
      setTimeout(() => {
        if (contentId === "suporte-usuario") {
          initContactForm()
        } else if (contentId === "pergunte-sebrai") {
          initFAQ()
        }
      }, 100)
    }

    // Adiciona event listeners aos itens do menu da Etapa 6
    step6SidebarItems.forEach((item) => {
      item.addEventListener("click", function () {
        const contentId = this.getAttribute("data-content")

        // Remove active de todos os itens do mesmo menu
        const parentSection = this.closest(".sidebar-section")
        const siblingItems = parentSection.querySelectorAll("li")
        siblingItems.forEach((sibling) => sibling.classList.remove("active"))

        // Adiciona active ao item clicado
        this.classList.add("active")

        // Mostra o conteúdo correspondente
        showStep6Content(contentId)
      })
    })

    // Funcionalidade do formulário de contato
    function initContactForm() {
      const contactForm = document.getElementById("contact-form")
      if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
          e.preventDefault()

          const formData = new FormData(contactForm)
          const nome = formData.get("nome")
          const email = formData.get("email")
          const assunto = formData.get("assunto")
          const mensagem = formData.get("mensagem")

          // Simular envio do email
          console.log("Formulário enviado:", { nome, email, assunto, mensagem })

          // Feedback visual
          const submitBtn = contactForm.querySelector(".form-submit-btn")
          const originalText = submitBtn.textContent
          submitBtn.textContent = "Enviando..."
          submitBtn.disabled = true

          // Simular processo de envio
          setTimeout(() => {
            submitBtn.textContent = "Enviado!"
            submitBtn.style.backgroundColor = "#10b981"

            // Limpar formulário
            contactForm.reset()

            // Restaurar botão após 3 segundos
            setTimeout(() => {
              submitBtn.textContent = originalText
              submitBtn.style.backgroundColor = "#4c63d2"
              submitBtn.disabled = false
            }, 3000)
          }, 1500)
        })
      }
    }

    // Funcionalidade do FAQ
    function initFAQ() {
      const faqHeaders = document.querySelectorAll("#step-content-6 .faq-header")

      faqHeaders.forEach((header) => {
        // Remove listeners antigos
        const newHeader = header.cloneNode(true)
        header.parentNode.replaceChild(newHeader, header)
      })

      // Adiciona novos event listeners
      const newFaqHeaders = document.querySelectorAll("#step-content-6 .faq-header")

      newFaqHeaders.forEach((header) => {
        header.addEventListener("click", function (e) {
          // Verifica se o clique foi no botão de copiar
          if (e.target.closest(".copy-btn")) {
            return // Não executa o toggle do accordion
          }

          e.preventDefault()
          e.stopPropagation()

          const faqItem = this.closest(".faq-item")
          const faqIcon = this.querySelector(".faq-icon")
          const faqContent = faqItem.querySelector(".faq-content")
          const isActive = faqItem.classList.contains("active")

          if (isActive) {
            // Se está ativo, fecha
            faqItem.classList.remove("active")
            faqIcon.textContent = "+"
            faqContent.style.display = "none"
          } else {
            // Fecha todos os outros FAQs
            const allFaqItems = document.querySelectorAll("#step-content-6 .faq-item")
            const allFaqIcons = document.querySelectorAll("#step-content-6 .faq-icon")
            const allFaqContents = document.querySelectorAll("#step-content-6 .faq-content")

            allFaqItems.forEach((item) => item.classList.remove("active"))
            allFaqIcons.forEach((icon) => (icon.textContent = "+"))
            allFaqContents.forEach((content) => (content.style.display = "none"))

            // Ativa este
            faqItem.classList.add("active")
            faqIcon.textContent = "−"
            faqContent.style.display = "block"
          }
        })
      })

      // Funcionalidade dos botões de copiar
      const copyButtons = document.querySelectorAll("#step-content-6 .copy-btn")

      copyButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault()
          e.stopPropagation()

          const questionText = this.getAttribute("data-question")

          // Copia o texto para a área de transferência
          navigator.clipboard
            .writeText(questionText)
            .then(() => {
              // Feedback visual de sucesso
              this.classList.add("copied")

              // Remove o estado "copiado" após 2 segundos
              setTimeout(() => {
                this.classList.remove("copied")
              }, 2000)
            })
            .catch((err) => {
              console.error("Erro ao copiar texto: ", err)
              // Fallback para navegadores mais antigos
              const textArea = document.createElement("textarea")
              textArea.value = questionText
              document.body.appendChild(textArea)
              textArea.select()
              document.execCommand("copy")
              document.body.removeChild(textArea)

              // Feedback visual de sucesso
              this.classList.add("copied")

              // Remove o estado "copiado" após 2 segundos
              setTimeout(() => {
                this.classList.remove("copied")
              }, 2000)
            })
        })
      })
    }

    // Garantir que o primeiro item esteja ativo e visível
    const firstSidebarItem = step6SidebarItems[0]
    if (firstSidebarItem) {
      firstSidebarItem.classList.add("active")
      const firstContentId = firstSidebarItem.getAttribute("data-content")
      showStep6Content(firstContentId)
    }
  }

  // Atualizar a função showStepContent para incluir a Etapa 6
  const originalShowStepContent3 = showStepContent
  showStepContent = (stepNumber) => {
    originalShowStepContent3(stepNumber)

    setTimeout(() => {
      if (stepNumber === "4") {
        console.log("Inicializando Etapa 4...")
        initStep4Functionality()
      } else if (stepNumber === "5") {
        initStep5Functionality()
      } else if (stepNumber === "6") {
        initStep6Functionality()
      } else if (stepNumber === "1") {
     
        initDynamicSidebar()

        const firstItem = document.querySelector("#step-content-1 .sidebar-section li[data-content]")
        if (firstItem) {
          firstItem.click()
        }
      }
    }, 100)
  }

 
  if (
    document.getElementById("step-content-6") &&
    document.getElementById("step-content-6").classList.contains("active")
  ) {
    initStep6Functionality()
  }
})

document.addEventListener('DOMContentLoaded', function() {

  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitButton = document.getElementById('submit-btn');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.innerText = 'Enviando...';
    formStatus.innerText = "Enviar"; 

   
    const formData = new FormData(form);

    fetch("https://formspree.io/f/manjekyp", { 
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
       
        if (response.ok) {
          
            formStatus.innerText = "Mensagem enviada com sucesso!";
            formStatus.style.color = "green";
            form.reset(); 
        } else {
          
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    formStatus.innerText = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    formStatus.innerText = "Ocorreu um erro ao enviar a mensagem.";
                }
                formStatus.style.color = "red";
            });
        }
    })
    .catch(error => {
       
        formStatus.innerText = "Ocorreu um erro de rede. Tente novamente.";
        formStatus.style.color = "red";
        console.error('Erro no fetch:', error);
    })
    .finally(() => {
     
        submitButton.disabled = false;
        submitButton.innerText = 'Enviar';
    });
  });

});
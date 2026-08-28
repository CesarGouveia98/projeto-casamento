# 💍 AppMariage — PWA & Gestão do Casamento

> 🌐 **Language / Idioma:** [Português](#-appmariage--pwa--gestão-do-casamento) | [English](#-appmariage--pwa--wedding-management)

[![Figma](https://img.shields.io/badge/Design-Figma-F24E1E?style=flat&logo=figma&logoColor=white)](https://figma.com)
[![Angular](https://img.shields.io/badge/Framework-Angular_17+-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Aplicação web desenvolvida no formato **PWA (Progressive Web App)** para digitalizar, facilitar e enriquecer a logística e a experiência de casamento de familiares.

---

## 🚀 Funcionalidades Desenvolvidas / Planeadas

* **Contagem Decrescente:** Cronómetro dinâmico integrado que calcula o tempo restante até ao grande dia (13 de Agosto de 2027).
* **Confirmação de Presenças (RSVP):** Interface interativa com atualização em tempo real via *Observer Pattern* para os convidados confirmarem presença.
* **Gestão de Agregado Familiar:** Permite agrupar e gerir as respostas por núcleos familiares.
* **Filtros de Restrições & Dietas:** Questionário dedicado para controlo de alergias, restrições alimentares e necessidades especiais de mobilidade.
* **Geolocalização & GPS Nativo:** Integração com a API nativa de hardware para orientar os convidados até ao local do evento.
* **Otimização de Mesas (Seating Plan):** Algoritmo combinatório para distribuição automática de lugares com base em matrizes de afinidade.
* **Leitura de QR Code:** Acesso rápido ao convite digital via câmara do dispositivo.
* **Painel de Gestão (Noivos):** Dashboard estatístico com projeções orçamentais e métricas de RSVP.

---

## 🛠️ Tecnologias Utilizadas & Arquitetura

### Front-end & Framework
* **UI/UX Design:** Figma (Desenho completo das interfaces, fluxos de navegação e paleta gráfica do evento).
* **Framework:** Angular (Arquitetura modular em Standalone Components, Routing e Services).
* **Linguagem:** TypeScript (Tipagem forte, interfaces bem definidas e DTOs).

### Unidades Curriculares & Padrões Aplicados
* **Programação Orientada a Objetos (POO):**
  * **Singleton Pattern:** Serviços core injetados globalmente (`@Injectable({ providedIn: 'root' })`).
  * **Observer Pattern:** Gestão de estado reativo do RSVP com RxJS (`BehaviorSubject`).
  * **Factory Pattern:** Instanciação dinâmica de canais de notificação (Push, Email, SMS).
* **Arquitetura de Dispositivos:**
  * **Web Geolocation API:** Cálculo de localização e coordenadas de navegação nativa.
  * **MediaDevices API:** Integração da câmara do dispositivo para scanning de QR Code.
  * **Web Push API:** Gestão de permissões e envio de notificações locais.
* **Matemática aplicada:**
  * **Algoritmos Combinatórios:** Otimização da alocação de lugares nas mesas.
  * **Estatística & Projeção:** Análise preditiva orçamental e percentagens de dietas alimentares.

---

## 🧠 Notas de Desenvolvimento

Este projeto foi idealizado e desenhado por mim com um propósito muito especial: **o casamento da minha mãe**. O objetivo principal foi criar uma experiência digital fluida, elegante e acessível para convidados de todas as idades. Toda a interface foi desenhada por mim no Figma antes de ser traduzida para código.

Originalmente iniciado em JavaScript Vanilla, o projeto foi totalmente reestruturado em **Angular + TypeScript** para evoluir a arquitetura de software, aplicando padrões de projeto avançados (Design Patterns), integração direta com hardware de dispositivos móveis e otimização matemática.

---
---

# 💍 AppMariage — PWA & Wedding Management

[![Figma](https://img.shields.io/badge/Design-Figma-F24E1E?style=flat&logo=figma&logoColor=white)](https://figma.com)
[![Angular](https://img.shields.io/badge/Framework-Angular_17+-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A Progressive Web Application (PWA) developed to digitize, streamline, and enhance the logistics and overall experience of a family wedding.

---

## 🚀 Features Implemented / Planned

* **Countdown Timer:** Dynamic integrated timer calculating the remaining time until the big day (August 13, 2027).
* **RSVP Confirmation:** Interactive interface with real-time state updates via the *Observer Pattern* for guest confirmations.
* **Household Management:** Allows grouping and managing responses by family units.
* **Dietary & Mobility Filters:** Dedicated questionnaire for tracking allergies, dietary restrictions, and special mobility needs.
* **Geolocation & Native GPS:** Integration with native hardware APIs to guide guests directly to the venue.
* **Seating Plan Optimization:** Combinatorial algorithm for automatic table allocation based on affinity matrices.
* **QR Code Reader:** Quick access to the digital invitation via the device's native camera.
* **Management Dashboard (Bride & Groom):** Statistical dashboard featuring budget projections and RSVP metrics.

---

## 🛠️ Technologies Used & Architecture

### Front-end & Framework
* **UI/UX Design:** Figma (Complete interface design, navigation flows, and event color palette).
* **Framework:** Angular (Modular architecture with Standalone Components, Routing, and Services).
* **Language:** TypeScript (Strong typing, well-defined interfaces, and DTOs).

### Academic Modules & Design Patterns Applied
* **Object-Oriented Programming (OOP):**
  * **Singleton Pattern:** Core services globally injected (`@Injectable({ providedIn: 'root' })`).
  * **Observer Pattern:** Reactive RSVP state management using RxJS (`BehaviorSubject`).
  * **Factory Pattern:** Dynamic instantiation of notification handlers (Push, Email, SMS).
* **Device Architecture:**
  * **Web Geolocation API:** Native location calculation and navigation coordinates.
  * **MediaDevices API:** Device camera integration for QR Code scanning.
  * **Web Push API:** Permission management and local push notifications.
* **Applied Mathematics:**
  * **Combinatorial Algorithms:** Optimized guest seating arrangement across tables.
  * **Statistics & Projection:** Budgetary predictive analysis and dietary distribution percentages.

---

## 🧠 Development Notes

This project was conceptualized and designed by me for a very special occasion: **my mother's wedding**. The primary goal was to create a seamless, elegant, and accessible digital experience for guests of all ages. The entire interface was designed in Figma before being translated into code.

Originally started in Vanilla JavaScript, the project was completely restructured in **Angular + TypeScript** to elevate the software architecture, incorporating advanced Design Patterns, direct mobile hardware integration, and mathematical optimization.


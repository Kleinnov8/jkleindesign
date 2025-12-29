<template>
  <div class="glass-container">
    <header>
      <div class="logo">JKlein<span>Design</span></div>
      <div class="avatar-wrapper">
        <img :src="avatarUrl" alt="Justin Klein" class="home-avatar" />
      </div>
      <h1>Justin Klein</h1>
      <p class="tagline">Creative Technologist & Digital Problem Solver</p>
      <a href="mailto:kleinnov8@gmail.com" class="cta-button">Get in Touch</a>
    </header>

    <hr class="divider">

    <section class="intro">
      <h2>The "Jack of All Trades" for your Digital Life.</h2>
      <p>I bridge the gap between creative design and technical implementation. Whether you need a custom website or logo, a high-performance PC build, or complex IT troubleshooting, I handle the tech so you don't have to.</p>
    </section>

    <section class="services">
      <article class="service-card">
        <i class="fa-solid fa-code"></i>
        <h3>Web & App Dev</h3>
        <p>From custom HTML/CSS sites to AI-powered web applications.</p>
        <ul class="skill-list">
          <li>Custom CSS/HTML & WordPress Solutions</li>
          <li>Node.js, Vue, & Firebase</li>
          <li><strong>Project:</strong> <a href="https://oilfieldtechorigins.com">OilfieldTechOrigins.com</a></li>
          <li><strong>Project:</strong> <a href="#">DreamDungeon.AI (Coming Soon!)</a></li>
        </ul>
      </article>

      <article class="service-card">
        <i class="fa-solid fa-microchip"></i>
        <h3>IT & Hardware</h3>
        <p>High-end workstation assembly and complex troubleshooting.</p>
        <ul class="skill-list">
          <li>Custom Enthusiast-Grade PC Builds</li>
          <li>Multi-Monitor & Aesthetic RGB Setups</li>
          <li>Linux/WSL Environments</li>
          <li>Home Networking & Small Servers</li>
        </ul>
      </article>

      <article class="service-card">
        <i class="fa-solid fa-pen-nib"></i>
        <h3>Creative Design</h3>
        <p>Visual branding and multimedia production.</p>
        <ul class="skill-list">
          <li>Graphic Design (Digital & Print)</li>
          <li>Video Editing</li>
          <li>Brand Identity</li>
          <li>Content Digitization</li>
        </ul>
      </article>
    </section>

    <footer>
      <p>&copy; 2025 Justin Klein | JKleinDesign. Serving Montgomery County & Beyond.</p>
      <div class="social-links">
        <a href="#">LinkedIn (TODO)</a>
        <a href="https://github.com/Kleinnov8">GitHub</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import avatarUrl from '../assets/avatar.png' // Import the image variable
// No extra logic needed for now
</script>

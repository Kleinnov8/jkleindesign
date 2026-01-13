<script setup>
    import { currentYear } from '../router';
    import { projects } from '@/data/portfolio.js';
</script>

<template>
    <section class="glass-container">
        <div class="logo">My Work</div>

        <header>
            <h3>NOTE: This page is currently UNDER CONSTRUCTION.</h3>
            <h4>To view more examples of my work, please <a href="https://www.linkedin.com/in/justinkleindesign/">visit my LinkedIn!</a></h4>
        </header>

        <div class="portfolio-grid">
            <div v-for="project in projects" :key="project.id" class="project-card">
                <div class="image-wrapper">
                    <img :src="project.image" :alt="project.title" />
                </div>
                <div class="card-content">
                    <span class="category">{{ project.category }}</span>
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <router-link :to="project.link" class="view-btn">View Project &rarr;</router-link>
                </div>
            </div>
        </div>

        <footer>
            <p>&copy; 2025-<span>{{ currentYear }}</span> Justin Klein. All Rights Reserved. | Serving Montgomery County & Beyond.</p>
        </footer>
    </section>
</template>
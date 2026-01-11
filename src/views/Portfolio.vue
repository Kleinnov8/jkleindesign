<script setup>
    import { projects } from '@/data/portfolio.js';
</script>

<template>
    <section class="glass-container">
        <h2>My Work</h2>
        <h3>UNDER CONSTRUCTION</h3>

        <div class="portfolio-grid">
            <div v-for="project in projects" :key="project.id" class="project-card">
                <div class="image-wrapper">
                    <img :src="project.image" :alt="project.title" />
                </div>
                <div class="card-content">
                    <span class="category">{{ project.category }}</span>
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <a :href="project.link" class="view-btn">View Project &rarr;</a>
                </div>
            </div>
        </div>
    </section>
</template>
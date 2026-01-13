<template>
    <div class="case-study-container">
        <div v-if="project" class="case-study-content">
            <header class="project-header">
                <router-link to="/portfolio" class="back-link">&larr; Back to Portfolio</router-link>
                <h1>{{ project.title }}</h1>
            </header>

            <div class="image-wrapper">
                <img :src="project.image" :alt="project.title" class="main-image" />
            </div>

            <section>
                <div class="card-content">
                    <h3>The Challenge</h3>
                    <p>{{ project.details.challenge }}</p>
                </div>

                <div class="card-content">
                    <h3>The Strategy</h3>
                    <p>{{ project.details.strategy }}</p>
                </div>

                <div class="card-content">
                    <h3>The Result</h3>
                    <p>{{ project.details.result }}</p>
                </div>

                <div class="card-content">
                    <h3>Tech Stack</h3>
                    <ul class="tech-list">
                        <li v-for="tech in techArray" :key="tech">{{ tech }}</li>
                    </ul>
                </div>
            </section>

            <div class="project-footer">
                <a :href="project.externalLink" target="_blank" class="view-btn">Visit Live Site ({{ project.externalLink }}) &rarr; </a>
            </div>

            <footer>
                <p>&copy; 2025-<span>{{ currentYear }}</span> Justin Klein. All Rights Reserved. | Serving Montgomery County & Beyond.</p>
            </footer>
        </div>

        <div v-else class="case-study-container">
            <div class="case-study-content error-state">
                <p>Project not found.</p>
                <router-link to="/portfolio" class="back-link">← Back to Portfolio</router-link>  
            </div>
        </div>
    </div>
</template>




<script setup>

import { computed } from 'vue';
import { projects } from '@/data/portfolio.js'
import { currentYear } from '../router';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

// Find the project that matches the ID in the URL
const project = computed(() => {
    // We look for a project where the link contains the ID (slug) from the URL
    return projects.find((p) => p.link.includes(props.id));
});

// Format the techStack string into an array for the v-for list
const techArray = computed(() => {
    // Grab the techStack string as an array
    if (!project.value?.details?.techStack) return [];
    
    // Split the string and trim whitespace from each item
    return project.value.details.techStack.split(',').map(item => item.trim());
});

</script>
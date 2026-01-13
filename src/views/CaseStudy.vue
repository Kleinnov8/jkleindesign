<template>
    <div v-if="project" class="case-study-container">
        <header class="project-header">
            <h1>{{ project.title }}</h1>
            <p>Currently viewing project ID: <strong>{{ $route.params.id }}</strong></p>
            <router-link to="/portfolio" class="back-link">← Back to Portfolio</router-link>
        </header>

        <div class="image-wrapper">
            <img :src="project.image" :alt="project.title" class="main-image" />
        </div>

    </div>
</template>




<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '@/data/portfolio.js'

const route = useRoute();

// 1. Find the project that matches the ID in the URL
const project = computed(() => {
    const projectId = parseInt(route.params.id);
    return projects.find((p) => p.id === projectId);
});

// 2. Format the techStack string into an array for the v-for list
const techArray = computed(() => {
    if (!project.value || !project.value.details.techStack) return [];
    return project.value.details.techStack.split(',');
});
</script>
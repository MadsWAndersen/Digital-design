<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  ctaText: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="hero-section">
        <img class="hero-section__image" :src="imageSrc" :alt="imageAlt" />
        <div class="hero-section__content">
            <h1 class="hero-section__heading">{{ heading }}</h1>
            <a class="hero-section__cta" :href="link" >{{ ctaText }}</a>
        </div>
    </div>
</template>


<style lang="scss">
@import "/src/assets/main.scss";


.hero-section {
    max-height: 865px;
    position: relative;
    height: 100%;
    @media (max-width: $breakpoint-md) {
      height: 500px;
    }

    &__image {
        width: 100%;
        height: 100%;
        max-height: 865px;
        object-fit: cover;
    }
    
    &__content {
        position: absolute;
        max-width: 1050px;
        top: 50%;
        transform: translateY(-50%);
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        margin: auto;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        @media (max-width: $breakpoint-md) {
            max-width: 768px;
            padding-left: 30px;
            padding-right: 30px;
        }

        @media (max-width: $breakpoint-sm) {
            max-width: 576px;
        }
    }
    
    &__heading {
        color: #fff;
        text-align: left;
        max-width: 729px;

        @media (max-width: $breakpoint-md) {
            max-width: 100%;
        }
    }
    
    &__cta {
        background: $secondaryColor;
        text-decoration: none;
        color: #fff;
        padding: 23.5px 76px;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 800;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 1.5px;
        text-transform: uppercase;

        @media (max-width: $breakpoint-sm) {
            padding: 15px 40px;
        }
    }
}
</style>

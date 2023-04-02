<script setup>
import { ref, onMounted } from 'vue';
import Header from '/src/components/Header.vue'
import HeroSection from '/src/components/HeroSection.vue'

const rooms = ref([]);

onMounted(async () => {
  const response = await fetch('https://run.mocky.io/v3/19e4aeac-1c51-4776-aff8-c00c8a4826b4');
  const data = await response.json();
  rooms.value = data.rooms;
});


</script>

<template>
    <Header/>
    <HeroSection
      imageSrc="/src/assets/img/hero_img.jpg"
      imageAlt="Hero Image"
      heading="Nyt hotel i centrum af Odense"
      ctaText="Læs mere"
      href="https://google.dk"
    />


    <section class="hotel">
        <ul class="hotel__room-list">
            <li v-for="room in rooms.slice(0,4)" :key="room.id" class="hotel__room">
                <img :src="room.img" alt="Room Image" class="hotel__room-image">
                <h2 class="hotel__room-type">{{ room.type }}</h2>
                <router-link :to="'/room/' + room.id" class="hotel__room-link">Læs mere</router-link>
            </li>
        </ul>
        
    </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/main.scss";

.hotel {
    max-width: $defaultMaxWidth;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    &__room {
        h2, a {
            text-align: left;
            display: flex;
            color: $secondaryColor;
            text-decoration: none;
        }

        a {
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 800;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 1.3px;
            text-transform: uppercase;
        }

        margin-bottom: 100px;
    }

    &__room-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
  
</style> 
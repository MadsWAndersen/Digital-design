<script setup>
import { ref, onMounted } from 'vue';
import Header from '/src/components/Header.vue'
import HeroSection from '/src/components/HeroSection.vue'
import TextColumn from '/src/components/TextColumn.vue'

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
      link="https://google.dk"
    />

    

    <TextColumn
      title="Om Alpha"
      text="Alpha Hotels er Odenses nyeste hotel beliggende i hjertet af Odense C. Hotellet åbner officielt dørene for gæster i vinter 2020. 
      
            Hotellet tilbyder 390 helt nyrenoverede værelser, en smuk ny café og en fredfyldt grøn gårdhave åben for hotellets gæster, lokale og forbipasserende.Cafeen og gårdhaven er indrettet til at få alle til at føle sig velkomne uanset anledningen."
    />


    <section class="hotel">
        <ul class="hotel__room-list">
            <li v-for="room in rooms.slice(0,4)" :key="room.id" class="hotel__room">
                <router-link :to="'/room/' + room.id"><img :src="room.img" alt="Room Image" class="hotel__room-image"></router-link>
                <router-link :to="'/room/' + room.id"><h2 class="hotel__room-type">{{ room.type }}</h2></router-link>
                <router-link :to="'/room/' + room.id" class="hotel__room-link">Læs mere</router-link>
            </li>
        </ul>
        
    </section>


    <TextColumn
      text="Omgivet af bøgeskov og med udsigt til fjorden ligger vores smukke hotel – også kaldet Slottet i skoven.

            Du kan bestille hotel overnatninger - men også dejlige spaophold, som på Hotel Alpha ALTID er inklusiv adgang til De Termiske Bade & Thalasso Spa, middag, overnatning og morgenbuffet." 
      link="https://google.dk"
      linkText="Se alle værelser"      
    />


</template>
<style lang="scss" scoped>
@import "/src/assets/main.scss";

.hotel {
    max-width: $defaultMaxWidth;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;




    &__room-image {
        @media (max-width: $breakpoint-lg) {
            width: 100%;
 
        }
        @media (max-width: $breakpoint-sm) {
            width: 100%;
        }
    }
    
    &__room {
        h2, a {
            text-align: left;
            display: flex;
            color: $secondaryColor;
            text-decoration: none;
        }

        h2 {
            text-transform: initial;
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

        @media (max-width: $breakpoint-lg) {
            width: 48%;
        }

        @media (max-width: $breakpoint-sm) {
            width: 100%
        }
    }

    &__room-link {
        position: relative;
        float: left;
        &:after {
            @include ArrowCTA;
        }
        &:hover {
            &:after {
                @include ArrowCTA-hover;
            }
        }
    }

    &__room-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style: none;
        width: 100%;

        
    }
  }
  
</style> 
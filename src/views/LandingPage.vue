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
    }

    &__room-link {
        position: relative;
        display: inline;
        float: left;
        &:after {
            content: url("data:image/svg+xml,%3Csvg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.9273 0.38439C10.6332 0.16717 10.2166 0.192275 9.95092 0.459115L9.87848 0.54339C9.66126 0.837471 9.68637 1.25408 9.95321 1.51977L14.6871 6.2325H1.47949L1.37772 6.23935C1.01165 6.28901 0.729492 6.6028 0.729492 6.9825C0.729492 7.39671 1.06528 7.7325 1.47949 7.7325H14.7204L9.95325 12.4798L9.88045 12.5637C9.66193 12.8569 9.68521 13.2736 9.95088 13.5404C10.2431 13.834 10.718 13.8351 11.0115 13.5428L17.0495 7.53182L17.1225 7.44759C17.3416 7.15352 17.3172 6.73535 17.0496 6.46883L11.0116 0.456827L10.9273 0.38439Z' fill='%23E94146'/%3E%3C/svg%3E%0A");
            position: absolute;
            right: -30px;
            top: 50%;
            transform: translateY(-50%);
            margin-top: 2px;
            transition: 0.3s ease;
        }
        &:hover {
            &:after {
                right: -35px;
                transition: 0.3s ease;
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
  
    }
  }
  
</style> 
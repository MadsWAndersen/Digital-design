<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '/src/components/Header.vue'

const room = ref(null);

onMounted(async () => {
  const route = useRoute();
  const roomId = route.params.id;

  const response = await fetch('https://run.mocky.io/v3/19e4aeac-1c51-4776-aff8-c00c8a4826b4');
  const data = await response.json();
  room.value = data.rooms.find(roomPageId => roomPageId.id === roomId);
});

</script>


<template>
    <Header/>

    <div v-if="room" class="room">
        <div class="room__hero">
            <div class="room__heroimage">
                <img :src="room.extraImages[0]" alt="">
            </div>            
            <h1 class="room__title">{{ room.type }}</h1>
        </div>

        <router-link class="room__back-button" to="/">Back</router-link>
        <h2 class="room__title">{{ room.type }}</h2>
        <div class="room__slider">
            <div class="room__slider-slide" v-for="(image, index) in room.extraImages" :key="index">
            <img :src="image" alt="Extra Image" class="room__slider-image">
            </div>
        </div>
    </div>
    
    <div v-else>Loading...</div>

</template>


<style lang="scss" scoped>
@import "/src/assets/main.scss";

.room {
margin: 0 auto;
text-align: center;

&__heroimage {
    height:600px;
    object-fit: cover;
    width: 100%;

    &:after {
      @include Overlay;
    }
    
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

}

&__hero {
    position: relative;
    height:600px;
    h1 {
        position: absolute;
        color: #fff;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        margin: 0;
    }

}

&__title {
    margin-top: 50px;
}

&__back-button {
    color: #0000ff;
    text-decoration: none;
    font-weight: bold;
    margin-bottom: 20px;
    &:hover {
    text-decoration: underline;
    }
}

&__slider {
    margin-top: 50px;
    width: 100%;

    &-slide {
    width: 100%;

    &__image {
        width: 100%;
    }
    }
}
}
</style>

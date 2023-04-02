<template>
  <div class="card">
    <div class="card__left">
      <h3 class="card__title">{{ title }}</h3>
    </div>
    <div class="card__right">
      <p class="card__text" v-html="formattedText"></p>
      <template v-if="link">
        <a class="card__link" :href="link">{{ linkText }}</a>
      </template>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: null,
    },
    linkText: {
      type: String,
      default: null,
    },
  });

  // Posibility for adding line breaks in the text prop
  const formattedText = props.text.replace(/\n/g, '<br>');

</script>

<style lang="scss" scoped>
  @import "/src/assets/main.scss";

  .card {
    max-width: $defaultMaxWidth;
    margin: auto;
    padding: 0;
    display: flex;
    padding: 150px 0px;

    &__left {
      display: flex;
      flex-basis: 25%;
    }

    &__right {
      display: flex;
      flex-basis: 65%;
    }

    &__text, &__title {
      color: $secondaryColor;
      text-align: left;
      margin: 0;
      line-height: 36px;
    }
    
  }
</style>

<template>
  <section class="card">
    <div class="card__left">
      <template v-if="title">
        <h3 class="card__title">{{ title }}</h3>
      </template>
    </div>
    <div class="card__right">
      <p class="card__text" v-html="formattedText"></p>
      <template v-if="link">
        <a class="card__link" :href="link">{{ linkText }}</a>
      </template>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: null,
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
      flex-direction: column;

      a {
        font-family: 'Montserrat';
        position: relative;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        text-align: left;
        margin-top: 40px;
        letter-spacing: 1.3px;
        text-transform: uppercase;
        text-decoration: none;
        color: $secondaryColor;
        float: left;
        display: flex;
        width: fit-content;
        &:after {
          @include ArrowCTA;
        }

        &:hover {
            &:after {
                @include ArrowCTA-hover;
            }
        }
      }
    }

    &__text, &__title {
      color: $secondaryColor;
      text-align: left;
      margin: 0;
      line-height: 36px;
    }
    
  }
</style>

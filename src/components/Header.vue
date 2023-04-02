<script setup>

</script>

<template>
    <header class="header">
        <div class="header__logo">
           <h1>alpha hotels</h1> 
        </div>

        <nav class="header__nav">
            <ul class="header__menu">
                <li><a href="#">Forside</a></li>
                <li><a href="#">Værelser</a></li>
                <li><a href="#">Om Hotels</a></li>
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">Book</a></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@import "/src/assets/main.scss";
.header {
    display: flex;
    justify-content: space-between;
    left: 0;
    margin: auto;
    max-width: $defaultMaxWidth;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 10;
    padding: 10px 0;
    &__logo {
        color: #Fff;
        
        h1 {
            margin: 0;
            font-size: 30px;
        }
    }
    &__menu {
        display: flex;
        list-style: none;
        li {
            padding: 0 10px;
            a {
                color: #fff;
                text-decoration: none;
                text-transform: uppercase;
            }
        }
    }
}
</style>
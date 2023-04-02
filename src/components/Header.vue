<script setup>
import {ref, onUnmounted, onMounted} from 'vue';

const isScrolled = ref(false);
const showMenu = ref(false);
const isActive = ref(false);

function handleMenuClick() {
  showMenu.value = !showMenu.value;
  isActive.value = !isActive.value
}



const handleScroll = () => {
    const scrollPosition = window.scrollY;
    isScrolled.value = scrollPosition > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);  
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);  
})



</script>

<template>

<div id="menu" :class="{ active: showMenu }">
    <nav>
        <ul>
            <li><a href="#">Forside</a></li>
            <li><a href="#">Værelser</a></li>
            <li><a href="#">Om Hotels</a></li>
            <li><a href="#">Kontakt</a></li>
            <li><a href="#">Book</a></li>
        </ul>
    </nav>
  </div>


    <header :class="{'scrolled' : isScrolled}" class="header">
        <div class="header__inner-container">
            <div class="header__logo">
           <h1>alpha hotels</h1> 
        </div>

        <div class="header__nav--mobile">
          <div id="menu-icon" :class="{ active: isActive }" @click="handleMenuClick">
            <span class="menu-icon__line menu-icon__line-left"></span>
            <span class="menu-icon__line menu-icon__line-center"></span>
            <span class="menu-icon__line menu-icon__line-right"></span>
          </div>
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
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "/src/assets/main.scss";

#menu {
    display: none;
}
.header {
    display: flex;
    justify-content: space-between;
    left: 0;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 10;
    height: 100px;
    transition: 0.5s ease;
    &.scrolled {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: 0.5s ease;
        h1, a {
            color: $secondaryColor;
        }
        
    }


    

    &__inner-container {
        max-width: $defaultMaxWidth;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: auto;
    }

    &__logo {
        color: #Fff;
        line-height: unset;

        h1 {
            margin: 0;
            font-size: 30px;
        }
    }

    &__nav {
        display: flex;
        align-items: center;
    }


    &__menu {
        display: flex;
        list-style: none;
        li {
            padding: 0 10px;
            a {
                font-family: 'Syne';
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 18px;
                /* identical to box height */
                color: #fff;
                text-decoration: none;

                text-align: right;
                letter-spacing: 1.5px;
                text-transform: uppercase;
            }
        }
    }
}


#menu-icon {
	z-index: 10;
	width: 23px;
	display: flex;
	flex-direction: column;
	height: 20px;
	gap: 7px;
	position: relative;
	cursor: pointer;

	&.active {
		.menu-icon__line {
			opacity: 0;

			&-left {
				opacity: 1;
				display: block;
				width: 100%;
				transition: 0.2s ease;
				top: 50%;
				transform: rotate(-45deg);
			}

			&-center {
				width: 0%;
				transition: 0.5s ease;
			}

			&-right {
				opacity: 1;
				display: block;
				width: 100%;
				transition: 0.2s ease;
				top: 50%;
				transform: translateX(0%) rotate(45deg);
			}
		}
	}

	.menu-icon__line {
		z-index: 3;
		background-color: white;
		width: 100%;
		height: 2px;

		&-center {
			position: absolute;
			transform: translateY(-50%);
			top: 50%;
			transition: 0.5s ease;
		}

		&-left {
			position: absolute;
			bottom: 0;
			width: 100%;
			transition: 0.2s ease;
		}

		&-right {
			top: 0;
			position: absolute;
			width: 100%;
			transition: 0.2s ease;
		}
	}
}

</style>
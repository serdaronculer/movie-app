<template>
    <header :class="{'scrolled-nav': scrolledNav}">
        <nav>
            <router-link tag="a" to="/" class="branding">
                <img src="../../assets/images/movie.png" alt="">
                <span>
                    <span>Move App</span>
                </span>
            </router-link>

            <div id="search" v-show="!mobile">
                <input type="text" name="" id="" placeholder="Film ara...">
                <i class="fas fa-search"></i>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li>
                    <router-link active-class="activeNav" tag="a" class="link" to="/" exact>Anasayfa</router-link>
                </li>
                <li>
                    <router-link active-class="activeNav" tag="a" class="link" to="/yeni">Yeni</router-link>
                </li>
                <li>
                    <router-link active-class="activeNav" tag="a" class="link" to="/populer">Popüler</router-link>
                </li>
            </ul>
            <div class="icon" v-show="mobile">
                <i @click="toggleMobileNav" style="color: #fff" class="fa-solid fa-bars"
                   :class="{'icon-active': mobileNav}"></i>
            </div>

            <div class="mobile-nav" v-show="mobileNav" @click="toggleMobileNav"
                 style="background-color: rgba(0,0,0,0.5)"></div>
            <transition name="slide">
                <ul v-show="mobileNav" class="dropdown-nav" @click.stop key="dropdown">
                    <li>
                        <router-link tag="a" to="/" class="branding">
                            <img src="../../assets/images/movie.png" alt="">
                            <span>
                </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link @click.native="toggleMobileNav" class="link" tag="a" to="/">Anasayfa</router-link>
                    </li>
                    <li>
                        <router-link @click.native="toggleMobileNav" class="link" tag="a" to="/yeni">Yeni</router-link>
                    </li>
                    <li>
                        <router-link @click.native="toggleMobileNav" class="link" tag="a" to="/populer">Popüler
                        </router-link>

                    </li>
                </ul>
            </transition>


        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWith: null,
        };
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;

        },
        checkScreen() {
            this.windowWith = window.innerWidth;
            if (this.windowWith <= 800) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        }
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();

        window.addEventListener("scroll", this.updateScroll);
    }
}
</script>

<style scoped>
* {
    transition: 1s all ease;
}

header {
    background-color: #060D17;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: #fff;
    top: 0;
    left: 0;
    right: 0;
}

header nav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 24px;
    transition: .5s ease all;
    /*max-width: 1440px;
    min-width: 1080px;*/
    width: 100%;
    margin: 0 auto;
}

header nav ul, header nav .link {
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;
}

header nav li {
    text-transform: uppercase;
    /*padding: 16px;
    margin-left: 16px;*/
}

header nav .link {
    font-size: 14px;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

header nav .link:hover {
    color: #00afea;
    border-color: #00afea;
}

header nav .branding {
    display: flex;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    color: #fff;
}

.branding span {
    font-family: Ranga;
    font-size: 32px;

}

header nav .branding img {
    width: 50px;
    transition: .5s ease all;
}

header nav .navigation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
}

header nav .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
}

header nav .icon i {
    cursor: pointer;
    font-size: 24px;
    transition: .8s ease all;
}

header nav .icon-active {
    transform: rotate(180deg);
}

.mobile-nav {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 90;
}

header nav .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 99;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #222222;
    color: #fff;
    top: 0;
    left: 0;
    box-shadow: 2px 6px 11px 0px rgba(0, 0, 0, 0.33);
}

header nav .dropdown-nav li {
    margin-left: 0;
    padding:  12px 12px;
}

header nav .dropdown-nav li .link {
    color: #fff;
    width: 100%;
    display: block;
    border: none;
    position: relative;

}
header nav .dropdown-nav li .link::after{
    content: "";
    position: absolute;
    background-color: #00afea;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 1px;
    transition: 1s all ease;
}
header nav .dropdown-nav li .link::before{
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    bottom: -10px;
    left: 0;
    width: 60%;
    height: 1px;
    transition: 1s all ease;
}
header nav .dropdown-nav li .link:hover::after{
    width: 60%;
    transition: 1s all ease;
}

.scrolled-nav {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scrolled-nav nav {
    padding: 8px 12px;
}

.scrolled-nav nav .branding img {
    width: 40px;
}

header nav .link:hover {
    color: #00afea;

}

/********************* Transition name Animation ***********************/
@keyframes slide-in {
    from {
        transform: translateX(-250px)
    }
    to {
        transform: translateX(0px)
    }
}

@keyframes slide-leave {
    from {
        transform: translateX(0px)
    }
    to {
        transform: translateX(-250px)
    }
}

.slide-enter-active {
    animation: slide-in 1s ease;
}

.slide-leave-active {
    animation: slide-leave 1s ease;
}

/**************** Search Bar **************************************/
#search {
    position: relative;
    width: 598px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

#search input {
    width: 100%;
    outline: none;
    color: #000;
    height: 80%;
    padding: 10px 40px 10px 15px;
    border-radius: 6px;
    border: 2px solid transparent;
    background-color: #10161D;
    transition: 0.3s ease-in-out;
    box-shadow: 5px 5px 19px 1px rgba(0,0,0,0.71);
}

.fa-search {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 5px;
    color: #00afea;
}
.activeNav{
    color: #00afea !important;
}
#search input:focus {
    background-color: #10161D;
    border-color: #00afea;
}

/********** NAVIGATE ACTIVE *************/

@media only screen and (max-width: 1080px) {
    #search {
        width: 280px;
    }
}
</style>

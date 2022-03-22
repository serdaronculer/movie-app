<template>
    <div class="main">
        <app-info @randomPage="page = $event" :totalPage="totalPage">
      <span slot="info"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam
        animi beatae dicta doloremque ex exercitationem fugiat, iste iure iusto
        labore natus, nesciunt nisi nobis quasi quidem totam vitae voluptate.
        Animi distinctio dolor ea eos exercitationem, hic impedit ipsum libero
        maiores natus nobis omnis praesentium provident quas qui quisquam sint
        sunt temporibus totam voluptatibus. Deleniti dolores expedita hic illo
        ipsum iure odio? Aperiam consectetur consequuntur dolore ea eius est
        fuga, fugiat inventore itaque iusto laudantium nihil quam quas quibusdam
        quidem quis quisquam rem sapiente similique tempore temporibus
        voluptatibus, voluptatum? Architecto, atque consequuntur ipsum itaque
        laboriosam mollitia neque quam qui unde!</span
      >
        </app-info>
        <div class="vld-parent">
            <loading
                :active.sync="isLoadingTopRated"
                :can-cancel="true"
                :is-full-page="true"
                background-color="#fff"
                color="#fff"
                z-index="9999"
            ></loading>
        </div>

        <div class="hooper-wrap">
            <h2>
                TMDB En Çok Oy Alanlar<img
                src="../assets/images/icon/earth.png"
                alt=""
            />
            </h2>
            <hooper :settings="hooperSettingsTrailer">
                <slide v-for="i in topRatedMovies">
                    <a class="poster">
                        <img
                            class=""
                            :src="posterPath + i.poster_path"
                            style="width: 100%"
                            alt=""
                        />
                        <i class="poster-content fas fa-search"></i>
                    </a>
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
        </div>

        <div class="filter-wrap mt-50">
            <div class="filter-bar-content-type">
                <div class="filter-bar"><a href="">Tümü</a></div>
                <div class="filter-bar"><a href="">Filmler</a></div>
                <div class="filter-bar"><a href="">TV Dizileri</a></div>
            </div>
            <div class="horizontal-scrollbar">
                <div class="filter-bar-additonal">
                    <a href=""
                    ><i class="fa-solid fa-filter" style="margin-right: 5px"></i
                    >Filtreler</a
                    >
                </div>
                <div class="filter-bar-year">
                    <a @click="showChange('isReleaseYear', $event)" class="release-year"
                    >Yayın yılı
                        <i
                            :style="{
                transform: shows.isReleaseYear ? 'rotate(180deg)' : null,
              }"
                            style="color: #fff; margin-left: 5px"
                            class="fa-solid fa-chevron-down"
                        ></i>
                    </a>
                    <div v-if="shows.isReleaseYear" class="card">
                        <div class="card-header">
                            <div>Yayın yılı</div>
                            <div>
                                <i class="fa-solid fa-xmark"></i>
                                SIFIRLA
                            </div>
                        </div>
                        <div class="range-bar">
                            <div>1900</div>
                            <vue-range-slider
                                :tooltipStyle="{ backgroundColor: '#000', borderColor: '#000' }"
                                :processStyle="{ backgroundColor: '#fff' }"
                                :enableCross="true"
                                ref="range"
                                :min="1900"
                                :max="2022"
                                :formatter="formatter"
                                :use-keyboard="true"
                                :tooltip="'hover'"
                                v-model="releaseYear"
                            ></vue-range-slider>
                            <div>2022</div>
                        </div>
                        <div class="standart-filter"></div>
                    </div>
                </div>
                <div class="filter-bar">
                    <a @click="showChange('isGenres')"
                    >Türler
                        <i
                            :style="{ transform: shows.isGenres ? 'rotate(180deg)' : null }"
                            style="color: #fff; margin-left: 5px"
                            class="fa-solid fa-chevron-down"
                        ></i>
                    </a>
                    <div v-if="shows.isGenres" class="card">
                        <div class="card-header">
                            <div>Türler</div>
                            <div>
                                <i class="fa-solid fa-xmark"></i>
                                SIFIRLA
                            </div>
                        </div>
                        <div class="card-main">
                            <a
                                ref="genres"
                                v-for="item in genres"
                                class="genres"
                            ><i style="margin-right: 5px" class="fa-solid fa-check"></i>
                                {{ item.name }}</a
                            >
                        </div>
                    </div>
                </div>
                <div class="filter-bar">
                    <a @click="showChange('isRating')">
                        Değerlendirme
                        <i
                            :style="{
                transform: shows.isRating ? 'rotate(180deg)' : null,
              }"
                            style="color: #fff; margin-left: 5px"
                            class="fa-solid fa-chevron-down"
                        ></i>
                    </a>
                    <div v-if="shows.isRating" class="card">
                        <div class="card-header">
                            <div>Değerlendirme</div>
                            <div>
                                <i class="fa-solid fa-xmark"></i>
                                SIFIRLA
                            </div>
                        </div>
                        <div class="range-bar">
                            <div>0</div>
                            <vue-range-slider
                                :tooltipStyle="{ backgroundColor: '#000', borderColor: '#000' }"
                                :processStyle="{ backgroundColor: '#fff' }"
                                :enableCross="true"
                                ref="range"
                                :min="0"
                                :max="10"
                                :formatter="formatter"
                                :use-keyboard="true"
                                :tooltip="'hover'"
                                v-model="rating"
                            ></vue-range-slider>
                            <div>10</div>
                        </div>
                        <div class="standart-filter"></div>
                    </div>
                </div>
            </div>
            <div class="filter-bar-reset">
                <a>Sıfırla</a>
            </div>
        </div>

        <div class="movies-wrap mt-50">
            <div class="movies" v-for="item in popularMovies">
                <a
                ><img
                    style="background-color: #333333"
                    :src="posterPath + item.poster_path"
                    alt=""
                /></a>
            </div>
        </div>

        <div
            v-if="!isLoadingTopRated"
            style="width: 100%; height: 25px; position: relative"
        >
            <div class="vld-parent">
                <loading
                    :active.sync="isLoadingPopular"
                    :can-cancel="true"
                    :is-full-page="false"
                    background-color="transparent"
                    color="#fff"
                    z-index="9999"
                ></loading>
            </div>
        </div>
    </div>
</template>

<script>
import Info from "@/components/shared/Info";
import {Hooper, Slide} from "hooper";
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import {Navigation as HooperNavigation} from "hooper";
import "hooper/dist/hooper.css";
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";

export default {
    components: {
        appInfo: Info,
        Hooper,
        Slide,
        HooperNavigation,
        Loading,
        VueRangeSlider,
    },
    data() {
        return {
            releaseYear: [1900, 2022],
            rating: [0, 10],
            isLoadingTopRated: false,
            isLoadingPopular: false,
            apiKey: "f40ffed731140560a63cfb47beeaac03",
            topRatedMovies: [],
            popularMovies: [],
            page: 1,
            totalPage: null,
            popularPage: 0,
            popularTotalPage: null,
            posterPath: "https://image.tmdb.org/t/p/original/",
            hooperSettingsTrailer: {
                itemsToShow: 6,
                itemsToSlide: 6,
                autoPlay: false,
                playSpeed: 3000,
                wheelControl: true,
                centerMode: true,
                infiniteScroll: true,
                mouseDrag: false,
                transition: 700,
                breakpoints: {
                    0: {
                        itemsToShow: 1,
                        itemsToSlide: 1,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 3,
                    },
                    1024: {
                        itemsToShow: 5,
                    },
                },
            },
            shows: {
                isReleaseYear: false,
                isGenres: false,
                isRating: false,
            },
            genres: [
                {
                    id: 28,
                    name: "Aksiyon",
                },
                {
                    id: 12,
                    name: "macera",
                },
                {
                    id: 16,
                    name: "Animasyon",
                },
                {
                    id: 35,
                    name: "Komedi",
                },
                {
                    id: 80,
                    name: "Suç",
                },
                {
                    id: 99,
                    name: "Belgesel",
                },
                {
                    id: 18,
                    name: "Dram",
                },
                {
                    id: 10751,
                    name: "Aile",
                },
                {
                    id: 14,
                    name: "Fantezi",
                },
                {
                    id: 36,
                    name: "Tarih",
                },
                {
                    id: 27,
                    name: "Korku",
                },
                {
                    id: 10402,
                    name: "Müzik",
                },
                {
                    id: 9648,
                    name: "Gizem",
                },
                {
                    id: 10749,
                    name: "Romantik",
                },
                {
                    id: 878,
                    name: "Bilim Kurgu",
                },
                {
                    id: 10770,
                    name: "TV Filmi",
                },
                {
                    id: 53,
                    name: "Gerilim",
                },
                {
                    id: 10752,
                    name: "Savaş",
                },
                {
                    id: 37,
                    name: "Western",
                },
            ],
        };
    },
    methods: {
        getTopRated() {
            this.isLoadingTopRated = true;
            this.$http
                .get("top_rated?api_key=" + this.apiKey + "&page=" + this.page)
                .then((response) => response.data)
                .then((data) => {
                    this.topRatedMovies = data.results;
                    this.totalPage = data.total_pages;
                    this.isLoadingTopRated = false;
                });
        },
        async getPopular() {
            let control = null;
            if (this.isLoadingTopRated === true) {
            } else {
                this.popularPage++;
                this.isLoadingPopular = true;
                await this.$http
                    .get("popular?api_key=" + this.apiKey + "&page=" + this.popularPage)
                    .then((response) => response.data)
                    .then((data) => {
                        for (let item of data.results) {
                            this.popularMovies.push(item);
                        }
                        this.popularTotalPage = data.total_pages;
                        this.isLoadingPopular = false;
                    });
            }
        },
        showChange(value, event) {
            let isShow = null;
            for (let item in this.shows) {
                item === value ? (isShow = this.shows[item]) : null;
            }
            for (let item in this.shows) {
                this.shows[item] = false;
            }
            if (!isShow) {
                this.shows[value] = true;
            }
        },
    },
    watch: {
        page() {
            this.getTopRated();
        },
    },
    async created() {
        this.getPopular();
        this.getTopRated();
        this.formatter = (value) => `￥${value}`;

        window.addEventListener("scroll", () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                if (this.popularPage <= this.popularTotalPage) {
                    this.getPopular();
                }
            }
        });
    },
};
</script>

<style scoped>
.mt-50 {
    margin-top: 50px;
}

.main {
    padding: 12px 24px;
    padding-top: 86px;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
}

/*********** Hooper  *************/
.hooper-wrap {
    margin-top: 50px;
}

.hooper-wrap h2 {
    color: #d9e8ed;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
}

.hooper-wrap h2 img {
    width: 24px;
    margin-left: 15px;
}

.hooper-track {
    gap: 30px;
}

.hooper::before,
.hooper::after {
    width: var(--width, 50px);
    height: 100%;
    content: "";
    top: 0;
    position: absolute;
    opacity: 1;
    transition: 0.4s;
    pointer-events: none;
    z-index: 5;
}

.hooper::before {
    left: 0;
    background: linear-gradient(to right, var(--shadow, #fff), transparent);
}

.hooper::after {
    right: 0;
    background: linear-gradient(to left, var(--shadow, #fff), transparent);
}

button.hooper-prev {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 50px;
    height: 50px;
    top: calc(50% - 25px);
    z-index: 1;
    opacity: 0;
    transition: 0.4s all;
}

.poster {
    display: block;
    padding: 0 10px;
    position: relative;
    overflow: hidden;
}

.poster::before {
    content: "";
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.7) 100%
    );
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    text-align: center;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 2;
}

.poster:hover::before {
    transition: 0.4s all ease;
    bottom: 50%;
    opacity: 1;
}

.poster .poster-content {
    color: #fff;
    font-size: 18px;
    position: absolute;
    z-index: 100;
    opacity: 0;
    transform: translateX(-200px);
    left: 50%;
}

.poster-content.title {
    top: 80%;
    text-align: center;
}

.poster-content.fa-search {
    top: 50%;
    font-size: 32px;
}

.poster:hover .poster-content {
    transition: 1s all ease;
    opacity: 1;
    transform: translateX(-50%);
}

/**** Filter Wrap **********/
.filter-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 10px;
}

.filter-bar-content-type,
.horizontal-scrollbar {
    display: flex;
    gap: 12px;
    position: relative;
}

.horizontal-scrollbar i {
    pointer-events: none;
}

.card {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 100%;
    left: 0;
    background-color: #10161d;
    padding: 25px;
    margin: 5px;
    color: #fff;
}

.card .card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
}

.card .card-header div:first-child {
    font-size: 20px;
    color: #b1b9c5;
}

.card .card-header div:last-child {
    color: #657488;
}

.horizontal-scrollbar .card .range-bar {
    display: flex;
    gap: 5px;
}

.horizontal-scrollbar .filter-bar-additonal a {
    color: #4c5a67;
    pointer-events: none;
    font-size: 17px;
}

.filter-bar-reset {
    display: flex;
    margin-inline-start: auto;
    justify-content: flex-end;
}

.filter-bar-content-type a {
    color: #8c8c8c;
    font-size: 20px;
    font-weight: 600;
}

.horizontal-scrollbar a,
.filter-bar-reset a {
    color: #fff;
    cursor: pointer;
}

.filter-bar .card-main {
    /*  display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;*/
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 10px;
    row-gap: 15px;
    overflow: auto;
    overflow-x: hidden;
    height: 200px;
}

.filter-bar .genres {
    color: #fff;
    opacity: 0.4;
}

.active {
    opacity: 1 !important;
}
</style>

<style>
.vue-range-slider.slider-component .slider .slider-dot {
    cursor: grab;
}

.vue-range-slider.slider-component .slider .slider-dot:active {
    cursor: grabbing;
}

.horizontal-scrollbar .card .range-bar .vue-range-slider {
    width: 100% !important;
}

.vld-overlay {
    overflow: inherit;
}

/***************************  *******************************/
.movies-wrap {
    background-color: #060d17;
    /*display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    grid-gap: 40px;*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 35px;
}

.movies {
    width: 180px;
    height: 260px;
    background-color: #333333;
    border-radius: 5px;
}

.movies-wrap .movies img {
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s all ease;
}

.movies-wrap .movies img:hover {
    opacity: 0.4;
    transition: 0.3s all ease;
}
</style>

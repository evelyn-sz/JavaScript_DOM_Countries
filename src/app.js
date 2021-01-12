import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue( {
        el: '#app',
        data: {
            allCountries: null,
            selectedCountry: null,
            favouriteCountries: []
        },
        mounted: function () {
            this.fetchCountries()
        },
        computed: {
            totalPopulation: function(){
                return this.allCountries.reduce(( total, country ) => total + country.population, 0)
            }
        },
        methods: {
            fetchCountries: function() {
                fetch("https://restcountries.eu/rest/v2/all")
                .then( response => response.json() )
                .then( data => this.allCountries = data)
            },
            selectCountry: function(countryIndex){
                this.selectedCountry = this.allCountries[countryIndex]
            },
            addToFavourites: function (countryIndex) {
                this.favouriteCountries.push(this.allCountries[countryIndex] )
            }
        }
    })
})
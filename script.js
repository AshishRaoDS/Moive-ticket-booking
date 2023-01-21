const select = document.querySelector('#movie')
const priceText = document.querySelector(".priceText")
const allSeat = document.querySelectorAll(".seat")

allSeat.forEach(seat => {
    seat.addEventListener("click", (e) => {
        if (!(seat.className).includes("selected")) {
            seat.className = "seat selected"
        } else {
            seat.className = "seat"
        }
        calculatePrice()
        saveMovieData()
    })
})

select.addEventListener("change", () => {
    calculatePrice()
    saveMovieData()
})

function calculatePrice() {
    const totalSelectedSeats = document.querySelectorAll(".selected").length
    const value = `<p class="price">You have selected <span class="count">${totalSelectedSeats}</span> seats for a price of &#8377;<span class="count">${totalSelectedSeats * select.value}</span></p>`
    priceText.innerHTML = value
}

function saveMovieData() {
    const seatingArea = document.querySelector(".seatingArea")
    const allSeats = seatingArea.querySelectorAll(".seat")
    const select = document.querySelector('#movie')
    const selectedSeatIndex = []

    allSeats.forEach((seat, index) => {
        if ((seat.className).includes("selected")) {
            selectedSeatIndex.push(index)
        }
    })

    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeatIndex))
    localStorage.setItem('selectedPrice', select.value)
    console.log(selectedSeatIndex)
}

populateUI()

function populateUI() {
    const seatingArea = document.querySelector(".seatingArea")
    const allSeats = seatingArea.querySelectorAll(".seat")
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"))
    const selectedMovie = localStorage.getItem("selectedPrice")
    const select = document.querySelector('#movie')

    allSeats.forEach((seat, index) => {
        if ((selectedSeats).includes(index)) {
            seat.className = "seat selected"
        }
    })

    select.value = selectedMovie;
    calculatePrice()

}








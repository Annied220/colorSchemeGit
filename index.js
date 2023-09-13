const colorPicker = document.getElementById("color-picker")
const getSchemeBtn = document.getElementById("get-scheme")
const displayArea = document.getElementById("display-area")
const schemeEl = document.getElementById("scheme")

function clear() {
    displayArea.innerHTML = ""
}



getSchemeBtn.addEventListener("click", async () => {

    const seedColor = colorPicker.value.slice(1, 7)

    const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeEl.value}&count=5`)
    const data = await res.json()
    let schemeColors = []
    clear()

    for (let color of data.colors) {
        schemeColors.push(color.hex.value)
        console.log(schemeColors)
    }
    
    for (let schemeColor of schemeColors) {
        displayArea.innerHTML += 

            `
            <div class="grid">
                <div style="background-color:${schemeColor}" class="color-column"
                </div>
                
            </div>

            <div>
                <p>${schemeColor}</p>
            </div>
           
            `
    }

})
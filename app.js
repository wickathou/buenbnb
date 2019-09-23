

const bookModal = (e) => {
    console.log(e.target.id || e.target.className)
    if (e.target.id === 'book-now' || e.target.id === 'modal-close' || e.target.id === 'book-now-landing-button') {
        console.log(`The element ID is ${e.target.id}`)
        if (document.getElementById('book-modal').style.display === 'block' || null || undefined) {
            document.getElementById('book-modal').style.display = 'none'
        } else document.getElementById('book-modal').style.display = 'block';
    }
}

const citySelector = (e) => {
    console.log(e.target.id || e.target.className)
    if (e.target.id === 'country'){
        console.log(`The country is ${e.target.value}`)
        
        switch (e.target.value) {
            case 'colombia':
                document.getElementById('colombia').style.display = 'block'
                document.getElementById('town-selector').style.display = 'block'

                document.getElementById('ecuador').style.display = 'none'
                document.getElementById('mexico').style.display = 'none'
                document.getElementById('us').style.display = 'none'
            break;
            case 'ecuador':
                document.getElementById('ecuador').style.display = 'block'
                document.getElementById('town-selector').style.display = 'block'

                document.getElementById('colombia').style.display = 'none'
                document.getElementById('mexico').style.display = 'none'
                document.getElementById('us').style.display = 'none'
            break;
            case 'mexico':
                document.getElementById('mexico').style.display = 'block'
                document.getElementById('town-selector').style.display = 'block'

                document.getElementById('colombia').style.display = 'none'
                document.getElementById('ecuador').style.display = 'none'
                document.getElementById('us').style.display = 'none'
            break;
            case 'us':
                document.getElementById('us').style.display = 'block'
                document.getElementById('town-selector').style.display = 'block'

                document.getElementById('colombia').style.display = 'none'
                document.getElementById('ecuador').style.display = 'none'
                document.getElementById('mexico').style.display = 'none'
            break;
            default:
                console.log('select a country')
                document.getElementById('town-selector').style.display = 'none'
        }
    }
}

// document.body.insertAdjacentHTML('beforebegin', '<div id="book-modal" class="modal-box"><div class="modal-content"><h1>Some text</h1></div></div>')

// const testFunction = (e) => {
//     document.getElementById('book-now').remove;
    
//     if (e.target.id === 'book-now') {
//         console.log(`The element ID is ${e.target.id}`)
//         document.body.insertAdjacentHTML('afterbegin', '<div id="book-modal" class="modal-box"><div class="modal-content"><h1>Some text</h1></div></div>')
//     }
//     if (e.target.id !== 'book-now') {
//         document.getElementById('book-now').remove;
//         console.log(e.target.id || e.target.className);
//     }
// } 


if (document.addEventListener) {
    document.body.addEventListener('click',bookModal);
}

if (document.addEventListener) {
    document.body.addEventListener('click', citySelector);
}
const modal = document.getElementById('id-modal')
const header = document.getElementById('id-header')

const openModal = document.getElementById('open-btn');
const closeModal = document.getElementById('close-btn');

function showModal() {
    modal.style.display = 'block'
    document.body.style.backgroundColor = "#6C757D";
}

function hideModal() {
    modal.style.display = 'none'
    document.body.style.backgroundColor = '#fff'
    
}
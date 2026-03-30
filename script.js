// 📦 DONNÉES DES VOITURES (remplace par tes propres photos/prix)
const cars = [
    {
        id: 1,
        title: "Porsche 911 Carrera",
        price: 89900,
        description: "Année 2021, 25 000 km, boîte automatique, cuir noir, jantes alu 20\".",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
        alt: "Porsche 911"
    },
    {
        id: 2,
        title: "Mercedes Classe C AMG",
        price: 54900,
        description: "Berline sportive, 30 000 km, full options, sièges chauffants.",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop",
        alt: "Mercedes AMG"
    },
    {
        id: 3,
        title: "BMW Série 3 M Sport",
        price: 42900,
        description: "Diesel, 40 000 km, très bon état, entretien suivi.",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
        alt: "BMW Série 3"
    }
];

// Fonction pour afficher les voitures dans la grille
function renderCars() {
    const grid = document.getElementById('carsGrid');
    if (!grid) return;

    grid.innerHTML = ''; // Vide le conteneur

    cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';

        // Image cliquable pour agrandissement
        const img = document.createElement('img');
        img.src = car.image;
        img.alt = car.alt;
        img.className = 'car-image';
        img.addEventListener('click', () => openModal(car.image));

        const infoDiv = document.createElement('div');
        infoDiv.className = 'car-info';

        const title = document.createElement('h3');
        title.className = 'car-title';
        title.textContent = car.title;

        const price = document.createElement('div');
        price.className = 'car-price';
        price.innerHTML = `${car.price.toLocaleString('fr-FR')} € <small>hors frais</small>`;

        const desc = document.createElement('p');
        desc.className = 'car-desc';
        desc.textContent = car.description;

        const btn = document.createElement('a');
        btn.href = `mailto:contact@autovente.fr?subject=Demande pour ${car.title}&body=Bonjour, je suis intéressé par ${car.title} (prix ${car.price.toLocaleString('fr-FR')}€). Merci de me contacter.`;
        btn.className = 'btn-contact';
        btn.textContent = '📩 Demander un rendez-vous';

        infoDiv.appendChild(title);
        infoDiv.appendChild(price);
        infoDiv.appendChild(desc);
        infoDiv.appendChild(btn);

        card.appendChild(img);
        card.appendChild(infoDiv);
        grid.appendChild(card);
    });
}

// Gestion du modal pour agrandir les photos
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModalSpan = document.querySelector('.modal-close');

function openModal(imgSrc) {
    if (modal && modalImg) {
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
    }
}

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
    }
}

// Événements du modal
if (closeModalSpan) {
    closeModalSpan.addEventListener('click', closeModal);
}

// Fermer le modal en cliquant à l'extérieur
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Lancement de l'affichage quand la page est chargée
document.addEventListener('DOMContentLoaded', renderCars);
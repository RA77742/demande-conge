CREATE TABLE materiels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    type VARCHAR(50),
    marque VARCHAR(50),
    modele VARCHAR(50),
    numero_serie VARCHAR(100),
    date_achat DATE,
    garantie DATE,
    etat VARCHAR(50),
    emplacement VARCHAR(100),
    date_enregistrement TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

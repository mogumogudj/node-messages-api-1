const log = (req, res, next) => {
  console.log('✅');
  next();
}

module.exports = log; // deze functie is nu beschikbaar voor andere bestanden en kan worden geïmporteerd met require()
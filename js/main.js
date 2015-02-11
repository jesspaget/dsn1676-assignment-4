var blueberries = {
    name: "Blueberries",
    fullName: 'Vaccinium Corymbosum',
    growsOnShrubs: true,
    energy: 240,
    carbs: 14.49,
    protein: 0.74
};

var grapes = {
    name: "Grapes",
    fullName: 'Vitis Vinifera',
    growsOnShrubs: false,
    energy: 288,
    carbs: 18.1,
    protein: 0.72
};

var redCurrant = {
    name: "Red Currant",
    fullName: 'Ribes Rubrum',
    growsOnShrubs: true,
    energy: 234,
    carbs: 13.8,
    protein: 1.4
};

var writeBerryInfo = function (berry) {
    document.write('<h1>' + berry.name + '</h1>');
    document.write('<dl>');
    document.write('<dt>Full Name</dt>');
    document.write('<dd>' + berry.fullName + '</dd>');
    document.write('<dt>Grows on Shrubs</dt>');
    document.write('<dd>' + berry.growsOnShrubs + '</dd>');
    document.write('<dt>Energy</dt>');
    document.write('<dd>' + berry.energy + 'kJ</dd>');
    document.write('<dt>Carbohydrates</dt>');
    document.write('<dd>' + berry.carbs + 'g</dd>');
    document.write('<dt>Protein</dt>');
    document.write('<dd>' + berry.protein + 'g</dd>');
    document.write('</dl>');
};

var allTheBerries = [blueberries, grapes, redCurrant];

allTheBerries.forEach(writeBerryInfo);
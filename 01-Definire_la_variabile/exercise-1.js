let personName;

function canPlay() {
  if (true) {
    personName = 'Paul';
  }

  personName += ' plays football'; // Argh! personName is not defined

  console.log(personName);
}

canPlay();
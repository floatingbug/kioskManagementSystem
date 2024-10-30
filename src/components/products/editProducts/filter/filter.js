function filterByName(filterInputs, products) {
    let filteredProducts = [];
    let filteredProductsList = new Map();

    // Produkte nach den Filterbedingungen sortieren
    for (const key in filterInputs) {
        for (const p of products) {
            if (typeof p[key] !== "string") {
                p[key] = p[key].toString();
            }

            if (filterInputs[key] !== "" &&
                p[key].includes(filterInputs[key]) &&
                !filteredProducts.includes(p)
            ) {
                filteredProducts.push(p);
            }
        }

        // Füge die gefilterten Produkte zur Map hinzu
        filteredProductsList.set(key, filteredProducts);
        filteredProducts = [];
    }

    // Entferne leere Listen
    for (const [key] of filteredProductsList) {
        if (filteredProductsList.get(key).length === 0) {
            filteredProductsList.delete(key);
        }
    }

    // Sortiere von größtem zu kleinstem Listenelement
    filteredProductsList = new Map(
        [...filteredProductsList.entries()].sort((a, b) => b[1].length - a[1].length)
    );

    // Alle Keys aus der Map extrahieren
    const keys = [...filteredProductsList.keys()];

    // Filtern der Objekte, die alle Bedingungen für die Keys in der Map erfüllen
    const filteredValues = [...filteredProductsList.values()];

    const filteredIntersection = filteredValues.length > 0 ? 
        filteredValues.reduce((acc, currArray) => {
            // Überprüfen, ob das aktuelle Objekt in allen Arrays vorkommt
            return acc.filter(obj1 => {
                return keys.every(key => {
                    // Prüfen, ob das Objekt in der aktuellen Array-Bedingung existiert
                    return currArray.some(obj2 => obj1[key] === obj2[key]);
                });
            });
        }) : []; // Leeres Array als Default-Wert, wenn filteredValues leer ist

	return filteredIntersection;
}

export { filterByName };


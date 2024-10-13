// 1. V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
// 2. Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.

const book1 = {
    nazev: 'Pilíře země',
    nazevOriginalu: 'The Pillars of the Earth',
    autor: 'Ken Follett',
    numberOfPages: 926,
    datumVydani: {
        original: 1989,
        ceskyPreklad: 2009,
    },
    ISBN: '978-80-242-2410-7',
}

const book2 = {
    nazev: 'Na věky věků',
    nazevOriginalu: 'World Without End',
    autor: 'Ken Follett',
    numberOfPages: 928,
    datumVydani: {
        original: 2007,
        ceskyPreklad: 2009,
    },
    ISBN: '978-80-242-2382-7',
}
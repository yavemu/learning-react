// --- Funciones y otros snippets utilitarios
// --- Da formato de 00 a un número n
const leftPad = n => `0${n}`.substr(-2);

// --- Da formato 00 : 00 (min : seg) a una cantidad de segundos dada
const formatTime = secs => `${leftPad(~~(secs / 60))}:${leftPad(~~(secs % 60))}`;
/*
    El operador bitwise o doble negación binaria(~~)
    es una forma super interesante y geek de convertir a enteros … y mucho más eficiente!
*/


export default {
    formatTime
}
let expr = 'Papaya';

switch (expr) {
    case 'Naranjas':
        console.log('El kilo de naranjas cuesta 10000');
        break;
    case 'Manzanas':
        console.log('El kilo de Manzanas cuesta 10000');
        break;
    case 'Platanos':
        console.log('El kilo de naranjas cuesta 10000');
        break;
    case 'Mangos':
    case 'Papaya':
        console.log('El kilo de mangos y papayas  cuesta 10000');
        break;
    default:
        console.log('El producto no está disponible ' + expr);

}

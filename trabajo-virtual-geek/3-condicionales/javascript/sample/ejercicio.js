const welcomeMessageElement = document.querySelector('.welcome__text');

const isAdmin = false;
const adminText = isAdmin && 'administradora';
console.log(adminText);
const isModerator = true;
const moderatorText = isModerator && 'moderadora';
console.log(moderatorText);

// Como la primera expresión es `falsy`, se devuelve la segunda expresión
welcomeMessageElement.innerHTML = `Bienvenida ${(adminText || moderatorText)}. ¡Es genial verte de nuevo!`
import getHash from '../utils/getHash';
import getData from '../utils/getData';



const Character =(char, output)=>
{
    console.log("si")
    const view =
    `
        <div class="Character-inner">
            <article class="Character-card">
                <img src="${char.image}" alt="${char.name}">
                <h2>${char.name}</h2>
            </article>
            <article class="Character-card">
                <h3>Status: ${char.status}</h3>
                <h3>Species: ${char.species}</h3>
                <h3>Gender: ${char.gender}</h3>
                <h3>Origin: ${char.origin.name}</h3>
                <h3>Last Location: ${char.location.name}</h3>
            </article>
        </div>
        <span id="CF-close">X
        </span>
    `;
    output.innerHTML = view;
}
export default Character;
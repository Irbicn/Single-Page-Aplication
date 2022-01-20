import getData from "../utils/getData";
import Character from "./Character";

const Home = async (output)=>
{
    const characters = await getData();
    const charactersContainer = document.createElement('div');
    charactersContainer.className = "Characters";
    output.appendChild(charactersContainer)
    characters.results.map(char => 
    {
        const content = document.createElement('article');
        content.className = "Character-item";
        content.innerHTML += `
            <img src="${char.image}" alt="${char.name}">
            <h2>${char.name}</h2>
        `;
        content.onclick = ()=>
        {
            const CFContainer = document.getElementById('Character-focus');
            CFContainer.onclick = ()=>
            {
                CFContainer.style.display = "none"
            }
            const response = Character(char, CFContainer);
            CFContainer.style.display = "flex";
            const CFCloseButton = document.getElementById('CF-close');
            let CharacterFocus = false;
            CFCloseButton.onclick = ()=>
            {
                console.log("see");
                CharacterFocus = !CharacterFocus;
                if(CharacterFocus){
                    CFContainer.style.display = "none";
                    return;
                }
            }
        }
        charactersContainer.appendChild(content);
    });
    return null;
};
export default Home;
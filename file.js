const button = document.querySelector("#mainbutton");
const factdiv = document.querySelector("#fact");

async function Fetch(){
    const url = "https://catfact.ninja/fact?max_length=140";

    try{
    const response = await fetch(url);
    const result = await response.json();

    console.log(response.status);
    console.log(result);

    const ptag = document.createElement('p');
    const pbutton = document.createElement('button');
    pbutton.className="pbutton"
    pbutton.innerText="-"

    ptag.textContent= result['fact']
    ptag.appendChild(pbutton)


    factdiv.appendChild(ptag)

    pbutton.addEventListener('click',()=>{
        ptag.remove()
    });
    
    }

    catch(error){
        console.error(`Fetch error ${error}`);
    };

};


button.addEventListener('click',Fetch);
const loadCountrys = () =>{
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountrys(data))
}
const displayCountrys = countrys => {
    console.log(countrys[0]);
    const allCountryHTML = countrys.map(country => getCountryHTML(country));
    const showCourtys = document.getElementById('extraDive');
    showCourtys.innerHTML = allCountryHTML.join(' ');
    console.log(allCountryHTML[0]);
}
const getCountryHTML = ({name, flags, startOfWeek, region}) => {
    return `
        <div class="col-md-4 mb-4 border border-primary border-3"> 
            <div class="card" style="width: 18rem;">
                <img src="${flags.png}" class="card-img-top" alt="${name.common}">
                <div class="card-body">
                    <h2>${name.common}</h2>
                    <p>Day :${startOfWeek}</p>
                    <p>Raligion :${region}</p>
                </div>
            </div>
        </div>
    `;
}
loadCountrys();

// const getCountryHTML = country => {
//     const {name, flags, startOfWeek, region} = country;
//     return `
//         <div class="col-md-4 mb-4 border border-primary border-3"> 
//             <div class="card" style="width: 18rem;">
//                 <img src="${flags.png}" class="card-img-top" alt="${name.common}">
//                 <div class="card-body">
//                     <h2>${name.common}</h2>
//                     <p>Day :${startOfWeek}</p>
//                     <p>Raligion :${region}</p>
//                 </div>
//             </div>
//         </div>
//     `;
// }


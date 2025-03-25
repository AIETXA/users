// API https://jsonplaceholder.typicode.com/users (obtener datos simulados)
// img https://thispersondoesnotexist.com/ (asociada x ID)
// ID: listaUsuarios (aca se mostraran los detalles de los usuarios)
// Agrega una edad aleatoria a cada usuario.
//Muestra detalles específicos de cada usuario en la lista en el DOM: 
// name, age, username, img, phone, email, company, address
//- address tendrá estos datos como valor: usuario.address.street, usuario.address.suite, usuario.address.city
const contenedorUsers = document.getElementById('contenedor-users');
const listaUsuarios = document.getElementById('listaUsuarios');
const fotos = ['assets\img\1.jpeg', 'assets\img\2.jpeg', 'assets\img\3.jpeg', 'assets\img\4.jpeg', 'assets\img\5.jpeg', 'assets\img\6.jpeg', 'assets\img\7.jpeg', 'assets\img\8.jpeg', 'assets\img\9.jpeg', 'assets\img\10.jpeg'];


function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => {   
       if(!res.ok) {
         throw new Error('Error en la respuesta');
       }
       return res.json();
    })
     .then(usuarios => {
        usuarios.forEach(({id, age, name, email, phone, company, username, website, adress }) => {
            const tarjeta = {
                imagen: id,
                nombre: name,
                usuario: username,
                edad: age,
                corre: email,
                telefono: phone,
                compania: company,
                sitioweb: website,
                direccion: adress,
            };
            mostrarUsuario(tarjeta);
        }); 

        })
         .catch (error => {
            console.error('Error al obtener los datos del usuario:', error);
        });
    } 

    function mostrarUsuario({ imagen, nombre, usuario, edad, correo, telefono, compania, sitioweb, direccion }) {
        const divTarjeta = document.createElement('div');
        divTarjeta.className = 'tarjeta';
        divTarjeta.innerHTML = `<ul><li>
        ${imagen}
        <h2>${nombre}</h2>
        Usuario:${usuario}
        Edad:${edad}
        Correo:${correo}
        Telefono:${telefono}
        Compania${compania}
        Sitio web:${sitioweb}
        Direccion:${direccion}
        </li></ul>`;
    contenedorUsers.appendChild(divTarjeta);
    }

    document.addEventListener('DOMContentLoaded', obtenerUsuarios);


  /* .then((response) => {
   
  if(!response.ok) {
        throw new Error('La solicitud es invalida');
    }
    return response.json();
})
.then(data => {
    listaUsuarios.innerHTML = `
    <div>
    <h2>
        ${data.name}
    </h2>
    <img src='https://thispersondoesnotexist.com'>
    <ul>
        <li>${data.phone}</li>
        <li>${data.adress}</li>
        
    </ul>
</div>`
});
listaUsuarios();*/
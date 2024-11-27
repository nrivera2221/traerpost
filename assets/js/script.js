//conexion a la api
async function getPosts() {
    let ul = document.getElementById('post-lista');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        const posts = await response.json();
        listarPost(posts);
    } catch (error) {
        console.error('Error al cargar los posts:', error);
        ul.innerHTML += `<li>Error al mostrar el post: ${error.message}</li>`;
    }
}
//mostrar los datos obtenidos en una lista 
const listarPost = (posts) => {
    let ul = document.getElementById('post-lista');
    ul.innerHTML = '';
    posts.forEach(post => {
        try{
            if (!post.title || !post.body) {
                throw new Error('El post esta incompleto'); 
            }
            const li = document.createElement('li');
            li.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            console.log(post);
            ul.appendChild(li);
        }
        catch(error) {
            console.warn('Error al mostrar el post:', error);
            ul.innerHTML += `<li>Error al mostrar el post: ${error.message}</li>`;
        }
    });
};
class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = mascotas
        this.libros = libros
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    getMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }

    getBooks() {
        let nombres = []
        for (let i = 0; i < this.libros.length; i++) {
            nombres.push(this.libros[i].nombre)
        }
        return nombres
    }

}

let nombre = 'Paula'
let apellido = 'Rodriguez'
let mascotas = []
let libros = []
let usuario = new Usuario(nombre, apellido, mascotas, libros);

usuario.addMascota('Perro que se llama Odin')
usuario.addMascota('Perra que se llama Shiva')
usuario.addBook('Game Of Throne', 'George R. R. Martin')
usuario.addBook('Harry Potter and the Philosopher’s Stone', 'J.K. ROWLING')


console.log(usuario.getFullName())
console.log(usuario.getMascotas())
console.log(usuario.getBooks())
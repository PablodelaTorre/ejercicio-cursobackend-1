class Usuario{
    constructor(nombre,apellido,libros=[],mascotas=[]){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas
    }
    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`)
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(nombreMascota){
        this.mascotas= [nombreMascota] 
        console.log(this.mascotas)
    }
    countMascotas(){
        console.log(this.mascotas.length)
        return this.mascotas.length
    }
    addBook(objLibros){
        this.libros=objLibros
    }
    getBookNames(){
        let arr = this.libros.map(x=>{return x.nombre})
        console.log(arr)
        return arr
        
    }
}

const usuario = new Usuario("Pablo", "de la Torre", [{nombre: "libro1", autor: "autor1"}, {nombre: "libro2", autor: "autor2"}], "gato")
console.log(usuario)
usuario.getFullName()
usuario.addMascota("gato")
usuario.countMascotas()
usuario.addBook([{nombre: "libro1", autor: "autor1"}, {nombre: "libro2", autor: "autor2"}])
usuario.getBookNames()
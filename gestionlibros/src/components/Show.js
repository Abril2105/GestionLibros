import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '../fireBase/config'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Show = () => {
    const [libros, setLibros] = useState([]);
    const query = collection(db, "libro")
    const getLibros = async() => { 
        const data = await getDocs(query)
        //console.log(data.docs)
        setLibros(
            data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        )
        console.log(libros)
    } 

    const deleteLibro = async (id) => {
        const libroDoc = doc(db, "libros", id)
        await deleteDoc(libroDoc)
        getLibros()
    }

    useEffect(() => {
        getLibros()
    }, [] )

  return ( 
    <>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <div className='d-grid gap-2'>
                <Link to="/Create" className='btn btn-secondary mt-2 mb-2'>Create</Link>
                </div>

                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th>Año de lanzamiento</th>
                            <th>Disponibilidad</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {libros.map((libro) => (
                            <tr key={libro.id}>
                                <td>{libro.titulo}</td>
                                <td>{libro.autor}</td>
                                <td>{libro.año}</td>
                                <td>{libro.disponibilidad ? 'Disponible' : 'No disponible'}</td>
                                <td>
                                    <Link to={`/Edit/${libro.id}`} className='btn btn-light'>
                                        <i className="fa-solid fa-pencil"></i>
                                        </Link>
                                    <button onClick={() => { deleteLibro(libro.id)}} className='btn btn-danger'>
                                        <i className="fa-solid fa-trash"></i>
                                        </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default Show

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    casaNo: number;
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Brawer',
        edad: 35,
        direccion: {
            pais: 'Perú',
            casaNo: 615
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 ) }
                </pre>
            </code>
        </>
    )
}


//los componentes de react son funciones las cuales
//les podemos pasas parametros pero en react
//estos se llaman props
const Mensaje = (props) => {
    return (
    <h1 style={{color: props.color}}>
        {props.message}
    </h1>)
}

export default Mensaje;
import ReactLoading from "react-loading";
import './styles.css';

export const Loading = ({description}) =>{
    return (
        <div className = 'loading-all-screen'>
            <i className='text-loading'>Carregando {description}</i>
            <ReactLoading type='balls' color='#ffffff'   width='5%' height='5vh' />
        </div> 
    )
}
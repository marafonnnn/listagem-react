import './styles.css';
import errorIcon from '../../img/error_outlined_white.png';

export const Error = ({error}) =>{
    return (
        <div className = 'error-all-screen'>
            <div className = 'error-container card '>
                <div className = 'error-container-title card-header'>
                    <img src={errorIcon} alt="check" className = 'check-icon'/>
                    &nbsp;&nbsp;Algo de errado aconteceu <br/>
                </div>
                <div className = 'error card-body'>
                    <i className='text-saved'>
                        {error}
                    </i> 
                </div>
                <div className="card-footer text-muted">
                    Todos os direitos reservados
                </div>
            </div>
        </div>
    )
}
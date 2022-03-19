import React from "react";
import { formatDate } from "../Lista";
import './styles.css';

export const Detalhe = (props) => {
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="detalhe">
                            <b>Detalhes do Devedor</b>
                            <p className= "field-detail">Nome </p>
                            <p className= "value-detail">{props.data.detail.payer.name}</p>
                            <p className= "field-detail">CPF/CNPJ</p>
                            <p className= "value-detail">{props.data.detail.payer.taxIdNumber}</p>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="detalhe">
                            <b>Detalhes da Cobrança</b>
                            <p className= "field-detail">ID da cobrança: </p>
                            <p className= "value-detail">{props.data.detail.id}</p>
                            <p className= "field-detail">Usuario Gerador: </p>
                            <p className= "value-detail">-</p>
                            <p className= "field-detail">Data de criação da cobrança:</p>
                            <p className= "value-detail"> {formatDate(props.data.detail.createdAt)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
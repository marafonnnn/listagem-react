import React, { useEffect } from 'react';
import './styles.css';
import DataTable from 'react-data-table-component';
import { CobrancasContext } from '../../providers/cobranca';
import { columns } from './metadata';
import { Detalhe } from '../Detalhe';

export const Lista =() => {
    const { cobrancas } = React.useContext(CobrancasContext);
    const [ data, setData ] = React.useState([])

    useEffect(() => {
        const formattedData = cobrancas.map(cobranca => {
            const createdAt = formatDate(cobranca.createdAt);
            const requestAmount = `R$ ${parseFloat(cobranca.requestAmount).toFixed(2)}`;
            const newObject = {"id": cobranca.id,"detail": cobranca.detail, createdAt,  requestAmount}
            return  newObject
        })

        setData(formattedData)
        
    }, [cobrancas]);   

    return (
        <DataTable
            columns={columns}
            data={data}
            expandableRows
            pagination
            responsive
            selectableRowsHighlight
            expandableRowsComponent={Detalhe}
        />
    );
};

export function formatDate(dateReceived){
    const date = new Date(dateReceived)
    const datetext = date.toTimeString().split(' ')[0]
    return ` ${date.toLocaleDateString('pt-BR')} às ${datetext}`
}
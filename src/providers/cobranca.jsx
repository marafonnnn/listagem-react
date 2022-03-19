import React, { useCallback, useEffect, useState } from "react";
import { loadCobrancas } from "../api/cobrancas";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";

export const CobrancasContext = React.createContext([]);

export const CobrancasProvider = (props) => {
    const [keyError, setKeyError] = useState(null)
    const [cobrancas, setCobrancas] = useState(null)
    const [carregamento, setCarregamento] = useState(null)

    const handleLoadCobrancas = useCallback(async () => {
        setCarregamento('cobranças...')
        try {
            let cobrancasAPI = await loadCobrancas()
            cobrancasAPI ? setCobrancas(cobrancasAPI) : setKeyError('Erro ao buscar dados da APi. Verifique o serviço')
        } catch (error) {
            setKeyError(error.message)
        }
        setCarregamento(null)
    }, [])

    useEffect(() => {
        handleLoadCobrancas()
    }, [handleLoadCobrancas]);

    return (
        <CobrancasContext.Provider value={{ cobrancas }}>
            {cobrancas && props.children}
            {keyError && <Error error={keyError} />}
            {carregamento && <Loading description={carregamento} />}
        </CobrancasContext.Provider>
    )
}
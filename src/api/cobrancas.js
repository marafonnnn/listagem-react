import axios from "axios"

export const loadCobrancas = async () =>{
    try {
        const cobrancasRet = await axios.get('https://my-json-server.typicode.com/peerbnk-tech/web-api-samples/qrcodes')
        const promises = cobrancasRet.data.map(async cobranca => {
            cobranca.detail = await loadDetalheCobranca(cobranca.id)
            return cobranca
        })
        await Promise.all(promises)
        return [200,201].includes(cobrancasRet.status) ? cobrancasRet.data : []
    } catch (error) {
        throw new Error ('Falha ao consultar a API. Verifique o serviço')        
    }
}

const loadDetalheCobranca = async (id) =>{
    const cobrancasRet = await axios.get(`https://my-json-server.typicode.com/peerbnk-tech/web-api-samples/qrcodes/${id}/transactions`)
    return [200,201].includes(cobrancasRet.status) ? cobrancasRet.data[0] : []
}

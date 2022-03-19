import axios from "axios";
import { loadCobrancas } from "./cobrancas";

jest.mock("axios")

describe('Cobrancas test', () => {

  test('LoadCobrancas - It should return data when the call was successful ', async () => {
    const data = [
      {
        "id": "6f30a4e4-adb4-4ac0-9d8d-67298e846147",
        "qrCodeId": "6f30a4e4-adb4-4ac0-9d8d-67298e846147",
        "requestAmount": 25.9,
        "paidAmount": null,
        "type": "Cobrança simples",
        "createdAt": "2022-03-09T19:55:12.051Z",
        "createdBy": "admin@empresa.com.br",
        "payer": {
          "name": "Josemar da Silva",
          "taxIdNumber": "123456789010",
          "documentType": "CPF",
          "city": "São Paulo",
          "codIspb": 12345
        }
      }
    ]
    const response = {
      data,
      headers: {},
      config: { url: 'http://localhost:3000/mockUrl' },
      status: 200,
      statusText: 'OK',

    }

    axios.get.mockResolvedValue(response);

    const result = await loadCobrancas()

    expect(result.length).toBeGreaterThan(0)
  });

  test('LoadCobrancas - It should throw an error when the call to API is unsuccessful ', async () => {
    const response = {
      data: {},
      headers: {},
      config: { url: 'http://localhost:3000/mockUrl' },
      status: 400,
      statusText: 'ERR',

    }
    
    axios.get.mockResolvedValue(response);
    try {
      const result = await loadCobrancas()
    } catch (err) {
      expect(err).toEqual(new Error('Falha ao consultar a API. Verifique o serviço'));
    }
  });

})
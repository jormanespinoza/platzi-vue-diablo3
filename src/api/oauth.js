// Traemos el m茅todo post de 'axios'
import { post } from 'axios'

// Cogemos los datos de nuestra cuenta de Blizzard
// 馃敟 Recuerda que debes usar tus datos a la hora de hacer las llamadas a las APIs
// 馃敟 Como dice la documentaci贸n, tienes un m谩ximo de llamadas por segundo y por hora a la API.
// 馃敟 Estos datos deber铆an ser privados
const clientId = '9cfd1f4f2ae943a68d008871d5ec0024'
const clientSecret = 'Euc4pu2FThwthOoVUTudCxfYINSA6QwO'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

// Creamos la funci贸n getToken
const getToken = () => {
  const body = new FormData()

  // Creamos un objeto de tipo 'FormData', que es un conjunto de pares clave/valor
  body.append('grant_type', 'client_credentials')

  // En este objeto llamado 'config' vamos a insertar algunos par谩metros de configuraci贸n
  // que necesitamos para hacer la llamada.
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  // Hacemos una peticion POST
  // Le pasamos la URL como primer par谩metro
  // Como segundo, el body, que es un FormData
  // Y la configuraci贸n como tercer argumento
  return post(API_URL, body, config)
}

// Exportamos la funci贸n para poder usarla m谩s tarde
export { getToken }

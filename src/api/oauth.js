// Traemos el método post de 'axios'
import { post } from 'axios'

// Cogemos los datos de nuestra cuenta de Blizzard
// 🔥 Recuerda que debes usar tus datos a la hora de hacer las llamadas a las APIs
// 🔥 Como dice la documentación, tienes un máximo de llamadas por segundo y por hora a la API.
// 🔥 Estos datos deberían ser privados
const clientId = '9cfd1f4f2ae943a68d008871d5ec0024'
const clientSecret = 'Euc4pu2FThwthOoVUTudCxfYINSA6QwO'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

// Creamos la función getToken
const getToken = () => {
  const body = new FormData()

  // Creamos un objeto de tipo 'FormData', que es un conjunto de pares clave/valor
  body.append('grant_type', 'client_credentials')

  // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración
  // que necesitamos para hacer la llamada.
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  // Hacemos una peticion POST
  // Le pasamos la URL como primer parámetro
  // Como segundo, el body, que es un FormData
  // Y la configuración como tercer argumento
  return post(API_URL, body, config)
}

// Exportamos la función para poder usarla más tarde
export { getToken }

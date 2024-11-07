# Sistema de Votación Autenticada en Blockchain

Este proyecto permite a los usuarios votar "Sí" o "No" por una propuesta, autenticando su voto mediante la firma con su wallet. La votación y la firma se registran en la blockchain para asegurar la autenticidad y la trazabilidad de cada voto.

## Características

- **Voto Autenticado**: Los usuarios pueden votar "Sí" o "No" y deben firmar su voto con su wallet para que sea considerado válido.
- **Registro Único**: Cada dirección de usuario puede votar una sola vez. Intentos de votos duplicados son rechazados.
- **Trazabilidad del Voto**: Cada voto se relaciona con un hash único de la firma del usuario, permitiendo verificar la autenticidad sin almacenar el mensaje completo en la blockchain.

## Tecnologías Utilizadas

- **Solidity**: Para el desarrollo del contrato inteligente.
- **Next.js**: Para el desarrollo del frontend.
- **Wagmi**: Para la interacción con la blockchain desde el frontend.
- **Avalanche Fuji**: Red de pruebas utilizada para desplegar el contrato.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/luis54929/blockChainVote.git
   cd blockChainVote
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno si es necesario.

## Uso

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Despliegue del Contrato

El contrato inteligente está desplegado en Remix. Puedes interactuar con él utilizando la dirección del contrato y la ABI proporcionada en el código.

## Autenticación del Voto

Cada usuario firma un JSON con su elección usando su wallet. El hash de esta firma se envía al contrato inteligente para verificar la autenticidad del voto.

Para ampliar esto, el proceso de autenticación y aseguramiento de la autenticidad del voto se realiza de la siguiente manera:

1. **Generación del Mensaje**:
   - El usuario selecciona su voto ("Sí" o "No") en el frontend.
   - Se genera un JSON con la elección del usuario, la marca de tiempo y la dirección del votante:
     ```json
     {
       "vote": true,
       "timestamp": 1633024800000,
       "voter": "0x1234...abcd"
     }
     ```

2. **Firma del Mensaje**:
   - El usuario firma este JSON utilizando la función `signMessage` de su wallet.
   - La firma generada es única para cada usuario y mensaje.

3. **Hash de la Firma**:
   - El frontend calcula el hash de la firma utilizando `keccak256`.
   - Este hash se envía al contrato inteligente junto con el voto.

4. **Verificación en el Contrato**:
   - El contrato inteligente recibe el voto y el hash de la firma.
   - Verifica que la dirección del usuario no haya votado previamente utilizando el mapping `hasVoted`.
   - Almacena el hash de la firma en el mapping `voteSignatureHash` para asegurar la autenticidad del voto.

5. **Prevención de Votos Duplicados**:
   - Cada dirección de usuario puede votar una sola vez. Intentos de votos duplicados son rechazados por el contrato.


## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.

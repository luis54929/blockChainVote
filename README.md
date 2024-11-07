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

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.

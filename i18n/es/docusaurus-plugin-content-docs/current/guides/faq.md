# Preguntas frecuentes

## ¿Por qué las palabras sugeridas están en inglés?

cok.ai fue creado para facilitar el uso de ChatGPT por parte de hablantes no nativos de inglés. Sin embargo, todas las palabras sugeridas están en inglés. Esto se debe a que ChatGPT tiene una mejor comprensión del inglés en comparación con otros idiomas. Incluso MOSS, el primer modelo de lenguaje de diálogo chino a gran escala, reconoce que sus respuestas en inglés son superiores a las respuestas en chino. Por lo tanto, se recomienda utilizar las palabras sugeridas en inglés. (MOSS ya no está disponible)

Aunque el uso de palabras sugeridas en un idioma distinto al inglés puede dar resultados aceptables, los resultados pueden variar significativamente al introducir las mismas indicaciones en un idioma distinto al inglés. Dado que la comprensión de ChatGPT de las indicaciones no en inglés varía cada vez, se recomienda utilizar indicaciones en inglés para indicaciones orientadas a la productividad, a fin de garantizar el resultado deseado. Además, las respuestas generadas por indicaciones en inglés probablemente estarán en inglés. Puedes especificar el idioma de respuesta como chino agregando "responder en chino" al final de la indicación. Si tu idioma nativo es distinto, por favor, reemplaza "chino" por tu propio idioma nativo.

## ¿Debo ingresar la indicación cada vez?

En la API, puedes establecer la indicación como una "indicación del sistema", de modo que no necesites ingresar la indicación cada vez. ChatGPT seguirá las instrucciones basándose en la indicación del sistema.

En la versión web de ChatGPT, si no has cambiado la indicación principal, simplemente puedes encerrar el contenido de la respuesta posterior entre comillas, eliminando la necesidad de ingresar la indicación cada vez. Cuando la respuesta generada no se ajuste a los requisitos de la indicación, significa que ChatGPT ha olvidado la indicación y, en tales casos, debes volver a ingresar la indicación para reorientarlo. Además, cada enlace de conversación es único y puedes guardar conversaciones frecuentemente utilizadas como marcadores para usar en el futuro.

## Retardo en la búsqueda del método de entrada

La función de búsqueda se basa en el escaparate de Docusaurus y tiene un problema con la pérdida de enfoque del método de entrada en el lado de la PC. Después de informar el problema a Docusaurus, mencionaron que intentarían solucionarlo, pero hasta ahora el problema sigue sin resolverse, con el comentario: "En cualquier caso, no deberías usar chino, ya que el escaparate no está localizado". Por lo tanto, he categorizado el componente de búsqueda en dos tipos: móvil y PC. La lógica de búsqueda para móvil sigue sin cambios, mientras que para la navegación en PC con un umbral de ancho de pantalla superior a 768 píxeles, he introducido la función "debounce" para abordar el problema del método de entrada. Sin embargo, esto introduce dos problemas en el lado de la PC: la entrada no en inglés debe completarse en 800 milisegundos y la actualización de la búsqueda en PC cambia de instantánea a un retardo de 800 milisegundos. Si tienes una mejor solución, por favor, proporciona comentarios.

## Generación de información falsa

Aunque ChatGPT es muy potente, no es infalible. A veces puede generar información falsa. Por ejemplo, cuando necesitaba ingresar cientos de datos en cok.ai, le pedí a ChatGPT que convirtiera los datos a un formato especificado. Sin embargo, durante el proceso de conversión, noté que ChatGPT había escrito incorrectamente parte de la información. Por ejemplo, una etiqueta en el texto decía "crítico de cine", pero ChatGPT la cambió a "crítico de películas". Si bien esto puede no tener ningún impacto en el texto en sí, causaría un error al usarlo en el código. Por lo tanto, al utilizar ChatGPT, es esencial revisar su salida.

## Las palabras sugeridas no funcionan bien

Todas las palabras sugeridas provienen de Internet y se actualizan regularmente. Aunque he probado cada palabra sugerida, el rendimiento real puede variar dependiendo de los requisitos específicos. Si descubres algún error, tienes ideas creativas o posees buenas palabras sugeridas, por favor, siéntete libre de proporcionar comentarios y contribuir en la [página de GitHub](https://github.com/privacyrepo/cok.ai/discussions/11).

Si estás resumiendo o condensando información, puedes utilizar GPT para refinar aún más las respuestas originales, mejorando así la precisión de las respuestas. Además, las palabras sugeridas no solo sirven para propósitos de productividad, sino que también ayudan a ampliar tu pensamiento, estimular la creatividad, considerar problemas desde múltiples perspectivas y resolver cuestiones que se pasan por alto fácilmente durante el proceso de pensamiento.

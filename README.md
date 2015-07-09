# E-commerce Template
Template de E-commerce.

Este projeto apresenta um template base de E-commerce para avaliação.

## Estrutura de arquivos
As pastas são organizadas da seguinte forma:

* src/ - Pasta de arquivos de origem;
* build/ - Pasta de arquivos utilizados durante visualização da página
* index.html - Arquivo .html do projeto

### Responsividade
A responsividade do layout é feita com base na resolução da tela, e independe do dispositivo utilizado.

### Highlight
O layout não foi implementando levando em consideração a possibilidade de slideshow, mas a imagem utilizada no mesmo também é responsiva, e recomenda-se o uso de imagens **967x347**

### Nota dos produtos
A nota (quantidade de estrelas) que os produtos recebem está sendo validada de acordo com o valor (float) atribuído na própria tag *span* com a class '*.icon-rating*', arredondado:
- Se igual ou menor a 0, nenhuma estrela é exibida;
- Se maior que zero e menor que 5, ele faz o cálculo normalmente, de 0 a 5 estrelas com base no valor atribuído;
- Se maior que 5, serão exibidas 5 estrelas, mesmo que o valor seja maior que 5, 10 ou 8000.

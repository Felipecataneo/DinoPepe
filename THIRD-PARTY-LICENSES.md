# Licenças de terceiros

## ThreeUI Community — campo de constelação da FASE 5

O fundo animado da **FASE 5: CIBERESPAÇO** (funções `buildNet`, `updateNet` e
`drawNet` no `index.html`) foi portado do componente **ConstellationField** do
ThreeUI Community.

* Origem: <https://github.com/MengTo/threeui>
* Arquivo: `src/shaders/neuform-isolated/sources/constellation-field.html`
* Licença: MIT

O original é um fundo de página em Canvas 2D: nós à deriva que se ligam quando
ficam próximos e reagem ao ponteiro do mouse. A versão aqui foi adaptada para
funcionar como cenário de jogo — os nós acompanham a paralaxe, vivem apenas
acima do chão, respondem ao Dino no lugar do mouse, e o laço de ligações foi
enxugado (distância ao quadrado, menos nós no celular) para caber no orçamento
de quadro do jogo.

### Aviso de licença original

```
MIT License

Copyright (c) 2026 Meng To

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

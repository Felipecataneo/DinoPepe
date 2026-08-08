# 🦖 DinoPepe: Ultimate Edition

**DinoPepe** é um jogo web criado com muito carinho para meu sobrinho **Pedro** ❤️
Agora em sua versão **Ultimate**, o Dino viaja por mundos diferentes, coleciona moedas, compra chapéus e enfrenta novos inimigos!

👉 **Jogue agora:**
🔗 [https://dinopepe-livid.vercel.app/](https://dinopepe-livid.vercel.app/)

---

## ✨ Novidades da Versão Ultimate

Esta nova versão traz grandes melhorias:
* 🌎 **Sistema de Fases:** O cenário muda conforme você avança (Fazenda → Deserto → Floresta → Espaço).
* 🎵 **Música e Som:** Trilha sonora divertida e opção de ligar/desligar áudio.
* 🛒 **Loja do Dino:** Colete moedas e compre chapéus (Rei, Astronauta, Ninja, etc.).
* 💾 **Tudo Salvo:** Suas moedas, chapéus, recordes e **até a foto do rosto** ficam salvos para a próxima vez que jogar!
* ⚡ **Novos Power-ups:** Escudo, Ímã, Câmera Lenta e o poderoso **Dash** (que destrói inimigos!).

---

## 🎨 O que ficou mais realista

O jogo passou por uma repaginada grande para parecer um mundo de verdade:

**Cenário com profundidade**
* **Paralaxe em 4 camadas:** montanhas distantes, colinas, árvores/cactos próximos e o chão — cada camada anda numa velocidade diferente, criando sensação real de distância.
* **Névoa atmosférica:** o que está longe some no horizonte, como acontece de verdade.
* **Sol e lua** com halo de luz, crateras e brilho; céu em degradê que muda com a fase.
* **Chão com textura que rola:** tufos de grama, pedrinhas e rachaduras que acompanham a velocidade em vez de um padrão parado.
* **Luz ambiente por fase** e vinheta nas bordas, unificando as cores da cena.
* **Partículas de ambiente:** pólen na fazenda, areia no deserto, vaga-lumes na floresta e poeira estelar no espaço.

**O Dino ganhou vida**
* **Ciclo de corrida com cinemática inversa:** joelhos que dobram de verdade, pés que acompanham o chão.
* **Squash & stretch:** o corpo estica ao subir e amassa ao aterrissar.
* **Cauda que balança**, cabeça que oscila no ritmo da corrida, piscadas e sobrancelha.
* **Sombra dinâmica** que encolhe e clareia conforme ele sobe — dá para "ler" a altura do pulo.
* **Animação de morte:** ele tomba e cai da tela antes da tela de Game Over.

**O pulo ficou gostoso de usar**
* **Pulo variável:** segurar pula mais alto, soltar cedo pula baixinho.
* **Gravidade assimétrica:** sobe leve e cai pesado, como nos runners clássicos.
* **Coyote time e jump buffer:** o pulo sai mesmo se você apertar um pouquinho antes ou depois da hora.
* **Impacto:** poeira ao aterrissar, tremida de câmera, congelamento de quadro e clarão nas batidas.

**Inimigos e itens redesenhados**
* Pássaros com **asas que batem**, fantasmas que **ondulam**, OVNIs com **feixe de luz e luzinhas piscando**, meteoros com **rastro de fogo**, cactos com espinhos e sombreado.
* Moedas com **brilho metálico** e giro em 3D; power-ups com aura e anel pulsante.
* Todo mundo projeta **sombra no chão**.

**Interface repaginada (versão 13 anos 😎)**
* Visual escuro com vidro fosco e neon, tipografia do sistema em vez de Courier — cara de jogo, não de tarefa de escola.
* **HUD compacto:** pontuação grande, chip de combo que pulsa (e muda de cor no x10), moedas, recorde e **barra de XP**.
* **Tela inicial** com logo em degradê, teclas mostradas como chips e atalho direto pra **Loja** (antes só dava pra entrar depois de começar a partida).
* **Loja** com abas segmentadas, cards em grade, selo *Equipado*, preço em destaque quando falta moeda, saldo e progresso de level no topo.
* **Modal e avisos próprios** no lugar do `confirm()`/`alert()` do navegador, que no celular aparecem com o endereço do site e travam o jogo.
* **Fim de jogo** com pontuação gigante, selo animado de **Novo recorde!** e grade de estatísticas.

**Correções importantes**
* ⏱️ **Velocidade constante em qualquer tela:** antes o jogo somava movimento por quadro, então em celular de 120Hz ele rodava com o dobro da velocidade. Agora usa passo de tempo fixo.
* 🔊 **Som que não morre mais:** antes cada efeito criava um `AudioContext` novo; os navegadores limitam a poucos contextos e o áudio parava depois de um tempo de jogo. Agora é um contexto só, compartilhado.
* 📱 **Tela cheia de verdade:** o jogo ocupa toda a tela do celular, sem faixa vazia embaixo.
* 🖼️ **Nitidez em telas retina** (renderização com `devicePixelRatio`).
* 📲 **PWA funcionando:** o `manifest.json` existia, mas ninguém registrava o Service Worker — agora o jogo realmente funciona offline, com estratégia *network-first* para o HTML (cache-first prendia o jogador numa versão antiga e nenhum deploy novo chegava).
* 🛒 **"Ir para Loja" consertado:** a loja dividia o `z-index` com a tela de Game Over e abria escondida atrás dela — o botão parecia morto.
* 📸 **Foto pelo botão roxo** em vez do campo de arquivo solto na tela; a imagem é reduzida para 128px antes de salvar, ocupando bem menos espaço.
* ⏸️ **Pausa automática** quando o celular toca ou você troca de app.

---

## 🚀 Modo Nave

Um segundo modo, separado da corrida clássica, escolhido na tela inicial.

**A decolagem.** O Dino chega correndo até a plataforma, pula pra dentro do foguete,
a escotilha fecha e vem a contagem **3 · 2 · 1**. Os motores acendem, a fumaça toma
a base, a tela treme e a nave sobe — o chão despenca, o céu vira preto e as estrelas
viram riscos de velocidade. Um clarão e o jogo começa. (Dá pra pular tocando na tela;
no replay entra só a chegada rápida em warp.)

**O voo.** Segure para acelerar pra cima, solte para cair. Nada de pulo: é voo livre.
* ⚡ **O teto e o piso são barreiras de energia e matam.** Nada de encostar na borda
  e atravessar o jogo parado — o escudo aguenta uma raspada, depois acabou.
* 🪨 **Obstáculos:** asteroides girando, satélites, naves alienígenas, cometas velozes
  e cinturões de rocha com uma única passagem.
* 💎 **Prêmios:** moedas em ondas e arcos, estrelas e gemas — que valem bem mais.
* ⚡ Os power-ups voltam: escudo, ímã, câmera lenta e o **Turbo**, que atravessa asteroide.
* 🌌 **4 setores** com nebulosas de cores diferentes, do Órbita Baixa ao Núcleo Profundo.
* 🦖 O Dino aparece na bolha do cockpit — **com a sua foto e o chapéu que estiver usando**.
* 🎯 O corredor seguro muda de altura a cada obstáculo (mas sempre para uma faixa
  vizinha, nunca de um extremo ao outro), então não existe lugar bom pra ficar parado.

As moedas são as mesmas da corrida, então dá pra farmar no espaço e gastar na loja.
O recorde do Modo Nave é guardado separado do recorde da corrida.

---

## 🆕 Progressão e rejogo

* 👥 **Três perfis** (Pepe, tio, quem quiser): moedas, recorde, skins e foto separados.
  A tela inicial vira um pódio com o recorde de cada um. O progresso antigo migra
  sozinho para o perfil 1.
* 🎯 **Desafio do dia:** sorteado pela data (o mesmo o dia inteiro), paga ~250 moedas
  e 150 XP. Muda todo dia, dá motivo pra voltar.
* ⭐ **O level agora faz alguma coisa:** cada nível aumenta a duração dos power-ups
  e, do 3 em diante, a partida começa com escudo. O XP vem de jogar, não só de troféus
  — antes o teto era 1.300 XP e ninguém passava do level 2.
* 💰 **Economia refeita:** com os valores antigos eram ~1.000 partidas para comprar a
  loja inteira (medido com bots). Agora cada partida paga um bônus por pontos e combo,
  e o acervo completo sai em ~25-45 partidas.
* ⬇️ **Agachar:** seta ↓ / botão na tela. Um terço dos voadores agora vem rasante e
  **só passa agachando** — antes eles voavam alto e eram inofensivos pra quem ficava no chão.
* 🚀 **A corrida agora decola:** aos 3.000 pontos o Dino não entra numa "fase espaço",
  ele corre até o foguete e a partida vira Modo Nave, levando os pontos junto.
* 🎵 **A trilha muda de ambiente** por fase (aberta na fazenda, abafada na floresta,
  fina e mais grave no espaço), filtrando o mesmo arquivo em vez de baixar outros.

---

## 🎮 Sobre o jogo

O DinoPepe é um "endless runner" moderno e personalizado:

* 📸 O rosto do Dino pode ser personalizado com **uma foto da criança** (agora salva na memória do celular/PC).
* 📱 Funciona perfeitamente em **celular, tablet e computador**.
* 🦘 Pulo por movimento: **balance o celular para cima** para pular!
* ⬆️ **Segure** o toque/espaço para pular mais alto.
* 👻 **Inimigos Temáticos:** Cactos, Fantasmas, Meteoros e OVNIs.
* 🏆 Compita para ver quem chega na fase do Espaço!

---

## 🕹️ Como jogar

### 📱 No celular
* **Balance o celular** para pular (usando o giroscópio).
* Ou **toque na tela**.

### 💻 No computador
* Pressione **ESPAÇO** ou **Setinha para Cima**.
* Ou **clique com o mouse**.
* **Segurar** pula mais alto, **tocar rapidinho** dá um pulinho curto.

### 🎯 Objetivos
1. **Sobreviva:** Pule obstáculos e inimigos.
2. **Colete Moedas:** Use-as na Loja (botão 🛒).
3. **Pegue Power-ups:**
    * 🛡️ **Escudo:** Protege de uma batida (e quebra com efeito).
    * 🧲 **Ímã:** Atrai todas as moedas.
    * ⚡ **Dash (Raio):** Corre super rápido e **destrói** obstáculos no caminho!

---

## 📸 Personalização e Loja

1. **Foto:** Clique no botão roxo 📸 para colocar o rosto do Pedro (ou o seu!) no Dino. A foto não some mais ao fechar o jogo — e o ✕ ao lado remove.
2. **Loja:** Clique no carrinho 🛒. Compre chapéus divertidos com as moedas que você ganhou jogando.

---

## 📲 Instalar como aplicativo (PWA)

### Android / Chrome
1. Abra o link do jogo.
2. Toque nos três pontinhos e em **“Adicionar à tela inicial”** ou **"Instalar App"**.
3. Pronto! O DinoPepe vira um aplicativo no seu celular 🎉.

### iPhone (Safari)
1. Abra o link no Safari.
2. Toque em Compartilhar (quadrado com seta) → **Adicionar à Tela de Início**.
3. O jogo abre em tela cheia e o áudio funciona perfeitamente.

---

## 🛠️ Tecnologias usadas

* HTML5 & CSS3 (Design responsivo e animações).
* JavaScript Moderno (Canvas API para renderização).
* **Web Audio API:** Para música e efeitos sonoros compatíveis com iOS.
* **LocalStorage:** Para salvar o progresso, moedas e a foto (Base64).
* **DeviceMotion API:** Para pular balançando o celular.
* **Service Worker:** Cache offline (PWA de verdade).
* **Game loop com timestep fixo:** mesma velocidade em telas de 60Hz, 90Hz ou 120Hz.

---

## ❤️ Dedicatória

Feito com carinho para o **Pedro**,
para brincar, rir e agora viajar até o espaço com o DinoPepe 🦖🚀

---

## 📄 Licença

Projeto pessoal e educativo.
Sinta-se livre para estudar, adaptar e se inspirar.

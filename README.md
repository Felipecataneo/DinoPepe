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

**Correções importantes**
* ⏱️ **Velocidade constante em qualquer tela:** antes o jogo somava movimento por quadro, então em celular de 120Hz ele rodava com o dobro da velocidade. Agora usa passo de tempo fixo.
* 🔊 **Som que não morre mais:** antes cada efeito criava um `AudioContext` novo; os navegadores limitam a poucos contextos e o áudio parava depois de um tempo de jogo. Agora é um contexto só, compartilhado.
* 📱 **Tela cheia de verdade:** o jogo ocupa toda a tela do celular, sem faixa vazia embaixo.
* 🖼️ **Nitidez em telas retina** (renderização com `devicePixelRatio`).
* 📲 **PWA funcionando:** o `manifest.json` existia, mas ninguém registrava o Service Worker — agora o jogo realmente funciona offline.
* 📸 **Foto pelo botão roxo** em vez do campo de arquivo solto na tela; a imagem é reduzida para 128px antes de salvar, ocupando bem menos espaço.
* ⏸️ **Pausa automática** quando o celular toca ou você troca de app.

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

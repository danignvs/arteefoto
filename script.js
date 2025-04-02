document.addEventListener('DOMContentLoaded', () => {
    // --- Seção de Dados ---
    // (O array imageData permanece o mesmo da resposta anterior)
    const imageData = [
        { "url": "https://lh3.googleusercontent.com/pVATv5vfQEfX86YG_oP9_iZMvTRNv_sZdZTb2H71NRYou9zJY4nHyReLtghP1BYI0rBOAB9ynPs-jwUByg=s0", "titulo": "papainoelboneconeverena" },
        { "url": "https://lh3.googleusercontent.com/CjNWRxdSL9-ySbzjG987OajEduDVmq7sdfVmsLBDt--9o5Tvb3ogsFuoMXnwPh73DpMcXIBL3UcEUmwloQ=s0", "titulo": "bonecodeneve-biscoito" },
        { "url": "https://lh3.googleusercontent.com/3czpENeDLwh6TnxA5FyqjK2kHAQs0HsQ8JsMstQU1QcDL9Cb8G5ZmpftYBhpAfjUGT80cbOqcZzP8w9g7g=s0", "titulo": "ano-novo-dourado" },
        { "url": "https://lh3.googleusercontent.com/gkcTC3G8lNeWq2erJBtOFFxzH_FERRMlKhqribkvMCIyDti63Ud8T2HiAdoFiuZhf1ZVUde0gJyunCEBiQ=s0", "titulo": "ano-novo-ouro-prata" },
        { "url": "https://lh3.googleusercontent.com/AGBAYwEA-McQ4v9Il8FP9IMvZGNvXsmbMqeKYatd-HbETHQZmOqJkF3a4FxuuYhRwkmSxEjZ-ON00iH3yQ=s0", "titulo": "ano-novo-rosa" },
        { "url": "https://lh3.googleusercontent.com/gK1emi9jq92_pfubdIyXR0xE37l-h0hsA-QBR1r5uV6VIKsV7GRoE0QOyQ6Ao7LO-QfzJMDR9weP3eCB-A=s0", "titulo": "natal-monica" },
        { "url": "https://lh3.googleusercontent.com/XbmZYm7gPNc7GmkwNQDob0jnaFT1nQlqtF8iweU09lVvdRUWVpQ82EDC_clnD6sbnmq3dnuOSydPXTUz8g=s0", "titulo": "natal-monica-cebolinha" },
        { "url": "https://lh3.googleusercontent.com/PVkgWrMJGYCFxZD6AuwYLGa52aMoSx7ZfQkmYS2RaYGFmsCC0RM6nr1ZatA6N8KnEAPkLn3UX2WEpJKv9w=s0", "titulo": "natal-monica-bidu" },
        { "url": "https://lh3.googleusercontent.com/-vLla9Ta_hOg/VB2ZwrwbCHI/AAAAAAAADek/vzqj3u0bnMc/s0/ano_novo_anjinho_estrelas.png", "titulo": "ano-novo-anjinho-estrelas" },
        { "url": "https://lh3.googleusercontent.com/-tMrPjdgeupM/VB2ZxcWQyiI/AAAAAAAADe0/Ouec-fgAi_0/s0/ano_novo_coral.png", "titulo": "ano-novo-coral" },
        { "url": "https://lh5.googleusercontent.com/-Z1oiUWMWx7E/VB2Zxm6xIhI/AAAAAAAADe4/fBhXsPxhYCE/s0/ano_novo_luz.png", "titulo": "ano-novo-luz" },
        { "url": "https://lh6.googleusercontent.com/-p0NVOauB3IY/VB2Zxz8pb2I/AAAAAAAADe8/tFKtbaTf4Qs/s0/anonovotacas.png", "titulo": "ano-novo-tacas" },
        { "url": "https://lh4.googleusercontent.com/-v_PMONLh0QY/VB2ZzOIejcI/AAAAAAAADfE/Ju2dE4g5XYU/s0/bonecodeneve.png", "titulo": "boneco-de-neve" },
        { "url": "https://lh3.googleusercontent.com/-UUcX87X6Tjo/VB2Z0eIgBzI/AAAAAAAADfM/7MsBsqVLopM/s0/cartinha.png", "titulo": "cartinha" },
        { "url": "https://lh5.googleusercontent.com/-85GSLjqUYXU/VB2ZvGxbXDI/AAAAAAAADeY/1oySs1a_rxw/s0/FelizAnoNovo.png", "titulo": "Feliz-Ano-Novo" },
        { "url": "https://lh4.googleusercontent.com/-YN9iX6bDj-g/VB2Z1gtM6tI/AAAAAAAADfg/e0qMucOC7bs/s0/gnomos.png", "titulo": "gnomos" },
        { "url": "https://lh3.googleusercontent.com/-Dx-sDXzwJMg/VB2Z2Dy5rgI/AAAAAAAADfc/X698Zzfq04A/s0/happynewyear.png", "titulo": "happynewyear" },
        { "url": "https://lh6.googleusercontent.com/-Cbe-Kxp0bII/VB2Z213F2qI/AAAAAAAADfo/opH3-UQjMzg/s0/jose_jesus_maria.png", "titulo": "jose-jesus-maria" },
        { "url": "https://lh3.googleusercontent.com/-PEEHQIT3lfc/VB2Z3rZPPKI/AAAAAAAADfs/PH-zlaeMVIY/s0/maria_jose_jesus.png", "titulo": "maria-jose-jesus" },
        { "url": "https://lh6.googleusercontent.com/-eXhZSZQC7JQ/VB2Z4NkM1_I/AAAAAAAADf4/vCrUWaPcgyw/s0/menino_jesus_azul.png", "titulo": "menino-jesus-azul" },
        { "url": "https://lh4.googleusercontent.com/-1DoxFcpVhJU/VB2Z4bttIwI/AAAAAAAADgA/8OgSBVCRuiQ/s0/natal.arvore.branca.fundo.vermelho.png", "titulo": "natal-arvore-branca-fundo-vermelho" },
        { "url": "https://lh6.googleusercontent.com/-CcZOj-CWfsg/VB2Z5HskM5I/AAAAAAAADgE/JqdS63pzTyA/s0/natal.arvore.moldura.bolas.png", "titulo": "natal-arvore-moldura-bolas" },
        { "url": "https://lh3.googleusercontent.com/-B_8bMz0gDuU/VB2Z6HdFv2I/AAAAAAAADgQ/sqZjDpKszKU/s0/natal.boladecristalcomneve.png", "titulo": "natal-boladecristalcomneve" },
        { "url": "https://lh5.googleusercontent.com/-z0CKWE6m7gU/VB2Z6llhOdI/AAAAAAAADgY/5FELLbU1s_c/s0/natal.bolas.azul.png", "titulo": "natal-bolas-azul" },
        { "url": "https://lh6.googleusercontent.com/-JOBn4_mUUYA/VB2Z7D-0twI/AAAAAAAADgg/0jFATA1CF18/s0/natal.bonecosdeneve.png", "titulo": "natal-bonecos-de-neve" },
        { "url": "https://lh5.googleusercontent.com/-NoChBD6HMrw/VB2Z7mcFrtI/AAAAAAAADgk/mRuDuirGM4w/s0/natal.cachorrinhos.png", "titulo": "natal-cachorrinhos" },
        { "url": "https://lh4.googleusercontent.com/-jCF0ATxS2mw/VB2Z87mnweI/AAAAAAAADgw/9sAkQPE25AE/s0/natal.disney.png", "titulo": "natal-disney" },
        { "url": "https://lh5.googleusercontent.com/-3ye-gPjuFgc/VB2Z9UKWeNI/AAAAAAAADg4/UgkdokSzDyE/s0/natal.foto.arvore.neve.algodao.2.png", "titulo": "natal-foto-arvore-neve-algodao-2" },
        { "url": "https://lh6.googleusercontent.com/-goecbRvu7DY/VB2Z-JIEqjI/AAAAAAAADhA/AgYg9zNAhQc/s0/natal.foto.arvore.neve.algodao.png", "titulo": "natal-foto-arvore-neve-algodao" },
        { "url": "https://lh3.googleusercontent.com/--iHorvU-O3g/VB2Z-mR7ooI/AAAAAAAADhE/HvLTK2i0kWg/s0/natal.gatinho.cachorrinho.png", "titulo": "natal-gatinho-cachorrinho" },
        { "url": "https://lh4.googleusercontent.com/-L9VseFqNgh8/VB2Z_llUZFI/AAAAAAAADhM/mwoL43XF9ow/s0/natal.lareira.meias.2.png", "titulo": "natal-lareira-meias-2" },
        { "url": "https://lh3.googleusercontent.com/-dcARLYxecGY/VB2aBi-j1VI/AAAAAAAADhk/YrW05ZNs1zw/s0/natal.lareira.meias.png", "titulo": "natal-lareira-meias" },
        { "url": "https://lh3.googleusercontent.com/-PnAtQaC0ccE/VB2aBtj_irI/AAAAAAAADhg/ll3W77PSOOI/s0/natal.mold.dourada.png", "titulo": "natal-mold-dourada" },
        { "url": "https://lh3.googleusercontent.com/-915kFTdzeOw/VB2aB8kq-5I/AAAAAAAADhc/TJ5S14Sjtyw/s0/natal.papainoel.rena.png", "titulo": "natal-papainoel-rena" },
        { "url": "https://lh6.googleusercontent.com/-WbPpS19ibME/VB2aDrISWMI/AAAAAAAADhs/RV7EvIgVb-g/s0/natal.prata.ano.ouro.png", "titulo": "natal-prata-ano-ouro" },
        { "url": "https://lh6.googleusercontent.com/-s7qbeO9Tmxs/VB2aEhTGXWI/AAAAAAAADh0/bPkZDJYHfFE/s0/natal.presente.bolas.2.png", "titulo": "natal-presente-bolas-2" },
        { "url": "https://lh6.googleusercontent.com/-Q4IHBp4iuxU/VB2aFYdvMGI/AAAAAAAADh8/iEdX9yHKPT0/s0/natal.presente.bolas.png", "titulo": "natal-presente-bolas" },
        { "url": "https://lh4.googleusercontent.com/-uH0W1m08qRk/VB2aGXB51mI/AAAAAAAADiE/lFH7MPwTXLY/s0/natal.ursinho.tecido.png", "titulo": "natal-ursinho-tecido" },
        { "url": "https://lh4.googleusercontent.com/-EadKqzMudEI/VIi8koYdeEI/AAAAAAAAJwc/QGx9NWvT6Ls/s0/natal_arvore_bolas.png", "titulo": "natal-arvore-bolas" },
        { "url": "https://lh3.googleusercontent.com/--3A7nD9T_x8/VB2aJmiz6PI/AAAAAAAADik/6JndatsENoM/s0/natal_bonecosdeneve.png", "titulo": "natal_bonecosdeneve" },
        { "url": "https://lh4.googleusercontent.com/-FjPvDhj6l8U/VIi8kORfRiI/AAAAAAAAJwM/QTNXVoK8LjQ/s0/natal_gnomos.png", "titulo": "natal-gnomos" },
        { "url": "https://lh6.googleusercontent.com/-C58hIffrLyI/VIi8kLuleyI/AAAAAAAAJwU/X0XrmbwOPIM/s0/natal_hohoho.png", "titulo": "natal-hohoho" },
        { "url": "https://lh4.googleusercontent.com/-uch97_7gE-s/VB2aKlPM-rI/AAAAAAAADi0/uMrd-6nbMO0/s0/natal_presentes_moldura_vidro.png", "titulo": "natal-presentes-moldura-vidro" },
        { "url": "https://lh4.googleusercontent.com/-KuTW_vP9gJQ/VB2aKzeXXlI/AAAAAAAADiw/ufb34RxLIks/s0/natal_simpsons.png", "titulo": "natal-simpsons" },
        { "url": "https://lh4.googleusercontent.com/-uJtkisWnCjo/VB2aLmSomkI/AAAAAAAADi8/WlAkxlm3zH8/s0/natal_vermelho_bolas_douradas.png", "titulo": "natal-vermelho-bolas-douradas" },
        { "url": "https://lh3.googleusercontent.com/-_hWw91Nh_2c/VB2aHJNZR7I/AAAAAAAADiM/kVG4vjfVAhk/s0/natal2010pooh.png", "titulo": "natal-2010-pooh" },
        { "url": "https://lh6.googleusercontent.com/-z6iobT9GEMY/VB2aIIlIsfI/AAAAAAAADiY/qmgvByJ-CBc/s0/natal2011.png", "titulo": "natal-2011" },
        { "url": "https://lh5.googleusercontent.com/-kI8akYAR4OY/VB2aIu1JVQI/AAAAAAAADic/-gCuAAWhrh8/s0/natalDourado.png", "titulo": "natal-Dourado" },
        { "url": "https://lh6.googleusercontent.com/-_8dNX6OR9rc/VB2ZvAtAusI/AAAAAAAADec/jqewE0838CU/s0/NatalMickey2012.png", "titulo": "Natal-Mickey-2012" },
        { "url": "https://lh4.googleusercontent.com/-3m40GJaxe5M/VB2aMn3gkJI/AAAAAAAADjQ/1TcrlJm8IBw/s0/noel_biscoito.png", "titulo": "noel-biscoito" },
        { "url": "https://lh5.googleusercontent.com/-8MLzRW9AApQ/VB2aMgbZByI/AAAAAAAADjI/t1_SmWfAXvY/s0/noiteNatal.png", "titulo": "noite-Natal" },
        { "url": "https://lh4.googleusercontent.com/-ercdgscitt4/VB2aNtS8nYI/AAAAAAAADjU/QfqyuZlIUfw/s0/papai_noel.png", "titulo": "papai-noel" },
        { "url": "https://lh4.googleusercontent.com/-Z78yK5NSd2U/VB2aOrNQukI/AAAAAAAADjg/le9hy1wJB_g/s0/papai_noel_presente.png", "titulo": "papai-noel-presente" },
        { "url": "https://lh4.googleusercontent.com/-n0PWpl5DVUU/VB2aOStBEAI/AAAAAAAADjo/qWrBInQBitA/s0/papai_noel_treno.png", "titulo": "papai-noel-treno" },
        { "url": "https://lh4.googleusercontent.com/-2h-8zv5omSU/VB2ZvFY-pBI/AAAAAAAADeU/CW_6NPeY_5k/s0/PapaiNoelTrenoRenaPresentes.png", "titulo": "Papai-Noel-Treno-Rena-Presentes" },
        { "url": "https://lh6.googleusercontent.com/-ctyYETKpu0I/VB2aPUT3wUI/AAAAAAAADjs/p_1nW46X1d0/s0/sinos.png", "titulo": "sinos" },
        { "url": "https://lh3.googleusercontent.com/-M-VXP5glN_M/VB2aQlMLVpI/AAAAAAAADj0/_hr_Uwzvwec/s0/ursinhovermelho.png", "titulo": "ursinho-vermelho" }
    ];


    // --- Referências aos Elementos ---
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    // const downloadLink = document.getElementById('download-link'); // REMOVIDO
    const closeButton = modal.querySelector('.close-button');
    const prevButton = modal.querySelector('.nav-button.prev');
    const nextButton = modal.querySelector('.nav-button.next');
    // Nota: A referência ao container do AdSense não é necessária aqui,
    // a menos que você queira manipulá-lo via JS (o que geralmente não é o caso para AdSense).

    let currentImageIndex = 0; // Índice da imagem atualmente exibida no modal

    // --- Funções ---

    // Preenche a grade da galeria com as miniaturas
    function populateGallery() {
        gallery.innerHTML = '';
        imageData.forEach((imgData, index) => {
            const imgElement = document.createElement('img');
             try {
                // Tenta usar miniatura menor para carregamento mais rápido
                const thumbUrl = imgData.url.replace('=s0', '=s200');
                imgElement.src = thumbUrl;
            } catch (e) {
                imgElement.src = imgData.url; // Fallback
            }
            imgElement.alt = imgData.titulo;
            imgElement.dataset.index = index;
            imgElement.addEventListener('click', () => openModal(index));
            gallery.appendChild(imgElement);
        });
    }

    // Atualiza o conteúdo do modal (imagem, legenda)
    // Remove a lógica de download
    function updateModalContent(index) {
        if (index < 0 || index >= imageData.length) {
            console.error("Índice fora dos limites:", index);
            return;
        }
        const imgData = imageData[index];
        modalImage.src = imgData.url; // Carrega a imagem em resolução total
        modalImage.alt = imgData.titulo;
        modalCaption.textContent = imgData.titulo;

        // Lógica do link de download foi REMOVIDA

        currentImageIndex = index;

        // Mostra/oculta botões de navegação
        prevButton.classList.toggle('hidden', index === 0);
        nextButton.classList.toggle('hidden', index === imageData.length - 1);

        // IMPORTANTE PARA ADSENSE:
        // Se você estiver usando anúncios responsivos e precisar que eles se adaptem
        // ao abrir o modal (o que geralmente não é necessário se o código for colado diretamente),
        // talvez precise chamar alguma função de atualização do AdSense aqui.
        // Consulte a documentação do AdSense para casos avançados. Normalmente, colar
        // o código no HTML como indicado é suficiente.
    }

    // Função forceDownload foi REMOVIDA

    // Abre o modal com a imagem no índice especificado
    function openModal(index) {
        updateModalContent(index);
        modal.style.display = 'flex';
        document.addEventListener('keydown', handleKeyboardNav);
    }

    // Fecha o modal
    function closeModal() {
        modal.style.display = 'none';
        document.removeEventListener('keydown', handleKeyboardNav);
    }

    // Mostra a imagem anterior no modal
    function showPreviousImage() {
        if (currentImageIndex > 0) {
            updateModalContent(currentImageIndex - 1);
        }
    }

    // Mostra a próxima imagem no modal
    function showNextImage() {
        if (currentImageIndex < imageData.length - 1) {
            updateModalContent(currentImageIndex + 1);
        }
    }

    // Lida com a navegação por teclado
    function handleKeyboardNav(event) {
        if (event.key === 'Escape') {
            closeModal();
        } else if (event.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (event.key === 'ArrowRight') {
            showNextImage();
        }
    }

    // --- Ouvintes de Eventos ---
    closeButton.addEventListener('click', closeModal);
    prevButton.addEventListener('click', showPreviousImage);
    nextButton.addEventListener('click', showNextImage);

    // Ouvinte de evento para o link de download foi REMOVIDO

    // Opcional: Fecha o modal se clicar no fundo
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- Inicialização ---
    populateGallery();

}); // Fim do DOMContentLoaded
   
        // Criando o gráfico de barras
        new Chart(document.getElementById("bar-chart4"), {
            // Tipo de gráfico: barra
            type: 'bar',
            // Dados do gráfico
            data: {
                // Rótulos para as barras
                labels: ["Vertex Motors", "Horizon Automotive", "Nexus Motors", "Quantum Motors", "NovaDrive Automotive"],
                // Conjuntos de dados
                datasets: [{
                    // Rótulo do conjunto de dados
                    label: "Produção por Montadora (Freios)",                    
                    // Cores de fundo das barras
                    backgroundColor: ["#c0c0c0", "#7ba05b", "#f08080", "#120a8f", "#2b5353"],
                    // Dados das barras
                    data: [3580, 1267, 734, 3850, 1200]
                }]
            },
            // Opções do gráfico
            options: {
                // Configurações da legenda
                legend: {
                    display: false
                },
                // Configurações do título
                title: {
                    // Exibir o título
                    display: true,
                    // Texto do título
                    text: ''
                }
            }
        });
  
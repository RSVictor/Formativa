   
        // Criando o gráfico de barras
        new Chart(document.getElementById("bar-chart"), {
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
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    // Dados das barras
                    data: [6478, 3267, 734, 4784, 1433]
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
  
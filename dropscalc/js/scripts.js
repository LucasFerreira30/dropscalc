function calcAmplictil(drops) {
  var resultadoElement = document.getElementById('resultado');
  let resultado = '';
  
  document.addEventListener("keypress", function(e){ 

    if(e.key ==="Enter") {

        const btn = document.querySelector("#button-calc");

        btn.click();

    }
  });  

  
  if (typeof drops === 'undefined') {
      resultadoElement.textContent = 'Resultado para 30 dias:';
  } else {
      const dropsMes = drops * 30;

      resultado += `QUANTIDADE DIARIA DE USO DO PACIENTE: ${drops.toFixed(1)} gotas por dia<br>`;
      resultado += `QUANTIDADE DIARIA UI EM ML: ${(drops / 100).toFixed(2)}ml <br>`;
      resultado += `QUANTIDADE EM 30 DIAS: ${drops.toFixed(1)} gotas por mes<br>`;
      resultado +=
          'Verifique lote e validade antes de dispensar.';

      // Tabelas
      if (drops < 1) {
          resultado += 'Valor nulo, verifique novamente a posologia';
      } else if (drops < 14) {
          resultado += 'Para 30 dias dispensar 1 frasco.\nPara 60 dias dispensar 2 frascos.';
      }
  }

  document.getElementById('dropsInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o envio do formulário padrão (se houver)
        calcular();
    }
});


  resultadoElement.innerHTML = resultado;
};

        // Adicione um evento de clique ao botão usando JavaScript
        document.getElementById('button-calc').addEventListener('click', function() {
            // Obtenha o valor das gotas do input
            var dropsValue = parseFloat(document.getElementById('dropsInput').value);
      
            // Verifique se o valor é válido antes de chamar a função
            if (!isNaN(dropsValue)) {
                calcRivotril(dropsValue);
            } else {
                alert('O campo para inserção da posologia está em branco. Insira a posologia diária.');
            }
        });
      
        // Função calcRivotril com a lógica
        function calcRivotril(drops) {
            var resultadoElement = document.getElementById('resultado');
            let resultado = '';
      
            if (typeof drops === 'undefined') {
                resultadoElement.textContent = 'Resultado para 30 dias:';
            } else {
                const dropsMes = drops * 30;
                
                if (drops > 0) {
                resultado += `Quantidade diária: ${drops.toFixed(1)} gotas por dia<br>`;
                resultado += `Quantidade em mL diária: ${(drops / 25).toFixed(2)}ml <br>`;
                resultado += `Quantidade em 30 dias: ${(drops * 30 / 25).toFixed(1)}ml<br>`;
                resultado += `Quantidade em 60 dias: ${(drops * 60 / 25).toFixed(1)}ml<br>`;
                    'Verifique lote e validade antes de dispensar.';
                } 
                // Tabelas
                
                if (drops < 1) {
                    resultado += '<center>ATENÇÃO!<br>Valor nulo, verifique o valor inserido no sistema.</center>';
                } else if (drops < 9) {
                    resultado += 'Para até 60 dias de tratamento dispensar 1 frasco.';
                } else if (drops < 17) {
                    resultado += 'Para até 60 dias de tratamento dispensar 2 frascos.'
                } else if (drops < 26) {
                    resultado += 'Para até 60 dias de tratamento dispensar 3 frascos.'
                } else if (drops < 34) {
                    resultado += 'Para até 60 dias de tratamento dispensar 4 frascos.'
                } else if (drops < 42) {
                    resultado += 'Para até 60 dias de tratamento dispensar 5 frascos.'
                } else if (drops < 51) {
                    resultado += 'Para até 60 dias de tratamento dispensar 6 frascos.'
                } else if (drops < 59) {
                    resultado += 'Para até 60 dias de tratamento dispensar 7 frascos.'
                } else if (drops < 67) {
                    resultado += 'Para até 60 dias de tratamento dispensar 8 frascos.'
                } else if (drops < 76) {
                    resultado += 'Para até 60 dias de tratamento dispensar 9 frascos.'
                } else if (drops < 200) {
                    resultado += 'Excede a posologia máxima, verifique com o farmacêutico'
                }
            }
      
            resultadoElement.innerHTML = resultado;
        }

        // Adicione um evento de clique ao botão usando JavaScript
        document.getElementById('button-calc').addEventListener('click', function() {
            // Obtenha o valor das gotas do input
            var dropsValue = parseFloat(document.getElementById('dropsInput').value);
      
            // Verifique se o valor é válido antes de chamar a função
            if (!isNaN(dropsValue)) {
                calcHaldol(dropsValue);
            } else {
                alert('O campo para inserção da posologia está em branco. Insira a posologia diária.');
            }
        });
      
        // Função calcRivotril com a lógica que você forneceu
        function calcHaldol(drops) {
            var resultadoElement = document.getElementById('resultado');
            let resultado = '';
      
            if (typeof drops === 'undefined') {
                resultadoElement.textContent = 'Resultado para 30 dias:';
            } else {
                const dropsMes = drops * 30;
                
                if (drops > 0) {
                resultado += `Quantidade diária: ${drops.toFixed(1)} gotas por dia<br>`;
                resultado += `Quantidade em mL diária: ${(drops / 20).toFixed(2)}ml <br>`;
                resultado += `Quantidade em 30 dias: ${(drops * 30 / 20).toFixed(1)}ml<br>`;
                resultado += `Quantidade em 60 dias: ${(drops * 60 / 20).toFixed(1)}ml<br>`;
                    'Verifique lote e validade antes de dispensar.';
                } 
                // Tabelas
                
                if (drops < 1) {
                    resultado += '<center>ATENÇÃO!<br>Valor nulo, verifique o valor inserido no sistema.</center>';
                } else if (drops < 11) {
                    resultado += 'Para até 60 dias de tratamento dispensar 1 frasco.';
                } else if (drops < 21) {
                    resultado += 'Para até 60 dias de tratamento dispensar 2 frascos.'
                } else if (drops < 31) {
                    resultado += 'Para até 60 dias de tratamento dispensar 3 frascos.'
                } else if (drops < 41) {
                    resultado += 'Para até 60 dias de tratamento dispensar 4 frascos.'
                } else if (drops < 51) {
                    resultado += 'Para até 60 dias de tratamento dispensar 5 frascos.'
                } else if (drops < 61) {
                    resultado += 'Para até 60 dias de tratamento dispensar 6 frascos.'
                } else if (drops < 71) {
                    resultado += 'Para até 60 dias de tratamento dispensar 7 frascos.'
                } else if (drops < 81) {
                    resultado += 'Para até 60 dias de tratamento dispensar 8 frascos.'
                } else if (drops < 91) {
                    resultado += 'Para até 60 dias de tratamento dispensar 9 frascos.'
                } else if (drops < 200) {
                    resultado += 'Excede a posologia máxima, verifique com o farmacêutico'
                }
            }
      
            resultadoElement.innerHTML = resultado;
            
        }


        // Adicione um evento de clique ao botão usando JavaScript
        document.getElementById('button-calc').addEventListener('click', function() {
            // Obtenha o valor das gotas do input
            var dropsValue = parseFloat(document.getElementById('dropsInput').value);
      
            // Verifique se o valor é válido antes de chamar a função
            if (!isNaN(dropsValue)) {
                calcGardenal(dropsValue);
            } else {
                alert('O campo para inserção da posologia está em branco. Insira a posologia diária.');
            }
        });
      
        // Função calcRivotril com a lógica que você forneceu
        function calcGardenal(drops) {
            var resultadoElement = document.getElementById('resultado');
            let resultado = '';
      
            if (typeof drops === 'undefined') {
                resultadoElement.textContent = 'Resultado para 30 dias:';
            } else {
                const dropsMes = drops * 30;
                
                if (drops > 0) {
                resultado += 'Medicamento anticonvulsivante, pode ser liberado até 180 dias de tratamento<br>';    
                resultado += `Quantidade diária: ${drops.toFixed(1)} gotas por dia<br>`;
                resultado += `Quantidade em mL diária: ${(drops / 40).toFixed(2)}ml <br>`;
                resultado += `Quantidade em 30 dias: ${(drops * 30 / 40).toFixed(1)}ml<br>`;
                resultado += `Quantidade em 60 dias: ${(drops * 60 / 40).toFixed(1)}ml<br>`;
                    

                } 
                // Tabelas
                
                if (drops < 1) {
                    resultado += '<center>ATENÇÃO!<br>Valor nulo, verifique o valor inserido no sistema.</center>';
                } else if (drops < 5) {
                    resultado += 'Para até 180 dias de tratamento dispensar 1 frasco.';
                } else if (drops < 9) {
                    resultado += 'Para até 180 dias de tratamento dispensar 2 frascos.'
                } else if (drops < 14) {
                    resultado += 'Para até 180 dias de tratamento dispensar 3 frascos.'
                } else if (drops < 18) {
                    resultado += 'Para até 180 dias de tratamento dispensar 4 frascos.'
                } else if (drops < 23) {
                    resultado += 'Para até 180 dias de tratamento dispensar 5 frascos.'
                } else if (drops < 27) {
                    resultado += 'Para até 180 dias de tratamento dispensar 6 frascos.'
                } else if (drops < 32) {
                    resultado += 'Para até 180 dias de tratamento dispensar 7 frascos.'
                } else if (drops < 36) {
                    resultado += 'Para até 180 dias de tratamento dispensar 8 frascos.'
                } else if (drops < 41) {
                    resultado += 'Para até 180 dias de tratamento dispensar 9 frascos.'
                } else if (drops < 200) {
                    resultado += 'Posologia acima do esperado, verifique com o farmacêutico'
                }
            }
      
            resultadoElement.innerHTML = resultado;
            
        }

        // Adicione um evento de clique ao botão usando JavaScript
        document.getElementById('button-calc').addEventListener('click', function() {
            // Obtenha o valor das gotas do input
            var dropsValue = parseFloat(document.getElementById('dropsInput').value);
      
            // Verifique se o valor é válido antes de chamar a função
            if (!isNaN(dropsValue)) {
                calcRivotril(dropsValue);
            } else {
                alert('O campo para inserção da posologia está em branco. Insira a posologia diária.');
            }
        });
      
        // Função calcRivotril com a lógica que você forneceu
        function calcRivotril(drops) {
            var resultadoElement = document.getElementById('resultado');
            let resultado = '';
      
            if (typeof drops === 'undefined') {
                resultadoElement.textContent = 'Resultado para 30 dias:';
            } else {
                const dropsMes = drops * 30;
                
                if (drops > 0) {
                resultado += `Quantidade diária: ${drops.toFixed(1)} gotas por dia<br>`;
                resultado += `Quantidade em mL diária: ${(drops / 20).toFixed(2)}ml <br>`;
                resultado += `Quantidade em 30 dias: ${(drops * 30 / 20).toFixed(1)}ml<br>`;
                resultado += `Quantidade em 60 dias: ${(drops * 60 / 20).toFixed(1)}ml<br>`;
                    'Verifique lote e validade antes de dispensar.';
                } 
                // Tabelas
                
                if (drops < 1) {
                    resultado += '<center>ATENÇÃO!<br>Valor nulo, verifique o valor inserido no sistema.</center>';
                } else if (drops < 7) {
                    resultado += 'Para até 60 dias de tratamento dispensar 1 frasco.';
                } else if (drops < 14) {
                    resultado += 'Para até 60 dias de tratamento dispensar 2 frascos.'
                } else if (drops < 21) {
                    resultado += 'Para até 60 dias de tratamento dispensar 3 frascos.'
                } else if (drops < 27) {
                    resultado += 'Para até 60 dias de tratamento dispensar 4 frascos.'
                } else if (drops < 34) {
                    resultado += 'Para até 60 dias de tratamento dispensar 5 frascos.'
                } else if (drops < 41) {
                    resultado += 'Para até 60 dias de tratamento dispensar 6 frascos.'
                } else if (drops < 47) {
                    resultado += 'Para até 60 dias de tratamento dispensar 7 frascos.'
                } else if (drops < 54) {
                    resultado += 'Para até 60 dias de tratamento dispensar 8 frascos.'
                } else if (drops < 61) {
                    resultado += 'Para até 60 dias de tratamento dispensar 9 frascos.'
                } else if (drops < 200) {
                    resultado += 'Excede a posologia máxima, verifique com o farmacêutico'
                }
            }
      
            resultadoElement.innerHTML = resultado;
            
        }

         // Função calcAmplictil com a lógica que você forneceu
         function calcAmplictil(drops) {
            var resultadoElement = document.getElementById('resultado');
            let resultado = '';
      
            if (typeof drops === 'undefined') {
                resultadoElement.textContent = 'Resultado para 30 dias:';
            } else {
                const dropsMes = drops * 30;
                
                if (drops > 0) {
                resultado += `Quantidade diária: ${drops.toFixed(1)} gotas por dia<br>`;
                resultado += `Quantidade em mL diária: ${(drops / 40).toFixed(2)}ml <br>`;
                resultado += `Quantidade em 30 dias: ${(drops * 30 / 40).toFixed(1)}ml<br>`;
                resultado += `Quantidade em 60 dias: ${(drops * 60 / 40).toFixed(1)}ml<br>`;
                    'Verifique lote e validade antes de dispensar.';
                } 
                // Tabelas
                
                if (drops < 1) {
                    resultado += '<center>ATENÇÃO!<br>Valor nulo, verifique o valor inserido no sistema.</center>';
                } else if (drops < 14) {
                    resultado += 'Para até 60 dias de tratamento dispensar 1 frasco.';
                } else if (drops < 27) {
                    resultado += 'Para até 60 dias de tratamento dispensar 2 frascos.'
                } else if (drops < 41) {
                    resultado += 'Para até 60 dias de tratamento dispensar 3 frascos.'
                } else if (drops < 54) {
                    resultado += 'Para até 60 dias de tratamento dispensar 4 frascos.'
                } else if (drops < 67) {
                    resultado += 'Para até 60 dias de tratamento dispensar 5 frascos.'
                } else if (drops < 81) {
                    resultado += 'Para até 60 dias de tratamento dispensar 6 frascos.'
                } else if (drops < 94) {
                    resultado += 'Para até 60 dias de tratamento dispensar 7 frascos.'
                } else if (drops < 107) {
                    resultado += 'Para até 60 dias de tratamento dispensar 8 frascos.'
                } else if (drops < 121) {
                    resultado += 'Para até 60 dias de tratamento dispensar 9 frascos.'
                } else if (drops < 200) {
                    resultado += 'Excede a posologia máxima, verifique com o farmacêutico'
                }
            }
      
            resultadoElement.innerHTML = resultado;
            
        }
        
        
        // Função calcRivotril com a lógica que você forneceu
        function calcLexapro(drops) {
            var resultadoElement = document.getElementById('resultado');
            let resultado = '';
      
            if (typeof drops === 'undefined') {
                resultadoElement.textContent = 'Resultado para 30 dias:';
            } else {
                const dropsMes = drops * 30;
                
                if (drops > 0) {
                resultado += `Quantidade diária: ${drops.toFixed(1)} gotas por dia<br>`;
                resultado += `Quantidade em mL diária: ${(drops / 20).toFixed(2)}ml <br>`;
                resultado += `Quantidade em 30 dias: ${(drops * 30 / 20).toFixed(1)}ml<br>`;
                resultado += `Quantidade em 60 dias: ${(drops * 60 / 20).toFixed(1)}ml<br>`;
                    

                } 
                // Tabelas
                
                if (drops < 1) {
                    resultado += '<center>ATENÇÃO!<br>Valor nulo, verifique o valor inserido no sistema.</center>';
                } else if (drops < 6) {
                    resultado += 'Para até 60 dias de tratamento dispensar 1 frasco.';
                } else if (drops < 11) {
                    resultado += 'Para até 60 dias de tratamento dispensar 2 frascos.'
                } else if (drops < 16) {
                    resultado += 'Para até 60 dias de tratamento dispensar 3 frascos.'
                } else if (drops < 21) {
                    resultado += 'Para até 60 dias de tratamento dispensar 4 frascos.'
                } else if (drops < 26) {
                    resultado += 'Para até 60 dias de tratamento dispensar 5 frascos.'
                } else if (drops < 31) {
                    resultado += 'Para até 60 dias de tratamento dispensar 6 frascos.'
                } else if (drops < 36) {
                    resultado += 'Para até 60 dias de tratamento dispensar 7 frascos.'
                } else if (drops < 41) {
                    resultado += 'Para até 60 dias de tratamento dispensar 8 frascos.'
                } else if (drops < 46) {
                    resultado += 'Para até 60 dias de tratamento dispensar 9 frascos.'
                } else if (drops < 200) {
                    resultado += 'Posologia acima do esperado, verifique com o farmacêutico'
                }
            }
      
            resultadoElement.innerHTML = resultado;
            
        }

        //search medicines...

        
        function search() {
            // Obtém o valor da barra de pesquisa
            var input = document.getElementById('searchbar');
            var filter = input.value.toUpperCase();
    
            // Obtém todas as opções do menu
            var menuItems = document.getElementsByClassName('medicine');
    
            // Variável para rastrear se algum item foi encontrado
            var found = false;
    
            // Itera sobre as opções do menu e exibe apenas aquelas que correspondem à pesquisa
            for (var i = 0; i < menuItems.length; i++) {
                var menuItem = menuItems[i];
                var textContent = menuItem.textContent || menuItem.innerText;
    
                if (textContent.toUpperCase().indexOf(filter) > -1) {
                    menuItem.style.display = '';
                    found = true;
                } else {
                    menuItem.style.display = 'none';
                }
            }
    
            // Exibe a mensagem se nenhum item for encontrado
            var searchMessage = document.getElementById('searchMessage');
            if (!found) {
                searchMessage.textContent = 'MEDICAMENTO NÃO ENCONTRADO: ' + filter;
            } else {
                searchMessage.textContent = ''; // Limpa a mensagem se houver resultados
            }
        }
    
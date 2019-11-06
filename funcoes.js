function calcEqua(){
    var a = Number(document.all['a'].value)
    var b = Number(document.all['b'].value)
    var c = Number(document.all['c'].value)
    var pResposta = document.all['resposta']
    pResposta.innerHTML = ""

    delta = (b * b) - (4 * a * c)

    if (delta > 0){
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)
        pResposta.innerHTML += "As raizes da equação são:<br> x¹ = " + x1.toFixed(2) + ";<br> x² = " + x2.toFixed(2) + ".<br>"  
    } else if (delta == 0){
        x1 = (-b) / (2 * a)
        pResposta.innerHTML += "A raiz da equação é:<br> x¹ = " + x1.toFixed(2) + "."
    } else {
        pResposta.innerHTML += "Não existe raiz para equação informada."
    }
}

function mediaPonderada() {
    var tp = Number(document.all['tp'].value)
    var avs = Number(document.all['avs'].value)
    var ef = Number(document.all['ef'].value)
    var pResposta = document.all['resposta']
    pResposta.innerHTML = ""
    if (tp < 0 || avs < 0 || ef < 0 || tp > 10 || avs > 10 || ef > 10 ){
        pResposta.innerHTML += "Todas as notas devem estar entre 0 e 10."
        pResposta.style.color = "red"
    } else {
        media = ((tp * 2) + (avs * 3) + (ef * 5)) / 10
        pResposta.innerHTML += "Sua média é " + media.toFixed(1) + ".<br>"
        if (media >= 8) pResposta.innerHTML += "Conceito A"
        else if (media >= 7) pResposta.innerHTML += "Conceito B"
        else if (media >= 6) pResposta.innerHTML += "Conceito C"
        else if (media >= 5) pResposta.innerHTML += "Conceito D"
        else pResposta.innerHTML += "Conceito E"
    }        
}

function calcularTudo() {
    var escolha = document.all['escolha'].value
    var pResposta = document.all['resposta']
    pResposta.innerHTML = ""
    switch (escolha){
        case 'somar': 
            pResposta.innerHTML += '<p>Insira o primeiro número:<input type="text" id="n1"></p><p>Insira o segundo número: <input type="text" id="n2"></p><p><input type="button" value="Calcular" onclick="calcSoma()"></p>'
            break
        case 'raiz': 
            pResposta.innerHTML +='<p>Insira um número:<input type="text" id="n1"></p><p><input type="button" value="Calcular" onclick="calcRaiz()"></p>'
    }
}


function calcSoma(){
    var n1 = Number(document.all['n1'].value)
    var n2 = Number(document.all['n2'].value)
    var pResultado = document.all['resultado']
    pResultado.innerHTML = ""

    soma = n1 + n2
    pResultado.innerHTML += "A soma de " + n1 + " com " + n2 + " é: " + soma + "."
}


function calcRaiz(){
    var n1 = Number(document.all['n1'].value)
    var pResultado = document.all['resultado']
    pResultado.innerHTML = ""

    raiz = Math.sqrt(n1)
    pResultado.innerHTML += "A raiz quadrada de " + n1 + " é: " + raiz + "."
}

function ordenaNum() {
    var a = Number(document.all['a'].value)
    var b = Number(document.all['b'].value)
    var c = Number(document.all['c'].value)
    var pResposta = document.all['resposta']
    pResposta.innerHTML = ""
    if (a > b && a > c){
        if (b > c) pResposta.innerHTML += c + ", " + b + ", " + a + "."
        else pResposta.innerHTML += b + ", " + c + ", " + a + "."
    } else if (b > a && b > c){
        if (a > c) pResposta.innerHTML += c + ", " + a + ", " + b + "."
        else pResposta.innerHTML += a + ", " + c + ", " + b + "."
    } else {
        if (a > b) pResposta.innerHTML += b + ", " + a + ", " + c + "."
        else pResposta.innerHTML += a + ", " + b + ", " + c + "."
    }
}   

function calcData(){
    var dia1 = Number(document.all['dia1'].value)
    var mes1 = Number(document.all['mes1'].value)
    var ano1 = Number(document.all['ano1'].value)
    var dia2 = Number(document.all['dia2'].value)
    var mes2 = Number(document.all['mes2'].value)
    var ano2 = Number(document.all['ano2'].value)
    var pResposta = document.all['resposta']
    pResposta.innerHTML = ""

    if (ano1 > ano2){
        pResposta.innerHTML += dia2 + "/" + mes2 + "/" + ano2 + " é a maior data cronologicamente."
    } else if (ano1 < ano2){
        pResposta.innerHTML += dia1 + "/" + mes1 + "/" + ano1 + " é a maior data cronologicamente."
    } else {
        if (mes1 > mes2){
            pResposta.innerHTML += dia2 + "/" + mes2 + "/" + ano2 + " é a maior data cronologicamente."
        } else if (mes1 < mes2) {
            pResposta.innerHTML += dia1 + "/" + mes1 + "/" + ano1 + " é a maior data cronologicamente."
        } else {
            if (dia1 > dia2) {
                pResposta.innerHTML += dia1 + "/" + mes1 + "/" + ano1 + " é a maior data cronologicamente."
            } else if (dia1 < dia2){
                pResposta.innerHTML += dia1 + "/" + mes1 + "/" + ano1 + " é a maior data cronologicamente."
            } else {
                pResposta.innerHTML += "As datas são identicas."
                pResposta.style.color = "red"
            }
        }
    }

}

function enviaSalario() {
    var sal = Number(document.all['salario'].value)
    if (sal < 0) {
        alert('Salário Inválido')
        return 
    }
    salarios.push(sal)
    if (sal < 500) {
        bon = sal * 0.05
        novoSal = sal + bon
    } else if (sal < 1200) {
        bon = sal * 0.12
        novoSal = sal + bon
    } else {
        novoSal = sal
    }
    if (novoSal < 600) {
        novoSal += 150
    } else {
        novoSal += 100
    }
    novos_salarios.push(novoSal)
    c += 1
    pResposta.innerHTML = ` ${salarios.length} salarios cadastrados. `
    if (c == 25) {
        pResposta.innerHTML = "Ja foram cadastrados os 25 salários."
        pEnviar.innerHTML = ''
        for (var i = 0; i < novos_salarios.length; i++)
            pEnviar.innerHTML += `O ${i+1}º salário que era de R$${salarios[i].toFixed(2)}, agora fica no valor de:  R$${novos_salarios[i].toFixed(2)}<br> ` 
    }
}

function calculaPrimo(){
    var num = Number(document.all['num'].value)
    var pResposta = document.all['resposta']
    var cont = 0
    pResposta.innerHTML =""
    for (var i = num; i >= 1; i--){
        if (num % i == 0){
            cont += 1
        }
    }
    if (cont == 2) {
        pResposta.innerHTML += "O número " + num + " é um número primo."
        pResposta.style.color = "green"
    } else {
        pResposta.innerHTML += "O número " + num + " NÃO é um número primo."
        pResposta.style.color = "red"
    }
}

function fatorial() {
    var fat = Number(document.all['fat'].value)
    var resp = Number(fat)
    var pResposta = document.all['resposta']
    pResposta.innerHTML = fat

    for (var i = fat; i >= 2; i--){
        pResposta.innerHTML += " * " + (i -1)
        resp *= i-1 
    }
    pResposta.innerHTML += " = " + resp
}

function fibonacci() {
    var quant = Number(document.all['quant'].value)
    var pResposta = document.all['resposta']
    pResposta.innerHTML = "1"
    var t1 = Number(0)
    var t2 = Number(1)

    for (var i = 1; i <= quant-1; i++){
        s = t1 + t2
        pResposta.innerHTML += ", " + s
        t1 = t2
        t2 = s
    }
}

function enviaVinho() {
    var v = Number(document.all['selecao'].value)
    if (v < 1 || v > 3) {
        alert('Número inválido. Digite apenas 1, 2 ou 3.')
        return 
    }
    vinhos.push(v)
    pResposta.innerHTML = ` ${vinhos.length} vinhos cadastrados. `
    if (vinhos.length >= 50) {
        pResposta.innerHTML = "Ja foram cadastrados os 50 vinhos."
        pEnviar.innerHTML = ''
        pFormulario.innerHTML = ''
        contaVinhos(vinhos)
    }
}

function contaVinhos(vinhos) {
    var tinto = 0
    var branco = 0
    var rose = 0
    for (var i = 0; i < vinhos.length; i++) {
        if (vinhos[i] == 1) {
            tinto += 1
        } else if (vinhos[i] == 2) {
            branco += 1
        } else if (vinhos[i] == 3) {
            rose += 1
        }  
    }
    pResposta.innerHTML = `Dos 50 vinhos cadastrados: ${tinto} Tintos (${((tinto / 50) * 100).toFixed(2)}%); 
    ${branco} Brancos(${((branco / 50) * 100).toFixed(2)}%); 
    ${rose} Rosês(${((rose / 50) * 100).toFixed(2)}%);  `
}

function negativosEPositivos() {
    num = Number(document.all['num'].value)
    if (!!isNaN(num)) {
        alert("Por favor, insira apenas números.")
        return
    } else {
        vet.push(num)
        pResposta.innerHTML = ` ${vet.length} número(s) cadastrado(s). `
        if (num >= 0) {
            vetPos.push(num)
            cPos += 1
        } else {
            vetNeg.push(num)
            cNeg += 1
        }
        c += 1
    }
    if (c == 8) {
        pEnviar.innerHTML = ''
        pEnviar.innerHTML += `Vetor Cadastrado: ${vet.join(", ")}<br>`
        pEnviar.innerHTML += `Números Positivos: ${vetPos.join(", ")}<br>`
        pEnviar.innerHTML += `Números Negativos: ${vetNeg.join(", ")}<br>`
        pResposta.innerHTML = ''
    }    
}

function maiorQue50() {
    num = Number(document.all['num'].value)
    if (!!isNaN(num)) {
        alert("Por favor, insira apenas números.")
        return
    } else {
        vet.push(num)
        if (num > 50) {
            cont += 1
        }
        pResposta.innerHTML = ` ${vet.length} número(s) cadastrado(s). `
        c += 1

        if (c == 8) {
            pEnviar.innerHTML = ''
            pEnviar.innerHTML += `Vetor Cadastrado: ${vet.join(", ")}<br>`
            if (cont == 0) {
                pEnviar.innerHTML += `Não foi digitado nenhum valor maior que 50.`
            } else {
                pEnviar.innerHTML += `Números acima de 50: `
                for (var i = 0; i < vet.length; i++) {
                    if (vet[i] > 50) {
                        pEnviar.innerHTML += `${vet[i]},  `
                    }
                }
            }
            pEnviar.innerHTML += `Números M: ${vetPos.join(", ")}<br>`
            pEnviar.innerHTML += `Números Negativos: ${vetNeg.join(", ")}<br>`
            pResposta.innerHTML = ''
        } 
        
    }
     
}

function vetorAlterado() {
    num = Number(document.all['num'].value)
    if (!!isNaN(num)) {
        alert("Por favor, insira apenas números.")
        return
    } else {
        vet.push(num)
        c += 1
        pResposta.innerHTML = ` ${vet.length} número(s) cadastrado(s). `
    }
    if (c == 10) {
        pEnviar.innerHTML = ''
        pResposta.innerHTML = ''
        pEnviar.innerHTML += `Vetor Cadastrado: ${vet.join(", ")}<br>`
        alteraVetor(vet)
    }
}
function alteraVetor(vetor) {
    for (var i = 0; i < vet.length; i++) {
        num = vetor[i]
        num += 5
        if (vetor[i] % 2 != 0) {
            num *= 5
        }
        vetAlt.push(num)
    }
    pEnviar.innerHTML += `Vetor Alterado: ${vetAlt.join(", ")}<br>`
}

function ordenaCrescente20() {
    var num = Number(document.all['num'].value)
    if (!!isNaN(num)) {
        alert("Por favor digite apenas números.")
        return
    } else {
        vet.push(num)
        c += 1
        pResposta.innerHTML = ` ${vet.length} número(s) cadastrado(s). `
    }
    if (c == 20) {
        pEnviar.innerHTML = ''
        pResposta.innerHTML = ''
        pEnviar.innerHTML += `Vetor Cadastrado: ${vet.join(", ")}<br>`
        for (let i = 0; i < 20; i ++) {
            for (let x = i + 1; x < 20; x++) {
                if (vet[i] > vet[x]) {
                    temp = vet[i]
                    vet[i] = vet[x]
                    vet[x] = temp
                }
            }
        }   
        pEnviar.innerHTML += `Vetor Ordenado: ${vet.join(", ")}<br>`
    }   
}

function cadastraAte100() {
    num = Number(document.all['num'].value)
    if (num == 0 || c == 100) {
        pEnviar.innerHTML = ''
        pResposta.innerHTML = ''
        ultimo = vet[c - 1]
        for (var i = 0; i < vet.length; i++) {
            if (vet[i] == ultimo) {
                cUlt += 1
            }
        }
        pEnviar.innerHTML += `Vetor Cadastrado: ${vet.join(", ")}<br>`
        pEnviar.innerHTML += `O Vetor tem ${vet.length} números cadastrados e o último número é ${ultimo}.<br>`
        pEnviar.innerHTML += `Foram digitados ${cUlt} valores iguais ao último número cadastrado.<br>`
    } else if (!!isNaN(num)) {
        alert("Por favor digite apenas números.")
        return
    } else {
        vet.push(num)
        c += 1
        pResposta.innerHTML = ` ${vet.length} número(s) cadastrado(s). `
    }
}
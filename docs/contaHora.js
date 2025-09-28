function CalculaResultado(multiplicador,segundos){
    return Math.floor(segundos/multiplicador);
}

function ConverteHoraParaSegundo(hora){
    return hora*60*60;
}

function ConverterMinutoParaSegundo(minuto){
    return minuto*60;
}

function ReConversao(segundos){
    let temp = segundos;
    horas = 0;
    minutos = 0;
    while(temp >= 60*60){
        horas += 1;
        temp -= 60*60;
    }
    while(temp >= 60){
        minutos += 1;
        temp -= 60;
    }
    return {
        tempo: `${horas}:${minutos}:${temp}`
    }
}


function RealizaAcao(event){
    event.preventDefault();

    const form = event.target;

    const hora = Number(form.hora.value);
    const minuto = Number(form.minuto.value);
    const segundo = Number(form.segundo.value);
    const multiplicador = form.multiplicador.value;

    const result = ReConversao(CalculaResultado(multiplicador,ConverteHoraParaSegundo(hora)+ConverterMinutoParaSegundo(minuto)+segundo))

    console.log(result.tempo);

    document.getElementById('retorno').innerHTML = geraHTML(result.tempo)

    //alert(result.tempo)
}

function geraHTML(tempo){
    return`
        <div>
            <p>O valor que deve ser retornado é ${tempo}</p>
        </div>
    ` 
}
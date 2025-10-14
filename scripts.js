

function calculate() {

    // carrega os dados dos inputs
    inicio_1 = document.getElementById('hora_i_1').value;
    inicio_2 = document.getElementById('hora_i_2').value;
    inicio_3 = document.getElementById('hora_i_3').value;
    inicio_4 = document.getElementById('hora_i_4').value;
    inicio_5 = document.getElementById('hora_i_5').value;
    fim_1 = document.getElementById('hora_f_1').value;
    fim_2 = document.getElementById('hora_f_2').value;
    fim_3 = document.getElementById('hora_f_3').value;
    fim_4 = document.getElementById('hora_f_4').value;
    fim_5 = document.getElementById('hora_f_5').value;
    console.log("------ loaded inputs -------");
    
    
    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;
    var p5 = 0;
    let totalHorasFracionadas = 0;
    
    if ((fim_1 !== null) && (fim_1 !== "")) {
        // let c1 = moment.utc(p1).format("HH:mm");
        // let c1 = ((c1.split(':')[1])*100)/600;

        p1 = moment(fim_1, "HH:mm").diff(moment(inicio_1, "HH:mm"));
        document.getElementById("tempo_1").setAttribute('value', moment.utc(p1).format("HH:mm"));
        
        let duration = moment.duration(p1);
        let hours = duration.hours();
        let minutes = duration.minutes();
        let horasFracionadas = hours + (minutes / 60);
        totalHorasFracionadas += horasFracionadas;
        document.getElementById("tempoFrac_1").setAttribute('value', horasFracionadas.toFixed(2));
    }
    
    if ((fim_2 !== null) && (fim_2 !== "")) {
        p2 = moment(fim_2, "HH:mm").diff(moment(inicio_2, "HH:mm"));
        document.getElementById("tempo_2").setAttribute('value', moment.utc(p2).format("HH:mm"));

        let duration = moment.duration(p2);
        let hours = duration.hours();
        let minutes = duration.minutes();
        let horasFracionadas = hours + (minutes / 60);
        totalHorasFracionadas += horasFracionadas;
        document.getElementById("tempoFrac_2").setAttribute('value', horasFracionadas.toFixed(2));
    }
    
    if ((fim_3 !== null) && (fim_3 !== "")) {
        p3 = moment(fim_3, "HH:mm").diff(moment(inicio_3, "HH:mm"));
        document.getElementById("tempo_3").setAttribute('value', moment.utc(p3).format("HH:mm"));

        let duration = moment.duration(p3);
        let hours = duration.hours();
        let minutes = duration.minutes();
        let horasFracionadas = hours + (minutes / 60);
        totalHorasFracionadas += horasFracionadas;
        document.getElementById("tempoFrac_3").setAttribute('value', horasFracionadas.toFixed(2));
    }
    
    if ((fim_4 !== null) && (fim_4 !== "")) {
        p4 = moment(fim_4, "HH:mm").diff(moment(inicio_4, "HH:mm"));
        document.getElementById("tempo_4").setAttribute('value', moment.utc(p4).format("HH:mm"));

        let duration = moment.duration(p4);
        let hours = duration.hours();
        let minutes = duration.minutes();
        let horasFracionadas = hours + (minutes / 60);
        totalHorasFracionadas += horasFracionadas;
        document.getElementById("tempoFrac_4").setAttribute('value', horasFracionadas.toFixed(2));
    }
    
    if ((fim_5 !== null) && (fim_5 !== "")) {
        p5 = moment(fim_5, "HH:mm").diff(moment(inicio_5, "HH:mm"));
        document.getElementById("tempo_5").setAttribute('value', moment.utc(p5).format("HH:mm"));

        let duration = moment.duration(p5);
        let hours = duration.hours();
        let minutes = duration.minutes();
        let horasFracionadas = hours + (minutes / 60);
        totalHorasFracionadas += horasFracionadas;
        document.getElementById("tempoFrac_5").setAttribute('value', horasFracionadas.toFixed(2));
    }

    
    let pz = Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5);
    pz = moment.utc(pz).format("HH:mm");
    document.getElementById("resultado").innerHTML = pz;


    let duration = moment.duration(pz);
    let hours = duration.hours();
    let minutes = duration.minutes();
    let horasFracionadas = hours + (minutes / 60);
    totalHorasFracionadas += horasFracionadas;
    document.getElementById("resultadoFrac").innerHTML = horasFracionadas.toFixed(2);



    let total =  moment.duration(pz).asMilliseconds();
    let horasTrabalho = moment.duration("08:00").asMilliseconds();
    let adicional;


    if(total >= horasTrabalho){
        adicional = total - horasTrabalho;
        document.getElementById("horasExtras").innerHTML = moment.utc(adicional).format("HH:mm");;
        document.getElementById("horasExtras").style.color = "green";

        let duration = moment.duration(adicional);
        let hours = duration.hours();
        let minutes = duration.minutes();
        let horasFracionadas = hours + (minutes / 60);
        totalHorasFracionadas += horasFracionadas;
        document.getElementById("horasExtrasFrac").innerHTML = horasFracionadas.toFixed(2);
        document.getElementById("horasExtrasFrac").style.color = "green";
        
    } else {
        adicional = horasTrabalho - total;
        document.getElementById("horasExtras").innerHTML = "- " + moment.utc(adicional).format("HH:mm");;
        document.getElementById("horasExtras").style.color = "red";

        let duration = moment.duration(adicional);
        let hours = duration.hours();
        let minutes = duration.minutes();
        let horasFracionadas = hours + (minutes / 60);
        totalHorasFracionadas += horasFracionadas;
        document.getElementById("horasExtrasFrac").innerHTML = horasFracionadas.toFixed(2);
        document.getElementById("horasExtrasFrac").style.color = "red";
    }


    console.log("------ calculated inputs ---------");

}
// document.querySelectorAll('#calculadoraHoras input').forEach(input => {
//     input.addEventListener('input', Somar_horas);
//   });

function clearInputs() {
    document.getElementById("hora_i_1").value = '';
    document.getElementById("hora_i_2").value = '';
    document.getElementById("hora_i_3").value = '';
    document.getElementById("hora_i_4").value = '';
    document.getElementById("hora_i_5").value = '';
    document.getElementById("hora_f_1").value = '';
    document.getElementById("hora_f_2").value = '';
    document.getElementById("hora_f_3").value = '';
    document.getElementById("hora_f_4").value = '';
    document.getElementById("hora_f_5").value = '';
    document.getElementById("tempo_1").value = '';
    document.getElementById("tempo_2").value = '';
    document.getElementById("tempo_3").value = '';
    document.getElementById("tempo_4").value = '';
    document.getElementById("tempo_5").value = '';
    document.getElementById("tempoFrac_1").value = '';
    document.getElementById("tempoFrac_2").value = '';
    document.getElementById("tempoFrac_3").value = '';
    document.getElementById("tempoFrac_4").value = '';
    document.getElementById("tempoFrac_5").value = '';
    document.getElementById('anotacoes_1').value = '';
    document.getElementById('anotacoes_2').value = '';
    document.getElementById('anotacoes_3').value = '';
    document.getElementById('anotacoes_4').value = '';
    document.getElementById('anotacoes_5').value = '';


    document.getElementById("resultado").innerHTML = "00:00";
    document.getElementById("resultadoFrac").innerHTML = "0.00";
    document.getElementById("horasExtras").innerHTML = "00:00";
    document.getElementById("horasExtras").style.color = "unset";
    document.getElementById("horasExtrasFrac").innerHTML = "0.00";
    document.getElementById("horasExtrasFrac").style.color = "unset";
    
    console.log("inputs limpos");
    console.log("-------- cleared inputs -------");
}



function loadStorage(){
    // carrega do storage
    let stg_inicio_1 = localStorage.getItem('stg_inicio_1');
    let stg_inicio_2 = localStorage.getItem('stg_inicio_2');
    let stg_inicio_3 = localStorage.getItem('stg_inicio_3');
    let stg_inicio_4 = localStorage.getItem('stg_inicio_4');
    let stg_inicio_5 = localStorage.getItem('stg_inicio_5');
    let stg_fim_1 = localStorage.getItem('stg_fim_1');
    let stg_fim_2 = localStorage.getItem('stg_fim_2');
    let stg_fim_3 = localStorage.getItem('stg_fim_3');
    let stg_fim_4 = localStorage.getItem('stg_fim_4');
    let stg_fim_5 = localStorage.getItem('stg_fim_5');
    let stg_anotacoes_1 = localStorage.getItem('stg_anotacoes_1');
    let stg_anotacoes_2 = localStorage.getItem('stg_anotacoes_2');
    let stg_anotacoes_3 = localStorage.getItem('stg_anotacoes_3');
    let stg_anotacoes_4 = localStorage.getItem('stg_anotacoes_4');
    let stg_anotacoes_5 = localStorage.getItem('stg_anotacoes_5');
    // console.log("storage carregado");

    // console.log("storage carregado 1: " + stg_inicio_1);
    
    // adiciona aos inputs
    document.getElementById('hora_i_1').value = stg_inicio_1;
    document.getElementById('hora_i_2').value = stg_inicio_2;
    document.getElementById('hora_i_3').value = stg_inicio_3;
    document.getElementById('hora_i_4').value = stg_inicio_4;
    document.getElementById('hora_i_5').value = stg_inicio_5;
    document.getElementById('hora_f_1').value = stg_fim_1;
    document.getElementById('hora_f_2').value = stg_fim_2;
    document.getElementById('hora_f_3').value = stg_fim_3;
    document.getElementById('hora_f_4').value = stg_fim_4;
    document.getElementById('hora_f_5').value = stg_fim_5;
    document.getElementById('anotacoes_1').value = stg_anotacoes_1;
    document.getElementById('anotacoes_2').value = stg_anotacoes_2;
    document.getElementById('anotacoes_3').value = stg_anotacoes_3;
    document.getElementById('anotacoes_4').value = stg_anotacoes_4;
    document.getElementById('anotacoes_5').value = stg_anotacoes_5;
    // console.log("storage aidiconado aos inputs");

    calculate();

    document.getElementById('carregar').innerHTML = 'Carregado!';
    setTimeout(() => { document.getElementById('carregar').innerHTML = 'Carregar'; }, 3000);

    console.log("------- loaded storage --------");
}


function saveStorage(){
    // carrega os dados dos inputs
    inicio_1 = document.getElementById('hora_i_1').value;
    inicio_2 = document.getElementById('hora_i_2').value;
    inicio_3 = document.getElementById('hora_i_3').value;
    inicio_4 = document.getElementById('hora_i_4').value;
    inicio_5 = document.getElementById('hora_i_5').value;
    fim_1 = document.getElementById('hora_f_1').value;
    fim_2 = document.getElementById('hora_f_2').value;
    fim_3 = document.getElementById('hora_f_3').value;
    fim_4 = document.getElementById('hora_f_4').value;
    fim_5 = document.getElementById('hora_f_5').value;
    anotacoes_1 = document.getElementById('anotacoes_1').value;
    anotacoes_2 = document.getElementById('anotacoes_2').value;
    anotacoes_3 = document.getElementById('anotacoes_3').value;
    anotacoes_4 = document.getElementById('anotacoes_4').value;
    anotacoes_5 = document.getElementById('anotacoes_5').value;
    // console.log("inputs carregado 1: " + inicio_1);

    // salva no localStorage
    localStorage.setItem('stg_inicio_1', inicio_1);
    localStorage.setItem('stg_inicio_2', inicio_2);
    localStorage.setItem('stg_inicio_3', inicio_3);
    localStorage.setItem('stg_inicio_4', inicio_4);
    localStorage.setItem('stg_inicio_5', inicio_5);
    localStorage.setItem('stg_fim_1', fim_1);
    localStorage.setItem('stg_fim_2', fim_2);
    localStorage.setItem('stg_fim_3', fim_3);
    localStorage.setItem('stg_fim_4', fim_4);
    localStorage.setItem('stg_fim_5', fim_5);
    localStorage.setItem('stg_anotacoes_1', anotacoes_1);
    localStorage.setItem('stg_anotacoes_2', anotacoes_2);
    localStorage.setItem('stg_anotacoes_3', anotacoes_3);
    localStorage.setItem('stg_anotacoes_4', anotacoes_4);
    localStorage.setItem('stg_anotacoes_5', anotacoes_5);
    // console.log("storage salvos - stg_inicio_1: " + localStorage.getItem('stg_inicio_1'));


    document.getElementById('salvar').innerHTML = 'Salvo!';
    setTimeout(() => { document.getElementById('salvar').innerHTML = 'Salvar'; }, 3000);


    console.log("------ saved storage ---------");
}
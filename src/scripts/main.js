AOS.init();

const dataDoEvento = new Date("May 25, 2024 22:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const TimeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - TimeStampAtual;

    const diaEmMs = 1000 * 60 * 60 *24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs =1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    console.log(diasAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `A festa foi top, nos vemos ano que vem`;
    }
}, 1000);
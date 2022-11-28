export default class CalcularPrecioRespuestaDto {
    placa: string
    fechaHoraEntrada: number
    fechaHoraSalida: number
    horasDeUso: number
    valorAPagar: number

    constructor(placa: string, fechaHoraEntra: number, fechaHoraSalida: number, horasDeUso: number, valorAPagar: number) {
        this.fechaHoraEntrada=fechaHoraEntra
        this.fechaHoraSalida=fechaHoraSalida
        this.placa=placa
        this.valorAPagar=valorAPagar
        this.horasDeUso=horasDeUso
    }

}
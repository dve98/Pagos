export default class Vehiculo {
    fechaHoraPago: number
    placa: string
    fechaHoraSalida: number
    sigueEnUso: boolean
    valorPagado: number
    fechaHoraEntrada: number
    tipoDeVehiculo: string
    idPago: number

    constructor(fechaHoraPago: number, placa: string, fechaHoraSalida: number, sigueEnUso: boolean, valorPagado: number, fechaHoraEntrada: number, tipoDeVehiculo: string, idPago: number) {

        this.fechaHoraPago = fechaHoraPago
        this.placa = placa
        this.fechaHoraSalida = fechaHoraSalida
        this.sigueEnUso = sigueEnUso
        this.valorPagado = valorPagado
        this.fechaHoraEntrada = fechaHoraEntrada
        this.tipoDeVehiculo = tipoDeVehiculo
        this.idPago = idPago
    }
}
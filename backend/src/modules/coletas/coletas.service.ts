import { Injectable, NotFoundException } from '@nestjs/common';
import { ColetasRepository } from './coletas.repository';
import { CreateColetaDto } from './dto/create-coletas.dto';
import { FilterColetasDto } from './dto/filter-coletas.dto';

@Injectable()
export class ColetasService {
  constructor(private readonly coletasRepository: ColetasRepository) {}

  async registrarColeta(dto: CreateColetaDto) {
    return this.coletasRepository.create(dto);
  }

  async listarHistorico(filtros: FilterColetasDto) {
    return this.coletasRepository.findMany(filtros);
  }

  async buscarPorId(id: number) {
    const coleta = await this.coletasRepository.findById(id);
    if (!coleta) {
      throw new NotFoundException(`Coleta com id ${id} não encontrada.`);
    }
    return coleta;
  }
}
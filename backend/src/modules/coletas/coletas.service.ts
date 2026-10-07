import { Injectable, NotFoundException } from '@nestjs/common';
import { ColetasRepository } from './coletas.repository';
import { CreateColetaDto } from './dto/create-coleta.dto';
import { FilterColetasDto } from './dto/filter-coleta.dto';

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
  async obterUltimaColetaValida(servicoId: number) {
    const ultimaColeta = await this.coletasRepository.findLatestSuccessful(servicoId);

    if (!ultimaColeta) {
      throw new NotFoundException(
        `Nenhuma coleta válida anterior encontrada para o serviço ID ${servicoId}`,
      );
    }

    return {
      fonte: 'CACHE_FALLBACK',
      mensagem: 'Dados recuperados da última coleta válida preservada',
      dados: ultimaColeta,
    };
  }
}
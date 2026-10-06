import { 
  Controller, 
  Post, 
  Get, 
  Body, 
  Query, 
  Param, 
  ParseIntPipe, 
  HttpCode, 
  HttpStatus 
} from '@nestjs/common';
import { ColetasService } from './coletas.service';
import { CreateColetaDto } from './dto/create-coletas.dto';
import { FilterColetasDto } from './dto/filter-coletas.dto';

@Controller('coletas')
export class ColetasController {
  constructor(private readonly coletasService: ColetasService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async criar(@Body() dto: CreateColetaDto) {
    return this.coletasService.registrarColeta(dto);
  }

  @Get()
  async listar(@Query() filtros: FilterColetasDto) {
    return this.coletasService.listarHistorico(filtros);
  }

  @Get(':id')
  async buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.coletasService.buscarPorId(id);
  }
}
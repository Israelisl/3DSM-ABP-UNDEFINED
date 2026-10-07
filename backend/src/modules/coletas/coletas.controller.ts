import { 
  Controller, 
  Post, 
  Get, 
  Body, 
  Query, 
  Param, 
  ParseIntPipe, 
  HttpCode, 
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ColetasService } from './coletas.service';
import { CreateColetaDto } from './dto/create-coleta.dto';
import { FilterColetasDto } from './dto/filter-coleta.dto';

@Controller('coletas')
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }),
)
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
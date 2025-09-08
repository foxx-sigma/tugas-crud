import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { SiswaService } from './siswa.service';
import type { Siswa } from './siswa.model';

@Controller('siswa')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Get()
  findAll(): Siswa[] {
    return this.siswaService.findAll();
  }

  @Get(':nisn')
  findOne(@Param('nisn') nisn: string): Siswa {
    return this.siswaService.findOne(nisn);
  }

  @Post()
  create(@Body() siswa: Siswa): Siswa {
    return this.siswaService.create(siswa);
  }

  @Put(':nisn')
  update(@Param('nisn') nisn: string, @Body() siswa: Partial<Siswa>): Siswa {
    return this.siswaService.update(nisn, siswa);
  }

  @Delete(':nisn')
  remove(@Param('nisn') nisn: string): { message: string } {
    this.siswaService.remove(nisn);
    return { message: `Siswa dengan NISN ${nisn} berhasil dihapus` };
  }
}

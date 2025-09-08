import { Injectable, NotFoundException } from '@nestjs/common';
import { Siswa } from './siswa.model';

@Injectable()
export class SiswaService {
  private siswa: Siswa[] = [];

  findAll(): Siswa[] {
    return this.siswa;
  }

  findOne(nisn: string): Siswa {
    const siswa = this.siswa.find((s) => s.nisn === nisn);
    if (!siswa)
      throw new NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
    return siswa;
  }

  create(newSiswa: Siswa): Siswa {
    this.siswa.push(newSiswa);
    return newSiswa;
  }

  update(nisn: string, updatedData: Partial<Siswa>): Siswa {
    const siswa = this.findOne(nisn);
    Object.assign(siswa, updatedData);
    return siswa;
  }

  remove(nisn: string): void {
    const index = this.siswa.findIndex((s) => s.nisn === nisn);
    if (index === -1)
      throw new NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
    this.siswa.splice(index, 1);
  }
}

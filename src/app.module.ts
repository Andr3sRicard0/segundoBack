import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'srv1616.hstgr.io',
      port: 3306,
      database:'u517421997_segundoBack',
      username:'u517421997_Ricardo1',
      password:'Andres1755566435',
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    StudentModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}

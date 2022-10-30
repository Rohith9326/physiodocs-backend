import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  AuthModule,
  DepartmentModule,
  EmailModule,
  PatientModule,
  UserModule
} from './modules';
import { IsAuthenticatedGuard } from './common/guards';
import { getDatabaseOptions, getJwtOptions } from './utils';
import { DoctorModule } from './modules/doctor/doctor.module';
import { AssessmentModule } from './modules/assessment/assessment.module';
import { ObjectiveModule } from './modules/objective/objective.module';
import { SubjectiveModule } from './modules/subjective/subjective.module';
import { PlanOfTreatmentModule } from './modules/plan-of-treatment/plan-of-treatment.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => getDatabaseOptions(__dirname)
    }),
    JwtModule.registerAsync({
      useFactory: getJwtOptions
    }),
    AuthModule,
    DepartmentModule,
    DoctorModule,
    PatientModule,
    UserModule,
    EmailModule,
    AssessmentModule,
    ObjectiveModule,
    SubjectiveModule,
    PlanOfTreatmentModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: IsAuthenticatedGuard
    }
  ]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

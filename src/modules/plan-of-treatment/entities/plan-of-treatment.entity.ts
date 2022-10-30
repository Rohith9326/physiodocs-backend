import { Patient } from 'src/modules/patient/entities/patient.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'plan_of_treatment' })
export class PlanOfTreatment {
  @PrimaryGeneratedColumn({ name: 'assessment_id', type: 'int' })
  @OneToOne(() => Patient)
  assessmentId = 1;

  @Column({ name: 'long_term_goals' })
  longTermGoals: string;

  @Column({ name: 'short_term_goals' })
  shortTermGoals: string;

  @Column({ name: 'treatment_given' })
  treatmentGiven: string;

  @Column({ name: 'final_comments' })
  finalComments: string;
}

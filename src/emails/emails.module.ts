import { Module } from '@nestjs/common';

import { EmailsService } from '@/emails/emails.service';

@Module({
  imports: [],
  providers: [EmailsService],
  exports: [EmailsService],
})
export class EmailModule {}

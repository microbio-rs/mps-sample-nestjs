import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get('/healthz')
  getHealth(): { statusCode: number } {
    return { statusCode: 200 };
  }

}


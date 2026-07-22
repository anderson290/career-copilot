import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@career-copilot/database';


@Injectable()
export class PrismaService extends PrismaClient {}
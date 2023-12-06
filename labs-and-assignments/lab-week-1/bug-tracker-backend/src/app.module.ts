import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BugTrackerController} from "./bugTracker/bugTracker.controller";
import {BugTrackerService} from "./bugTracker/bugTracker.service";

@Module({
  imports: [],
  controllers: [AppController, BugTrackerController],
  providers: [AppService, BugTrackerService],
})
export class AppModule {}

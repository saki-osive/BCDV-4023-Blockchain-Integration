import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BugTrackerService } from './bugTracker.service';

@Controller('bugtracker')
export class BugTrackerController {
    constructor(private readonly bugTrackerService: BugTrackerService) {}

    @Post('addBug')
    async addBug(
        @Body('description') description: string,
        @Body('bugId') bugId: bigint,
        @Body('bugStatus') bugStatus: bigint,
    ): Promise<void> {
        await this.bugTrackerService.addBug(description, bugId, bugStatus);
    }

    @Get('getBug/:index')
    async getBug(@Param('index') index: number): Promise<any> {
        return this.bugTrackerService.getBug(index);
    }

    @Post('updateBugStatus/:index')
    async updateBugStatus(
        @Param('index') index: number,
        @Body('status') status: bigint,
    ): Promise<void> {
        await this.bugTrackerService.updateBugStatus(index, status);
    }

    @Get('getBugCount')
    async getBugCount(): Promise<number> {
        return this.bugTrackerService.getBugCount();
    }
}

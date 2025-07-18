import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MemoryMonitor } from '../utils/memory-monitor';

@Injectable()
export class MemoryMonitorTask {
  private readonly logger = new Logger(MemoryMonitorTask.name);

  constructor(private readonly memoryMonitor: MemoryMonitor) {}

  /**
   * Monitor memory usage every 10 minutes
   * @description This task is used to monitor the memory usage of the application every 10 minutes.
   */
  @Cron(CronExpression.EVERY_10_MINUTES)
  handleMemoryMonitoring() {
    this.logger.log('🔄 Scheduled memory monitoring check');
    this.memoryMonitor.logMemoryUsageWithContext('SCHEDULED_10MIN');
    this.memoryMonitor.logDetailedMemoryInfo();
  }

  /**
   * Force garbage collection every 30 minutes
   * @description This task is used to force garbage collection of the application every 30 minutes.
   */
  @Cron(CronExpression.EVERY_30_MINUTES)
  handleGarbageCollection() {
    this.logger.log('🧹 Scheduled garbage collection');
    this.memoryMonitor.logMemoryUsageWithContext('BEFORE_GC');
    this.memoryMonitor.forceGarbageCollection();
    this.memoryMonitor.logMemoryUsageWithContext('AFTER_GC');
  }

  /**
   * Detailed memory report every hour
   * @description This task is used to log the detailed memory usage of the application every hour.
   */
  @Cron(CronExpression.EVERY_HOUR)
  handleDetailedMemoryReport() {
    this.logger.log('📊 Hourly Memory Report');
    this.memoryMonitor.logDetailedMemoryInfo();

    const stats = this.memoryMonitor.getMemoryStats();
    this.logger.log('📈 Memory Trends:', {
      heapUsed: `${stats.heapUsed}MB`,
      heapTotal: `${stats.heapTotal}MB`,
      external: `${stats.external}MB`,
      rss: `${stats.rss}MB`,
      percentage: `${stats.percentage}%`,
      uptime: `${Math.round(process.uptime())}s`,
    });
  }

  /**
   * Monitor memory usage every 5 minutes (for debugging)
   * @description This task is used to monitor the memory usage of the application every 5 minutes.
   */
  @Cron('0 */5 * * * *') // Every 5 minutes
  handleMinuteMonitoring() {
    const stats = this.memoryMonitor.getMemoryStats();
    if (stats.percentage > 85) {
      this.logger.warn(`⚠️ High memory usage detected: ${stats.percentage}%`);
      this.memoryMonitor.logDetailedMemoryInfo();
    }
  }
}

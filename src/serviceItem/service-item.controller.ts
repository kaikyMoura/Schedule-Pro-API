import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AllowedRole } from 'src/user/decorators/role.decorator';
import { CreateServiceItemDto } from './dtos/create-service-item.dto';
import { UpdateServiceItemDto } from './dtos/update-service-item.dto';
import { ServiceItemService } from './service-item.service';

@ApiTags('ServiceItem')
@Controller('service-item')
export class ServiceItemController {
  constructor(private readonly serviceItemService: ServiceItemService) {}

  @Get()
  @ApiBearerAuth()
  async findAll(page?: number, pageSize?: number) {
    const retrievedServices = await this.serviceItemService.retrieveAll();

    if (page || pageSize) {
      const limit = pageSize || 10;

      const totalItems = retrievedServices.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page! - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedData = retrievedServices.slice(startIndex, endIndex);

      return {
        data: paginatedData,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems,
          pageSize: limit,
        },
      };
    } else {
      return retrievedServices;
    }
  }

  @Get(':id')
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.serviceItemService.retrieveById(id);
  }

  @Post()
  @ApiBody({ type: CreateServiceItemDto })
  @AllowedRole('ADMIN')
  @ApiBearerAuth()
  create(@Body() serviceItem: CreateServiceItemDto) {
    return this.serviceItemService.create(serviceItem);
  }

  @Put(':id')
  @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() updateServiceItemDto: UpdateServiceItemDto,
  ) {
    await this.serviceItemService.update(id, updateServiceItemDto);
    return { message: 'Service updated successfully' };
  }

  @Delete(':id')
  @ApiBearerAuth()
  async delete(@Param('id') id: string) {
    await this.serviceItemService.delete(id);
    return { message: 'Service deleted successfully' };
  }
}

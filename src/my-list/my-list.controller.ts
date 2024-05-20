import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Query, Req, Res } from '@nestjs/common';
import { MyListService } from './my-list.service';
import { AddToListDto } from './dto/add-to-list.dto';
import { Request } from 'express';

@Controller('my-list')
export class MyListController {
    constructor(private readonly myListService: MyListService) {}


    @Post()
    async addToList(@Req() req: Request, @Body() addToListDto: AddToListDto, @Res() res) {
        try {
            const userId = req['user']['userId'];

            let isShowExist = await this.myListService.validateShowExist(userId, addToListDto.showType, addToListDto.showId);
            if(isShowExist) {
              return res.status(HttpStatus.BAD_REQUEST)
              .json({
                success: false,
                message: "This show is already in your list",
                data: null
              })
            }

            let isShowIdExist = await this.myListService.validateShowId(addToListDto.showType, addToListDto.showId);
            if(!isShowIdExist) {
              return res.status(HttpStatus.BAD_REQUEST)
              .json({
                success: false,
                message: "There is no matching record for this showId",
                data: null
              })
            }

            let added = await this.myListService.addToList(userId, addToListDto.showType, addToListDto.showId)


            return res.status(HttpStatus.CREATED)
              .json({
                success: true,
                message: "Show added to your list successfully",
                data: added
              })
        }
        catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete(':myListId')
    async removeFromList(@Req() req: Request, @Res() res, @Param('myListId') myListId) {
        try {
            const userId = req['user']['userId'];

            let isListExist = await this.myListService.validateListExist(userId, myListId);
            if(!isListExist) {
              return res.status(HttpStatus.BAD_REQUEST)
              .json({
                success: false,
                message: "This show is not in your list",
                data: null
              })
            }

            let deleted = await this.myListService.removeFromList(userId, myListId)


            return res.status(HttpStatus.OK)
              .json({
                success: true,
                message: "Show removed from your list successfully",
                data: deleted
              })
        }
        catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async getMyList(@Req() req: Request, @Res() res, @Query() params) {
        try {
            const userId = req['user']['userId'];
            let allMyList = await this.myListService.getAllMyList(userId, params)


            return res.status(HttpStatus.OK)
              .json({
                success: true,
                message: "My List fetched successfully",
                data: allMyList
              })
        }
        catch (error) {
          console.log("ee",error)
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

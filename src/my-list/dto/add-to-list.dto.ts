import { IsEnum, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export enum showTypes {
    "tv",
    "movie"
}

export class AddToListDto {

    @IsNotEmpty()
    @IsString()
    @IsEnum(showTypes)
    showType: String;

    @IsNotEmpty()
    @IsMongoId()
    showId: Number;
}

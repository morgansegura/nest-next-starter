import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  Matches,
  Length,
} from 'class-validator';

export class RegisterDto {
  @IsEmail(undefined, { message: 'Invalid email message' })
  @IsNotEmpty({ message: 'Your email can not be blank.' })
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @Length(7, 23, {
    message: 'Your password must be between 1 and 23 characters.',
  })
  @IsString()
  @IsNotEmpty({ message: 'Your password can not be blank.' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+[1-9]\d{1,14}$/)
  phoneNumber: string;
}

export default RegisterDto;

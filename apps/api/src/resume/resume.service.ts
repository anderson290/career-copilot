import { Injectable } from '@nestjs/common';
import { PDFParse } from 'pdf-parse';


@Injectable()
export class ResumeService {


  async analyze(
    file: Express.Multer.File,
  ) {

    const parser = new PDFParse({
      data: file.buffer,
    });


    const pdfData =
      await parser.getText();


    return {
      filename: file.originalname,
      text: pdfData.text,
    };

  }

}
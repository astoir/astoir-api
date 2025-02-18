import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GithubService } from 'src/applications/github/github.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [GithubService],
  exports: [GithubService],
})
export class GithubModule {}

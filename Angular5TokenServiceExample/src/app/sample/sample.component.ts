import { Component, OnInit } from '@angular/core';
import { ITunesService } from '../services/itunes.service';
import { IITunesItem, IITunesResponse } from '../models/ITunesEntities';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  private ResultCount: number = 0;
  private Results: IITunesItem[] = [];

  constructor(private iTunesService: ITunesService) { }

  ngOnInit() {
  }

  public async ExecuteSearch(term: string): Promise<void> {
    const iTunesResponse: IITunesResponse = await this.iTunesService.Search(term);
    this.ResultCount = iTunesResponse.resultCount;
    this.Results = iTunesResponse.results;
  }

}

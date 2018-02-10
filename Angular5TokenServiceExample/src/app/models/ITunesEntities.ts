// These interfaces map directly back to the properties we
// expect to receive from the iTunes service, casing and all.
//
// This makes it straightforward to map results back into objects.
export interface IITunesResponse {
  resultCount: number;
  results: IITunesItem[];
}

export interface IITunesItem {
  artistName: string;
  collectionName: string;
  trackName: string;

  trackCount: number;
  collectionPrice: number;

  trackNumber: number;
  trackPrice: number;
}

import { Injectable } from '@angular/core';
import { DiaryEntryModel } from '../Models/DiaryEntryModel';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  public diaryEntries: DiaryEntryModel[] = [];
  private monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  constructor() {}

    addNewDiaryEntry(entryText: String) {
      const date = new Date();
      const day = date.getDate();
      const month = this.monthNames[date.getMonth()];
      const year = date.getFullYear();
      this.diaryEntries.push(
        new DiaryEntryModel(entryText, `${day} ${month}, ${year}`)
      );
    }


    getDiaryEntries() {
      return this.diaryEntries;
    }

    removeDiaryEntry(index: number) {
      this.diaryEntries.splice(index, 1);
    } 

    fetchDiaryEntriesFromServer(): Promise<DiaryEntryModel[]> {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve([new DiaryEntryModel("Unit Testing", "10 Oct, 2024")]);
        }, 2000);
      });
    }
}

import { Component, OnInit } from '@angular/core';
import { DiaryEntryModel } from '../../Models/DiaryEntryModel';
import { DiaryService } from '../../Services/diary.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateformatPipe } from '../../Pipes/dateformat.pipe';
import { HighlightEntryDirective } from '../../Directives/highlight-entry.directive';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, FormsModule, DateformatPipe, HighlightEntryDirective],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css'
})
export class DiaryComponent implements OnInit {
  public diaryEntries: DiaryEntryModel[] = [];
  public fetchedEntries: DiaryEntryModel[] = [];
  public entryText: String = "";

  constructor(private service: DiaryService) {}

  ngOnInit() {
    // Initialize the local diary entries
    this.diaryEntries = this.service.getDiaryEntries();

    // Fetch additional entries from the server
    this.service.fetchDiaryEntriesFromServer().then((data:DiaryEntryModel[]) => {
      this.fetchedEntries = data;
    });
  }

  addNewEntry() {
    this.service.addNewDiaryEntry(this.entryText);
    this.entryText = "";
  }
  deleteEntry(index: number) {
    this.service.removeDiaryEntry(index);
  }
}
